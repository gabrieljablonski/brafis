import path from 'path';
import fs from 'fs';
import csv from 'csv-parser';

type Block = '0' | 'B' | 'C' | 'D' | 'E' | 'G' | 'H' | 'K' | '1' | '9';

interface Register {
  block: Block;
  description: string;
  register: string;
  level: '0' | '1' | '2' | '3' | '4' | '5' | '6';
  occurrence: '1' | 'V' | 'N' | '1:1' | '1:N' | `1:${number}`;
}

const registersFile = path.resolve(__dirname, 'efd-icms-ipi.csv');
const blocks: Map<Block, Register[]> = new Map();

fs.createReadStream(registersFile)
  .pipe(
    csv({
      separator: ',',
    })
  )
  .on('data', data => {
    if (!blocks.get(data.block)) {
      blocks.set(data.block, []);
    }
    blocks.get(data.block)?.push({
      ...data,
    });
  })
  .on('end', () => {
    [...blocks.values()].forEach(registers => {
      registers.sort((a, b) => a.register.localeCompare(b.register));
    });
    [...blocks.entries()].forEach(([block, registers]) => {
      const source = `
import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bloco${block}Options extends BlocoOptions {}

export default class Bloco${block} extends Bloco {
  constructor(options: Bloco${block}Options) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.entries = [];
${registers
  .map(r => {
    if (!['0', '1', '2'].includes(r.level)) {
      return null;
    }
    return `
    this.build${r.register}();`;
  })
  .filter(Boolean)
  .join('')}

    return this.entries;
  }
${registers
  .map(
    r =>
      `
  /**
   * ${r.description}
   * Nível ${r.level}
   * Ocorrência ${r.occurrence}
   */
  private build${r.register}(): string[] {
    throw new NotImplemented();
    this.entries.push(['${r.register}']);
  }`
  )
  .join('\n')}
}
`.trimStart();
      fs.writeFileSync(path.resolve(__dirname, `Bloco${block}.ts`), source);
    });
  });
