import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoEOptions extends BlocoOptions {}

export default class BlocoE extends Bloco {
  constructor(options: BlocoEOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.buildE001();
    this.buildE100();
    this.buildE200();
    this.buildE300();
    this.buildE500();
    this.buildE990();

    return this.registers;
  }

  /**
   * Abertura do Bloco E
   * Nível 1
   * Ocorrência 1
   */
  private buildE001(): string[] {
    throw new NotImplemented();
    this.registers.push(['E001']);
  }

  /**
   * Período de Apuração do ICMS
   * Nível 2
   * Ocorrência V
   */
  private buildE100(): string[] {
    throw new NotImplemented();
    this.registers.push(['E100']);
  }

  /**
   * Apuração do ICMS - Operações Próprias
   * Nível 3
   * Ocorrência 1:1
   */
  private buildE110(): string[] {
    throw new NotImplemented();
    this.registers.push(['E110']);
  }

  /**
   * Ajuste/Benefício/Incentivo da Apuração do ICMS
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE111(): string[] {
    throw new NotImplemented();
    this.registers.push(['E111']);
  }

  /**
   * Informações Adicionais dos Ajustes da Apuração do ICMS
   * Nível 5
   * Ocorrência 1:N
   */
  private buildE112(): string[] {
    throw new NotImplemented();
    this.registers.push(['E112']);
  }

  /**
   * Informações Adicionais dos Ajustes da Apuração do ICMS - Identificação dos documentos fiscais
   * Nível 5
   * Ocorrência 1:N
   */
  private buildE113(): string[] {
    throw new NotImplemented();
    this.registers.push(['E113']);
  }

  /**
   * Informações Adicionais da Apuração do ICMS - Valores Declaratórios
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE115(): string[] {
    throw new NotImplemented();
    this.registers.push(['E115']);
  }

  /**
   * Obrigações do ICMS Recolhido ou a Recolher - Obrigações Próprias
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE116(): string[] {
    throw new NotImplemented();
    this.registers.push(['E116']);
  }

  /**
   * Período de Apuração do ICMS - Substituição Tributária
   * Nível 2
   * Ocorrência V
   */
  private buildE200(): string[] {
    throw new NotImplemented();
    this.registers.push(['E200']);
  }

  /**
   * Apuração do ICMS - Substituição Tributária
   * Nível 3
   * Ocorrência 1:1
   */
  private buildE210(): string[] {
    throw new NotImplemented();
    this.registers.push(['E210']);
  }

  /**
   * Ajuste/Benefício/Incentivo da Apuração do ICMS - Substituição Tributária
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE220(): string[] {
    throw new NotImplemented();
    this.registers.push(['E220']);
  }

  /**
   * Informações Adicionais dos Ajustes da Apuração do ICMS Substituição Tributária
   * Nível 5
   * Ocorrência 1:N
   */
  private buildE230(): string[] {
    throw new NotImplemented();
    this.registers.push(['E230']);
  }

  /**
   * Informações Adicionais dos Ajustes da Apuração do ICMS Substituição Tributária - Identificação dos documentos fiscais
   * Nível 5
   * Ocorrência 1:N
   */
  private buildE240(): string[] {
    throw new NotImplemented();
    this.registers.push(['E240']);
  }

  /**
   * Obrigações do ICMS a Recolher - Substituição Tributária
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE250(): string[] {
    throw new NotImplemented();
    this.registers.push(['E250']);
  }

  /**
   * Período de Apuração do ICMS Diferencial de Alíquota - UF Origem/Destino EC 87/15
   * Nível 2
   * Ocorrência 1:N
   */
  private buildE300(): string[] {
    throw new NotImplemented();
    this.registers.push(['E300']);
  }

  /**
   * Apuração do ICMS Diferencial de Alíquota - UF Origem/Destino EC 87/15
   * Nível 3
   * Ocorrência 1:1
   */
  private buildE310(): string[] {
    throw new NotImplemented();
    this.registers.push(['E310']);
  }

  /**
   * Ajuste/Benefício/Incentivo da Apuração do ICMS Diferencial de Alíquota - UF Origem/Destino EC 87/15
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE311(): string[] {
    throw new NotImplemented();
    this.registers.push(['E311']);
  }

  /**
   * Informações Adicionais dos Ajustes da Apuração do ICMS Diferencial de Alíquota - UF Origem/Destino EC 87/15
   * Nível 5
   * Ocorrência 1:N
   */
  private buildE312(): string[] {
    throw new NotImplemented();
    this.registers.push(['E312']);
  }

  /**
   * Informações Adicionais da Apuração do ICMS Diferencial de Alíquota - UF Origem/Destino EC 87/15 Identificação dos Documentos Fiscais
   * Nível 5
   * Ocorrência 1:N
   */
  private buildE313(): string[] {
    throw new NotImplemented();
    this.registers.push(['E313']);
  }

  /**
   * Obrigações do ICMS recolhido ou a recolher - Diferencial de Alíquota - UF Origem/Destino EC 87/15
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE316(): string[] {
    throw new NotImplemented();
    this.registers.push(['E316']);
  }

  /**
   * Período de Apuração do IPI
   * Nível 2
   * Ocorrência V
   */
  private buildE500(): string[] {
    throw new NotImplemented();
    this.registers.push(['E500']);
  }

  /**
   * Consolidação dos Valores de IPI
   * Nível 3
   * Ocorrência 1:N
   */
  private buildE510(): string[] {
    throw new NotImplemented();
    this.registers.push(['E510']);
  }

  /**
   * Apuração do IPI
   * Nível 3
   * Ocorrência 1:1
   */
  private buildE520(): string[] {
    throw new NotImplemented();
    this.registers.push(['E520']);
  }

  /**
   * Ajustes da Apuração do IPI
   * Nível 4
   * Ocorrência 1:N
   */
  private buildE530(): string[] {
    throw new NotImplemented();
    this.registers.push(['E530']);
  }

  /**
   * Informações Adicionais dos Ajustes da Apuração do IPI - Identificação dos Documentos Fiscais (01 e 55)
   * Nível 5
   * Ocorrência 1:N
   */
  private buildE531(): string[] {
    throw new NotImplemented();
    this.registers.push(['E531']);
  }

  /**
   * Encerramento do Bloco E
   * Nível 1
   * Ocorrência 1
   */
  private buildE990(): string[] {
    throw new NotImplemented();
    this.registers.push(['E990']);
  }
}
