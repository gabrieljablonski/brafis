import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoDOptions extends BlocoOptions {}

export default class BlocoD extends Bloco {
  constructor(options: BlocoDOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.buildD001();
    this.buildD100();
    this.buildD300();
    this.buildD350();
    this.buildD400();
    this.buildD500();
    this.buildD600();
    this.buildD695();
    this.buildD700();
    this.buildD750();
    this.buildD990();

    return this.registers;
  }

  /**
   * Abertura do Bloco D
   * Nível 1
   * Ocorrência 1
   */
  private buildD001(): string[] {
    throw new NotImplemented();
    this.registers.push(['D001']);
  }

  /**
   * Nota Fiscal de Serviço de Transporte (código 07), Conhecimentos de Transporte Rodoviário De Cargas (código 08), Conhecimentos de Transporte de Cargas Avulso (código 8b), Aquaviário de Cargas (código 09), Aéreo (código 10), Ferroviário de Cargas (código 11), Multimodal de Cargas (código 26), Nota Fiscal de Transporte Ferroviário de Carga (código 27), Conhecimento de Transporte Eletrônico - CT-e (código 57), Conhecimento de Transporte Eletrônico para Outros Serviços - CT-e OS (código 67) e Bilhete de Passagem Eletrônico (código 63)
   * Nível 2
   * Ocorrência V
   */
  private buildD100(): string[] {
    throw new NotImplemented();
    this.registers.push(['D100']);
  }

  /**
   * Informação complementar dos documentos fiscais quando das prestações interestaduais destinadas a consumidor final não contribuinte EC 87/15 (código 57 e 67)
   * Nível 3
   * Ocorrência 1:1
   */
  private buildD101(): string[] {
    throw new NotImplemented();
    this.registers.push(['D101']);
  }

  /**
   * Itens do documento - Nota Fiscal de Serviços de Transporte (código 07)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD110(): string[] {
    throw new NotImplemented();
    this.registers.push(['D110']);
  }

  /**
   * Complemento da Nota Fiscal de Serviços de Transporte (código 07)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD120(): string[] {
    throw new NotImplemented();
    this.registers.push(['D120']);
  }

  /**
   * Complemento do Conhecimento Rodoviário de Cargas (código 08) e Conhecimento de Transporte de Cargas Avulso (Código 8B)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD130(): string[] {
    throw new NotImplemented();
    this.registers.push(['D130']);
  }

  /**
   * Complemento do Conhecimento Aquaviário de Cargas (código 09)
   * Nível 3
   * Ocorrência 1:1
   */
  private buildD140(): string[] {
    throw new NotImplemented();
    this.registers.push(['D140']);
  }

  /**
   * Complemento do Conhecimento Aéreo de Cargas (código 10)
   * Nível 3
   * Ocorrência 1:1
   */
  private buildD150(): string[] {
    throw new NotImplemented();
    this.registers.push(['D150']);
  }

  /**
   * Carga Transportada (CÓDIGO 08, 8B, 09, 10, 11, 26 E 27)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD160(): string[] {
    throw new NotImplemented();
    this.registers.push(['D160']);
  }

  /**
   * Local de Coleta e Entrega (códigos 08, 8B, 09, 10, 11 e 26)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildD161(): string[] {
    throw new NotImplemented();
    this.registers.push(['D161']);
  }

  /**
   * Identificação dos documentos fiscais (código 08,8B, 09,10,11,26 e 27)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD162(): string[] {
    throw new NotImplemented();
    this.registers.push(['D162']);
  }

  /**
   * Complemento do Conhecimento Multimodal de Cargas (código 26)
   * Nível 3
   * Ocorrência 1:1
   */
  private buildD170(): string[] {
    throw new NotImplemented();
    this.registers.push(['D170']);
  }

  /**
   * Modais (código 26)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD180(): string[] {
    throw new NotImplemented();
    this.registers.push(['D180']);
  }

  /**
   * Registro Analítico dos Documentos (CÓDIGO 07, 08, 8B, 09, 10, 11, 26, 27, 57 e 67)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD190(): string[] {
    throw new NotImplemented();
    this.registers.push(['D190']);
  }

  /**
   * Observações do lançamento (CÓDIGO 07, 08, 8B, 09, 10, 11, 26, 27, 57 e 67)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD195(): string[] {
    throw new NotImplemented();
    this.registers.push(['D195']);
  }

  /**
   * Outras obrigações tributárias, ajustes e informações de valores provenientes do documento fiscal.
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD197(): string[] {
    throw new NotImplemented();
    this.registers.push(['D197']);
  }

  /**
   * Registro Analítico dos bilhetes consolidados de Passagem Rodoviário (código 13), de Passagem Aquaviário (código 14), de Passagem e Nota de Bagagem (código 15) e de Passagem Ferroviário (código 16)
   * Nível 2
   * Ocorrência V
   */
  private buildD300(): string[] {
    throw new NotImplemented();
    this.registers.push(['D300']);
  }

  /**
   * Documentos cancelados dos Bilhetes de Passagem Rodoviário (código 13), de Passagem Aquaviário (código 14), de Passagem e Nota de Bagagem (código 15) e de Passagem Ferroviário (código 16)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD301(): string[] {
    throw new NotImplemented();
    this.registers.push(['D301']);
  }

  /**
   * Complemento dos Bilhetes (código 13, código 14, código 15 e código 16)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD310(): string[] {
    throw new NotImplemented();
    this.registers.push(['D310']);
  }

  /**
   * Equipamento ECF (Códigos 2E, 13, 14, 15 e 16)
   * Nível 2
   * Ocorrência V
   */
  private buildD350(): string[] {
    throw new NotImplemented();
    this.registers.push(['D350']);
  }

  /**
   * Redução Z (Códigos 2E, 13, 14, 15 e 16)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD355(): string[] {
    throw new NotImplemented();
    this.registers.push(['D355']);
  }

  /**
   * PIS E COFINS totalizados no dia (Códigos 2E, 13, 14, 15 e 16)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildD360(): string[] {
    throw new NotImplemented();
    this.registers.push(['D360']);
  }

  /**
   * Registro dos Totalizadores Parciais da Redução Z (Códigos 2E, 13, 14, 15 e 16)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD365(): string[] {
    throw new NotImplemented();
    this.registers.push(['D365']);
  }

  /**
   * Complemento dos documentos informados (Códigos 13, 14, 15, 16 E 2E)
   * Nível 5
   * Ocorrência 1:N
   */
  private buildD370(): string[] {
    throw new NotImplemented();
    this.registers.push(['D370']);
  }

  /**
   * Registro analítico do movimento diário (Códigos 13, 14, 15, 16 E 2E)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD390(): string[] {
    throw new NotImplemented();
    this.registers.push(['D390']);
  }

  /**
   * Resumo do Movimento Diário (código 18)
   * Nível 2
   * Ocorrência V
   */
  private buildD400(): string[] {
    throw new NotImplemented();
    this.registers.push(['D400']);
  }

  /**
   * Documentos Informados (Códigos 13, 14, 15 e 16)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD410(): string[] {
    throw new NotImplemented();
    this.registers.push(['D410']);
  }

  /**
   * Documentos Cancelados dos Documentos Informados (Códigos 13, 14, 15 e 16)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD411(): string[] {
    throw new NotImplemented();
    this.registers.push(['D411']);
  }

  /**
   * Complemento dos Documentos Informados (Códigos 13, 14, 15 e 16)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD420(): string[] {
    throw new NotImplemented();
    this.registers.push(['D420']);
  }

  /**
   * Nota Fiscal de Serviço de Comunicação (código 21) e Serviço de Telecomunicação (código 22)
   * Nível 2
   * Ocorrência V
   */
  private buildD500(): string[] {
    throw new NotImplemented();
    this.registers.push(['D500']);
  }

  /**
   * Itens do Documento - Nota Fiscal de Serviço de Comunicação (código 21) e Serviço de Telecomunicação (código 22)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD510(): string[] {
    throw new NotImplemented();
    this.registers.push(['D510']);
  }

  /**
   * Terminal Faturado
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD530(): string[] {
    throw new NotImplemented();
    this.registers.push(['D530']);
  }

  /**
   * Registro Analítico do Documento (códigos 21 e 22)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD590(): string[] {
    throw new NotImplemented();
    this.registers.push(['D590']);
  }

  /**
   * Consolidação da Prestação de Serviços - Notas de Serviço de Comunicação (código 21) e de Serviço de Telecomunicação (código 22)
   * Nível 2
   * Ocorrência V
   */
  private buildD600(): string[] {
    throw new NotImplemented();
    this.registers.push(['D600']);
  }

  /**
   * Itens do Documento Consolidado (códigos 21 e 22)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD610(): string[] {
    throw new NotImplemented();
    this.registers.push(['D610']);
  }

  /**
   * Registro Analítico dos Documentos (códigos 21 e 22)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD690(): string[] {
    throw new NotImplemented();
    this.registers.push(['D690']);
  }

  /**
   * Consolidação da Prestação de Serviços - Notas de Serviço de Comunicação (código 21) e de Serviço de Telecomunicação (código 22)
   * Nível 2
   * Ocorrência V
   */
  private buildD695(): string[] {
    throw new NotImplemented();
    this.registers.push(['D695']);
  }

  /**
   * Registro Analítico dos Documentos (códigos 21 e 22)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD696(): string[] {
    throw new NotImplemented();
    this.registers.push(['D696']);
  }

  /**
   * Registro de informações de outras UFs, relativamente aos serviços “não-medidos” de televisão por assinatura via satélite
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD697(): string[] {
    throw new NotImplemented();
    this.registers.push(['D697']);
  }

  /**
   * Nota Fiscal Fatura Eletrônica de Serviços de Comunicação - NFCom (Código 62)
   * Nível 2
   * Ocorrência V
   */
  private buildD700(): string[] {
    throw new NotImplemented();
    this.registers.push(['D700']);
  }

  /**
   * Registro analítico Nota Fiscal Fatura Eletrônica de Serviços de Comunicação - NFCom (Código 62)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD730(): string[] {
    throw new NotImplemented();
    this.registers.push(['D730']);
  }

  /**
   * Informações do fundo de combate à pobreza - FCP - (Código 62)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildD731(): string[] {
    throw new NotImplemented();
    this.registers.push(['D731']);
  }

  /**
   * Observações do lançamento fiscal (Código 62)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD735(): string[] {
    throw new NotImplemented();
    this.registers.push(['D735']);
  }

  /**
   * Outras obrigações tributárias, ajustes e informações de valores proveniente de documento fiscal
   * Nível 4
   * Ocorrência 1:N
   */
  private buildD737(): string[] {
    throw new NotImplemented();
    this.registers.push(['D737']);
  }

  /**
   * Escrituração consolidada da Nota Fiscal Fatura Eletrônica de Serviços de Comunicação - NFCom (Código 62)
   * Nível 2
   * Ocorrência 1:N
   */
  private buildD750(): string[] {
    throw new NotImplemented();
    this.registers.push(['D750']);
  }

  /**
   * Registro analítico da escrituração consolidada da Nota Fiscal Fatura Eletrônica de Serviços de Comunicação - NFCom (Código 62)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildD760(): string[] {
    throw new NotImplemented();
    this.registers.push(['D760']);
  }

  /**
   * Informações do fundo de combate à pobreza FCP - (Código 62)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildD761(): string[] {
    throw new NotImplemented();
    this.registers.push(['D761']);
  }

  /**
   * Encerramento do Bloco D
   * Nível 1
   * Ocorrência 1
   */
  private buildD990(): string[] {
    throw new NotImplemented();
    this.registers.push(['D990']);
  }
}
