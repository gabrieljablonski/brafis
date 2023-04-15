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
   * Registro K001 - ABERTURA DO BLOCO K
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private buildK001(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
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
    this.registers.push(['K001', REG, IND_MOV]);
  }

  /**
   * Registro K010 - INFORMAÇÃO SOBRE O TIPO DE LEIAUTE (SIMPLIFICADO / COMPLETO)
   * Nível: 2
   * Ocorrência: um por Arquivo
   */
  private buildK010(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K010"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Indicador de tipo de leiaute adotado:
     *  0 - Leiaute simplificado
     *  1 - Leiaute completo
     *  2 - Leiaute restrito aos saldos de estoque
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_TP_LEIAUTE = '';
    this.registers.push(['K010', REG, IND_TP_LEIAUTE]);
  }

  /**
   * Registro K100 - PERÍODO DE APURAÇÃO DO ICMS/IPI
   * Nível: 2
   * Ocorrência: Vários
   */
  private buildK100(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K100"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data inicial a que a apuração se refere
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_INI = '';
    /**
     * Data final a que a apuração se refere
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 8
     */
    const DT_FIN = '';
    this.registers.push(['K100', REG, DT_INI, DT_FIN]);
  }

  /**
   * Registro K200 - ESTOQUE ESCRITURADO
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK200(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K200"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data do estoque final
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_EST = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade em estoque
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Indicador do tipo de estoque:
     *  0 - Estoque de propriedade do informante e em seu poder;
     *  1 - Estoque de propriedade do informante e em posse de terceiros;
     *  2 - Estoque de propriedade de terceiros e em posse do informante
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 1
     */
    const IND_EST = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - proprietário/possuidor que não seja o informante do arquivo
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    this.registers.push([
      'K200',
      REG,
      DT_EST,
      COD_ITEM,
      QTD,
      IND_EST,
      COD_PART,
    ]);
  }

  /**
   * Registro K210 - DESMONTAGEM DE MERCADORIAS - ITEM DE ORIGEM
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK210(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K210"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data de início da ordem de serviço
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI_OS = '';
    /**
     * Data de conclusão da ordem de serviço
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN_OS = '';
    /**
     * Código de identificação da ordem de serviço
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 30
     */
    const COD_DOC_OS = '';
    /**
     * Código do item de origem (campo 02 do Registro
     *  0200)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_ORI = '';
    /**
     * Quantidade de origem - saída do estoque
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const QTD_ORI = '';
    this.registers.push([
      'K210',
      REG,
      DT_INI_OS,
      DT_FIN_OS,
      COD_DOC_OS,
      COD_ITEM_ORI,
      QTD_ORI,
    ]);
  }

  /**
   * Registro K215 - DESMONTAGEM DE MERCADORIAS - ITENS DE DESTINO
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK215(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K215"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código do item de destino (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_DES = '';
    /**
     * Quantidade de destino - entrada em estoque
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_DES = '';
    this.registers.push(['K215', REG, COD_ITEM_DES, QTD_DES]);
  }

  /**
   * Registro K220 - OUTRAS MOVIMENTAÇÕES INTERNAS ENTRE MERCADORIAS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK220(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K220"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data da movimentação interna
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_MOV = '';
    /**
     * Código do item de origem (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_ORI = '';
    /**
     * Código do item de destino (campo 02 do Registro 0200)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_DEST = '';
    /**
     * Quantidade movimentada do item de origem
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD_ORI = '';
    /**
     * Quantidade movimentada do item de destino
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const QTD_DEST = '';
    this.registers.push([
      'K220',
      REG,
      DT_MOV,
      COD_ITEM_ORI,
      COD_ITEM_DEST,
      QTD_ORI,
      QTD_DEST,
    ]);
  }

  /**
   * Registro K230 - ITENS PRODUZIDOS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK230(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K230"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data de início da ordem de produção
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_INI_OP = '';
    /**
     * Data de conclusão da ordem de produção
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 8
     */
    const DT_FIN_OP = '';
    /**
     * Código de identificação da ordem de produção
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 30
     */
    const COD_DOC_OP = '';
    /**
     * Código do item produzido (campo 02 do Registro 0200)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade de produção acabada
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const QTD_ENC = '';
    this.registers.push([
      'K230',
      REG,
      DT_INI_OP,
      DT_FIN_OP,
      COD_DOC_OP,
      COD_ITEM,
      QTD_ENC,
    ]);
  }

  /**
   * Registro K235 - INSUMOS CONSUMIDOS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK235(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K235"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data de saída do estoque para alocação ao produto
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_SAÍDA = '';
    /**
     * Código do item componente/insumo (campo 02 do
     *  Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade consumida do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Código do insumo que foi substituído, caso ocorra a substituição (campo 02 do Registro 0210)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_INS_SUBST = '';
    this.registers.push(['K235', REG, DT_SAÍDA, COD_ITEM, QTD, COD_INS_SUBST]);
  }

  /**
   * Registro K250 - INDUSTRIALIZAÇÃO EFETUADA POR TERCEIROS - ITENS PRODUZIDOS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK250(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K250"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data do reconhecimento da produção ocorrida no terceiro
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_PROD = '';
    /**
     * Código do item produzido (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade produzida
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    this.registers.push(['K250', REG, DT_PROD, COD_ITEM, QTD]);
  }

  /**
   * Registro K255 - INDUSTRIALIZAÇÃO EM TERCEIROS - INSUMOS CONSUMIDOS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK255(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K255"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data do reconhecimento do consumo do insumo referente ao produto informado no campo 04 do Registro K250
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_CONS = '';
    /**
     * Código do insumo (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade de consumo do insumo
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Código do insumo que foi substituído, caso ocorra a substituição (campo 02 do Registro 0210)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_INS_SUBST = '';
    this.registers.push(['K255', REG, DT_CONS, COD_ITEM, QTD, COD_INS_SUBST]);
  }

  /**
   * Registro K260 - REPROCESSAMENTO/REPARO DE PRODUTO/INSUMO
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK260(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K260"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código de identificação da ordem de produção, no reprocessamento, ou da ordem de serviço, no reparo
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 30
     */
    const COD_OP_OS = '';
    /**
     * Código do produto/insumo a ser reprocessado/reparado
     *  ou já reprocessado/reparado (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Data de saída do estoque
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_SAÍDA = '';
    /**
     * Quantidade de saída do estoque
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD_SAÍDA = '';
    /**
     * Data de retorno ao estoque (entrada)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_RET = '';
    /**
     * Quantidade de retorno ao estoque (entrada)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QTD_RET = '';
    this.registers.push([
      'K260',
      REG,
      COD_OP_OS,
      COD_ITEM,
      DT_SAÍDA,
      QTD_SAÍDA,
      DT_RET,
      QTD_RET,
    ]);
  }

  /**
   * Registro K265 - REPROCESSAMENTO/REPARO - MERCADORIAS CONSUMIDAS E/OU
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK265(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K265"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código da mercadoria (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade consumida - saída do estoque
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CONS = '';
    /**
     * Quantidade retornada - entrada em estoque
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD_RET = '';
    this.registers.push(['K265', REG, COD_ITEM, QTD_CONS, QTD_RET]);
  }

  /**
   * Registro K270 - CORREÇÃO DE APONTAMENTO DOS REGISTROS K210, K220, K230, K250, K260, K291, K292, K301 E K302
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK270(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K270"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data inicial do período de apuração em que ocorreu o apontamento que está sendo corrigido
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI_AP = '';
    /**
     * Data final do período de apuração em que ocorreu o apontamento que está sendo corrigido
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN_AP = '';
    /**
     * Código de identificação da ordem de produção ou da ordem de serviço que está sendo corrigida
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 30
     */
    const COD_OP_OS = '';
    /**
     * Código da mercadoria que está sendo corrigido
     *  (campo 02 do Registro 0200)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade de correção positiva de apontamento ocorrido em período de apuração anterior
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COR_POS = '';
    /**
     * Quantidade de correção negativa de apontamento ocorrido em período de apuração anterior
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COR_NEG = '';
    /**
     * 1 - correção de apontamento de produção e/ou consumo relativo aos Registros K230/K235;
     *  2 - correção de apontamento de produção e/ou consumo relativo aos Registros K250/K255;
     *  3 - correção de apontamento de desmontagem e/ou consumo relativo aos Registros K210/K215;
     *  4 - correção de apontamento de reprocessamento/reparo e/ou consumo relativo aos Registros K260/K265;
     *  5 - correção de apontamento de movimentação interna relativo ao Registro K220.
     *  6 - correção de apontamento de produção relativo ao Registro K291;
     *  7 - correção de apontamento de consumo relativo ao Registro K292;
     *  8 - correção de apontamento de produção relativo ao Registro K301;
     *  9 - correção de apontamento de consumo relativo ao Registro K302
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 1
     */
    const ORIGEM = '';
    this.registers.push([
      'K270',
      REG,
      DT_INI_AP,
      DT_FIN_AP,
      COD_OP_OS,
      COD_ITEM,
      QTD_COR_POS,
      QTD_COR_NEG,
      ORIGEM,
    ]);
  }

  /**
   * Registro K275 - CORREÇÃO DE APONTAMENTO E RETORNO DE INSUMOS DOS REGISTROS K215, K220, K235, K255 E K265.
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK275(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K275"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código da mercadoria (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade de correção positiva de apontamento ocorrido em período de apuração anterior
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COR_POS = '';
    /**
     * Quantidade de correção negativa de apontamento
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COR_NEG = '';
    /**
     * Código do insumo que foi substituído, caso ocorra a substituição, relativo aos Registros K235/K255
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_INS_SUBST = '';
    this.registers.push([
      'K275',
      REG,
      COD_ITEM,
      QTD_COR_POS,
      QTD_COR_NEG,
      COD_INS_SUBST,
    ]);
  }

  /**
   * Registro K280 - CORREÇÃO DE APONTAMENTO - ESTOQUE ESCRITURADO
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK280(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K280"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data do estoque final escriturado que está sendo
     *  corrigido
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_EST = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade de correção positiva de apontamento ocorrido em período de apuração anterior
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COR_POS = '';
    /**
     * Quantidade de correção negativa de apontamento ocorrido em período de apuração anterior
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COR_NEG = '';
    /**
     * Indicador do tipo de estoque:
     *  0 = Estoque de propriedade do informante e em seu poder;
     *  1 = Estoque de propriedade do informante e em posse de terceiros;
     *  2 = Estoque de propriedade de terceiros e em posse do informante
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 1
     */
    const IND_EST = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    this.registers.push([
      'K280',
      REG,
      DT_EST,
      COD_ITEM,
      QTD_COR_POS,
      QTD_COR_NEG,
      IND_EST,
      COD_PART,
    ]);
  }

  /**
   * Registro K290 - PRODUÇÃO CONJUNTA - ORDEM DE PRODUÇÃO
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK290(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K290"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data de início da ordem de produção
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_INI_OP = '';
    /**
     * Data de conclusão da ordem de produção
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 8
     */
    const DT_FIN_OP = '';
    /**
     * Código de identificação da ordem de produção
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 30
     */
    const COD_DOC_OP = '';
    this.registers.push(['K290', REG, DT_INI_OP, DT_FIN_OP, COD_DOC_OP]);
  }

  /**
   * Registro K291 - PRODUÇÃO CONJUNTA - ITENS PRODUZIDOS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK291(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K291"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código do item produzido (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade de produção acabada
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    this.registers.push(['K291', REG, COD_ITEM, QTD]);
  }

  /**
   * Registro K292 - PRODUÇÃO CONJUNTA - INSUMOS CONSUMIDOS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK292(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K292"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código do insumo/componente consumido (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade consumida
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    this.registers.push(['K292', REG, COD_ITEM, QTD]);
  }

  /**
   * Registro K300 - PRODUÇÃO CONJUNTA - INDUSTRIALIZAÇÃO EFETUADA POR TERCEIROS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildK300(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K300"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Data do reconhecimento da produção ocorrida no terceiro
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 8
     */
    const DT_PROD = '';
    this.registers.push(['K300', REG, DT_PROD]);
  }

  /**
   * Registro K301 - PRODUÇÃO CONJUNTA - INDUSTRIALIZAÇÃO EFETUADA POR TERCEIROS - ITENS PRODUZIDOS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK301(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K301"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código do item produzido (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade produzida
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    this.registers.push(['K301', REG, COD_ITEM, QTD]);
  }

  /**
   * Registro K302 - PRODUÇÃO CONJUNTA - INDUSTRIALIZAÇÃO EFETUADA POR
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildK302(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K302"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Código do insumo (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade consumida
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    this.registers.push(['K302', REG, COD_ITEM, QTD]);
  }

  /**
   * Registro K990 - ENCERRAMENTO DO BLOCO K
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildK990(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "K990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '';
    /**
     * Quantidade total de linhas do Bloco K
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_K = '';
    this.registers.push(['K990', REG, QTD_LIN_K]);
  }
}
