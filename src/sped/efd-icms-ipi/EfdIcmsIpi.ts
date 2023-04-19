import { XMLParser } from 'fast-xml-parser';
import { NfeIssuedXml } from '@/typings';
import { BadArgs } from '@/utils/exceptions';
import {
  isValidCnpj,
  isValidCpf,
  isValidIE,
  isValidCityCode,
} from '@/utils/validators';
import { unmask } from '@/utils';

import Bloco0, { Bloco0Options } from './Bloco0';
import BlocoB, { BlocoBOptions } from './BlocoB';
import BlocoC, { BlocoCOptions } from './BlocoC';
import BlocoD, { BlocoDOptions } from './BlocoD';
import BlocoE, { BlocoEOptions } from './BlocoE';
import BlocoG, { BlocoGOptions } from './BlocoG';
import BlocoH, { BlocoHOptions } from './BlocoH';
import BlocoK, { BlocoKOptions } from './BlocoK';
import Bloco1, { Bloco1Options } from './Bloco1';
import Bloco9, { Bloco9Options } from './Bloco9';
import { EfdIcmsIpiEntity } from './typings';

export interface EfdIcmsIpiBuildOptions {
  entity: EfdIcmsIpiEntity;
  xmls: string[];
  bloco0Options: Bloco0Options;
  blocoBOptions?: BlocoBOptions;
  blocoCOptions?: BlocoCOptions;
  blocoDOptions?: BlocoDOptions;
  blocoEOptions?: BlocoEOptions;
  blocoGOptions?: BlocoGOptions;
  blocoHOptions?: BlocoHOptions;
  blocoKOptions?: BlocoKOptions;
  bloco1Options?: Bloco1Options;
  bloco9Options?: Bloco9Options;
}

export default class EfdIcmsIpi {
  /**
   * @todo should also support other types of documents (NFC-e, CT-e, ...)
   */
  parsedXmls: NfeIssuedXml[];

  entity: EfdIcmsIpiEntity;

  constructor(options: EfdIcmsIpiBuildOptions) {
    const ALWAYS_ARRAY = new Set(['det', 'vol', 'detPag']);
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@',
      isArray: name => ALWAYS_ARRAY.has(name),
      parseTagValue: false,
    });
    /**
     * @todo test performance with large input when making this async
     */
    this.parsedXmls = options.xmls.map(xml => parser.parse(xml));
    this.entity = options.entity;

    /**
     * @todo use schema validation
     */

    if (!isValidCityCode(this.entity.codigoMunicipio)) {
      throw new BadArgs(
        `Invalid \`entity.codigoMunicipio\` '${this.entity.codigoMunicipio}'`
      );
    }
    if (!isValidCpf(this.entity.cpfCnpj) && !isValidCnpj(this.entity.cpfCnpj)) {
      throw new BadArgs(
        `Invalid \`entity.codigoMunicipio\` '${this.entity.cpfCnpj}'`
      );
    }
    if (!isValidIE(this.entity.ie)) {
      throw new BadArgs(
        `Invalid \`entity.codigoMunicipio\` '${this.entity.ie}'`
      );
    }

    this.entity.cpfCnpj = unmask(this.entity.cpfCnpj);
    this.entity.ie = unmask(this.entity.ie);
    this.entity.cep = unmask(this.entity.cep);
  }

  static build(options: EfdIcmsIpiBuildOptions) {
    const efd = new EfdIcmsIpi(options);
    const blocks = [
      new Bloco0({ efd, ...options.bloco0Options }),
      // new BlocoB({ efd, ...options.blocoBOptions }),
      // new BlocoC({ efd, ...options.blocoCOptions }),
      // new BlocoD({ efd, ...options.blocoDOptions }),
      // new BlocoE({ efd, ...options.blocoEOptions }),
      // new BlocoG({ efd, ...options.blocoGOptions }),
      // new BlocoH({ efd, ...options.blocoHOptions }),
      // new BlocoK({ efd, ...options.blocoKOptions }),
      // new Bloco1({ efd, ...options.bloco1Options }),
      // new Bloco9({ efd, ...options.bloco9Options }),
    ];
    const entries = blocks.reduce<string[][]>(
      (prev, block) => prev.concat(block.build()),
      []
    );
    return entries.map(entry => entry.join('|')).join('\n');
  }
}
