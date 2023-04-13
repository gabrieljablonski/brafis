import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bloco0Options extends BlocoOptions {}

export default class Bloco0 extends Bloco {
  constructor(options: Bloco0Options) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.build0000();
    this.build0001();
    this.build0002();
    this.build0005();
    this.build0015();
    this.build0100();
    this.build0150();
    this.build0190();
    this.build0200();
    this.build0300();
    this.build0400();
    this.build0450();
    this.build0460();
    this.build0500();
    this.build0600();
    this.build0990();

    return this.registers;
  }

  /**
   * Abertura do Arquivo Digital e Identificação da entidade
   * Nível 0
   * Ocorrência 1
   */
  private build0000(): string[] {
    throw new NotImplemented();
    this.registers.push(['0000']);
  }

  /**
   * Abertura do Bloco 0
   * Nível 1
   * Ocorrência 1
   */
  private build0001(): string[] {
    throw new NotImplemented();
    this.registers.push(['0001']);
  }

  /**
   * Classificação do Estabelecimento Industrial ou Equiparado a Industrial
   * Nível 2
   * Ocorrência 1
   */
  private build0002(): string[] {
    throw new NotImplemented();
    this.registers.push(['0002']);
  }

  /**
   * Dados Complementares da entidade
   * Nível 2
   * Ocorrência 1
   */
  private build0005(): string[] {
    throw new NotImplemented();
    this.registers.push(['0005']);
  }

  /**
   * Dados do Contribuinte Substituto ou Responsável pelo ICMS Destino
   * Nível 2
   * Ocorrência V
   */
  private build0015(): string[] {
    throw new NotImplemented();
    this.registers.push(['0015']);
  }

  /**
   * Dados do Contabilista
   * Nível 2
   * Ocorrência 1
   */
  private build0100(): string[] {
    throw new NotImplemented();
    this.registers.push(['0100']);
  }

  /**
   * Tabela de Cadastro do Participante
   * Nível 2
   * Ocorrência V
   */
  private build0150(): string[] {
    throw new NotImplemented();
    this.registers.push(['0150']);
  }

  /**
   * Alteração da Tabela de Cadastro de Participante
   * Nível 3
   * Ocorrência 1:N
   */
  private build0175(): string[] {
    throw new NotImplemented();
    this.registers.push(['0175']);
  }

  /**
   * Identificação das unidades de medida
   * Nível 2
   * Ocorrência V
   */
  private build0190(): string[] {
    throw new NotImplemented();
    this.registers.push(['0190']);
  }

  /**
   * Tabela de Identificação do Item (Produtos e Serviços)
   * Nível 2
   * Ocorrência V
   */
  private build0200(): string[] {
    throw new NotImplemented();
    this.registers.push(['0200']);
  }

  /**
   * Alteração do Item
   * Nível 3
   * Ocorrência 1:N
   */
  private build0205(): string[] {
    throw new NotImplemented();
    this.registers.push(['0205']);
  }

  /**
   * Código de produto conforme Tabela ANP
   * Nível 3
   * Ocorrência 1:1
   */
  private build0206(): string[] {
    throw new NotImplemented();
    this.registers.push(['0206']);
  }

  /**
   * Consumo Específico Padronizado
   * Nível 3
   * Ocorrência 1:N
   */
  private build0210(): string[] {
    throw new NotImplemented();
    this.registers.push(['0210']);
  }

  /**
   * Fatores de Conversão de Unidades
   * Nível 3
   * Ocorrência 1:N
   */
  private build0220(): string[] {
    throw new NotImplemented();
    this.registers.push(['0220']);
  }

  /**
   * Correlação entre códigos de itens comercializados
   * Nível 3
   * Ocorrência 1:N
   */
  private build0221(): string[] {
    throw new NotImplemented();
    this.registers.push(['0221']);
  }

  /**
   * Cadastro de bens ou componentes do Ativo Imobilizado
   * Nível 2
   * Ocorrência V
   */
  private build0300(): string[] {
    throw new NotImplemented();
    this.registers.push(['0300']);
  }

  /**
   * Informação sobre a Utilização do Bem
   * Nível 3
   * Ocorrência 1:1
   */
  private build0305(): string[] {
    throw new NotImplemented();
    this.registers.push(['0305']);
  }

  /**
   * Tabela de Natureza da Operação/ Prestação
   * Nível 2
   * Ocorrência V
   */
  private build0400(): string[] {
    throw new NotImplemented();
    this.registers.push(['0400']);
  }

  /**
   * Tabela de Informação Complementar do documento fiscal
   * Nível 2
   * Ocorrência V
   */
  private build0450(): string[] {
    throw new NotImplemented();
    this.registers.push(['0450']);
  }

  /**
   * Tabela de Observações do Lançamento Fiscal
   * Nível 2
   * Ocorrência V
   */
  private build0460(): string[] {
    throw new NotImplemented();
    this.registers.push(['0460']);
  }

  /**
   * Plano de contas contábeis
   * Nível 2
   * Ocorrência V
   */
  private build0500(): string[] {
    throw new NotImplemented();
    this.registers.push(['0500']);
  }

  /**
   * Centro de custos
   * Nível 2
   * Ocorrência V
   */
  private build0600(): string[] {
    throw new NotImplemented();
    this.registers.push(['0600']);
  }

  /**
   * Encerramento do Bloco 0
   * Nível 1
   * Ocorrência 1
   */
  private build0990(): string[] {
    throw new NotImplemented();
    this.registers.push(['0990']);
  }
}
