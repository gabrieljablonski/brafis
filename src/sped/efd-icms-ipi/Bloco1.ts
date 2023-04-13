import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bloco1Options extends BlocoOptions {}

export default class Bloco1 extends Bloco {
  constructor(options: Bloco1Options) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.entries = [];

    this.build1001();
    this.build1010();
    this.build1100();
    this.build1200();
    this.build1250();
    this.build1300();
    this.build1350();
    this.build1390();
    this.build1400();
    this.build1500();
    this.build1600();
    this.build1601();
    this.build1700();
    this.build1800();
    this.build1900();
    this.build1960();
    this.build1970();
    this.build1980();
    this.build1990();

    return this.entries;
  }

  /**
   * Abertura do Bloco 1
   * Nível 1
   * Ocorrência 1
   */
  private build1001(): string[] {
    throw new NotImplemented();
    this.entries.push(['1001']);
  }

  /**
   * Obrigatoriedade de registros do Bloco 1
   * Nível 2
   * Ocorrência 1
   */
  private build1010(): string[] {
    throw new NotImplemented();
    this.entries.push(['1010']);
  }

  /**
   * Registro de Informações sobre Exportação
   * Nível 2
   * Ocorrência V
   */
  private build1100(): string[] {
    throw new NotImplemented();
    this.entries.push(['1100']);
  }

  /**
   * Documentos Fiscais de Exportação
   * Nível 3
   * Ocorrência 1:N
   */
  private build1105(): string[] {
    throw new NotImplemented();
    this.entries.push(['1105']);
  }

  /**
   * Operações de Exportação Indireta - Mercadorias de terceiros
   * Nível 4
   * Ocorrência 1:N
   */
  private build1110(): string[] {
    throw new NotImplemented();
    this.entries.push(['1110']);
  }

  /**
   * Controle de Créditos Fiscais - ICMS
   * Nível 2
   * Ocorrência V
   */
  private build1200(): string[] {
    throw new NotImplemented();
    this.entries.push(['1200']);
  }

  /**
   * Utilização de Créditos Fiscais - ICMS
   * Nível 3
   * Ocorrência 1:N
   */
  private build1210(): string[] {
    throw new NotImplemented();
    this.entries.push(['1210']);
  }

  /**
   * Informações consolidadas de saldos de restituição, ressarcimento e complementação do ICMS
   * Nível 2
   * Ocorrência 1:1
   */
  private build1250(): string[] {
    throw new NotImplemented();
    this.entries.push(['1250']);
  }

  /**
   * Informações consolidadas de saldos de restituição, ressarcimento e complementação do ICMS por motivo
   * Nível 3
   * Ocorrência 1:N
   */
  private build1255(): string[] {
    throw new NotImplemented();
    this.entries.push(['1255']);
  }

  /**
   * Movimentação diária de combustíveis
   * Nível 2
   * Ocorrência V
   */
  private build1300(): string[] {
    throw new NotImplemented();
    this.entries.push(['1300']);
  }

  /**
   * Movimentação diária de combustíveis por tanque
   * Nível 3
   * Ocorrência 1:N
   */
  private build1310(): string[] {
    throw new NotImplemented();
    this.entries.push(['1310']);
  }

  /**
   * Volume de vendas
   * Nível 4
   * Ocorrência 1:N
   */
  private build1320(): string[] {
    throw new NotImplemented();
    this.entries.push(['1320']);
  }

  /**
   * Bombas
   * Nível 2
   * Ocorrência V
   */
  private build1350(): string[] {
    throw new NotImplemented();
    this.entries.push(['1350']);
  }

  /**
   * Lacres das bombas
   * Nível 3
   * Ocorrência 1:N
   */
  private build1360(): string[] {
    throw new NotImplemented();
    this.entries.push(['1360']);
  }

  /**
   * Bicos da bomba
   * Nível 3
   * Ocorrência 1:N
   */
  private build1370(): string[] {
    throw new NotImplemented();
    this.entries.push(['1370']);
  }

  /**
   * Controle de produção de Usina
   * Nível 2
   * Ocorrência V
   */
  private build1390(): string[] {
    throw new NotImplemented();
    this.entries.push(['1390']);
  }

  /**
   * Produção diária da usina
   * Nível 3
   * Ocorrência 1:N
   */
  private build1391(): string[] {
    throw new NotImplemented();
    this.entries.push(['1391']);
  }

  /**
   * Informação sobre Valor Agregado
   * Nível 2
   * Ocorrência V
   */
  private build1400(): string[] {
    throw new NotImplemented();
    this.entries.push(['1400']);
  }

  /**
   * Nota fiscal/Conta de energia elétrica (código 06) - Operações Interestaduais
   * Nível 2
   * Ocorrência V
   */
  private build1500(): string[] {
    throw new NotImplemented();
    this.entries.push(['1500']);
  }

  /**
   * Itens do documento Nota fiscal/Conta de energia elétrica (código 06)
   * Nível 3
   * Ocorrência 1:N
   */
  private build1510(): string[] {
    throw new NotImplemented();
    this.entries.push(['1510']);
  }

  /**
   * Total das operações com cartão de crédito e/ou débito
   * Nível 2
   * Ocorrência V
   */
  private build1600(): string[] {
    throw new NotImplemented();
    this.entries.push(['1600']);
  }

  /**
   * Operações com instrumentos de pagamentos eletrônicos
   * Nível 2
   * Ocorrência V
   */
  private build1601(): string[] {
    throw new NotImplemented();
    this.entries.push(['1601']);
  }

  /**
   * Documentos fiscais utilizados
   * Nível 2
   * Ocorrência V
   */
  private build1700(): string[] {
    throw new NotImplemented();
    this.entries.push(['1700']);
  }

  /**
   * Documentos fiscais cancelados/inutilizados
   * Nível 3
   * Ocorrência 1:N
   */
  private build1710(): string[] {
    throw new NotImplemented();
    this.entries.push(['1710']);
  }

  /**
   * DCTA - Demonstrativo de crédito do ICMS sobre transporte aéreo
   * Nível 2
   * Ocorrência 1
   */
  private build1800(): string[] {
    throw new NotImplemented();
    this.entries.push(['1800']);
  }

  /**
   * Indicador de sub-apuração do ICMS
   * Nível 2
   * Ocorrência V
   */
  private build1900(): string[] {
    throw new NotImplemented();
    this.entries.push(['1900']);
  }

  /**
   * Período da sub-apuração do ICMS
   * Nível 3
   * Ocorrência 1:N
   */
  private build1910(): string[] {
    throw new NotImplemented();
    this.entries.push(['1910']);
  }

  /**
   * Sub-apuração do ICMS
   * Nível 4
   * Ocorrência 1:1
   */
  private build1920(): string[] {
    throw new NotImplemented();
    this.entries.push(['1920']);
  }

  /**
   * Ajuste/benefício/incentivo da sub-apuração do ICMS
   * Nível 5
   * Ocorrência 1:N
   */
  private build1921(): string[] {
    throw new NotImplemented();
    this.entries.push(['1921']);
  }

  /**
   * Informações adicionais dos ajustes da sub-apuração do ICMS
   * Nível 6
   * Ocorrência 1:N
   */
  private build1922(): string[] {
    throw new NotImplemented();
    this.entries.push(['1922']);
  }

  /**
   * Informações adicionais dos ajustes da sub-apuração do ICMS - Identificação dos documentos fiscais
   * Nível 6
   * Ocorrência 1:N
   */
  private build1923(): string[] {
    throw new NotImplemented();
    this.entries.push(['1923']);
  }

  /**
   * Informações adicionais da sub-apuração do ICMS - Valores declaratórios
   * Nível 5
   * Ocorrência 1:N
   */
  private build1925(): string[] {
    throw new NotImplemented();
    this.entries.push(['1925']);
  }

  /**
   * Obrigações do ICMS a recolher - Operações referentes à sub-apuração do ICMS
   * Nível 5
   * Ocorrência 1:N
   */
  private build1926(): string[] {
    throw new NotImplemented();
    this.entries.push(['1926']);
  }

  /**
   * GIAF 1 - Guia de informação e apuração de incentivos fiscais e financeiros: indústria (crédito presumido)
   * Nível 2
   * Ocorrência 1:N
   */
  private build1960(): string[] {
    throw new NotImplemented();
    this.entries.push(['1960']);
  }

  /**
   * GIAF 3 - Guia de informação e apuração de incentivos fiscais e financeiros: importação (diferimento na entrada e crédito presumido na saída subsequente)
   * Nível 2
   * Ocorrência 1:N
   */
  private build1970(): string[] {
    throw new NotImplemented();
    this.entries.push(['1970']);
  }

  /**
   * GIAF 3 - Guia de informação e apuração de incentivos fiscais e financeiros: importação (saídas internas por faixa de alíquota)
   * Nível 3
   * Ocorrência 1:4
   */
  private build1975(): string[] {
    throw new NotImplemented();
    this.entries.push(['1975']);
  }

  /**
   * GIAF 4 - Guia de informação e apuração de incentivos fiscais e financeiros: central de distribuição (entradas/saídas)
   * Nível 2
   * Ocorrência 1
   */
  private build1980(): string[] {
    throw new NotImplemented();
    this.entries.push(['1980']);
  }

  /**
   * Encerramento do Bloco 1
   * Nível 1
   * Ocorrência 1
   */
  private build1990(): string[] {
    throw new NotImplemented();
    this.entries.push(['1990']);
  }
}
