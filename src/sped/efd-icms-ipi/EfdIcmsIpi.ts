import { XMLParser } from 'fast-xml-parser';
import xmlDsig from '@/utils/xmlDsig';
import yup from '@/utils/yup';
import { NfeEmitida } from '@/typings';
import { BadArgs } from '@/utils/exceptions';
import { unmask } from '@/utils';

import Bloco0 from './Bloco0';
import BlocoB from './BlocoB';
import BlocoC from './BlocoC';
import BlocoD from './BlocoD';
import BlocoE from './BlocoE';
import BlocoG from './BlocoG';
import BlocoH from './BlocoH';
import BlocoK from './BlocoK';
import Bloco1 from './Bloco1';
import Bloco9 from './Bloco9';
import {
  EfdIcmsIpiBuildOptions,
  EfdIcmsIpiEntidade,
  EfdIcmsIpiItem,
  EfdIcmsIpiOperacao,
  EfdIcmsIpiParticipante,
} from './typings';
import InvalidXml from '@/utils/exceptions/InvalidXml';
import { format } from 'date-fns';
import { isValidCnpj } from '@/utils/validators';

const entitySchema = yup.object({
  nome: yup.string().required().max(100),
  nomeFantasia: yup.string().max(60).optional(),
  cpfCnpj: yup.string().cpfCnpj().required().transform(unmask),
  cep: yup.string().cep().required().transform(unmask),
  uf: yup.string().state().required(),
  codigoMunicipio: yup.string().cityCode().required(),
  bairro: yup.string().required().max(60),
  endereco: yup.string().max(60),
  numero: yup.string().max(10).optional(),
  complemento: yup.string().max(60).optional(),
  telefone: yup.string().phone().optional().transform(unmask),
  fax: yup.string().max(11).optional(),
  email: yup.string().email().optional(),
  ie: yup.string().ie('uf').transform(unmask),
  perfil: yup.string().oneOf(['A', 'B', 'C'], 'Invalid profile'),
  im: yup.string().max(255).optional(),
  suframa: yup.string().length(9).optional(),
  atividadeIndustrial: yup.boolean().optional(),
  contabilista: yup.object({
    nome: yup.string().max(100).required(),
    cpf: yup.string().cpf().required().transform(unmask),
    crc: yup.string().max(15).required(),
    cnpj: yup.string().cnpj().optional().transform(unmask),
    cep: yup.string().cep().optional().transform(unmask),
    endereco: yup.string().max(60).optional(),
    numero: yup.string().max(10).optional(),
    complemento: yup.string().max(60).optional(),
    bairro: yup.string().max(60).optional(),
    telefone: yup.string().phone().optional().transform(unmask),
    fax: yup.string().max(11).optional(),
    email: yup.string().email().required(),
    codigoMunicipio: yup.string().cityCode().required(),
  }),
});

export default class EfdIcmsIpi {
  /**
   * @todo should also support other types of documents (NFC-e, CT-e, ...)
   */
  nfes: NfeEmitida[] = [];

  entidade: EfdIcmsIpiEntidade;

  participantes: Map<string, EfdIcmsIpiParticipante> = new Map();

  unidades: Set<string> = new Set();

  items: Map<string, EfdIcmsIpiItem> = new Map();

  operacoes: Map<string, EfdIcmsIpiOperacao> = new Map();

  informacoesComplementares: Map<string, string> = new Map();

  constructor(options: EfdIcmsIpiBuildOptions) {
    if (!options.documents.length) {
      throw new BadArgs('`options.xml` must contain at least one entry');
    }
    try {
      this.entidade = entitySchema.validateSync(
        options.entity
      ) as EfdIcmsIpiEntidade;
    } catch (e) {
      const err = e as yup.ValidationError;
      throw new BadArgs(
        `EfdIcmsIpi.build(): ${err.message}\n${JSON.stringify(
          err.value,
          null,
          2
        )}`
      );
    }
  }

  async parseXmls(options: EfdIcmsIpiBuildOptions) {
    this.nfes = [];
    this.participantes = new Map();
    this.unidades = new Set();
    this.items = new Map();
    const { documents } = options;
    const ALWAYS_ARRAY = new Set(['det', 'vol', 'detPag', 'NFref']);
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@',
      isArray: name => ALWAYS_ARRAY.has(name),
      parseTagValue: false,
    });
    this.nfes = await Promise.all(
      documents.map(async ({ xml, cancelled }, i) => {
        // try {
        //   /**
        //    * @todo the xml is being parsed twice :(
        //    */
        //   const doc = xmlDsig.Parse(xml);
        //   const signature = doc.getElementsByTagNameNS(
        //     'http://www.w3.org/2000/09/xmldsig#',
        //     'Signature'
        //   );
        //   const signed = new xmlDsig.SignedXml(doc);
        //   signed.LoadXml(signature[0]);
        //   await signed.Verify();
        // } catch {
        //   throw new InvalidXml(
        //     `EfdIcmsIpi.build(): XML for \`documents[${i}]\` is invalid`
        //   );
        // }
        const nfe = parser.parse(xml);
        return {
          ...nfe,
          cancelled,
        };
      })
    );
    this.nfes.sort((a, b) =>
      a.nfeProc.NFe.infNFe['@Id'].localeCompare(b.nfeProc.NFe.infNFe['@Id'])
    );
    this.nfes.forEach((nfe, i) => {
      const { ide, emit, dest, det } = nfe.nfeProc.NFe.infNFe;
      const issuedOn = new Date(ide.dhEmi);
      const { periodStart, periodEnd } = options.bloco0Options;
      if (issuedOn < periodStart || issuedOn > periodEnd) {
        throw new BadArgs(
          `EfdIcmsIpi.build(): Expected \`documentos[${i}].ide.dhEmi\` (${format(
            issuedOn,
            'yyyy-MM-dd'
          )}) to be in range (${format(periodStart, 'yyyy-MM-dd')}, ${format(
            periodEnd,
            'yyyy-MM-dd'
          )})`
        );
      }
      if (emit.IE !== this.entidade.ie && dest.IE !== this.entidade.ie) {
        throw new BadArgs(
          `EfdIcmsIpi.build(): Expected IE '${this.entidade.ie}' as one of \`documentos[${i}].[emit|dest].IE\``
        );
      }
      nfe.isIssuer = emit.IE === this.entidade.ie;
      let key = '';
      let oldParticipante: EfdIcmsIpiParticipante | null = null;
      let participante: EfdIcmsIpiParticipante | null = null;
      if (!nfe.isIssuer) {
        key = `${emit.CPF ?? emit.CNPJ}${emit.IE}`;
        oldParticipante = this.participantes.get(key) ?? null;
        participante = {
          codigo: oldParticipante?.codigo ?? `${this.participantes.size + 1}`,
          nome: emit.xNome,
          codigoPais: emit.enderEmit.cPais ?? '1058',
          cpfCnpj: emit.CPF ?? emit.CNPJ ?? '',
          ie: emit.IE === 'ISENTO' ? undefined : emit.IE,
          codigoMunicipio: emit.enderEmit.cMun,
          endereco: emit.enderEmit.xLgr,
          numero: emit.enderEmit.nro,
          complemento: emit.enderEmit.xCpl,
          bairro: emit.enderEmit.xBairro,
          changes: oldParticipante?.changes ?? [],
        };
      } else {
        key = `${dest.CPF ?? dest.CNPJ}${dest.IE}`;
        oldParticipante = this.participantes.get(key) ?? null;
        participante = {
          codigo: oldParticipante?.codigo ?? `${this.participantes.size + 1}`,
          nome: dest.xNome,
          codigoPais: dest.enderDest.cPais ?? '1058',
          cpfCnpj: dest.CPF ?? dest.CNPJ ?? '',
          ie: dest.IE === 'ISENTO' ? undefined : dest.IE,
          suframa: dest.ISUF,
          codigoMunicipio: dest.enderDest.cMun,
          endereco: dest.enderDest.xLgr,
          numero: dest.enderDest.nro,
          complemento: dest.enderDest.xCpl,
          bairro: dest.enderDest.xBairro,
          changes: oldParticipante?.changes ?? [],
        };
      }
      if (oldParticipante && !nfe.cancelled) {
        /**
         * ignore changes on cancelled documents
         */
        if (participante.nome !== oldParticipante.nome) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '03',
            conteudoAnterior: oldParticipante.nome,
          });
        }
        if (participante.codigoPais !== oldParticipante.codigoPais) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '04',
            conteudoAnterior: oldParticipante.codigoPais,
          });
        }
        if (participante.cpfCnpj !== oldParticipante.cpfCnpj) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: isValidCnpj(participante.cpfCnpj) ? '05' : '06',
            conteudoAnterior: oldParticipante.cpfCnpj,
          });
        }
        if (participante.codigoMunicipio !== oldParticipante.codigoMunicipio) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '08',
            conteudoAnterior: oldParticipante.codigoMunicipio ?? '',
          });
        }
        if (participante.suframa !== oldParticipante.suframa) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '09',
            conteudoAnterior: oldParticipante.suframa ?? '',
          });
        }
        if (participante.endereco !== oldParticipante.endereco) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '10',
            conteudoAnterior: oldParticipante.endereco,
          });
        }
        if (participante.numero !== oldParticipante.numero) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '11',
            conteudoAnterior: oldParticipante.numero ?? '',
          });
        }
        if (participante.complemento !== oldParticipante.complemento) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '12',
            conteudoAnterior: oldParticipante.complemento ?? '',
          });
        }
        if (participante.bairro !== oldParticipante.bairro) {
          participante.changes.push({
            data: issuedOn,
            numeroCampo: '13',
            conteudoAnterior: oldParticipante.bairro ?? '',
          });
        }
      }
      this.participantes.set(key, participante);

      det.forEach(({ prod, imposto }) => {
        this.unidades.add(prod.uCom);
        this.unidades.add(prod.uTrib);
        const key = `${prod.xProd}`;
        const oldItem = this.items.get(key);
        this.items.set(key, {
          codigo: prod.cProd,
          descricao: prod.xProd,
          codigoBarras: prod.cEAN,
          unidade: prod.uCom,
          /**
           * @todo how to decide on the item type?
           */
          tipo: '00',
          ncm: prod.NCM,
          exIpi: prod.EXTIPI,
          genero: prod.NCM.slice(0, 2),
          aliquotaIcms:
            oldItem?.aliquotaIcms || emit.enderEmit.UF === dest.enderDest.UF
              ? imposto.ICMS.ICMS00?.pICMS ??
                imposto.ICMS.ICMS10?.pICMS ??
                imposto.ICMS.ICMS20?.pICMS ??
                imposto.ICMS.ICMS51?.pICMS ??
                imposto.ICMS.ICMS70?.pICMS ??
                ''
              : '',
          cest: prod.CEST,
        });
      });

      const oldOperacao = this.operacoes.get(ide.natOp);
      this.operacoes.set(ide.natOp, {
        codigo: oldOperacao?.codigo ?? `${this.operacoes.size + 1}`,
        descricao: ide.natOp,
      });

      const info =
        nfe.nfeProc.NFe.infNFe.infAdic?.infCpl
          ?.slice(0, 255)
          .replace(/[\n|]/g, ' ')
          .replace(/ +/g, ' ') ?? '';
      if (info && !this.informacoesComplementares.get(info)) {
        this.informacoesComplementares.set(
          info,
          `${this.informacoesComplementares.size + 1}`
        );
      }
    });
  }

  static async build(options: EfdIcmsIpiBuildOptions) {
    const efd = new EfdIcmsIpi(options);
    await efd.parseXmls(options);
    const blocks = [
      new Bloco0({ efd, ...options.bloco0Options }),
      new BlocoB({ efd, ...options.blocoBOptions }),
      new BlocoC({ efd, ...options.blocoCOptions }),
      new BlocoD({ efd, ...options.blocoDOptions }),
      new BlocoE({ efd, ...options.blocoEOptions }),
      new BlocoG({ efd, ...options.blocoGOptions }),
      new BlocoH({ efd, ...options.blocoHOptions }),
      new BlocoK({ efd, ...options.blocoKOptions }),
      new Bloco1({ efd, ...options.bloco1Options }),
      new Bloco9({ efd, ...options.bloco9Options }),
    ];
    const registers = blocks.reduce<string[][]>(
      (prev, block) => prev.concat(block.build(prev)),
      []
    );
    return registers
      .map(entry => `|${entry.map(v => (v === undefined ? '' : v)).join('|')}|`)
      .join('\n');
  }
}
