import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoGOptions extends BlocoOptions {}

export default class BlocoG extends Bloco {
  constructor(options: BlocoGOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.buildG001();
    this.buildG110();
    this.buildG990();

    return this.registers;
  }

  /**
   * Abertura do Bloco G
   * Nível 1
   * Ocorrência 1
   */
  private buildG001(): string[] {
    throw new NotImplemented();
    this.registers.push(['G001']);
  }

  /**
   * ICMS - Ativo Permanente - CIAP
   * Nível 2
   * Ocorrência V
   */
  private buildG110(): string[] {
    throw new NotImplemented();
    this.registers.push(['G110']);
  }

  /**
   * Movimentação de Bem do Ativo Imobilizado
   * Nível 3
   * Ocorrência 1:N
   */
  private buildG125(): string[] {
    throw new NotImplemented();
    this.registers.push(['G125']);
  }

  /**
   * Outros créditos CIAP
   * Nível 4
   * Ocorrência 1:N
   */
  private buildG126(): string[] {
    throw new NotImplemented();
    this.registers.push(['G126']);
  }

  /**
   * Identificação do documento fiscal
   * Nível 4
   * Ocorrência 1:N
   */
  private buildG130(): string[] {
    throw new NotImplemented();
    this.registers.push(['G130']);
  }

  /**
   * Identificação do item do documento fiscal
   * Nível 5
   * Ocorrência 1:N
   */
  private buildG140(): string[] {
    throw new NotImplemented();
    this.registers.push(['G140']);
  }

  /**
   * Encerramento do Bloco G
   * Nível 1
   * Ocorrência 1
   */
  private buildG990(): string[] {
    throw new NotImplemented();
    this.registers.push(['G990']);
  }
}
