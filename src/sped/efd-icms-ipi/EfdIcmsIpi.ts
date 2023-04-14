import { XMLParser } from 'fast-xml-parser';
import { NfeIssuedXml } from '@/typings';

import type { BlocoOptions } from './Bloco';
import Bloco0 from './Bloco0';
import Bloco1 from './Bloco1';
import Bloco9 from './Bloco9';
import BlocoB from './BlocoB';
import BlocoC from './BlocoC';
import BlocoD from './BlocoD';
import BlocoE from './BlocoE';
import BlocoG from './BlocoG';
import BlocoH from './BlocoH';
import BlocoK from './BlocoK';

export interface EfdIcmsIpiBuildOptions {
  profile: BlocoOptions['profile'];
}

export default class EfdIcmsIpi {
  parsedXmls: NfeIssuedXml[];

  constructor(xmls: string[]) {
    const ALWAYS_ARRAY = new Set(['det', 'vol', 'detPag']);
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@',
      isArray: name => ALWAYS_ARRAY.has(name),
      parseTagValue: false,
    });
    this.parsedXmls = xmls.map(xml => parser.parse(xml));
  }

  static build(xmls: string[], options?: EfdIcmsIpiBuildOptions) {
    const efd = new EfdIcmsIpi(xmls);
    const blocks = [
      new Bloco0({ efd, profile: options?.profile }),
      new BlocoB({ efd, profile: options?.profile }),
      new BlocoC({ efd, profile: options?.profile }),
      new BlocoD({ efd, profile: options?.profile }),
      new BlocoE({ efd, profile: options?.profile }),
      new BlocoG({ efd, profile: options?.profile }),
      new BlocoH({ efd, profile: options?.profile }),
      new BlocoK({ efd, profile: options?.profile }),
      new Bloco1({ efd, profile: options?.profile }),
      new Bloco9({ efd, profile: options?.profile }),
    ];
    const entries = blocks.reduce<string[][]>(
      (prev, block) => prev.concat(block.build()),
      []
    );
    return entries.map(entry => entry.join('|')).join('\n');
  }
}
