import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoHOptions extends BlocoOptions {}

export default class BlocoH extends Bloco {
  constructor(options: BlocoHOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.entries = [];

    this.buildH001();
    this.buildH005();
    this.buildH990();

    return this.entries;
  }

  /**
   * Abertura do Bloco H
   * Nível 1
   * Ocorrência 1
   */
  private buildH001(): string[] {
    throw new NotImplemented();
    this.entries.push(['H001']);
  }

  /**
   * Totais do Inventário
   * Nível 2
   * Ocorrência V
   */
  private buildH005(): string[] {
    throw new NotImplemented();
    this.entries.push(['H005']);
  }

  /**
   * Inventário
   * Nível 3
   * Ocorrência 1:N
   */
  private buildH010(): string[] {
    throw new NotImplemented();
    this.entries.push(['H010']);
  }

  /**
   * Informação complementar do Inventário
   * Nível 4
   * Ocorrência 1:N
   */
  private buildH020(): string[] {
    throw new NotImplemented();
    this.entries.push(['H020']);
  }

  /**
   * Informações complementares do inventário das mercadorias sujeitas ao regime de substituição tributária
   * Nível 4
   * Ocorrência 1:1
   */
  private buildH030(): string[] {
    throw new NotImplemented();
    this.entries.push(['H030']);
  }

  /**
   * Encerramento do Bloco H
   * Nível 1
   * Ocorrência 1
   */
  private buildH990(): string[] {
    throw new NotImplemented();
    this.entries.push(['H990']);
  }
}
