import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';
import tables from '@/tables';
import { isValidCnpj, isValidCpf } from '@/utils/validators';
import { endOfMonth, format } from 'date-fns';
import {
  EfdIcmsIpiItem,
  EfdIcmsIpiOperacao,
  EfdIcmsIpiParticipante,
  EfdIcmsIpiParticipanteChange,
} from './typings';

export interface Bloco0Options {
  isSubstitute: boolean;
  periodStart: Date;
  periodEnd: Date;
  disablePeriodWarning?: boolean;
}

export default class Bloco0 extends Bloco {
  private isSubstitute: boolean;
  private periodStart: Date;
  private periodEnd: Date;

  constructor(options: BlocoOptions & Bloco0Options) {
    super(options);

    this.isSubstitute = options.isSubstitute;
    this.periodStart = options.periodStart;
    this.periodEnd = options.periodEnd;

    if (!options.disablePeriodWarning && this.periodStart.getDate() !== 1) {
      /**
       * "O valor informado deve ser o primeiro dia do mês, exceto no caso de início de atividades ou de qualquer outro evento que altere a forma e o período de escrituração fiscal do estabelecimento."
       */
      // eslint-disable-next-line no-console
      console.warn(
        `[SPED/EFD-ICMS-IPI] Period start should probably be the first day of the month (start: ${this.periodStart}, end: ${this.periodEnd}).`
      );
    }

    if (
      !options.disablePeriodWarning &&
      (this.periodEnd.getMonth() !== this.periodStart.getMonth() ||
        this.periodEnd.getDate() !== endOfMonth(this.periodStart).getDate())
    ) {
      /**
       * "O valor informado deve ser o último dia do mesmo mês da data inicial, exceto no caso de encerramento de atividades ou de qualquer outro fato determinante para paralisação das atividades do estabelecimento."
       */
      // eslint-disable-next-line no-console
      console.warn(
        `[SPED/EFD-ICMS-IPI] Period end should probably be last day of the month of the period start (start: ${this.periodStart}, end: ${this.periodEnd}).`
      );
    }
  }

  build(): string[][] {
    this.registers = [];

    this.build0000();
    this.build0001();
    this.build0002();
    this.build0005();
    // this.build0015();
    this.build0100();
    [...this.efd.participantes.values()].forEach(p => {
      this.build0150(p);
    });
    [...this.efd.unidades.values()].forEach(u => {
      this.build0190(u);
    });
    [...this.efd.items.values()].forEach(i => {
      this.build0200(i);
    });
    // this.build0300();
    [...this.efd.operacoes.values()].forEach(o => {
      this.build0400(o);
    });
    [...this.efd.informacoesComplementares.entries()].forEach(
      ([info, codigo]) => {
        this.build0450(codigo, info);
      }
    );
    // this.build0460();
    // this.build0500();
    // this.build0600();
    this.build0990();

    return this.registers;
  }

  /**
   * Registro 0000 - ABERTURA DO ARQUIVO DIGITAL E IDENTIFICAÇÃO DA ENTIDADE
   * Nível: 0
   * Ocorrência: um por arquivo
   */
  private build0000() {
    const layout = [...tables.versaoLeiaute.values()]
      .reverse()
      .find(
        ({ obrigatoriedade }) =>
          this.periodEnd.getTime() >= obrigatoriedade.getTime()
      );

    if (!layout) {
      throw new Error('this should never happen');
    }

    const { entidade: entity } = this.efd;

    /**
     * Texto fixo contendo "0000"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0000';
    /**
     * Código da versão do leiaute conforme a tabela indicada no Ato COTEPE
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const COD_VER = layout.codigo;
    /**
     * Código da finalidade do arquivo:
     *  0 - Remessa do arquivo original;
     *  1 - Remessa do arquivo substituto
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 1
     */
    const COD_FIN = this.isSubstitute ? '1' : '0';
    /**
     * Data inicial das informações contidas no arquivo
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = format(this.periodStart, 'ddMMyyyy');
    /**
     * Data final das informações contidas no arquivo
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN = format(this.periodEnd, 'ddMMyyyy');
    /**
     * Nome empresarial da entidade
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 100
     */
    const NOME = this.efd.entidade.nome;
    /**
     * Número de inscrição da entidade no CNPJ
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ = isValidCnpj(entity.cpfCnpj) ? entity.cpfCnpj : '';
    /**
     * Número de inscrição da entidade no CPF
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = isValidCpf(entity.cpfCnpj) ? entity.cpfCnpj : '';
    /**
     * Sigla da unidade da federação da entidade
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = entity.uf;
    /**
     * Inscrição Estadual da entidade
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 14
     */
    const IE = entity.ie;
    /**
     * Código do município do
     *  domicílio fiscal da entidade, conforme a tabela IBGE
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN = entity.codigoMunicipio;
    /**
     * Inscrição Municipal da entidade
     *
     * Número: 12
     * Tipo: C
     * Tamanho: -
     */
    const IM = entity.im ?? '';
    /**
     * Inscrição da entidade na SUFRAMA
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 009*
     */
    const SUFRAMA = entity.suframa ?? '';
    /**
     * Perfil de apresentação do arquivo fiscal;
     *  A - Perfil A;
     *  B - Perfil B.;
     *  C - Perfil C
     *
     * Número: 14
     * Tipo: C
     * Tamanho: 1
     */
    const IND_PERFIL = entity.perfil;
    /**
     * Indicador de tipo de atividade:
     *  0 - Industrial ou equiparado a industrial;
     *  1 - Outros
     *
     * Número: 15
     * Tipo: N
     * Tamanho: 1
     */
    const IND_ATIV = entity.atividadeIndustrial ? '0' : '1';
    this.registers.push([
      REG,
      COD_VER,
      COD_FIN,
      DT_INI,
      DT_FIN,
      NOME,
      CNPJ,
      CPF,
      UF,
      IE,
      COD_MUN,
      IM,
      SUFRAMA,
      IND_PERFIL,
      IND_ATIV,
    ]);
  }

  /**
   * Registro 0001 - ABERTURA DO BLOCO 0
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private build0001() {
    /**
     * Texto fixo contendo "0001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0001';
    /**
     * Indicador de movimento:
     *  0- Bloco com dados informados;
     *  1- Bloco sem dados informados
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 1
     */
    const IND_MOV = '0';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro 0002 - CLASSIFICAÇÃO DO ESTABELECIMENTO INDUSTRIAL OU EQUIPARADO A INDUSTRIAL
   * Nível: 2
   * Ocorrência: um por arquivo
   */
  private build0002() {
    if (!this.efd.entidade.atividadeIndustrial) {
      return;
    }
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0002"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0002';
    /**
     * Informar a classificação do estabelecimento conforme tabela 4.5.5
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 2
     */
    const CLAS_ESTAB_IND = '';
    this.registers.push([REG, CLAS_ESTAB_IND]);
  }

  /**
   * Registro 0005 - DADOS COMPLEMENTARES DA ENTIDADE
   * Nível: 2
   * Ocorrência: um por arquivo
   */
  private build0005() {
    const { entidade: entity } = this.efd;
    /**
     * Texto fixo contendo "0005"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0005';
    /**
     * Nome de fantasia associado ao nome empresarial
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const FANTASIA = entity.nomeFantasia ?? entity.nome;
    /**
     * Código de Endereçamento Postal
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const CEP = entity.cep;
    /**
     * Logradouro e endereço do imóvel
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const END = entity.endereco;
    /**
     * Número do imóvel
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 10
     */
    const NUM = entity.numero ?? '';
    /**
     * Dados complementares do endereço
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COMPL = entity.complemento ?? '';
    /**
     * Bairro em que o imóvel está situado
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const BAIRRO = entity.bairro;
    /**
     * Número do telefone (DDD+FONE)
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 11
     */
    const FONE = entity.telefone ?? '';
    /**
     * Número do fax
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 11
     */
    const FAX = entity.fax ?? '';
    /**
     * Endereço do correio eletrônico
     *
     * Número: 10
     * Tipo: C
     * Tamanho: -
     */
    const EMAIL = entity.email ?? '';
    this.registers.push([
      REG,
      FANTASIA,
      CEP,
      END,
      NUM,
      COMPL,
      BAIRRO,
      FONE,
      FAX,
      EMAIL,
    ]);
  }

  /**
   * Registro 0015 - DADOS DO CONTRIBUINTE SUBSTITUTO OU RESPONSÁVEL PELO ICMS DESTINO
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0015() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0015"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0015';
    /**
     * Sigla da unidade da federação do contribuinte substituído ou unidade de federação do consumidor final não contribuinte - ICMS
     *  Destino EC 87/15
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const UF_ST = '';
    /**
     * Inscrição Estadual do contribuinte substituto na unidade da federação do contribuinte substituído ou unidade de federação do consumidor final não contribuinte - ICMS Destino EC 87/15
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 14
     */
    const IE_ST = '';
    this.registers.push([REG, UF_ST, IE_ST]);
  }

  /**
   * Registro 0100 - DADOS DO CONTABILISTA
   * Nível: 2
   * Ocorrência: um por arquivo
   */
  private build0100() {
    const { entidade: entity } = this.efd;
    if (entity.perfil === 'C') {
      return;
    }
    const { contabilista } = entity;
    /**
     * Texto fixo contendo "0100"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0100';
    /**
     * Nome do contabilista
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 100
     */
    const NOME = contabilista.nome;
    /**
     * Número de inscrição do contabilista no CPF
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = contabilista.cpf;
    /**
     * Número de inscrição do contabilista no Conselho Regional de Contabilidade
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 15
     */
    const CRC = contabilista.crc;
    /**
     * Número de inscrição do escritório de contabilidade no CNPJ, se houver
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ = contabilista.cnpj ?? '';
    /**
     * Código de Endereçamento Postal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const CEP = contabilista.cep ?? '';
    /**
     * Logradouro e endereço do imóvel
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const END = contabilista.endereco ?? '';
    /**
     * Número do imóvel
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 10
     */
    const NUM = contabilista.numero ?? '';
    /**
     * Dados complementares do endereço
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 60
     */
    const COMPL = contabilista.complemento ?? '';
    /**
     * Bairro em que o imóvel está situado
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 60
     */
    const BAIRRO = contabilista.bairro ?? '';
    /**
     * Número do telefone (DDD+FONE)
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 11
     */
    const FONE = contabilista.telefone ?? '';
    /**
     * Número do fax
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 11
     */
    const FAX = contabilista.fax ?? '';
    /**
     * Endereço do correio eletrônico
     *
     * Número: 13
     * Tipo: C
     * Tamanho: -
     */
    const EMAIL = contabilista.email;
    /**
     * Código do município, conforme tabela IBGE
     *
     * Número: 14
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN = contabilista.codigoMunicipio;
    this.registers.push([
      REG,
      NOME,
      CPF,
      CRC,
      CNPJ,
      CEP,
      END,
      NUM,
      COMPL,
      BAIRRO,
      FONE,
      FAX,
      EMAIL,
      COD_MUN,
    ]);
  }

  /**
   * Registro 0150 - TABELA DE CADASTRO DO PARTICIPANTE
   * Nível: 2
   * Ocorrência: vários por arquivo
   */
  private build0150(participante: EfdIcmsIpiParticipante) {
    /**
     * Texto fixo contendo "0150"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0150';
    /**
     * Código de identificação do participante no arquivo
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = participante.codigo;
    /**
     * Nome pessoal ou empresarial do participante
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 100
     */
    const NOME = participante.nome;
    /**
     * Código do país do participante, conforme a tabela indicada no item 3.2.1
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 5
     */
    const COD_PAIS = participante.codigoPais;
    /**
     * CNPJ do participante
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ = isValidCnpj(participante.cpfCnpj) ? participante.cpfCnpj : '';
    /**
     * CPF do participante
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = isValidCpf(participante.cpfCnpj) ? participante.cpfCnpj : '';
    /**
     * Inscrição Estadual do participante
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 14
     */
    const IE = participante.ie ?? '';
    /**
     * Código do município, conforme a tabela IBGE
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN = participante.codigoMunicipio ?? '';
    /**
     * Número de inscrição do participante na SUFRAMA
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 009*
     */
    const SUFRAMA = participante.suframa ?? '';
    /**
     * Logradouro e endereço do imóvel
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 60
     */
    const END = participante.endereco;
    /**
     * Número do imóvel
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 10
     */
    const NUM = participante.numero ?? '';
    /**
     * Dados complementares do endereço
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 60
     */
    const COMPL = participante.complemento ?? '';
    /**
     * Bairro em que o imóvel está situado
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 60
     */
    const BAIRRO = participante.bairro ?? '';
    this.registers.push([
      REG,
      COD_PART,
      NOME,
      COD_PAIS,
      CNPJ,
      CPF,
      IE,
      COD_MUN,
      SUFRAMA,
      END,
      NUM,
      COMPL,
      BAIRRO,
    ]);
    participante.changes.forEach(change => {
      this.build0175(change);
    });
  }

  /**
   * Registro 0175 - ALTERAÇÃO DA TABELA DE CADASTRO DE PARTICIPANTE
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0175(change: EfdIcmsIpiParticipanteChange) {
    /**
     * Texto fixo contendo "0175"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0175';
    /**
     * Data de alteração do cadastro
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_ALT = format(change.data, 'ddMMyyyy');
    /**
     * Número do campo alterado (campos 03 a 13, exceto 07)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 2
     */
    const NR_CAMPO = change.numeroCampo;
    /**
     * Conteúdo anterior do campo
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 100
     */
    const CONT_ANT = change.conteudoAnterior;
    this.registers.push([REG, DT_ALT, NR_CAMPO, CONT_ANT]);
  }

  /**
   * Registro 0190 - IDENTIFICAÇÃO DAS UNIDADES DE MEDIDA
   * Nível: 2
   * Ocorrência: vários por arquivo
   */
  private build0190(unidade: string) {
    /**
     * Texto fixo contendo "0190"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0190';
    /**
     * Código da unidade de medida
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = unidade;
    /**
     * Descrição da unidade de medida
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR = unidade;
    this.registers.push([REG, UNID, DESCR]);
  }

  /**
   * Registro 0200 - TABELA DE IDENTIFICAÇÃO DO ITEM (PRODUTO E SERVIÇOS)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0200(item: EfdIcmsIpiItem) {
    /**
     * Texto fixo contendo "0200"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0200';
    /**
     * Código do item
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = item.codigo;
    /**
     * Descrição do item
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_ITEM = item.descricao;
    /**
     * Representação alfanumérico do código de barra do produto, se houver
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const COD_BARRA = item.codigoBarras ?? '';
    /**
     * Código anterior do item com relação à última
     *  informação apresentada
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ANT_ITEM = '';
    /**
     * Unidade de medida utilizada na quantificação de estoques
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 6
     */
    const UNID_INV = item.unidade;
    /**
     * Tipo do item - Atividades Industriais, Comerciais e Serviços:
     *  00 - Mercadoria para Revenda;
     *  01 - Matéria-prima;
     *  02 - Embalagem;
     *  03 - Produto em Processo;
     *  04 - Produto Acabado;
     *  05 – Subproduto;
     *  06 – Produto Intermediário;
     *  07 – Material de Uso e Consumo;
     *  08 – Ativo Imobilizado;
     *  09 – Serviços;
     *  10 – Outros insumos;
     *  99 – Outras.
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 2
     */
    const TIPO_ITEM = item.tipo;
    /**
     * Código da Nomenclatura Comum do Mercosul
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 008*
     */
    const COD_NCM = item.ncm ?? '';
    /**
     * Código EX, conforme a TIPI
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 3
     */
    const EX_IPI = item.exIpi ?? '';
    /**
     * Código do gênero do item, conforme a Tabela
     *  4.2.1
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_GEN = item.genero ?? '';
    /**
     * Código do serviço conforme lista do Anexo I da Lei Complementar Federal nº 116/03
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 5
     */
    const COD_LST = item.lst ?? '';
    /**
     * Alíquota de ICMS aplicável ao item nas
     *  operações internas
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = item.aliquotaIcms ?? '';
    /**
     * Código Especificador da Substituição Tributária
     *
     * Número: 13
     * Tipo: N
     * Tamanho: 007*
     */
    const CEST = item.cest ?? '';
    this.registers.push([
      REG,
      COD_ITEM,
      DESCR_ITEM,
      COD_BARRA,
      COD_ANT_ITEM,
      UNID_INV,
      TIPO_ITEM,
      COD_NCM,
      EX_IPI,
      COD_GEN,
      COD_LST,
      ALIQ_ICMS,
      CEST,
    ]);
  }

  /**
   * Registro 0205 - ALTERAÇÃO DO ITEM
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0205() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0205"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0205';
    /**
     * Descrição anterior do item
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_ANT_ITEM = '';
    /**
     * Data inicial de utilização da descrição do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final de utilização da descrição do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIM = '';
    /**
     * Código anterior do item com relação à última informação apresentada
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ANT_ITEM = '';
    this.registers.push([REG, DESCR_ANT_ITEM, DT_INI, DT_FIM, COD_ANT_ITEM]);
  }

  /**
   * Registro 0206 - CÓDIGO DE PRODUTO CONFORME TABELA PUBLICADA PELA ANP
   * Nível: 3
   * Ocorrência: 1:1
   */
  private build0206() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0206"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0206';
    /**
     * Código do produto, conforme tabela publicada pela ANP
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const COD_COMB = '';
    this.registers.push([REG, COD_COMB]);
  }

  /**
   * Registro 0210 - CONSUMO ESPECÍFICO PADRONIZADO (VÁLIDO ATÉ 31/12/2021)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0210() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0210"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0210';
    /**
     * Código do item componente/insumo (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_COMP = '';
    /**
     * Quantidade do item componente/insumo para se
     *  produzir uma unidade do item composto/resultante
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COMP = '';
    /**
     * Perda/quebra normal percentual do insumo/componente para se produzir uma unidade do item composto/resultante
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const PERDA = '';
    this.registers.push([REG, COD_ITEM_COMP, QTD_COMP, PERDA]);
  }

  /**
   * Registro 0220 - FATORES DE CONVERSÃO DE UNIDADES
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0220() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0220"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0220';
    /**
     * Unidade comercial a ser convertida na unidade de estoque,
     *  referida no registro 0200. Ou unidade do 0200 utilizada na EFD anterior
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const UNID_CONV = '';
    /**
     * Fator de conversão: fator utilizado para converter (multiplicar) a unidade a ser convertida na unidade adotada no inventário
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const FAT_CONV = '';
    /**
     * Representação alfanumérica do código de barra da unidade comercial do produto, se houver
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const COD_BARRA = '';
    this.registers.push([REG, UNID_CONV, FAT_CONV, COD_BARRA]);
  }

  /**
   * Registro 0221 - CORRELAÇÃO ENTRE CÓDIGOS DE ITENS COMERCIALIZADOS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0221() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0221"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0221';
    /**
     * Informar o código do item atômico contido no item informado
     *  no 0200 Pai
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_ATOMICO = '';
    /**
     * Informar quantos itens atômicos estão contidos no item informado no 0200 Pai
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CONTIDA = '';
    this.registers.push([REG, COD_ITEM_ATOMICO, QTD_CONTIDA]);
  }

  /**
   * Registro 0300 - CADASTRO DE BENS OU COMPONENTES DO ATIVO IMOBILIZADO
   * Nível: 2
   * Ocorrência: Vários (por arquivo)
   */
  private build0300() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0300"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0300';
    /**
     * Código individualizado do bem ou componente adotado no
     *  controle patrimonial do estabelecimento informante
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_IND_BEM = '';
    /**
     * Identificação do tipo de mercadoria:
     *  1 = bem;
     *  2 = componente
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IDENT_MERC = '';
    /**
     * Descrição do bem ou componente (modelo, marca e outras características necessárias a sua individualização)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_ITEM = '';
    /**
     * Código de cadastro do bem principal nos casos em que o bem ou componente (campo 02) esteja vinculado a um bem
     *  principal
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PRNC = '';
    /**
     * Código da conta analítica de contabilização do bem ou componente (campo 06 do Registro 0500)
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CTA = '';
    /**
     * Número total de parcelas a serem apropriadas, segundo a
     *  legislação de cada unidade federada
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 3
     */
    const NR_PARC = '';
    this.registers.push([
      REG,
      COD_IND_BEM,
      IDENT_MERC,
      DESCR_ITEM,
      COD_PRNC,
      COD_CTA,
      NR_PARC,
    ]);
  }

  /**
   * Registro 0305 - INFORMAÇÃO SOBRE A UTILIZAÇÃO DO BEM
   * Nível: 3
   * Ocorrência: 1:1
   */
  private build0305() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0305"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0305';
    /**
     * Código do centro de custo onde o bem está sendo ou será utilizado (campo 03 do Registro 0600)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CCUS = '';
    /**
     * Descrição sucinta da função do bem na atividade do estabelecimento
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const FUNC = '';
    /**
     * Vida útil estimada do bem, em número de meses
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 3
     */
    const VIDA_UTIL = '';
    this.registers.push([REG, COD_CCUS, FUNC, VIDA_UTIL]);
  }

  /**
   * Registro 0400 - TABELA DE NATUREZA DA OPERAÇÃO/PRESTAÇÃO
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0400(operacao: EfdIcmsIpiOperacao) {
    /**
     * Texto fixo contendo "0400"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0400';
    /**
     * Código da natureza da operação/prestação
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 10
     */
    const COD_NAT = operacao.codigo;
    /**
     * Descrição da natureza da operação/prestação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_NAT = operacao.descricao;
    this.registers.push([REG, COD_NAT, DESCR_NAT]);
  }

  /**
   * Registro 0450 - TABELA DE INFORMAÇÃO COMPLEMENTAR DO DOCUMENTO
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0450(codigo: string, infAdic: string) {
    /**
     * Texto fixo contendo "0450"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0450';
    /**
     * Código da informação complementar do documento fiscal
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_INF = codigo;
    /**
     * Texto livre da informação complementar existente no documento fiscal, inclusive espécie de normas legais, poder normativo, número, capitulação, data e demais referências pertinentes com indicações referentes ao tributo
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT = infAdic.slice(0, 250);
    this.registers.push([REG, COD_INF, TXT]);
  }

  /**
   * Registro 0460 - TABELA DE OBSERVAÇÕES DO LANÇAMENTO FISCAL
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0460() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0460"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0460';
    /**
     * Código da Observação do lançamento fiscal
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    /**
     * Descrição da observação vinculada ao lançamento fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT = '';
    this.registers.push([REG, COD_OBS, TXT]);
  }

  /**
   * Registro 0500 - PLANO DE CONTAS CONTÁBEIS
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0500() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0500"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0500';
    /**
     * Data da inclusão/alteração
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_ALT = '';
    /**
     * Código da natureza da conta/grupo de contas: 01 - Contas de ativo;
     *  02 - Contas de passivo; 03 - Patrimônio líquido; 04 - Contas de resultado;
     *  05 - Contas de compensação; 09 - Outras
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_NAT_CC = '';
    /**
     * Indicador do tipo de conta:
     *  S - Sintética (grupo de contas); A - Analítica (conta)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_CTA = '';
    /**
     * Nível da conta analítica/grupo de contas
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 5
     */
    const NÍVEL = '';
    /**
     * Código da conta analítica/grupo de contas
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CTA = '';
    /**
     * Nome da conta analítica/grupo de contas
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const NOME_CTA = '';
    this.registers.push([
      REG,
      DT_ALT,
      COD_NAT_CC,
      IND_CTA,
      NÍVEL,
      COD_CTA,
      NOME_CTA,
    ]);
  }

  /**
   * Registro 0600 - CENTRO DE CUSTOS
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0600() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0600"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0600';
    /**
     * Data da inclusão/alteração
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_ALT = '';
    /**
     * Código do centro de custos
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CCUS = '';
    /**
     * Nome do centro de custos
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const CCUS = '';
    this.registers.push([REG, DT_ALT, COD_CCUS, CCUS]);
  }

  /**
   * Registro 0990 - ENCERRAMENTO DO BLOCO 0
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private build0990() {
    /**
     * Texto fixo contendo "0990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0990';
    /**
     * Quantidade total de linhas do Bloco 0
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_0 = `${this.registers.length + 1}`;
    this.registers.push([REG, QTD_LIN_0]);
  }
}
