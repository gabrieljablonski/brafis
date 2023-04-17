import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoHOptions extends BlocoOptions {}

export default class BlocoH extends Bloco {
  constructor(options: BlocoHOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.buildH001();
    this.buildH005();
    this.buildH990();

    return this.registers;
  }

  /**
   * Registro H001 - ABERTURA DO BLOCO H
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private buildH001(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "H001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'H001';
    /**
     * Indicador de movimento:
     *  0- Bloco com dados informados;
     *  1- Bloco sem dados informados
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_MOV = '';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro H005 - TOTAIS DO INVENTÁRIO
   * Nível: 2
   * Ocorrência: 1:N
   */
  private buildH005(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "H005"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'H005';
    /**
     * Data do inventário
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INV = '';
    /**
     * Valor total do estoque
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_INV = '';
    /**
     * Informe o motivo do Inventário:
     *  01 - No final no período;
     *  02 - Na mudança de forma de tributação da mercadoria (ICMS); 03 - Na solicitação da baixa cadastral, paralisação temporária e outras situações;
     *  04 - Na alteração de regime de pagamento - condição do contribuinte;
     *  05 - Por determinação dos fiscos;
     *  06 - Para controle das mercadorias sujeitas ao regime de substituição tributária - restituição/ ressarcimento/ complementação
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 002*
     */
    const MOT_INV = '';
    this.registers.push([REG, DT_INV, VL_INV, MOT_INV]);
  }

  /**
   * Registro H010 - INVENTÁRIO.
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildH010(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "H010"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'H010';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Unidade do item
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Quantidade do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Valor unitário do item
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT = '';
    /**
     * Valor do item
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Indicador de propriedade/posse do item:
     *  0- Item de propriedade do informante e em seu poder;
     *  1- Item de propriedade do informante em posse de terceiros;
     *  2- Item de propriedade de terceiros em posse do informante
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_PROP = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - proprietário/possuidor que não seja o informante do arquivo
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Descrição complementar
     *
     * Número: 9
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 10
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    /**
     * Valor do item para efeitos do Imposto de Renda
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM_IR = '';
    this.registers.push([
      REG,
      COD_ITEM,
      UNID,
      QTD,
      VL_UNIT,
      VL_ITEM,
      IND_PROP,
      COD_PART,
      TXT_COMPL,
      COD_CTA,
      VL_ITEM_IR,
    ]);
  }

  /**
   * Registro H020 - INFORMAÇÃO COMPLEMENTAR DO INVENTÁRIO
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildH020(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "H020"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'H020';
    /**
     * Código da Situação Tributária referente ao ICMS, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Informe a base de cálculo do ICMS
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const BC_ICMS = '';
    /**
     * Informe o valor do ICMS a ser debitado ou creditado
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 2
     */
    const VL_ICMS = '';
    this.registers.push([REG, CST_ICMS, BC_ICMS, VL_ICMS]);
  }

  /**
   * Registro H030 - INFORMAÇÕES COMPLEMENTARES DO INVENTÁRIO DAS MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA.
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildH030(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "H030"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'H030';
    /**
     * Valor médio unitário do ICMS OP
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_OP = '';
    /**
     * Valor médio unitário da base de cálculo do ICMS ST
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor médio unitário do ICMS ST
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Valor médio unitário do FCP
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP = '';
    this.registers.push([REG, VL_ICMS_OP, VL_BC_ICMS_ST, VL_ICMS_ST, VL_FCP]);
  }

  /**
   * Registro H990 - ENCERRAMENTO DO BLOCO H.
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildH990(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "H990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'H990';
    /**
     * Quantidade total de linhas do Bloco H
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_H = '';
    this.registers.push([REG, QTD_LIN_H]);
  }
}
