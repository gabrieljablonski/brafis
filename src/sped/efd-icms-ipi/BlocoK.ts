import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoKOptions extends BlocoOptions {}

export default class BlocoK extends Bloco {
  constructor(options: BlocoKOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.buildK001();
    this.buildK010();
    this.buildK100();
    this.buildK990();

    return this.registers;
  }

  /**
   * Abertura do Bloco K
   * Nível 1
   * Ocorrência 1
   */
  private buildK001(): string[] {
    throw new NotImplemented();
    this.registers.push(['K001']);
  }

  /**
   * Informação sobre o Tipo de Leiaute (Simplificado / Completo)
   * Nível 2
   * Ocorrência 1
   */
  private buildK010(): string[] {
    throw new NotImplemented();
    this.registers.push(['K010']);
  }

  /**
   * Período de Apuração do ICMS/IPI
   * Nível 2
   * Ocorrência V
   */
  private buildK100(): string[] {
    throw new NotImplemented();
    this.registers.push(['K100']);
  }

  /**
   * Estoque Escriturado
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK200(): string[] {
    throw new NotImplemented();
    this.registers.push(['K200']);
  }

  /**
   * Desmontagem de mercadorias - Item de Origem
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK210(): string[] {
    throw new NotImplemented();
    this.registers.push(['K210']);
  }

  /**
   * Desmontagem de mercadorias - Item de Destino
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK215(): string[] {
    throw new NotImplemented();
    this.registers.push(['K215']);
  }

  /**
   * Outras Movimentações Internas entre Mercadorias
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK220(): string[] {
    throw new NotImplemented();
    this.registers.push(['K220']);
  }

  /**
   * Itens Produzidos
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK230(): string[] {
    throw new NotImplemented();
    this.registers.push(['K230']);
  }

  /**
   * Insumos Consumidos
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK235(): string[] {
    throw new NotImplemented();
    this.registers.push(['K235']);
  }

  /**
   * Industrialização Efetuada por Terceiros - Itens Produzidos
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK250(): string[] {
    throw new NotImplemented();
    this.registers.push(['K250']);
  }

  /**
   * Industrialização em Terceiros - Insumos Consumidos
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK255(): string[] {
    throw new NotImplemented();
    this.registers.push(['K255']);
  }

  /**
   * Reprocessamento/Reparo de Produto/Insumo
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK260(): string[] {
    throw new NotImplemented();
    this.registers.push(['K260']);
  }

  /**
   * Reprocessamento/Reparo - Mercadorias Consumidas e/ou Retornadas
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK265(): string[] {
    throw new NotImplemented();
    this.registers.push(['K265']);
  }

  /**
   * Correção de Apontamento dos Registros K210, K220, K230, K250 e K260
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK270(): string[] {
    throw new NotImplemented();
    this.registers.push(['K270']);
  }

  /**
   * Correção de Apontamento e Retorno de Insumos dos Registros K215, K220, K235, K255 e K265
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK275(): string[] {
    throw new NotImplemented();
    this.registers.push(['K275']);
  }

  /**
   * Correção de Apontamento - Estoque Escriturado
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK280(): string[] {
    throw new NotImplemented();
    this.registers.push(['K280']);
  }

  /**
   * Produção Conjunta - Ordem de Produção
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK290(): string[] {
    throw new NotImplemented();
    this.registers.push(['K290']);
  }

  /**
   * Produção Conjunta - Itens Produzidos
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK291(): string[] {
    throw new NotImplemented();
    this.registers.push(['K291']);
  }

  /**
   * Produção Conjunta - Insumos Consumidos
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK292(): string[] {
    throw new NotImplemented();
    this.registers.push(['K292']);
  }

  /**
   * Produção Conjunta - Industrialização Efetuada por Terceiros
   * Nível 3
   * Ocorrência 1:N
   */
  private buildK300(): string[] {
    throw new NotImplemented();
    this.registers.push(['K300']);
  }

  /**
   * Produção Conjunta - Industrialização Efetuada por Terceiros - Itens Produzidos
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK301(): string[] {
    throw new NotImplemented();
    this.registers.push(['K301']);
  }

  /**
   * Produção Conjunta - Industrialização Efetuada por Terceiros - Insumos Consumidos
   * Nível 4
   * Ocorrência 1:N
   */
  private buildK302(): string[] {
    throw new NotImplemented();
    this.registers.push(['K302']);
  }

  /**
   * Encerramento do Bloco K
   * Nível 1
   * Ocorrência 1
   */
  private buildK990(): string[] {
    throw new NotImplemented();
    this.registers.push(['K990']);
  }
}
