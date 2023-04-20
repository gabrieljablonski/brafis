import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

export interface BlocoGOptions {
  include?: boolean;
}

export default class BlocoG extends Bloco {
  private include: boolean;

  constructor(options: BlocoOptions & BlocoGOptions) {
    super(options);
    this.include = options.include ?? false;
  }

  build(): string[][] {
    this.registers = [];

    this.buildG001();
    if (this.include) {
      this.buildG110();
    }
    this.buildG990();

    return this.registers;
  }

  /**
   * Registro G001 - ABERTURA DO BLOCO G
   * Nível: 1
   * Ocorrência: um (por arquivo)
   */
  private buildG001() {
    /**
     * Texto fixo contendo "G001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'G001';
    /**
     * Indicador de movimento:
     *  0- Bloco com dados informados;
     *  1- Bloco sem dados informados
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_MOV = this.include ? '0' : '1';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro G110 - ICMS - ATIVO PERMANENTE - CIAP
   * Nível: 2
   * Ocorrência: um (por período de apuração)
   */
  private buildG110() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "G110"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'G110';
    /**
     * Data inicial a que a apuração se refere
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final a que a apuração se refere
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN = '';
    /**
     * Saldo inicial de ICMS do CIAP, composto por ICMS de
     *  bens que entraram anteriormente ao período de apuração (somatório dos campos 05 a 08 dos registros G125)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const SALDO_IN_ICMS = '';
    /**
     * Somatório das parcelas de ICMS passível de apropriação de cada bem (campo 10 do G125)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const SOM_PARC = '';
    /**
     * Valor do somatório das saídas tributadas e saídas para exportação
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_TRIB_EXP = '';
    /**
     * Valor total de saídas
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOTAL = '';
    /**
     * Índice de participação do valor do somatório das saídas
     *  tributadas e saídas para exportação no valor total de saídas (Campo 06 dividido pelo campo 07)
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const IND_PER_SAI = '';
    /**
     * Valor de ICMS a ser apropriado na apuração do ICMS,
     *  correspondente à multiplicação do campo 05 pelo campo 08
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const ICMS_APROP = '';
    /**
     * Valor de outros créditos a ser apropriado na Apuração do ICMS, correspondente ao somatório do campo 09 do registro G126
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const SOM_ICMS_OC = '';
    this.registers.push([
      REG,
      DT_INI,
      DT_FIN,
      SALDO_IN_ICMS,
      SOM_PARC,
      VL_TRIB_EXP,
      VL_TOTAL,
      IND_PER_SAI,
      ICMS_APROP,
      SOM_ICMS_OC,
    ]);
  }

  /**
   * Registro G125 - MOVIMENTAÇÃO DE BEM OU COMPONENTE DO ATIVO IMOBILIZADO
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildG125() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "G125"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'G125';
    /**
     * Código individualizado do bem ou componente adotado no controle patrimonial do estabelecimento informante
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_IND_BEM = '';
    /**
     * Data da movimentação ou do saldo inicial
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_MOV = '';
    /**
     * Tipo de movimentação do bem ou componente: SI = Saldo inicial de bens imobilizados;
     *  IM = Imobilização de bem individual;
     *  IA = Imobilização em Andamento - Componente;
     *  CI = Conclusão de Imobilização em Andamento - Bem Resultante;
     *  MC = Imobilização oriunda do Ativo Circulante;
     *  BA = Baixa do bem - Fim do período de apropriação; AT = Alienação ou Transferência;
     *  PE = Perecimento, Extravio ou Deterioração; OT = Outras Saídas do Imobilizado
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 002*
     */
    const TIPO_MOV = '';
    /**
     * Valor do ICMS da Operação Própria na entrada do bem ou componente
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_IMOB_ICMS_OP = '';
    /**
     * Valor do ICMS da Oper. por Sub. Tributária na entrada do
     *  bem ou componente
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_IMOB_ICMS_ST = '';
    /**
     * Valor do ICMS sobre Frete do Conhecimento de Transporte na entrada do bem ou componente
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_IMOB_ICMS_FRT = '';
    /**
     * Valor do ICMS - Diferencial de Alíquota, conforme Doc.
     *  de Arrecadação, na entrada do bem ou componente
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_IMOB_ICMS_DIF = '';
    /**
     * Número da parcela do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_PARC = '';
    /**
     * Valor da parcela de ICMS passível de apropriação (antes da aplicação da participação percentual do valor das saídas tributadas/exportação sobre as saídas totais)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_PARC_PASS = '';
    this.registers.push([
      REG,
      COD_IND_BEM,
      DT_MOV,
      TIPO_MOV,
      VL_IMOB_ICMS_OP,
      VL_IMOB_ICMS_ST,
      VL_IMOB_ICMS_FRT,
      VL_IMOB_ICMS_DIF,
      NUM_PARC,
      VL_PARC_PASS,
    ]);
  }

  /**
   * Registro G126 - OUTROS CRÉDITOS CIAP
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildG126() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "G126"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'G126';
    /**
     * Data inicial do período de apuração
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final do período de apuração
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIM = '';
    /**
     * Número da parcela do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_PARC = '';
    /**
     * Valor da parcela de ICMS passível de apropriação - antes da aplicação da participação percentual do valor
     *  das saídas tributadas/exportação sobre as saídas totais
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_PARC_PASS = '';
    /**
     * Valor do somatório das saídas tributadas e saídas para exportação no período indicado neste registro
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_TRIB_OC = '';
    /**
     * Valor total de saídas no período indicado neste registro
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOTAL = '';
    /**
     * Índice de participação do valor do somatório das saídas tributadas e saídas para exportação no valor total de
     *  saídas (Campo 06 dividido pelo campo 07)
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const IND_PER_SAI = '';
    /**
     * Valor de outros créditos de ICMS a ser apropriado na
     *  apuração (campo 05 vezes o campo 08)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_PARC_APROP = '';
    this.registers.push([
      REG,
      DT_INI,
      DT_FIM,
      NUM_PARC,
      VL_PARC_PASS,
      VL_TRIB_OC,
      VL_TOTAL,
      IND_PER_SAI,
      VL_PARC_APROP,
    ]);
  }

  /**
   * Registro G130 - IDENTIFICAÇÃO DO DOCUMENTO FISCAL
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildG130() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "G130"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'G130';
    /**
     * Indicador do emitente do documento fiscal:
     *  0- Emissão própria;
     *  1- Terceiros
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante:
     *  - do emitente do documento ou do remetente das mercadorias, no caso de entradas;
     *  - do adquirente, no caso de saídas
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do modelo de documento fiscal, conforme tabela 4.1.1
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Série do documento fiscal
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 3
     */
    const SERIE = '';
    /**
     * Número de documento fiscal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Chave do documento fiscal eletrônico
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_NFE_CTE = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Número do documento de arrecadação estadual, se houver
     *
     * Número: 9
     * Tipo: C
     * Tamanho: -
     */
    const NUM_DA = '';
    this.registers.push([
      REG,
      IND_EMIT,
      COD_PART,
      COD_MOD,
      SERIE,
      NUM_DOC,
      CHV_NFE_CTE,
      DT_DOC,
      NUM_DA,
    ]);
  }

  /**
   * Registro G140 - IDENTIFICAÇÃO DO ITEM DO DOCUMENTO FISCAL
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildG140() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "G140"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'G140';
    /**
     * Número sequencial do item no documento fiscal
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM = '';
    /**
     * Código correspondente do bem no documento fiscal (campo 02 do registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade, deste item da nota fiscal, que foi aplicada neste bem, expressa na mesma unidade constante no documento fiscal de entrada
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTDE = '';
    /**
     * Unidade do item constante no documento fiscal de entrada
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor do ICMS da Operação Própria na entrada do item, proporcional à quantidade aplicada no bem ou componente
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_OP_APLICADO = '';
    /**
     * Valor do ICMS ST na entrada do item, proporcional à quantidade aplicada no bem ou componente
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST_APLICADO = '';
    /**
     * Valor do ICMS sobre Frete do Conhecimento de Transporte na entrada do item, proporcional à quantidade aplicada no bem ou componente
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_FRT_APLICADO = '';
    /**
     * Valor do ICMS Diferencial de Alíquota, na entrada do item, proporcional à quantidade aplicada no bem ou componente
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_DIF_APLICADO = '';
    this.registers.push([
      REG,
      NUM_ITEM,
      COD_ITEM,
      QTDE,
      UNID,
      VL_ICMS_OP_APLICADO,
      VL_ICMS_ST_APLICADO,
      VL_ICMS_FRT_APLICADO,
      VL_ICMS_DIF_APLICADO,
    ]);
  }

  /**
   * Registro G990 - ENCERRAMENTO DO BLOCO G
   * Nível: 1
   * Ocorrência: um (por arquivo)
   */
  private buildG990() {
    /**
     * Texto fixo contendo "G990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'G990';
    /**
     * Quantidade total de linhas do Bloco G
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_G = `${this.registers.length + 1}`;
    this.registers.push([REG, QTD_LIN_G]);
  }
}
