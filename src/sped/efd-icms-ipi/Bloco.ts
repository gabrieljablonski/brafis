import type EfdIcmsIpi from './EfdIcmsIpi';

export interface BlocoOptions {
  efd: EfdIcmsIpi;
}

export default class Bloco {
  protected efd: EfdIcmsIpi;

  protected registers: string[][] = [];

  constructor(options: BlocoOptions) {
    this.efd = options.efd;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(...args: unknown[]): string[][] {
    this.registers = [];
    return this.registers;
  }
}
