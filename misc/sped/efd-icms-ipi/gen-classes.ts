import path from 'path';
import fs from 'fs';
import xlsx from 'node-xlsx';

type Block = '0' | 'B' | 'C' | 'D' | 'E' | 'G' | 'H' | 'K' | '1' | '9';
type Level = '0' | '1' | '2' | '3' | '4' | '5' | '6';
type Occurrence = '1' | 'V' | 'N' | '1:1' | '1:N' | `1:${number}`;

interface RegisterField {
  number: number;
  name: string;
  description: string;
  type: 'C' | 'N' | null;
  length: string | null;
  decimal: number | null;
}

interface Register {
  block: Block;
  description: string;
  register: string;
  fields: RegisterField[];
  level?: Level;
  occurrence?: Occurrence | string;
}

const registerFieldsFile = path.resolve(__dirname, 'campos-registros.xlsx');
const blocks: Map<Block, Register[]> = new Map();

const registerData = xlsx.parse(registerFieldsFile)[0].data as Array<
  Array<string | number>
>;

let current: Register | null = null;
registerData.forEach(row => {
  const firstCol = `${row[0]}`.replace(/ +/g, ' ').replace(/–/g, '-').trim();
  const registerMatch = firstCol.match(/REGISTRO (\w\d{3})(?::| -) (.*)/);
  if (registerMatch) {
    const register = registerMatch[1];
    if (current) {
      if (!blocks.get(current.block)) {
        blocks.set(current.block, []);
      }
      blocks.get(current.block)?.push(current);
      current = null;
    }
    current = {
      block: register[0] as Block,
      description: registerMatch[2],
      register,
      fields: [],
    };
    return;
  }
  if (!current) {
    return;
  }
  const levelMatch = firstCol.match(/Nível hierárquico(?: - |: )(\w)/);
  if (levelMatch) {
    current.level = levelMatch[1] as Level;
  }
  const occurrenceMatch = firstCol.match(/Ocorrência(?: -|:)? ?(.*)/);
  if (occurrenceMatch) {
    current.occurrence = occurrenceMatch[1].replace(/\.$/, '');
  }
  if (levelMatch || occurrenceMatch) {
    return;
  }
  const filteredRow = row.filter(el => el !== undefined);
  const number = Number(filteredRow[0]);
  // if (current.register === 'C170') {
  //   console.log(JSON.stringify(row), number);
  // }
  if (Number.isNaN(number)) {
    return;
  }
  const name = `${filteredRow[1]}`
    .replace(/\n/g, '')
    .trim()
    .replace(/ /g, '')
    .replace(/-/g, '_')
    .replace(/\*$/, '');
  const description = `${filteredRow[2]}`
    .replace(/[“”]/g, '"')
    .replace(/–/g, '-')
    .replace(/\.$/, '')
    .replace(/ +/g, ' ')
    .trim();
  const type = filteredRow[3]
    ? (`${filteredRow[3]}`.trim() as 'C' | 'N')
    : null;
  const length = filteredRow[4] ? `${filteredRow[4]}`.trim() : null;
  const decimal =
    `${filteredRow[5]}`.replace(/–/g, '-').trim() === '-'
      ? null
      : Number(filteredRow[6]);
  const field: RegisterField = {
    number,
    name,
    description,
    type,
    length,
    decimal,
  };
  current.fields.push(field);
});

if (current) {
  if (!blocks.get((current as Register).block)) {
    blocks.set((current as Register).block, []);
  }
  blocks.get((current as Register).block)?.push(current);
  current = null;
}

[...blocks.values()].forEach(registers => {
  registers.sort((a, b) => a.register.localeCompare(b.register));
  registers.forEach(({ fields }) => {
    fields.sort((a, b) => (a.number < b.number ? -1 : 1));
  });
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
    this.registers = [];
${registers
  .map(r => {
    if (!['0', '1', '2'].includes(r.level ?? '')) {
      return null;
    }
    return `
    this.build${r.register}();`;
  })
  .filter(Boolean)
  .join('')}

    return this.registers;
  }
${registers
  .map(
    r =>
      `
  /**
   * Registro ${r.register} - ${r.description}
   * Nível: ${r.level}
   * Ocorrência: ${r.occurrence}
   */
  private build${r.register}(): string[] {
    throw new NotImplemented();${r.fields
      .map(
        f => `
    /**
     * ${f.description.replace(/\n/g, '\n     *  ')}
     *
     * Número: ${f.number}${f.type ? `\n     * Tipo: ${f.type}` : ''}${
          f.length ? `\n     * Tamanho: ${f.length}` : ''
        }${f.decimal ? `\n     * Casas decimais: ${f.decimal}` : ''}
     */
    const ${f.name} = '${f.name === 'REG' ? r.register : ''}';`
      )
      .join('')}
    this.registers.push([${r.fields.map(({ name }) => name).join(', ')}]);
  }`
  )
  .join('\n')}
}
`.trimStart();
  fs.writeFileSync(path.resolve(__dirname, `Bloco${block}.ts`), source);
});
