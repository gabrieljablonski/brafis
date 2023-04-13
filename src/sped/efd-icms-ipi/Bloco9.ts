import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bloco9Options extends BlocoOptions {}

export default class Bloco9 extends Bloco {
  constructor(options: Bloco9Options) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.entries = [];

    this.build9001();
    this.build9900();
    this.build9990();
    this.build9999();

    return this.entries;
  }

  /**
   * Abertura do Bloco 9
   * Nível 1
   * Ocorrência 1
   */
  private build9001(): string[] {
    throw new NotImplemented();
    this.entries.push(['9001']);
  }

  /**
   * Registros do Arquivo
   * Nível 2
   * Ocorrência V
   */
  private build9900(): string[] {
    throw new NotImplemented();
    this.entries.push(['9900']);
  }

  /**
   * Encerramento do Bloco 9
   * Nível 1
   * Ocorrência 1
   */
  private build9990(): string[] {
    throw new NotImplemented();
    this.entries.push(['9990']);
  }

  /**
   * Encerramento do Arquivo Digital
   * Nível 0
   * Ocorrência 1
   */
  private build9999(): string[] {
    throw new NotImplemented();
    this.entries.push(['9999']);
  }
}
