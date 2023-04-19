import type EfdIcmsIpi from './EfdIcmsIpi';

export interface BlocoOptions {
  efd: EfdIcmsIpi;
}

export default class Bloco {
  protected efd: EfdIcmsIpi;

  protected registers: string[][];

  constructor(options: BlocoOptions) {
    this.efd = options.efd;
    this.registers = [];
  }

  build(): string[][] {
    this.registers = [];
    return this.registers;
  }
}
