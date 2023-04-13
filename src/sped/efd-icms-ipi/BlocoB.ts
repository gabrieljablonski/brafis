import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoBOptions extends BlocoOptions {}

export default class BlocoB extends Bloco {
  constructor(options: BlocoBOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.entries = [];

    this.buildB001();
    this.buildB020();
    this.buildB030();
    this.buildB350();
    this.buildB420();
    this.buildB440();
    this.buildB460();
    this.buildB470();
    this.buildB500();
    this.buildB990();

    return this.entries;
  }

  /**
   * Abertura do Bloco B
   * Nível 1
   * Ocorrência 1
   */
  private buildB001(): string[] {
    throw new NotImplemented();
    this.entries.push(['B001']);
  }

  /**
   * Nota Fiscal (código 01), Nota Fiscal de Serviços (código 03), Nota Fiscal de Serviços Avulsa (código 3B), Nota Fiscal de Produtor (código 04), Conhecimento de Transporte Rodoviário de Cargas (código 08), NF-e (código 55) e NFC-e (código 65)
   * Nível 2
   * Ocorrência V
   */
  private buildB020(): string[] {
    throw new NotImplemented();
    this.entries.push(['B020']);
  }

  /**
   * Detalhamento por combinação de alíquota e item da lista de serviços da Lei Complementar nº 116/2003
   * Nível 3
   * Ocorrência 1:N
   */
  private buildB025(): string[] {
    throw new NotImplemented();
    this.entries.push(['B025']);
  }

  /**
   * Nota Fiscal de Serviços Simplificada (código 3A)
   * Nível 2
   * Ocorrência V
   */
  private buildB030(): string[] {
    throw new NotImplemented();
    this.entries.push(['B030']);
  }

  /**
   * Detalhamento por combinação de alíquota e item da lista de serviços da Lei Complementar nº 116/2003
   * Nível 3
   * Ocorrência 1:N
   */
  private buildB035(): string[] {
    throw new NotImplemented();
    this.entries.push(['B035']);
  }

  /**
   * Serviços prestados por instituições financeiras
   * Nível 2
   * Ocorrência V
   */
  private buildB350(): string[] {
    throw new NotImplemented();
    this.entries.push(['B350']);
  }

  /**
   * Totalização dos valores de serviços prestados por combinação de alíquota e item da lista de serviços da Lei Complementar nº 116/2003
   * Nível 2
   * Ocorrência V
   */
  private buildB420(): string[] {
    throw new NotImplemented();
    this.entries.push(['B420']);
  }

  /**
   * Totalização dos valores retidos
   * Nível 2
   * Ocorrência V
   */
  private buildB440(): string[] {
    throw new NotImplemented();
    this.entries.push(['B440']);
  }

  /**
   * Deduções do ISS
   * Nível 2
   * Ocorrência V
   */
  private buildB460(): string[] {
    throw new NotImplemented();
    this.entries.push(['B460']);
  }

  /**
   * Apuração do ISS
   * Nível 2
   * Ocorrência 1
   */
  private buildB470(): string[] {
    throw new NotImplemented();
    this.entries.push(['B470']);
  }

  /**
   * Apuração do ISS sociedade uniprofissional
   * Nível 2
   * Ocorrência 1
   */
  private buildB500(): string[] {
    throw new NotImplemented();
    this.entries.push(['B500']);
  }

  /**
   * Uniprofissional - empregados e sócios
   * Nível 3
   * Ocorrência V
   */
  private buildB510(): string[] {
    throw new NotImplemented();
    this.entries.push(['B510']);
  }

  /**
   * Encerramento do Bloco B
   * Nível 1
   * Ocorrência 1
   */
  private buildB990(): string[] {
    throw new NotImplemented();
    this.entries.push(['B990']);
  }
}
