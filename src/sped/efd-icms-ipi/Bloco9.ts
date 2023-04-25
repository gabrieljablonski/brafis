import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bloco9Options {}

export default class Bloco9 extends Bloco {
  private previousRegisters: string[][];

  constructor(options: BlocoOptions & Bloco9Options) {
    super(options);
    this.previousRegisters = [];
  }

  build(previousRegisters: string[][]): string[][] {
    this.registers = [];
    this.previousRegisters = previousRegisters;

    this.build9001();

    const registerCount = new Map<string, number>();
    this.previousRegisters.forEach(([register]) => {
      registerCount.set(register, (registerCount.get(register) ?? 0) + 1);
    });
    registerCount.set('9001', 1);
    registerCount.set('9900', 0); // so the order is correct
    registerCount.set('9990', 1);
    registerCount.set('9999', 1);

    registerCount.set('9900', registerCount.size);

    [...registerCount.entries()].forEach(([register, count]) => {
      this.build9900(register, count);
    });

    this.build9990();
    this.build9999();

    return this.registers;
  }

  /**
   * Registro 9001 - ABERTURA DO BLOCO 9
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private build9001() {
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
    const IND_MOV = '0';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro 9900 - REGISTROS DO ARQUIVO.
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build9900(register: string, quantity: number) {
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
    const REG_BLC = register;
    /**
     * Total de registros do tipo informado no campo anterior
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_REG_BLC = `${quantity}`;
    this.registers.push([REG, REG_BLC, QTD_REG_BLC]);
  }

  /**
   * Registro 9990 - ENCERRAMENTO DO BLOCO 9
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private build9990() {
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
    const QTD_LIN_9 = `${this.registers.length + 2}`; // +2 -> self and 9999
    this.registers.push([REG, QTD_LIN_9]);
  }

  /**
   * Registro 9999 - ENCERRAMENTO DO ARQUIVO DIGITAL.
   * Nível: 0
   * Ocorrência: um por Arquivo
   */
  private build9999() {
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
    const QTD_LIN = `${
      this.registers.length + 1 + this.previousRegisters.length
    }`;
    this.registers.push([REG, QTD_LIN]);
  }
}
