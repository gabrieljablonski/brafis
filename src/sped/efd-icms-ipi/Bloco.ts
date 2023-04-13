import type EfdIcmsIpi from './EfdIcmsIpi';

export interface BlocoOptions {
  efd: EfdIcmsIpi;
  profile?: 'A' | 'B' | 'C';
}

export default class Bloco {
  protected efd: EfdIcmsIpi;

  protected profile: BlocoOptions['profile'];

  protected entries: string[][];

  constructor(options: BlocoOptions) {
    this.efd = options.efd;
    this.profile = options.profile;
    this.entries = [];
  }

  build(): string[][] {
    this.entries = [];
    return this.entries;
  }
}
