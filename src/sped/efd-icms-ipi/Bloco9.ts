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
    this.registers = [];

    this.build9001();
    this.build9900();
    this.build9990();
    this.build9999();

    return this.registers;
  }

  /**
   * Registro 9001 - ABERTURA DO BLOCO 9
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private build9001(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "9001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '9001';
    /**
     * Indicador de movimento:
     *  0 - Bloco com dados informados;
     *  1 - Bloco sem dados informados
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 001*
     */
    const IND_MOV = '';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro 9900 - REGISTROS DO ARQUIVO.
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build9900(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "9900"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '9900';
    /**
     * Registro que será totalizado no próximo campo
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 4
     */
    const REG_BLC = '';
    /**
     * Total de registros do tipo informado no campo anterior
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_REG_BLC = '';
    this.registers.push([REG, REG_BLC, QTD_REG_BLC]);
  }

  /**
   * Registro 9990 - ENCERRAMENTO DO BLOCO 9
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private build9990(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "9990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '9990';
    /**
     * Quantidade total de linhas do Bloco 9
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_9 = '';
    this.registers.push([REG, QTD_LIN_9]);
  }

  /**
   * Registro 9999 - ENCERRAMENTO DO ARQUIVO DIGITAL.
   * Nível: 0
   * Ocorrência: um por Arquivo
   */
  private build9999(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "9999"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '9999';
    /**
     * Quantidade total de linhas do arquivo digital
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN = '';
    this.registers.push([REG, QTD_LIN]);
  }
}
