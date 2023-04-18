import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoCOptions {}

export default class BlocoC extends Bloco {
  constructor(options: BlocoOptions & BlocoCOptions) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.buildC001();
    this.buildC100();
    this.buildC300();
    this.buildC350();
    this.buildC400();
    this.buildC495();
    this.buildC500();
    this.buildC600();
    this.buildC700();
    this.buildC800();
    this.buildC860();
    this.buildC990();

    return this.registers;
  }

  /**
   * Registro C001 - ABERTURA DO BLOCO C
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildC001() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C001';
    /**
     * Indicador de movimento:
     *  0- Bloco com dados informados;
     *  1- Bloco sem dados informados
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 1
     */
    const IND_MOV = '';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro C100 - NOTA FISCAL (CÓDIGO 01), NOTA FISCAL AVULSA (CÓDIGO 1B), NOTA FISCAL DE PRODUTOR (CÓDIGO 04), NF-e (CÓDIGO 55) e NFC-e (CÓDIGO 65).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC100() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C100"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C100';
    /**
     * Indicador do tipo de operação:
     *  0 - Entrada;
     *  1 - Saída
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OPER = '';
    /**
     * Indicador do emitente do documento fiscal:
     *  0 - Emissão própria;
     *  1 - Terceiros
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do emitente do documento ou do remetente das mercadorias, no caso de entradas;
     *  - do adquirente, no caso de saídas
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento fiscal,
     *  conforme a Tabela 4.1.2
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_SIT = '';
    /**
     * Série do documento fiscal
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 3
     */
    const SER = '';
    /**
     * Número do documento fiscal
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Chave da Nota Fiscal Eletrônica
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_NFE = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Data da entrada ou da saída
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_E_S = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Indicador do tipo de pagamento:
     *  0 - À vista;
     *  1 - A prazo;
     *  9 - Sem pagamento
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_PGTO = '';
    /**
     * Valor total do desconto
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Abatimento não tributado e não comercial
     *  Por exemplo: desconto ICMS nas remessas para ZFM
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ABAT_NT = '';
    /**
     * Valor total das mercadorias e serviços
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_MERC = '';
    /**
     * Indicador do tipo do frete:
     *  0 - Por conta de terceiros;
     *  1 - Por conta do emitente;
     *  2 - Por conta do destinatário; 9 - Sem cobrança de frete
     *
     * Número: 17
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_FRT = '';
    /**
     * Valor do frete indicado no documento fiscal
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_FRT = '';
    /**
     * Valor do seguro indicado no documento fiscal
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_SEG = '';
    /**
     * Valor de outras despesas acessórias
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_DA = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor do ICMS
     *
     * Número: 22
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor da base de cálculo do ICMS substituição
     *  tributária
     *
     * Número: 23
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor do ICMS retido por substituição tributária
     *
     * Número: 24
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Valor total do IPI
     *
     * Número: 25
     * Tipo: N
     * Tamanho: -
     */
    const VL_IPI = '';
    /**
     * Valor total do PIS
     *
     * Número: 26
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor total da COFINS
     *
     * Número: 27
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Valor total do PIS retido por substituição
     *  tributária
     *
     * Número: 28
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS_ST = '';
    /**
     * Valor total da COFINS retido por substituição tributária
     *
     * Número: 29
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS_ST = '';
    this.registers.push([
      REG,
      IND_OPER,
      IND_EMIT,
      COD_PART,
      COD_MOD,
      COD_SIT,
      SER,
      NUM_DOC,
      CHV_NFE,
      DT_DOC,
      DT_E_S,
      VL_DOC,
      IND_PGTO,
      VL_DESC,
      VL_ABAT_NT,
      VL_MERC,
      IND_FRT,
      VL_FRT,
      VL_SEG,
      VL_OUT_DA,
      VL_BC_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      VL_IPI,
      VL_PIS,
      VL_COFINS,
      VL_PIS_ST,
      VL_COFINS_ST,
    ]);
  }

  /**
   * Registro C101 - INFORMAÇÃO COMPLEMENTAR DOS DOCUMENTOS FISCAIS QUANDO DAS OPERAÇÕES INTERESTADUAIS DESTINADAS A CONSUMIDOR FINAL NÃO CONTRIBUINTE EC 87/15 (CÓDIGO 55)
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildC101() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C101"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C101';
    /**
     * Valor total relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_UF_DEST = '';
    /**
     * Valor total do ICMS Interestadual para a UF de destino
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF_DEST = '';
    /**
     * Valor total do ICMS Interestadual para a UF do remetente
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF_REM = '';
    this.registers.push([REG, VL_FCP_UF_DEST, VL_ICMS_UF_DEST, VL_ICMS_UF_REM]);
  }

  /**
   * Registro C105 - OPERAÇÕES COM ICMS ST RECOLHIDO PARA UF DIVERSA DO DESTINATÁRIO DO DOCUMENTO FISCAL (CÓDIGO 55).
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildC105() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C105"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C105';
    /**
     * Indicador do tipo de operação: Combustíveis e Lubrificantes;
     *  Leasing de veículos ou faturamento direto
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 001*
     */
    const OPER = '';
    /**
     * Sigla da UF de destino do ICMS_ST
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = '';
    this.registers.push([REG, OPER, UF]);
  }

  /**
   * Registro C110 - INFORMAÇÃO COMPLEMENTAR DA NOTA FISCAL (CÓDIGO 01, 1B, 04 e 55).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC110() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C110"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C110';
    /**
     * Código da informação complementar do
     *  documento fiscal (campo 02 do Registro 0450)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_INF = '';
    /**
     * Descrição complementar do código de referência
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    this.registers.push([REG, COD_INF, TXT_COMPL]);
  }

  /**
   * Registro C111 - PROCESSO REFERENCIADO
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC111() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C111"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C111';
    /**
     * Identificação do processo ou ato concessório
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const NUM_PROC = '';
    /**
     * Indicador da origem do processo:
     *  0 - SEFAZ;
     *  1 - Justiça Federal;
     *  2 - Justiça Estadual;
     *  3 - SECEX/SRF
     *  9 - Outros
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_PROC = '';
    this.registers.push([REG, NUM_PROC, IND_PROC]);
  }

  /**
   * Registro C112 - DOCUMENTO DE ARRECADAÇÃO REFERENCIADO
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC112() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C112"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C112';
    /**
     * Código do modelo do documento de arrecadação:
     *  0 - Documento estadual de arrecadação
     *  1 - GNRE
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const COD_DA = '';
    /**
     * Unidade federada beneficiária do recolhimento
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = '';
    /**
     * Número do documento de arrecadação
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const NUM_DA = '';
    /**
     * Código completo da autenticação bancária
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const COD_AUT = '';
    /**
     * Valor do total do documento de arrecadação (principal, atualização monetária, juros e multa)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_DA = '';
    /**
     * Data de vencimento do documento de arrecadação
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_VCTO = '';
    /**
     * Data de pagamento do documento de arrecadação,
     *  ou data do vencimento, no caso de ICMS antecipado a recolher
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_PGTO = '';
    this.registers.push([
      REG,
      COD_DA,
      UF,
      NUM_DA,
      COD_AUT,
      VL_DA,
      DT_VCTO,
      DT_PGTO,
    ]);
  }

  /**
   * Registro C113 - DOCUMENTO FISCAL REFERENCIADO
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC113() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C113"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C113';
    /**
     * Indicador do tipo de operação:
     *  0- Entrada/aquisição;
     *  1- Saída/prestação
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OPER = '';
    /**
     * Indicador do emitente do título:
     *  0- Emissão própria;
     *  1- Terceiros
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante emitente (campo 02
     *  do Registro 0150) do documento referenciado
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do documento fiscal, conforme a
     *  Tabela 4.1.1
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Série do documento fiscal
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Subsérie do documento fiscal
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do documento fiscal
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Chave do Documento Eletrônico
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DOCe = '';
    this.registers.push([
      REG,
      IND_OPER,
      IND_EMIT,
      COD_PART,
      COD_MOD,
      SER,
      SUB,
      NUM_DOC,
      DT_DOC,
      CHV_DOCe,
    ]);
  }

  /**
   * Registro C114 - CUPOM FISCAL REFERENCIADO
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC114() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C114"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C114';
    /**
     * Código do modelo do documento fiscal,
     *  conforme a tabela indicada no item 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Número de série de fabricação do ECF
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 21
     */
    const ECF_FAB = '';
    /**
     * Número do caixa atribuído ao ECF
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 3
     */
    const ECF_CX = '';
    /**
     * Número do documento fiscal
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    this.registers.push([REG, COD_MOD, ECF_FAB, ECF_CX, NUM_DOC, DT_DOC]);
  }

  /**
   * Registro C115 - LOCAL DA COLETA E/OU ENTREGA (CÓDIGO 01, 1B E 04)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC115() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C115"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C115';
    /**
     * Indicador do tipo de transporte:
     *  0 - Rodoviário;
     *  1 - Ferroviário;
     *  2 - Rodo-Ferroviário;
     *  3 - Aquaviário;
     *  4 - Dutoviário;
     *  5 - Aéreo;
     *  9 - Outros
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 001*
     */
    const IND_CARGA = '';
    /**
     * Número do CNPJ do contribuinte do local de coleta
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ_COL = '';
    /**
     * Inscrição Estadual do contribuinte do local
     *  de coleta
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 14
     */
    const IE_COL = '';
    /**
     * CPF do contribuinte do local de coleta das mercadorias
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF_COL = '';
    /**
     * Código do Município do local de coleta
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_COL = '';
    /**
     * Número do CNPJ do contribuinte do local de entrega
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ_ENTG = '';
    /**
     * Inscrição Estadual do contribuinte do local de entrega
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 14
     */
    const IE_ENTG = '';
    /**
     * CPF do contribuinte do local de entrega
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF_ENTG = '';
    /**
     * Código do Município do local de entrega
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ENTG = '';
    this.registers.push([
      REG,
      IND_CARGA,
      CNPJ_COL,
      IE_COL,
      CPF_COL,
      COD_MUN_COL,
      CNPJ_ENTG,
      IE_ENTG,
      CPF_ENTG,
      COD_MUN_ENTG,
    ]);
  }

  /**
   * Registro C116 - CUPOM FISCAL ELETRÔNICO REFERENCIADO
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC116() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C116"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C116';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 2
     */
    const COD_MOD = '';
    /**
     * Número de Série do equipamento SAT
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 9
     */
    const NR_SAT = '';
    /**
     * Chave do Cupom Fiscal Eletrônico
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 44
     */
    const CHV_CFE = '';
    /**
     * Número do cupom fiscal eletrônico
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_CFE = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 8
     */
    const DT_DOC = '';
    this.registers.push([REG, COD_MOD, NR_SAT, CHV_CFE, NUM_CFE, DT_DOC]);
  }

  /**
   * Registro C120 - COMPLEMENTO DE DOCUMENTO - OPERAÇÕES DE IMPORTAÇÃO (CÓDIGOS 01 e 55)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC120() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C120"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C120';
    /**
     * Documento de importação:
     *  0 - Declaração de Importação;
     *  1 - Declaração Simplificada de Importação
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const COD_DOC_IMP = '';
    /**
     * Número do documento de Importação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 15
     */
    const NUM_DOC_IMP = '';
    /**
     * Valor pago de PIS na importação
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const PIS_IMP = '';
    /**
     * Valor pago de COFINS na importação
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 2
     */
    const COFINSIMP = '';
    /**
     * Número do Ato Concessório do regime Drawback
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 20
     */
    const NUM_ACDRAW = '';
    this.registers.push([
      REG,
      COD_DOC_IMP,
      NUM_DOC_IMP,
      PIS_IMP,
      COFINSIMP,
      NUM_ACDRAW,
    ]);
  }

  /**
   * Registro C130 - ISSQN, IRRF E PREVIDÊNCIA SOCIAL
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildC130() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C130"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C130';
    /**
     * Valor dos serviços sob não-incidência ou
     *  não-tributados pelo ICMS
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV_NT = '';
    /**
     * Valor da base de cálculo do ISSQN
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISSQN = '';
    /**
     * Valor do ISSQN
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISSQN = '';
    /**
     * Valor da base de cálculo do Imposto de
     *  Renda Retido na Fonte
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_IRRF = '';
    /**
     * Valor do Imposto de Renda - Retido na Fonte
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_IRRF = '';
    /**
     * Valor da base de cálculo de retenção da
     *  Previdência Social
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_PREV = '';
    /**
     * Valor destacado para retenção da Previdência Social
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_PREV = '';
    this.registers.push([
      REG,
      VL_SERV_NT,
      VL_BC_ISSQN,
      VL_ISSQN,
      VL_BC_IRRF,
      VL_IRRF,
      VL_BC_PREV,
      VL_PREV,
    ]);
  }

  /**
   * Registro C140 - FATURA (CÓDIGO 01)
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildC140() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C140"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C140';
    /**
     * Indicador do emitente do título:
     *  0 - Emissão própria;
     *  1 - Terceiros
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Indicador do tipo de título de crédito: 00 - Duplicata;
     *  01 - Cheque;
     *  02 - Promissória;
     *  03 - Recibo;
     *  99 - Outros (descrever)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const IND_TIT = '';
    /**
     * Descrição complementar do título de crédito
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const DESC_TIT = '';
    /**
     * Número ou código identificador do título
     *  de crédito
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const NUM_TIT = '';
    /**
     * Quantidade de parcelas a receber/pagar
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 2
     */
    const QTD_PARC = '';
    /**
     * Valor total dos títulos de créditos
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_TIT = '';
    this.registers.push([
      REG,
      IND_EMIT,
      IND_TIT,
      DESC_TIT,
      NUM_TIT,
      QTD_PARC,
      VL_TIT,
    ]);
  }

  /**
   * Registro C141 - VENCIMENTO DA FATURA (CÓDIGO 01)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC141() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C141"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C141';
    /**
     * Número da parcela a receber/pagar
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 2
     */
    const NUM_PARC = '';
    /**
     * Data de vencimento da parcela
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_VCTO = '';
    /**
     * Valor da parcela a receber/pagar
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_PARC = '';
    this.registers.push([REG, NUM_PARC, DT_VCTO, VL_PARC]);
  }

  /**
   * Registro C160 - VOLUMES TRANSPORTADOS (CÓDIGO 01 E 04) - EXCETO COMBUSTÍVEIS.
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildC160() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C160"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C160';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - transportador, se houver
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Placa de identificação do veículo automotor
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 7
     */
    const VEIC_ID = '';
    /**
     * Quantidade de volumes transportados
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD_VOL = '';
    /**
     * Peso bruto dos volumes transportados (em kg)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const PESO_BRT = '';
    /**
     * Peso líquido dos volumes transportados (em kg)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const PESO_LIQ = '';
    /**
     * Sigla da UF da placa do veículo
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 2
     */
    const UF_ID = '';
    this.registers.push([
      REG,
      COD_PART,
      VEIC_ID,
      QTD_VOL,
      PESO_BRT,
      PESO_LIQ,
      UF_ID,
    ]);
  }

  /**
   * Registro C165 - OPERAÇÕES COM COMBUSTÍVEIS (CÓDIGO 01).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC165() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C165"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C165';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - transportador, se houver
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Placa de identificação do veículo
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 7
     */
    const VEIC_ID = '';
    /**
     * Código da autorização fornecido pela SEFAZ (combustíveis)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const COD_AUT = '';
    /**
     * Número do Passe Fiscal
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const NR_PASSE = '';
    /**
     * Hora da saída das mercadorias
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 006*
     */
    const HORA = '';
    /**
     * Temperatura em graus Celsius utilizada para
     *  quantificação do volume de combustível
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const TEMPER = '';
    /**
     * Quantidade de volumes transportados
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const QTD_VOL = '';
    /**
     * Peso bruto dos volumes transportados (em kg)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const PESO_BRT = '';
    /**
     * Peso líquido dos volumes transportados (em kg)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const PESO_LIQ = '';
    /**
     * Nome do motorista
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 60
     */
    const NOM_MOT = '';
    /**
     * CPF do motorista
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = '';
    /**
     * Sigla da UF da placa do veículo
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 2
     */
    const UF_ID = '';
    this.registers.push([
      REG,
      COD_PART,
      VEIC_ID,
      COD_AUT,
      NR_PASSE,
      HORA,
      TEMPER,
      QTD_VOL,
      PESO_BRT,
      PESO_LIQ,
      NOM_MOT,
      CPF,
      UF_ID,
    ]);
  }

  /**
   * Registro C170 - ITENS DO DOCUMENTO (CÓDIGO 01, 1B, 04 e 55).
   * Nível: 3
   * Ocorrência: 1:N (um ou vários por registro C100)
   */
  private buildC170() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C170"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C170';
    /**
     * Número sequencial do item no documento fiscal
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Descrição complementar do item como adotado no documento fiscal
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor total do item (mercadorias ou serviços)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Valor do desconto comercial
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Movimentação física do ITEM/PRODUTO:
     *  0. SIM
     *  1. NÃO
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_MOV = '';
    /**
     * Código da Situação Tributária referente ao
     *  ICMS, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Código da natureza da operação (campo 02 do Registro 0400)
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 10
     */
    const COD_NAT = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 14
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor do ICMS creditado/debitado
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor da base de cálculo referente à substituição
     *  tributária
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Alíquota do ICMS da substituição tributária na unidade da federação de destino
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ST = '';
    /**
     * Valor do ICMS referente à substituição tributária
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Indicador de período de apuração do IPI:
     *  0 - Mensal;
     *  1 - Decendial
     *
     * Número: 19
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_APUR = '';
    /**
     * Código da Situação Tributária referente ao IPI,
     *  conforme a Tabela indicada no item 4.3.2
     *
     * Número: 20
     * Tipo: C
     * Tamanho: 002*
     */
    const CST_IPI = '';
    /**
     * Código de enquadramento legal do IPI, conforme tabela indicada no item 4.5.3
     *
     * Número: 21
     * Tipo: C
     * Tamanho: 003*
     */
    const COD_ENQ = '';
    /**
     * Valor da base de cálculo do IPI
     *
     * Número: 22
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_IPI = '';
    /**
     * Alíquota do IPI
     *
     * Número: 23
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_IPI = '';
    /**
     * Valor do IPI creditado/debitado
     *
     * Número: 24
     * Tipo: N
     * Tamanho: -
     */
    const VL_IPI = '';
    /**
     * Código da Situação Tributária referente ao PIS
     *
     * Número: 25
     * Tipo: N
     * Tamanho: 002*
     */
    const CST_PIS = '';
    /**
     * Valor da base de cálculo do PIS
     *
     * Número: 26
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_PIS = '';
    /**
     * Alíquota do PIS (em percentual)
     *
     * Número: 27
     * Tipo: N
     * Tamanho: 8
     */
    const ALIQ_PIS_PCT = '';
    /**
     * Quantidade - Base de cálculo PIS
     *
     * Número: 28
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_BC_PIS = '';
    /**
     * Alíquota do PIS (em reais)
     *
     * Número: 29
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_PIS = '';
    /**
     * Valor do PIS
     *
     * Número: 30
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Código da Situação Tributária referente ao
     *  COFINS
     *
     * Número: 31
     * Tipo: N
     * Tamanho: 002*
     */
    const CST_COFINS = '';
    /**
     * Valor da base de cálculo da COFINS
     *
     * Número: 32
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_COFINS = '';
    /**
     * Alíquota do COFINS (em percentual)
     *
     * Número: 33
     * Tipo: N
     * Tamanho: 8
     */
    const ALIQ_COFINS_PCT = '';
    /**
     * Quantidade - Base de cálculo COFINS
     *
     * Número: 34
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_BC_COFINS = '';
    /**
     * Alíquota da COFINS (em reais)
     *
     * Número: 35
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_COFINS = '';
    /**
     * Valor da COFINS
     *
     * Número: 36
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil
     *  debitada/creditada
     *
     * Número: 37
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    /**
     * Valor do abatimento não tributado e não comercial
     *
     * Número: 38
     * Tipo: N
     * Tamanho: -
     */
    const VL_ABAT_NT = '';
    this.registers.push([
      REG,
      NUM_ITEM,
      COD_ITEM,
      DESCR_COMPL,
      QTD,
      UNID,
      VL_ITEM,
      VL_DESC,
      IND_MOV,
      CST_ICMS,
      CFOP,
      COD_NAT,
      VL_BC_ICMS,
      ALIQ_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      ALIQ_ST,
      VL_ICMS_ST,
      IND_APUR,
      CST_IPI,
      COD_ENQ,
      VL_BC_IPI,
      ALIQ_IPI,
      VL_IPI,
      CST_PIS,
      VL_BC_PIS,
      ALIQ_PIS_PCT,
      QUANT_BC_PIS,
      ALIQ_PIS,
      VL_PIS,
      CST_COFINS,
      VL_BC_COFINS,
      ALIQ_COFINS_PCT,
      QUANT_BC_COFINS,
      ALIQ_COFINS,
      VL_COFINS,
      COD_CTA,
      VL_ABAT_NT,
    ]);
  }

  /**
   * Registro C171 - ARMAZENAMENTO DE COMBUSTÍVEIS (código 01, 55).
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC171() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C171"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C171';
    /**
     * Tanque onde foi armazenado o combustível
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 3
     */
    const NUM_TANQUE = '';
    /**
     * Quantidade ou volume armazenado
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTDE = '';
    this.registers.push([REG, NUM_TANQUE, QTDE]);
  }

  /**
   * Registro C172 - OPERAÇÕES COM ISSQN (CÓDIGO 01)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC172() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C172"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C172';
    /**
     * Valor da base de cálculo do ISSQN
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISSQN = '';
    /**
     * Alíquota do ISSQN
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ISSQN = '';
    /**
     * Valor do ISSQN
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISSQN = '';
    this.registers.push([REG, VL_BC_ISSQN, ALIQ_ISSQN, VL_ISSQN]);
  }

  /**
   * Registro C173 - OPERAÇÕES COM MEDICAMENTOS (CÓDIGO 01 e 55)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC173() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C173"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C173';
    /**
     * Número do lote de fabricação do
     *  medicamento
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const LOTE_MED = '';
    /**
     * Quantidade de item por lote
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_ITEM = '';
    /**
     * Data de fabricação do medicamento
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FAB = '';
    /**
     * Data de expiração da validade do medicamento
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_VAL = '';
    /**
     * Indicador de tipo de referência da base de
     *  cálculo do ICMS (ST) do produto farmacêutico:
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_MED = '';
    /**
     * Tipo de produto:
     *  0 - Similar;
     *  1 - Genérico;
     *  2 - Ético ou de marca;
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 1*
     */
    const TP_PROD = '';
    /**
     * Valor do preço tabelado ou valor do preço
     *  máximo
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_TAB_MAX = '';
    this.registers.push([
      REG,
      LOTE_MED,
      QTD_ITEM,
      DT_FAB,
      DT_VAL,
      IND_MED,
      TP_PROD,
      VL_TAB_MAX,
    ]);
  }

  /**
   * Registro C174 - OPERAÇÕES COM ARMAS DE FOGO (CÓDIGO 01)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC174() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C174"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C174';
    /**
     * Indicador do tipo da arma de fogo:
     *  0 - Uso permitido;
     *  1 - Uso restrito
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_ARM = '';
    /**
     * Numeração de série de fabricação da arma
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const NUM_ARM = '';
    /**
     * Descrição da arma, compreendendo: número do cano, calibre, marca, capacidade de cartuchos, tipo de funcionamento, quantidade de canos, comprimento, tipo de alma, quantidade e sentido das raias e demais elementos que permitam sua
     *  perfeita identificação
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL = '';
    this.registers.push([REG, IND_ARM, NUM_ARM, DESCR_COMPL]);
  }

  /**
   * Registro C175 - OPERAÇÕES COM VEÍCULOS NOVOS (CÓDIGO 01 e 55)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC175() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C175"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C175';
    /**
     * Indicador do tipo de operação com veículo:
     *  0 - Venda para concessionária;
     *  1 - Faturamento direto;
     *  2 - Venda direta;
     *  3 - Venda da concessionária; 9 - Outros
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_VEIC_OPER = '';
    /**
     * CNPJ da Concessionária
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ = '';
    /**
     * Sigla da unidade da federação da Concessionária
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = '';
    /**
     * Chassi do veículo
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 17
     */
    const CHASSI_VEIC = '';
    this.registers.push([REG, IND_VEIC_OPER, CNPJ, UF, CHASSI_VEIC]);
  }

  /**
   * Registro C176 - RESSARCIMENTO DE ICMS E FUNDO DE COMBATE À POBREZA (FCP) EM OPERAÇÕES COM SUBSTITUIÇÃO TRIBUTÁRIA (CÓDIGO 01, 55)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC176() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C176"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C176';
    /**
     * Código do modelo do documento fiscal
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD_ULT_E = '';
    /**
     * Número do documento fiscal relativa a
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_ULT_E = '';
    /**
     * Série do documento fiscal relativa a última
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 3
     */
    const SER_ULT_E = '';
    /**
     * Data relativa a última entrada da mercadoria
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_ULT_E = '';
    /**
     * Código do participante (do emitente do
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_ULT_E = '';
    /**
     * Quantidade do item relativa a última entrada
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_ULT_E = '';
    /**
     * Valor unitário da mercadoria constante na
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ULT_E = '';
    /**
     * Valor unitário da base de cálculo do imposto
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_BC_ST = '';
    /**
     * Número completo da chave da NFe relativo
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 044*
     */
    const CHAVE_NFE_ULT_E = '';
    /**
     * Número sequencial do item na NF entrada
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM_ULT_E = '';
    /**
     * Valor unitário da base de cálculo da
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_BC_ICMS_ULT_E = '';
    /**
     * Alíquota do ICMS aplicável à última entrada
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ICMS_ULT_E = '';
    /**
     * Valor unitário da base de cálculo do ICMS
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_LIMITE_BC_ICMS_ULT_E = '';
    /**
     * Valor unitário do crédito de ICMS sobre
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ULT_E = '';
    /**
     * Alíquota do ICMS ST relativa à última
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ST_ULT_E = '';
    /**
     * Valor unitário do ressarcimento (parcial ou
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_RES = '';
    /**
     * Código que indica o responsável pela
     *
     * Número: 18
     * Tipo: N
     * Tamanho: 001*
     */
    const COD_RESP_RET = '';
    /**
     * Código do motivo do ressarcimento:
     *
     * Número: 19
     * Tipo: N
     * Tamanho: 001*
     */
    const COD_MOT_RES = '';
    /**
     * Número completo da chave da NF-e emitida
     *
     * Número: 20
     * Tipo: N
     * Tamanho: 044*
     */
    const CHAVE_NFE_RET = '';
    /**
     * Código do participante do emitente da NF-e
     *
     * Número: 21
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_NFE_R = '';
    /**
     * Série da NF-e em que houve a retenção do
     *
     * Número: 22
     * Tipo: C
     * Tamanho: 3
     */
    const SER_NFE_RET = '';
    /**
     * Número da NF-e em que houve a retenção
     *
     * Número: 23
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_NFE_RET = '';
    /**
     * Número sequencial do item na NF-e em que
     *
     * Número: 24
     * Tipo: N
     * Tamanho: 3
     */
    const ITEM_NFE_RET = '';
    /**
     * Código do modelo do documento
     *
     * Número: 25
     * Tipo: de
     * Tamanho: C
     */
    const COD_DA = '';
    /**
     * Número do documento de arrecadação
     *
     * Número: 26
     * Tipo: C
     * Tamanho: -
     */
    const NUM_DA = '';
    /**
     * Valor unitário do ressarcimento (parcial ou
     *
     * Número: 27
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_RES_FCP_ST = '';
    this.registers.push([
      REG,
      COD_MOD_ULT_E,
      NUM_DOC_ULT_E,
      SER_ULT_E,
      DT_ULT_E,
      COD_PART_ULT_E,
      QUANT_ULT_E,
      VL_UNIT_ULT_E,
      VL_UNIT_BC_ST,
      CHAVE_NFE_ULT_E,
      NUM_ITEM_ULT_E,
      VL_UNIT_BC_ICMS_ULT_E,
      ALIQ_ICMS_ULT_E,
      VL_UNIT_LIMITE_BC_ICMS_ULT_E,
      VL_UNIT_ICMS_ULT_E,
      ALIQ_ST_ULT_E,
      VL_UNIT_RES,
      COD_RESP_RET,
      COD_MOT_RES,
      CHAVE_NFE_RET,
      COD_PART_NFE_R,
      SER_NFE_RET,
      NUM_NFE_RET,
      ITEM_NFE_RET,
      COD_DA,
      NUM_DA,
      VL_UNIT_RES_FCP_ST,
    ]);
  }

  /**
   * Registro C177 - COMPLEMENTO DE ITEM - OUTRAS INFORMAÇÕES (código 01, 55) - (VÁLIDO A PARTIR DE 01/01/2019)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC177() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C177"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C177';
    /**
     * Código da informação adicional de acordo com tabela a ser publicada pelas SEFAZ, conforme tabela definida no item 5.6
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 008*
     */
    const COD_INF_ITEM = '';
    this.registers.push([REG, COD_INF_ITEM]);
  }

  /**
   * Registro C178 - OPERAÇÕES COM PRODUTOS SUJEITOS À TRIBUTAÇÃO DE IPI POR UNIDADE OU QUANTIDADE DE PRODUTO
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC178() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C178"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C178';
    /**
     * Código da classe de enquadramento do IPI,
     *  conforme Tabela 4.5.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 5
     */
    const CL_ENQ = '';
    /**
     * Valor por unidade padrão de tributação
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNID = '';
    /**
     * Quantidade total de produtos na unidade padrão de tributação
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_PAD = '';
    this.registers.push([REG, CL_ENQ, VL_UNID, QUANT_PAD]);
  }

  /**
   * Registro C179 - INFORMAÇÕES COMPLEMENTARES ST (CÓDIGO 01)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC179() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C179"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C179';
    /**
     * origem/destino em operações
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const BC_ST_ORIG_DEST = '';
    /**
     * Valor do ICMS ST a repassar/deduzir em
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const ICMS_ST_REP = '';
    /**
     * Valor do ICMS ST a complementar à UF de
     *  destino
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const ICMS_ST_COMPL = '';
    /**
     * Valor da BC de retenção em remessa promovida por Substituído intermediário
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const BC_RET = '';
    /**
     * Valor da parcela do imposto retido em
     *  remessa promovida por substituído intermediário
     *
     * Número: 6
     * Tipo: N’
     * Tamanho: -
     */
    const ICMS_RET = '';
    this.registers.push([
      REG,
      BC_ST_ORIG_DEST,
      ICMS_ST_REP,
      ICMS_ST_COMPL,
      BC_RET,
      ICMS_RET,
    ]);
  }

  /**
   * Registro C180 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE ENTRADA DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CÓDIGO 01, 1B, 04 e 55).
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC180() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C180"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C180';
    /**
     * Código que indica o responsável pela retenção do ICMS ST:
     *  1-Remetente Direto 2-Remetente Indireto 3-Próprio declarante
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 001*
     */
    const COD_RESP_RET = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo
     *  QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria, considerando a unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário do ICMS operação própria que o informante teria direito ao crédito caso a mercadoria estivesse sob o regime comum de tributação,
     *  considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor unitário da base de cálculo do imposto pago ou retido anteriormente por substituição, considerando a unidade utilizada para informar o campo "QUANT_CONV", aplicando-se
     *  redução, se houver
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_BC_ICMS_ST_CONV = '';
    /**
     * Valor unitário do imposto pago ou retido anteriormente por substituição, inclusive FCP se devido, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV = '';
    /**
     * Valor unitário do FCP_ST agregado ao
     *  valor informado no campo "VL_UNIT_ICMS_ST_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV = '';
    /**
     * Código do modelo do documento de arrecadação:
     *  0 - Documento estadual de arrecadação
     *  1 - GNRE
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 001*
     */
    const COD_DA = '';
    /**
     * Número do documento de arrecadação, se houver
     *
     * Número: 11
     * Tipo: C
     * Tamanho: -
     */
    const NUM_DA = '';
    this.registers.push([
      REG,
      COD_RESP_RET,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_BC_ICMS_ST_CONV,
      VL_UNIT_ICMS_ST_CONV,
      VL_UNIT_FCP_ST_CONV,
      COD_DA,
      NUM_DA,
    ]);
  }

  /**
   * Registro C181 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC181() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C181"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C181';
    /**
     * Código do motivo da restituição ou
     *  complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Código do modelo do documento fiscal de saída, conforme a tabela indicada no item
     *  4.1.1
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD_SAIDA = '';
    /**
     * Número de série do documento de saída em
     *  papel
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 3
     */
    const SERIE_SAIDA = '';
    /**
     * Número de série de fabricação do equipamento ECF
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 21
     */
    const ECF_FAB_SAIDA = '';
    /**
     * Número do documento fiscal de saída
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_SAIDA = '';
    /**
     * Chave do documento fiscal eletrônico de saída
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DFE_SAIDA = '';
    /**
     * Data da emissão do documento fiscal de saída
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC_SAIDA = '';
    /**
     * Número do item em que foi escriturada a saída em um registro C185, C380, C480 ou C815
     *  quando o contribuinte informar a saída em um arquivo de perfil A
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM_SAIDA = '';
    /**
     * Valor unitário da mercadoria, considerando a unidade utilizada para informar o campo "QUANT_CONV", correspondente ao valor
     *  do campo VL_UNIT_CONV, preenchido na ocasião da saída
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV_SAIDA = '';
    /**
     * Valor médio unitário do ICMS OP, das mercadorias em estoque, correspondente ao valor do campo VL_UNIT_ICMS_OP_ESTOQUE_CONV,
     *  preenchido na ocasião da saída
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV_SAIDA = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, correspondente ao valor do campo VL_UNIT_ICMS_ST_ESTOQUE_CONV,
     *  preenchido na ocasião da saída
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV_SAIDA = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, correspondente ao valor do campo VL_UNIT_FCP_ICMS_ST_ESTOQUE_CON
     *  V, preenchido na ocasião da saída
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV_SAIDA = '';
    /**
     * Valor unitário para o ICMS na operação, correspondente ao valor do campo VL_UNIT_ICMS_NA_OPERACAO_CONV,
     *  preenchido na ocasião da saída
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV_SAIDA = '';
    /**
     * Valor unitário do ICMS correspondente ao valor do campo VL_UNIT_ICMS_OP_CONV, preenchido na
     *  ocasião da saída
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV_SAIDA = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, correspondente ao estorno do complemento
     *  apurado na operação de saída
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST",
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do estorno do ressarcimento/restituição, incluindo FCP ST, apurado na operação de saída
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COMPL",
     *  considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      COD_MOD_SAIDA,
      SERIE_SAIDA,
      ECF_FAB_SAIDA,
      NUM_DOC_SAIDA,
      CHV_DFE_SAIDA,
      DT_DOC_SAIDA,
      NUM_ITEM_SAIDA,
      VL_UNIT_CONV_SAIDA,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV_SAIDA,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV_SAIDA,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV_SAIDA,
      VL_UNIT_ICMS_NA_OPERACAO_CONV_SAIDA,
      VL_UNIT_ICMS_OP_CONV_SAIDA,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
    ]);
  }

  /**
   * Registro C185 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE SAÍDA DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CÓDIGO 01, 1B, 04, 55 e 65).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC185() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C185"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C185';
    /**
     * Número sequencial do item no documento fiscal
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Código da Situação Tributária referente ao ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Código do motivo da restituição ou complementação conforme Tabela 5.7
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo QUANT_CONV
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria, considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário para o ICMS na operação, caso não houvesse a ST, considerando unidade utilizada para informar o campo "QUANT_CONV", considerando redução da base de cálculo do ICMS ST na tributação, se
     *  houver
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV = '';
    /**
     * Valor unitário do ICMS OP calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo "QUANT_CONV", utilizado para cálculo de ressarcimento/restituição de ST, no desfazimento da substituição tributária, quando se utiliza a fórmula descrita nas instruções de preenchimento do campo
     *  15, no item a1)
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor médio unitário do ICMS que o contribuinte teria se creditado referente à operação de entrada das mercadorias em estoque caso estivesse submetida ao regime comum de tributação, calculado conforme a legislação de cada UF, considerando a unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, considerando a unidade
     *  utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, considerando a unidade
     *  utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, calculado conforme a legislação de cada UF, considerando a unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST
     *  ", considerando a unidade utilizada
     *  para informar o campo "QUANT_CONV"
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do complemento do ICMS, incluindo FCP ST, considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COM
     *  PL", considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    this.registers.push([
      REG,
      NUM_ITEM,
      COD_ITEM,
      CST_ICMS,
      CFOP,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_NA_OPERACAO_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
    ]);
  }

  /**
   * Registro C186 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE DEVOLUÇÃO DE ENTRADAS DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CÓDIGO 01, 1B, 04 e 55).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC186() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C186"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C186';
    /**
     * Número sequencial do item no documento
     *  fiscal de saída
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM = '';
    /**
     * Código do item (campo 02 do Registro
     *  0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Código da Situação Tributária referente ao
     *  ICMS no documento fiscal de saída
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação no
     *  documento fiscal de saída
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Código do motivo da restituição ou complementação conforme Tabela 5.7
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item no documento fiscal de
     *  saída de acordo com as instruções de preenchimento
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo
     *  QUANT_CONV
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Código do modelo do documento fiscal de entrada, conforme a tabela indicada no
     *  item 4.1.1
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD_ENTRADA = '';
    /**
     * Número de série do documento de entrada
     *  em papel
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 3
     */
    const SERIE_ENTRADA = '';
    /**
     * Número do documento fiscal de entrada
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_ENTRADA = '';
    /**
     * Chave do documento fiscal eletrônico de entrada
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DFE_ENTRADA = '';
    /**
     * Data da emissão do documento fiscal de
     *  entrada
     *
     * Número: 13
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC_ENTRADA = '';
    /**
     * Item do documento fiscal de entrada
     *
     * Número: 14
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM_ENTRADA = '';
    /**
     * Valor unitário da mercadoria, considerando a unidade utilizada para informar o campo "QUANT_CONV", correspondente ao valor do campo VL_UNIT_CONV, preenchido na ocasião
     *  da entrada
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV_ENTRADA = '';
    /**
     * Valor unitário do ICMS correspondente ao valor do campo VL_UNIT_ICMS_OP_CONV, preenchido
     *  na ocasião da entrada
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV_ENTRADA = '';
    /**
     * Valor unitário da base de cálculo do imposto pago ou retido anteriormente
     *  por substituição, correspondente ao valor do campo
     *  VL_UNIT_BC_ICMS_ST_CONV,
     *  preenchido na ocasião da entrada
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_BC_ICMS_ST_CONV_ENTRADA = '';
    /**
     * Valor unitário do imposto pago ou retido anteriormente por substituição, inclusive FCP se devido, correspondente ao valor do campo VL_UNIT_ICMS_ST_CONV,
     *  preenchido na ocasião da entrada
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_ENTRADA = '';
    /**
     * Valor unitário do FCP_ST, correspondente ao valor do campo VL_UNIT_FCP_ST_CONV, preenchido
     *  na ocasião da entrada
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_ENTRADA = '';
    this.registers.push([
      REG,
      NUM_ITEM,
      COD_ITEM,
      CST_ICMS,
      CFOP,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      COD_MOD_ENTRADA,
      SERIE_ENTRADA,
      NUM_DOC_ENTRADA,
      CHV_DFE_ENTRADA,
      DT_DOC_ENTRADA,
      NUM_ITEM_ENTRADA,
      VL_UNIT_CONV_ENTRADA,
      VL_UNIT_ICMS_OP_CONV_ENTRADA,
      VL_UNIT_BC_ICMS_ST_CONV_ENTRADA,
      VL_UNIT_ICMS_ST_CONV_ENTRADA,
      VL_UNIT_FCP_ST_CONV_ENTRADA,
    ]);
  }

  /**
   * Registro C190 - REGISTRO ANALÍTICO DO DOCUMENTO (CÓDIGO 01, 1B, 04, 55 e 65)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC190() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C190"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C190';
    /**
     * Código da Situação Tributária, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação do
     *  agrupamento de itens
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor da operação na combinação de CST_ICMS, CFOP e alíquota do ICMS, correspondente ao
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de
     *  cálculo do ICMS" referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS", incluindo o FCP, quando aplicável, referente à combinação de CST_ICMS, CFOP e alíquota do
     *  ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ICMS" da substituição tributária referente à combinação de CST_ICMS, CFOP e
     *  alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Parcela correspondente ao valor creditado/debitado do ICMS da substituição tributária, incluindo o FCP_ ST, quando aplicável, referente à combinação de CST_ICMS,
     *  CFOP, e alíquota do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à combinação de
     *  CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Parcela correspondente ao "Valor do IPI" referente à combinação CST_ICMS, CFOP e
     *  alíquota do ICMS
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_IPI = '';
    /**
     * Código da observação do lançamento fiscal
     *  (campo 02 do Registro 0460)
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      VL_RED_BC,
      VL_IPI,
      COD_OBS,
    ]);
  }

  /**
   * Registro C191 - INFORMAÇÕES DO FUNDO DE COMBATE À POBREZA - FCP - NA NF- e (CÓDIGO 55) E NA NFC-e (CÓDIGO 65)
   * Nível: 4
   * Ocorrência: undefined
   */
  private buildC191() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C191"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C191';
    /**
     * Valor do Fundo de Combate à Pobreza (FCP) vinculado à operação própria, na combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_OP = '';
    /**
     * Valor do Fundo de Combate à Pobreza (FCP) vinculado à operação de substituição tributária, na combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_ST = '';
    /**
     * Valor relativo ao Fundo de Combate à Pobreza (FCP) retido anteriormente nas operações com Substituição Tributárias, na combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_RET = '';
    this.registers.push([REG, VL_FCP_OP, VL_FCP_ST, VL_FCP_RET]);
  }

  /**
   * Registro C195 - OBSERVAÇÕES DO LANÇAMENTO FISCAL (CÓDIGO 01, 1B, 04, 55 E 65)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC195() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C195"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C195';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    /**
     * Descrição complementar do código de observação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    this.registers.push([REG, COD_OBS, TXT_COMPL]);
  }

  /**
   * Registro C197 - OUTRAS OBRIGAÇÕES TRIBUTÁRIAS, AJUSTES E INFORMAÇÕES DE VALORES PROVENIENTES DE DOCUMENTO FISCAL.
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC197() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C197"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C197';
    /**
     * Código dos ajustes/benefício/incentivo, conforme tabela indicada no item 5.3
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 010*
     */
    const COD_AJ = '';
    /**
     * Descrição complementar do ajuste do documento
     *  fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL_AJ = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Base de cálculo do ICMS ou do ICMS ST
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor do ICMS ou do ICMS ST
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Outros valores
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUTROS = '';
    this.registers.push([
      REG,
      COD_AJ,
      DESCR_COMPL_AJ,
      COD_ITEM,
      VL_BC_ICMS,
      ALIQ_ICMS,
      VL_ICMS,
      VL_OUTROS,
    ]);
  }

  /**
   * Registro C300 - RESUMO DIÁRIO DAS NOTAS FISCAIS DE VENDA A CONSUMIDOR
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC300() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C300"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C300';
    /**
     * Código do modelo do documento fiscal,
     *  conforme a Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Série do documento fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Subsérie do documento fiscal
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do documento fiscal inicial
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_DOC_INI = '';
    /**
     * Número do documento fiscal final
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_DOC_FIN = '';
    /**
     * Data da emissão dos documentos fiscais
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Valor total dos documentos
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor total do PIS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor total da COFINS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 11
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    this.registers.push([
      REG,
      COD_MOD,
      SER,
      SUB,
      NUM_DOC_INI,
      NUM_DOC_FIN,
      DT_DOC,
      VL_DOC,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
    ]);
  }

  /**
   * Registro C310 - DOCUMENTOS CANCELADOS DE NOTAS FISCAIS DE VENDA A CONSUMIDOR (CÓDIGO 02).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC310() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C310"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C310';
    /**
     * Número do documento fiscal cancelado
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const NUM_DOC_CANC = '';
    this.registers.push([REG, NUM_DOC_CANC]);
  }

  /**
   * Registro C320 - REGISTRO ANALÍTICO DO RESUMO DIÁRIO DAS NOTAS FISCAIS DE VENDA A CONSUMIDOR (CÓDIGO 02).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC320() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C320"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C320';
    /**
     * Código da Situação Tributária, conforme a
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor total acumulado das operações
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor acumulado da base de cálculo do ICMS,
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS, referente à
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à
     *  combinação de CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      VL_RED_BC,
      COD_OBS,
    ]);
  }

  /**
   * Registro C321 - ITENS DO RESUMO DIÁRIO DOS DOCUMENTOS (CÓDIGO 02).
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC321() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C321"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C321';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade acumulada do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor acumulado do item
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Valor do desconto acumulado
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor acumulado da base de cálculo do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS debitado
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor acumulado do PIS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor acumulado da COFINS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    this.registers.push([
      REG,
      COD_ITEM,
      QTD,
      UNID,
      VL_ITEM,
      VL_DESC,
      VL_BC_ICMS,
      VL_ICMS,
      VL_PIS,
      VL_COFINS,
    ]);
  }

  /**
   * Registro C330 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE SAÍDA DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CÓDIGO 02)
   * Nível: 5
   * Ocorrência: 1:1
   */
  private buildC330() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C330"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C330';
    /**
     * Código do motivo da restituição ou complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria,
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário para o ICMS na operação, caso não houvesse a ST, considerando unidade utilizada para informar o campo "QUANT_CONV", aplicando-se a mesma redução da base de cálculo do ICMS ST na
     *  tributação, se houver
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV = '';
    /**
     * Valor unitário do ICMS OP calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo "QUANT_CONV", utilizado para cálculo de ressarcimento/restituição de ST, no desfazimento da substituição tributária, quando se utiliza a fórmula descrita nas
     *  instruções de preenchimento do campo 11, no item a1)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor médio unitário do ICMS que o contribuinte teria se creditado referente à operação de entrada das mercadorias em estoque caso estivesse submetida ao regime comum de tributação, calculado conforme a legislação de cada UF, considerando a unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, considerando unidade utilizada
     *  para informar o campo "QUANT_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, calculado conforme a legislação de cada UF, considerando a
     *  unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST",
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do complemento do ICMS, incluindo FCP ST, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COMPL"
     *  , considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_NA_OPERACAO_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
    ]);
  }

  /**
   * Registro C350 - NOTA FISCAL DE VENDA A CONSUMIDOR (CÓDIGO 02)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC350() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C350"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C350';
    /**
     * Série do documento fiscal
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 3
     */
    const SER = '';
    /**
     * Subsérie do documento fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 3
     */
    const SUB_SER = '';
    /**
     * Número do documento fiscal
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * CNPJ ou CPF do destinatário
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 14
     */
    const CNPJ_CPF = '';
    /**
     * Valor das mercadorias constantes no documento
     *  fiscal
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_MERC = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor total do desconto
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor total do PIS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor total da COFINS
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 12
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    this.registers.push([
      REG,
      SER,
      SUB_SER,
      NUM_DOC,
      DT_DOC,
      CNPJ_CPF,
      VL_MERC,
      VL_DOC,
      VL_DESC,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
    ]);
  }

  /**
   * Registro C370 - ITENS DO DOCUMENTO (CÓDIGO 02)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC370() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C370"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C370';
    /**
     * Número sequencial do item no documento fiscal
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM = '';
    /**
     * Código do Item (campo 02 do registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (campo 02 do registro 0190)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor total do item
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Valor total do desconto no item
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    this.registers.push([REG, NUM_ITEM, COD_ITEM, QTD, UNID, VL_ITEM, VL_DESC]);
  }

  /**
   * Registro C380 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE SAÍDA DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CÓDIGO 02)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC380() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C380"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C380';
    /**
     * Código do motivo da restituição ou
     *  complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário para o ICMS na operação, caso não houvesse a ST, considerando unidade utilizada para informar o campo "QUANT_CONV", aplicando-se a mesma redução da base de cálculo do ICMS ST na
     *  tributação, se houver
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV = '';
    /**
     * Valor unitário do ICMS OP calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo "QUANT_CONV", utilizado para cálculo de ressarcimento/restituição de ST, no desfazimento da substituição tributária, quando se utiliza a fórmula descrita nas
     *  instruções de preenchimento do campo 11, no item a1)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor médio unitário do ICMS que o contribuinte teria se creditado referente à operação de entrada das mercadorias em estoque caso estivesse submetida ao regime comum de tributação, calculado conforme a legislação de cada UF, considerando a unidade
     *  utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, considerando unidade utilizada para informar
     *  o campo "QUANT_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, calculado conforme a legislação de cada UF, considerando a unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST",
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do complemento do ICMS, incluindo FCP ST, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COMPL",
     *  considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    /**
     * Código da Situação Tributária referente ao ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 16
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_NA_OPERACAO_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
      CST_ICMS,
      CFOP,
    ]);
  }

  /**
   * Registro C390 - REGISTRO ANALÍTICO DAS NOTAS FISCAIS DE VENDA A CONSUMIDOR (CÓDIGO 02)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC390() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C390"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C390';
    /**
     * Código da Situação Tributária, conforme a Tabela
     *  indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor total acumulado das operações correspondentes à combinação de CST_ICMS, CFOP e alíquota do ICMS, incluídas as despesas
     *  acessórias e acréscimos
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor acumulado da base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP, e
     *  alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS, referente à
     *  combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não tributado em função da redução da base
     *  de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      VL_RED_BC,
      COD_OBS,
    ]);
  }

  /**
   * Registro C400 - EQUIPAMENTO ECF (CÓDIGO 02, 2D e 60)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC400() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C400"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C400';
    /**
     * Código do modelo do documento fiscal, conforme a
     *  Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Modelo do equipamento
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 20
     */
    const ECF_MOD = '';
    /**
     * Número de série de fabricação do ECF
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 21
     */
    const ECF_FAB = '';
    /**
     * Número do caixa atribuído ao ECF
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 3
     */
    const ECF_CX = '';
    this.registers.push([REG, COD_MOD, ECF_MOD, ECF_FAB, ECF_CX]);
  }

  /**
   * Registro C405 - REDUÇÃO Z (CÓDIGO 02, 2D e 60)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC405() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C405"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C405';
    /**
     * Data do movimento a que se refere a Redução Z
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Posição do Contador de Reinício de Operação
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 3
     */
    const CRO = '';
    /**
     * Posição do Contador de Redução Z
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const CRZ = '';
    /**
     * Número do Contador de Ordem de Operação do
     *  último documento emitido no dia. (Número do COO na Redução Z)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_COO_FIN = '';
    /**
     * Valor do Grande Total final
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const GT_FIN = '';
    /**
     * Valor da venda bruta
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_BRT = '';
    this.registers.push([REG, DT_DOC, CRO, CRZ, NUM_COO_FIN, GT_FIN, VL_BRT]);
  }

  /**
   * Registro C410 - PIS E COFINS TOTALIZADOS NO DIA (CÓDIGO 02 e 2D)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC410() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C410"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C410';
    /**
     * Valor total do PIS
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor total da COFINS
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    this.registers.push([REG, VL_PIS, VL_COFINS]);
  }

  /**
   * Registro C420 - REGISTRO DOS TOTALIZADORES PARCIAIS DA REDUÇÃO Z (COD 02, 2D e 60)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC420() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C420"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C420';
    /**
     * Código do totalizador, conforme Tabela 4.4.6
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 7
     */
    const COD_TOT_PAR = '';
    /**
     * Valor acumulado no totalizador, relativo à
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VLR_ACUM_TOT = '';
    /**
     * Número do totalizador quando ocorrer mais
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 2
     */
    const NR_TOT = '';
    /**
     * Descrição da situação tributária relativa ao
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_NR_TOT = '';
    this.registers.push([REG, COD_TOT_PAR, VLR_ACUM_TOT, NR_TOT, DESCR_NR_TOT]);
  }

  /**
   * Registro C425 - RESUMO DE ITENS DO MOVIMENTO DIÁRIO (CÓDIGO 02 e 2D)
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildC425() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C425"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C425';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade acumulada do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor acumulado do item
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Valor do PIS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    this.registers.push([REG, COD_ITEM, QTD, UNID, VL_ITEM, VL_PIS, VL_COFINS]);
  }

  /**
   * Registro C430 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE SAÍDA DE
   * Nível: 6
   * Ocorrência: 1:N
   */
  private buildC430() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C430"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C430';
    /**
     * Código do motivo da restituição ou complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria, considerando a
     *  unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário para o ICMS na operação, caso não houvesse a ST, considerando unidade utilizada para informar o campo "QUANT_CONV", considerando redução da
     *  base de cálculo do ICMS ST na tributação, se houver
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV = '';
    /**
     * Valor unitário do ICMS OP calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo "QUANT_CONV", utilizado para cálculo de ressarcimento/restituição de ST, no desfazimento da substituição tributária, quando se utiliza a fórmula descrita nas instruções de preenchimento do campo 11, no
     *  item a1)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor médio unitário do ICMS que o contribuinte teria se creditado referente à operação de entrada das mercadorias em estoque caso estivesse submetida ao regime comum de tributação, calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, considerando unidade utilizada para informar
     *  o campo "QUANT_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, considerando unidade utilizada para informar
     *  o campo "QUANT_CONV"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, calculado conforme a legislação de cada UF, considerando a unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST",
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do complemento do ICMS, incluindo FCP ST, considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COMPL",
     *  considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    /**
     * Código da Situação Tributária referente ao ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 16
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_NA_OPERACAO_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
      CST_ICMS,
      CFOP,
    ]);
  }

  /**
   * Registro C460 - DOCUMENTO FISCAL EMITIDO POR ECF (CÓDIGO 02, 2D e 60)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC460() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C460"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C460';
    /**
     * Código do modelo do documento fiscal, conforme a
     *  Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento fiscal, conforme a Tabela 4.1.2
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_SIT = '';
    /**
     * Número do documento fiscal (COO)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor do PIS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * CPF ou CNPJ do adquirente
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 14
     */
    const CPF_CNPJ = '';
    /**
     * Nome do adquirente
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 60
     */
    const NOM_ADQ = '';
    this.registers.push([
      REG,
      COD_MOD,
      COD_SIT,
      NUM_DOC,
      DT_DOC,
      VL_DOC,
      VL_PIS,
      VL_COFINS,
      CPF_CNPJ,
      NOM_ADQ,
    ]);
  }

  /**
   * Registro C465 - COMPLEMENTO DO CUPOM FISCAL ELETRÔNICO EMITIDO POR ECF - CF-e-ECF (CÓDIGO 60)
   * Nível: 5
   * Ocorrência: 1:1
   */
  private buildC465() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C465"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C465';
    /**
     * Chave do Cupom Fiscal Eletrônico
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 44
     */
    const CHV_CFE = '';
    /**
     * Número do Contador de Cupom Fiscal
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_CCF = '';
    this.registers.push([REG, CHV_CFE, NUM_CCF]);
  }

  /**
   * Registro C470 - ITENS DO DOCUMENTO FISCAL EMITIDO POR ECF (CÓDIGO 02 e 2D)
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildC470() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C470"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C470';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Quantidade cancelada, no caso de cancelamento parcial de item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CANC = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor total do item
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Código da Situação Tributária, conforme a Tabela
     *  indicada no item 4.3.1
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS - Carga tributária efetiva em percentual
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor do PIS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    this.registers.push([
      REG,
      COD_ITEM,
      QTD,
      QTD_CANC,
      UNID,
      VL_ITEM,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_PIS,
      VL_COFINS,
    ]);
  }

  /**
   * Registro C480 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE SAÍDA DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CÓDIGO 02, 2D e 60)
   * Nível: 6
   * Ocorrência: 1:1
   */
  private buildC480() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C480"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C480';
    /**
     * Código do motivo da restituição ou
     *  complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria, considerando a
     *  unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário para o ICMS na operação, caso não houvesse a ST, considerando unidade utilizada para informar o campo "QUANT_CONV", aplicando-se a mesma redução da base de cálculo do ICMS ST na
     *  tributação, se houver
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV = '';
    /**
     * Valor unitário do ICMS OP calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo "QUANT_CONV", utilizado para cálculo de ressarcimento/restituição de ST, no desfazimento da substituição tributária, quando se utiliza a fórmula descrita nas instruções de preenchimento do campo 11, no
     *  item a1)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor médio unitário do ICMS que o contribuinte teria se creditado referente à operação de entrada das mercadorias em estoque caso estivesse submetida ao regime comum de tributação, calculado conforme a legislação de cada UF, considerando a unidade
     *  utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, considerando unidade utilizada para informar
     *  o campo "QUANT_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar
     *  o campo "QUANT_CONV"
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST",
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do complemento do ICMS, incluindo FCP ST, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COMPL",
     *  considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    /**
     * Código da Situação Tributária referente ao ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 16
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_NA_OPERACAO_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
      CST_ICMS,
      CFOP,
    ]);
  }

  /**
   * Registro C490 - REGISTRO ANALÍTICO DO MOVIMENTO DIÁRIO (CÓDIGO 02, 2D e 60)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC490() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C490"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C490';
    /**
     * Código da Situação Tributária, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor da operação correspondente à combinação de CST_ICMS, CFOP, e alíquota do ICMS,
     *  incluídas as despesas acessórias e acréscimos
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor acumulado da base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      COD_OBS,
    ]);
  }

  /**
   * Registro C495 - RESUMO MENSAL DE ITENS DO ECF POR ESTABELECIMENTO (CÓDIGO 02 e 2D)
   * Nível: 2
   * Ocorrência: vários
   */
  private buildC495() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C495"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C495';
    /**
     * Alíquota do ICMS
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade acumulada do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Quantidade cancelada acumulada, no caso de cancelamento parcial de item
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CANC = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor acumulado do item
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Valor acumulado dos descontos
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor acumulado dos cancelamentos
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_CANC = '';
    /**
     * Valor acumulado dos acréscimos
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_ACMO = '';
    /**
     * Valor acumulado da base de cálculo do ICMS
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor das saídas isentas do ICMS
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISEN = '';
    /**
     * Valor das saídas sob não-incidência ou não- tributadas pelo ICMS
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_NT = '';
    /**
     * Valor das saídas de mercadorias adquiridas com
     *  substituição tributária do ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    this.registers.push([
      REG,
      ALIQ_ICMS,
      COD_ITEM,
      QTD,
      QTD_CANC,
      UNID,
      VL_ITEM,
      VL_DESC,
      VL_CANC,
      VL_ACMO,
      VL_BC_ICMS,
      VL_ICMS,
      VL_ISEN,
      VL_NT,
      VL_ICMS_ST,
    ]);
  }

  /**
   * Registro C500 - NOTA FISCAL/CONTA DE ENERGIA ELÉTRICA (CÓDIGO 06), NOTA
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC500() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C500"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C500';
    /**
     * Indicador do tipo de operação:
     *  0 - Entrada;
     *  1 - Saída
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OPER = '';
    /**
     * Indicador do emitente do documento fiscal:
     *  0 - Emissão própria;
     *  1 - Terceiros
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do adquirente, no caso das saídas;
     *  - do fornecedor no caso de entradas
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento fiscal,
     *  conforme a Tabela 4.1.2
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_SIT = '';
    /**
     * Série do documento fiscal
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Subsérie do documento fiscal
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * - Código de classe de consumo de energia elétrica ou gás:
     *  01 - Comercial
     *  02 - Consumo Próprio 03 - Iluminação Pública 04 - Industrial
     *  05 - Poder Público 06 - Residencial
     *  07 - Rural
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_CONS = '';
    /**
     * Número do documento fiscal
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Data da entrada ou da saída
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_E_S = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor total do desconto
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor total fornecido/consumido
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_FORN = '';
    /**
     * Valor total dos serviços não-tributados
     *  pelo ICMS
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV_NT = '';
    /**
     * Valor total cobrado em nome de terceiros
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_TERC = '';
    /**
     * Valor total de despesas acessórias indicadas no documento fiscal
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_DA = '';
    /**
     * Valor acumulado da base de cálculo do
     *  ICMS
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor acumulado da base de cálculo do ICMS substituição tributária
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor acumulado do ICMS retido por
     *  substituição tributária
     *
     * Número: 22
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Código da informação complementar do
     *  documento fiscal (campo 02 do Registro 0450)
     *
     * Número: 23
     * Tipo: C
     * Tamanho: 6
     */
    const COD_INF = '';
    /**
     * Valor do PIS
     *
     * Número: 24
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 25
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código de tipo de Ligação
     *  1 - Monofásico
     *  2 - Bifásico
     *  3 - Trifásico
     *
     * Número: 26
     * Tipo: N
     * Tamanho: 001*
     */
    const TPLIGACAO = '';
    /**
     * Código de grupo de tensão:
     *  01 - A1 - Alta Tensão (230kV ou mais) 02 - A2 - Alta Tensão (88 a 138kV)
     *  03 - A3 - Alta Tensão (69kV)
     *  04 - A3a - Alta Tensão (30kV a 44kV) 05 - A4 - Alta Tensão (2,3kV a 25kV) 06 - AS - Alta Tensão Subterrâneo 06 07 - B1 - Residencial 07
     *  08 - B1 - Residencial Baixa Renda 08 09 - B2 - Rural 09
     *  10 - B2 - Cooperativa de Eletrificação Rural
     *  11 - B2 - Serviço Público de Irrigação
     *  12 - B3 - Demais Classes
     *  13 - B4a - Iluminação Pública - rede de distribuição
     *  14 - B4b - Iluminação Pública - bulbo de lâmpada
     *
     * Número: 27
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_GRUPO_TENSAO = '';
    /**
     * Chave da Nota Fiscal de Energia Elétrica Eletrônica
     *
     * Número: 28
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DOCe = '';
    /**
     * Finalidade da emissão do documento eletrônico:
     *  1 - Normal
     *  2 - Substituição
     *  3 - Normal com ajuste
     *
     * Número: 29
     * Tipo: N
     * Tamanho: 001*
     */
    const FIN_DOCe = '';
    /**
     * Chave da nota referenciada
     *
     * Número: 30
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DOCe_REF = '';
    /**
     * Indicador do Destinatário/Acessante:
     *  1 - Contribuinte do ICMS;
     *  2 - Contribuinte Isento de Inscrição no Cadastro de Contribuintes do ICMS;
     *  9 - Não Contribuinte
     *
     * Número: 31
     * Tipo: N
     * Tamanho: 001*
     */
    const IND_DEST = '';
    /**
     * Código do município do destinatário conforme a tabela do IBGE
     *
     * Número: 32
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 33
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    /**
     * Código do modelo do documento fiscal referenciado, conforme a Tabela 4.1.1
     *
     * Número: 34
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_MOD_DOC_REF = '';
    /**
     * Código de autenticação digital do registro
     *  (Convênio 115/2003)
     *
     * Número: 35
     * Tipo: C
     * Tamanho: 32
     */
    const HASH_DOC_REF = '';
    /**
     * Série do documento fiscal referenciado
     *
     * Número: 36
     * Tipo: C
     * Tamanho: 4
     */
    const SER_DOC_REF = '';
    /**
     * Número do documento fiscal referenciado
     *
     * Número: 37
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_REF = '';
    /**
     * Mês e ano da emissão do documento
     *  fiscal referenciado
     *
     * Número: 38
     * Tipo: N
     * Tamanho: 006*
     */
    const MES_DOC_REF = '';
    /**
     * Energia injetada
     *
     * Número: 39
     * Tipo: N
     * Tamanho: -
     */
    const ENER_INJET = '';
    /**
     * Outras deduções
     *
     * Número: 40
     * Tipo: N
     * Tamanho: -
     */
    const OUTRAS_DED = '';
    this.registers.push([
      REG,
      IND_OPER,
      IND_EMIT,
      COD_PART,
      COD_MOD,
      COD_SIT,
      SER,
      SUB,
      COD_CONS,
      NUM_DOC,
      DT_DOC,
      DT_E_S,
      VL_DOC,
      VL_DESC,
      VL_FORN,
      VL_SERV_NT,
      VL_TERC,
      VL_DA,
      VL_BC_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      COD_INF,
      VL_PIS,
      VL_COFINS,
      TPLIGACAO,
      COD_GRUPO_TENSAO,
      CHV_DOCe,
      FIN_DOCe,
      CHV_DOCe_REF,
      IND_DEST,
      COD_MUN_DEST,
      COD_CTA,
      COD_MOD_DOC_REF,
      HASH_DOC_REF,
      SER_DOC_REF,
      NUM_DOC_REF,
      MES_DOC_REF,
      ENER_INJET,
      OUTRAS_DED,
    ]);
  }

  /**
   * Registro C510 - ITENS DO DOCUMENTO NOTA FISCAL/CONTA ENERGIA ELÉTRICA (CÓDIGO 06), NOTA FISCAL/CONTA DE FORNECIMENTO D'ÁGUA CANALIZADA (CÓDIGO 29) E NOTA FISCAL/CONTA DE FORNECIMENTO DE GÁS (CÓDIGO 28).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC510() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C510"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C510';
    /**
     * Número sequencial do item no documento
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Código de classificação do item de energia
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 004*
     */
    const COD_CLASS = '';
    /**
     * Quantidade do item
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor do item
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Valor total do desconto
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Código da Situação Tributária, conforme a
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor do ICMS creditado/debitado
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor da base de cálculo referente à
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Alíquota do ICMS da substituição tributária
     *
     * Número: 15
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ST = '';
    /**
     * Valor do ICMS referente à substituição
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Indicador do tipo de receita:
     *
     * Número: 17
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_REC = '';
    /**
     * Código do participante receptor da receita,
     *
     * Número: 18
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Valor do PIS
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil
     *
     * Número: 21
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    this.registers.push([
      REG,
      NUM_ITEM,
      COD_ITEM,
      COD_CLASS,
      QTD,
      UNID,
      VL_ITEM,
      VL_DESC,
      CST_ICMS,
      CFOP,
      VL_BC_ICMS,
      ALIQ_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      ALIQ_ST,
      VL_ICMS_ST,
      IND_REC,
      COD_PART,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
    ]);
  }

  /**
   * Registro C590 - REGISTRO ANALÍTICO DO DOCUMENTO - NOTA FISCAL/CONTA DE ENERGIA ELÉTRICA (CÓDIGO 06), NOTA FISCAL DE ENERGIA ELÉTRICA ELETRÔNICA - NF3e (CÓDIGO 66), NOTA FISCAL/CONTA DE FORNECIMENTO D'ÁGUA CANALIZADA (CÓDIGO 29) E NOTA FISCAL CONSUMO FORNECIMENTO DE GÁS (CÓDIGO 28).
   * Nível: 3
   * Ocorrência: 1:N (um ou vários por registro C500)
   */
  private buildC590() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C590"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C590';
    /**
     * Código da Situação Tributária, conforme a
     *  Tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação do agrupamento de itens
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor da operação correspondente à combinação de CST_ICMS, CFOP, e alíquota
     *  do ICMS
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ICMS" referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente à combinação de CST_ICMS, CFOP
     *  e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ICMS" da substituição tributária referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Parcela correspondente ao valor creditado/debitado do ICMS da substituição tributária, referente à combinação de
     *  CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      VL_RED_BC,
      COD_OBS,
    ]);
  }

  /**
   * Registro C591 - INFORMAÇÕES DO FUNDO DE COMBATE À POBREZA - FCP NA NF3e (CÓDIGO 66)
   * Nível: 4
   * Ocorrência: undefined
   */
  private buildC591() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C591"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C591';
    /**
     * Valor do Fundo de Combate à Pobreza (FCP) vinculado à operação própria, na combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_OP = '';
    /**
     * Valor do Fundo de Combate à Pobreza (FCP) vinculado à operação de substituição tributária, na combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_ST = '';
    this.registers.push([REG, VL_FCP_OP, VL_FCP_ST]);
  }

  /**
   * Registro C595 - OBSERVAÇÕES DO LANÇAMENTO FISCAL (CÓDIGOS 06, 28, 29 e 66)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC595() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C595"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C595';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    /**
     * Descrição complementar do código de observação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    this.registers.push([REG, COD_OBS, TXT_COMPL]);
  }

  /**
   * Registro C597 - OUTRAS OBRIGAÇÕES TRIBUTÁRIAS, AJUSTES E INFORMAÇÕES DE VALORES PROVENIENTES DE DOCUMENTO FISCAL
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC597() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C597"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C597';
    /**
     * Código dos ajustes/benefício/incentivo, conforme tabela indicada no item 5.3
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 010*
     */
    const COD_AJ = '';
    /**
     * Descrição complementar do ajuste do documento fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL_AJ = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Base de cálculo do ICMS ou do ICMS ST
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor do ICMS ou do ICMS ST
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Outros valores
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUTROS = '';
    this.registers.push([
      REG,
      COD_AJ,
      DESCR_COMPL_AJ,
      COD_ITEM,
      VL_BC_ICMS,
      ALIQ_ICMS,
      VL_ICMS,
      VL_OUTROS,
    ]);
  }

  /**
   * Registro C600 - CONSOLIDAÇÃO DIÁRIA DE NOTAS FISCAIS/CONTAS DE ENERGIA ELÉTRICA (CÓDIGO 06), NOTA FISCAL/CONTA DE FORNECIMENTO D'ÁGUA CANALIZADA (CÓDIGO 29) E NOTA FISCAL/CONTA DE FORNECIMENTO DE GÁS (CÓDIGO 28) (EMPRESAS NÃO OBRIGADAS AO CONVÊNIO ICMS 115/03).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC600() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C600"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C600';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código do município dos pontos de
     *  consumo, conforme a tabela IBGE
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN = '';
    /**
     * Série do documento fiscal
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Subsérie do documento fiscal
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * - Código de classe de consumo de energia elétrica ou gás:
     *  01 - Comercial
     *  02 - Consumo Próprio 03 - Iluminação Pública 04 - Industrial
     *  05 - Poder Público 06 - Residencial
     *  07 - Rural
     *  08 -Serviço Público.
     *  - Código de classe de consumo de Fornecimento D´água - Tabela 4.4.2
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_CONS = '';
    /**
     * Quantidade de documentos consolidados
     *  neste registro
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CONS = '';
    /**
     * Quantidade de documentos cancelados
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CANC = '';
    /**
     * Data dos documentos consolidados
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Valor total dos documentos
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor acumulado dos descontos
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Consumo total acumulado, em kWh (Código 06)
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const CONS = '';
    /**
     * Valor acumulado do fornecimento
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_FORN = '';
    /**
     * Valor acumulado dos serviços não-
     *  tributados pelo ICMS
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV_NT = '';
    /**
     * Valores cobrados em nome de terceiros
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_TERC = '';
    /**
     * Valor acumulado das despesas acessórias
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_DA = '';
    /**
     * Valor acumulado da base de cálculo do ICMS
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor acumulado da base de cálculo do
     *  ICMS substituição tributária
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor acumulado do ICMS retido por substituição tributária
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Valor acumulado do PIS
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor acumulado COFINS
     *
     * Número: 22
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    this.registers.push([
      REG,
      COD_MOD,
      COD_MUN,
      SER,
      SUB,
      COD_CONS,
      QTD_CONS,
      QTD_CANC,
      DT_DOC,
      VL_DOC,
      VL_DESC,
      CONS,
      VL_FORN,
      VL_SERV_NT,
      VL_TERC,
      VL_DA,
      VL_BC_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      VL_PIS,
      VL_COFINS,
    ]);
  }

  /**
   * Registro C601 - DOCUMENTOS CANCELADOS - CONSOLIDAÇÃO DIÁRIA DE NOTAS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC601() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C601"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C601';
    /**
     * Número do documento fiscal cancelado
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_CANC = '';
    this.registers.push([REG, NUM_DOC_CANC]);
  }

  /**
   * Registro C610 - ITENS DO DOCUMENTO CONSOLIDADO (CÓDIGO 06), NOTA FISCAL/CONTA DE FORNECIMENTO D'ÁGUA CANALIZADA (CÓDIGO 29) E NOTA FISCAL/CONTA DE FORNECIMENTO DE GÁS (CÓDIGO 28) (EMPRESAS NÃO OBRIGADAS AO CONVÊNIO ICMS 115/03).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC610() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C610"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C610';
    /**
     * Código de classificação do item de energia
     *  elétrica, conforme Tabela 4.4.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 004*
     */
    const COD_CLASS = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade acumulada do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro
     *  0190)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor acumulado do item
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ITEM = '';
    /**
     * Valor acumulado dos descontos
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Código da Situação Tributária, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *  conforme tabela indicada no item 4.2.2
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor acumulado da base de cálculo do ICMS
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS debitado
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor da base de cálculo do ICMS
     *  substituição tributária
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor do ICMS retido por substituição tributária
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Valor do PIS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 17
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    this.registers.push([
      REG,
      COD_CLASS,
      COD_ITEM,
      QTD,
      UNID,
      VL_ITEM,
      VL_DESC,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_BC_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
    ]);
  }

  /**
   * Registro C690 - REGISTRO ANALÍTICO DOS DOCUMENTOS (NOTAS FISCAIS/CONTAS DE ENERGIA ELÉTRICA (CÓDIGO 06), NOTA FISCAL/CONTA DE FORNECIMENTO D’ÁGUA CANALIZADA (CÓDIGO 29) E NOTA FISCAL/CONTA DE FORNECIMENTO DE GÁS (CÓDIGO 28)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC690() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C690"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C690';
    /**
     * Código da Situação Tributária, conforme a
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação,
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor da operação correspondente à
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS"
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não tributado em função da redução
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor do ICMS retido por substituição
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Código da observação do lançamento fiscal
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      VL_RED_BC,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      COD_OBS,
    ]);
  }

  /**
   * Registro C700 - CONSOLIDAÇÃO DOS DOCUMENTOS NF/CONTA ENERGIA ELÉTRICA (CÓD 06), EMITIDAS EM VIA ÚNICA (EMPRESAS OBRIGADAS À ENTREGA DO ARQUIVO PREVISTO NO CONVÊNIO ICMS 115/03), NOTA FISCAL/CONTA DE FORNECIMENTO DE GÁS CANALIZADO (CÓDIGO 28) e NOTA FISCAL DE ENERGIA ELÉTRICA ELETRÔNICA - NF3e (CÓDIGO 66)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC700() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C700"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C700';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Série do documento fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Número de ordem inicial
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 9
     */
    const NRO_ORD_INI = '';
    /**
     * Número de ordem final
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 9
     */
    const NRO_ORD_FIN = '';
    /**
     * Data de emissão inicial dos documentos / Data inicial de vencimento da fatura
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC_INI = '';
    /**
     * Data de emissão final dos documentos / Data final do vencimento da fatura
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC_FIN = '';
    /**
     * Nome do arquivo Mestre de Documento Fiscal
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 33
     */
    const NOM_MEST = '';
    /**
     * Chave de codificação digital do arquivo Mestre de Documento Fiscal
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 32
     */
    const CHV_COD_DIG = '';
    this.registers.push([
      REG,
      COD_MOD,
      SER,
      NRO_ORD_INI,
      NRO_ORD_FIN,
      DT_DOC_INI,
      DT_DOC_FIN,
      NOM_MEST,
      CHV_COD_DIG,
    ]);
  }

  /**
   * Registro C790 - REGISTRO ANALÍTICO DOS DOCUMENTOS (CÓDIGOS 06, 28 e 66).
   * Nível: 3
   * Ocorrência: 1:N (um ou vários por registro C700)
   */
  private buildC790() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C790"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C790';
    /**
     * Código da Situação Tributária, conforme a
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação,
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * combinação de CST_ICMS, CFOP, e
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * cálculo do ICMS" referente à combinação
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * referente à combinação CST_ICMS, CFOP e
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor do ICMS retido por substituição tributária
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à
     *  combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      VL_BC_ICMS_ST,
      VL_ICMS_ST,
      VL_RED_BC,
      COD_OBS,
    ]);
  }

  /**
   * Registro C791 - REGISTRO DE INFORMAÇÕES DE ST POR UF (CÓDIGOS 06 e 66)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC791() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C791"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C791';
    /**
     * Sigla da unidade da federação a que se refere a retenção ST
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = '';
    /**
     * Valor da base de cálculo do ICMS substituição tributária
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Valor do ICMS retido por substituição tributária
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    this.registers.push([REG, UF, VL_BC_ICMS_ST, VL_ICMS_ST]);
  }

  /**
   * Registro C800 - CUPOM FISCAL ELETRÔNICO - SAT (CF-E-SAT) (CÓDIGO 59)
   * Nível: 2
   * Ocorrência: Vários
   */
  private buildC800() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C800"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C800';
    /**
     * Código do modelo do documento fiscal, conforme
     *  a Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 2
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento fiscal, conforme a Tabela 4.1.2
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 2
     */
    const COD_SIT = '';
    /**
     * Número do Cupom Fiscal Eletrônico
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_CFE = '';
    /**
     * Data da emissão do Cupom Fiscal Eletrônico
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 8
     */
    const DT_DOC = '';
    /**
     * Valor total do Cupom Fiscal Eletrônico
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_CFE = '';
    /**
     * Valor total do PIS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor total da COFINS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * CNPJ ou CPF do destinatário
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 14
     */
    const CNPJ_CPF = '';
    /**
     * Número de Série do equipamento SAT
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 9
     */
    const NR_SAT = '';
    /**
     * Chave do Cupom Fiscal Eletrônico
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 44
     */
    const CHV_CFE = '';
    /**
     * Valor total de descontos
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor total das mercadorias e serviços
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_MERC = '';
    /**
     * Valor total de outras despesas acessórias e
     *  acréscimos
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_DA = '';
    /**
     * Valor do ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor total do PIS retido por subst. trib
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS_ST = '';
    /**
     * Valor total da COFINS retido por subst. trib
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS_ST = '';
    this.registers.push([
      REG,
      COD_MOD,
      COD_SIT,
      NUM_CFE,
      DT_DOC,
      VL_CFE,
      VL_PIS,
      VL_COFINS,
      CNPJ_CPF,
      NR_SAT,
      CHV_CFE,
      VL_DESC,
      VL_MERC,
      VL_OUT_DA,
      VL_ICMS,
      VL_PIS_ST,
      VL_COFINS_ST,
    ]);
  }

  /**
   * Registro C810 - ITENS DO DOCUMENTO DO CUPOM FISCAL ELETRÔNICO - SAT (CF- E-SAT) (CÓDIGO 59):
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC810() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C810"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C810';
    /**
     * Número do item no documento fiscal
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_ITEM = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor total do item (mercadorias ou serviços)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 2
     */
    const VL_ITEM = '';
    /**
     * Código da Situação Tributária referente ao ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    this.registers.push([
      REG,
      NUM_ITEM,
      COD_ITEM,
      QTD,
      UNID,
      VL_ITEM,
      CST_ICMS,
      CFOP,
    ]);
  }

  /**
   * Registro C815 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE SAÍDA DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CF-E-SAT) (CÓDIGO 59)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC815() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C815"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C815';
    /**
     * Código do motivo da restituição ou complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo
     *  QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria, considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário para o ICMS na operação, caso não houvesse a ST, considerando unidade utilizada para informar o campo "QUANT_CONV", aplicando-se a mesma redução da base de cálculo do ICMS ST na
     *  tributação, se houver
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV = '';
    /**
     * Valor unitário do ICMS OP calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo "QUANT_CONV", utilizado para cálculo de ressarcimento/restituição de ST, no desfazimento da substituição tributária, quando se utiliza a fórmula descrita nas
     *  instruções de preenchimento do campo 11, no item a1)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor médio unitário do ICMS que o contribuinte teria se creditado referente à operação de entrada das mercadorias em estoque caso estivesse submetida ao regime comum de tributação, calculado conforme a legislação de cada UF,
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, considerando unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, considerando unidade utilizada
     *  para informar o campo "QUANT_CONV"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, calculado conforme a legislação de cada UF, considerando a
     *  unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST",
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do complemento do ICMS, incluindo FCP ST, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COMPL
     *  ", considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_NA_OPERACAO_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
    ]);
  }

  /**
   * Registro C850 - REGISTRO ANALÍTICO DO CF-E-SAT (CODIGO 59)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC850() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C850"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C850';
    /**
     * Código da Situação Tributária, conforme a Tabela
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação do
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 4
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * "Valor total do CF-e" na combinação de CST_ICMS,
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor acumulado da base de cálculo do ICMS,
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Código da observação do lançamento fiscal (campo 02
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      COD_OBS,
    ]);
  }

  /**
   * Registro C855 - OBSERVAÇÕES DO LANÇAMENTO FISCAL (CÓDIGO 59)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC855() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C855"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C855';
    /**
     * Código da observação do lançamento fiscal (campo 02 do
     *  Registro 0460)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    /**
     * Descrição complementar do código de observação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    this.registers.push([REG, COD_OBS, TXT_COMPL]);
  }

  /**
   * Registro C857 - OUTRAS OBRIGAÇÕES TRIBUTÁRIAS, AJUSTES E INFORMAÇÕES DE VALORES PROVENIENTES DE DOCUMENTO FISCAL.
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC857() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C857"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C857';
    /**
     * Código do ajustes/benefício/incentivo, conforme
     *  tabela indicada no item 5.3
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 010*
     */
    const COD_AJ = '';
    /**
     * Descrição complementar do ajuste do documento
     *  fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL_AJ = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Base de cálculo do ICMS ou do ICMS ST
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor do ICMS ou do ICMS ST
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Outros valores
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUTROS = '';
    this.registers.push([
      REG,
      COD_AJ,
      DESCR_COMPL_AJ,
      COD_ITEM,
      VL_BC_ICMS,
      ALIQ_ICMS,
      VL_ICMS,
      VL_OUTROS,
    ]);
  }

  /**
   * Registro C860 - IDENTIFICAÇÃO DO EQUIPAMENTO SAT-CF-E
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildC860() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C860"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C860';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 2
     */
    const COD_MOD = '';
    /**
     * Número de Série do equipamento SAT
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 9
     */
    const NR_SAT = '';
    /**
     * Data de emissão dos documentos fiscais
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 8
     */
    const DT_DOC = '';
    /**
     * Número do documento inicial
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 6
     */
    const DOC_INI = '';
    /**
     * Número do documento final
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 6
     */
    const DOC_FIM = '';
    this.registers.push([REG, COD_MOD, NR_SAT, DT_DOC, DOC_INI, DOC_FIM]);
  }

  /**
   * Registro C870 - ITENS DO RESUMO DIÁRIO DOS DOCUMENTOS (CF-E-SAT) (CÓDIGO 59)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC870() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C870"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C870';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Código da Situação Tributária referente ao ICMS
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    this.registers.push([REG, COD_ITEM, QTD, UNID, CST_ICMS, CFOP]);
  }

  /**
   * Registro C880 - INFORMAÇÕES COMPLEMENTARES DAS OPERAÇÕES DE SAÍDA DE MERCADORIAS SUJEITAS À SUBSTITUIÇÃO TRIBUTÁRIA (CF-E-SAT) (CÓDIGO 59)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildC880() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C880"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C880';
    /**
     * Código do motivo da restituição ou
     *  complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Quantidade do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QUANT_CONV = '';
    /**
     * Unidade adotada para informar o campo QUANT_CONV
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Valor unitário da mercadoria, considerando a
     *  unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_CONV = '';
    /**
     * Valor unitário para o ICMS na operação, caso não houvesse a ST, considerando unidade utilizada para informar o campo "QUANT_CONV", aplicando-se a mesma
     *  redução da base de cálculo do ICMS ST na tributação, se houver
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_NA_OPERACAO_CONV = '';
    /**
     * Valor unitário do ICMS OP calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo "QUANT_CONV", utilizado para cálculo de ressarcimento/restituição de ST, no desfazimento da substituição tributária, quando se utiliza a fórmula descrita nas instruções de preenchimento do campo 11,
     *  no item a1)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_CONV = '';
    /**
     * Valor médio unitário do ICMS que o contribuinte teria se creditado referente à operação de entrada das mercadorias em estoque caso estivesse submetida ao regime comum de tributação, calculado conforme a legislação de cada UF, considerando a unidade utilizada para informar o campo
     *  "QUANT_CONV"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_OP_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do ICMS ST, incluindo FCP ST, das mercadorias em estoque, considerando unidade utilizada
     *  para informar o campo "QUANT_CONV"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor médio unitário do FCP ST agregado ao ICMS das mercadorias em estoque, considerando unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV = '';
    /**
     * Valor unitário do total do ICMS ST, incluindo FCP ST, a ser restituído/ressarcido, calculado conforme a legislação de cada UF, considerando a unidade utilizada para
     *  informar o campo "QUANT_CONV"
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_REST = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_REST",
     *  considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_REST = '';
    /**
     * Valor unitário do complemento do ICMS, incluindo FCP ST, considerando a unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_ICMS_ST_CONV_COMPL = '';
    /**
     * Valor unitário correspondente à parcela de ICMS FCP ST que compõe o campo "VL_UNIT_ICMS_ST_CONV_COMPL",
     *  considerando unidade utilizada para informar o campo "QUANT_CONV"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_UNIT_FCP_ST_CONV_COMPL = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      QUANT_CONV,
      UNID,
      VL_UNIT_CONV,
      VL_UNIT_ICMS_NA_OPERACAO_CONV,
      VL_UNIT_ICMS_OP_CONV,
      VL_UNIT_ICMS_OP_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_FCP_ICMS_ST_ESTOQUE_CONV,
      VL_UNIT_ICMS_ST_CONV_REST,
      VL_UNIT_FCP_ST_CONV_REST,
      VL_UNIT_ICMS_ST_CONV_COMPL,
      VL_UNIT_FCP_ST_CONV_COMPL,
    ]);
  }

  /**
   * Registro C890 - RESUMO DIÁRIO DO CF-E-SAT (CÓDIGO 59) POR EQUIPAMENTO SAT- CF-E
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC890() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C890"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C890';
    /**
     * Código da Situação Tributária, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação do agrupamento de itens
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 4
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * "Valor total do CF-e" na combinação de CST_ICMS, CFOP e ALÍQUOTA DO ICMS, correspondente ao somatório do valor líquido dos itens
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor acumulado da base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP e ALÍQUOTA
     *  DO ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Código da observação do lançamento fiscal (campo 02
     *  do registro 0460)
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    this.registers.push([
      REG,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_BC_ICMS,
      VL_ICMS,
      COD_OBS,
    ]);
  }

  /**
   * Registro C895 - OBSERVAÇÕES DO LANÇAMENTO FISCAL (CÓDIGO 59)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildC895() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C895"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C895';
    /**
     * Código da observação do lançamento fiscal (campo 02 do
     *  Registro 0460)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    /**
     * Descrição complementar do código de observação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    this.registers.push([REG, COD_OBS, TXT_COMPL]);
  }

  /**
   * Registro C897 - OUTRAS OBRIGAÇÕES TRIBUTÁRIAS, AJUSTES E INFORMAÇÕES DE VALORES PROVENIENTES DE DOCUMENTO FISCAL.
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildC897() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C897"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C897';
    /**
     * Código do ajustes/benefício/incentivo, conforme
     *  tabela indicada no item 5.3
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 010*
     */
    const COD_AJ = '';
    /**
     * Descrição complementar do ajuste do documento
     *  fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL_AJ = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Base de cálculo do ICMS ou do ICMS ST
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Valor do ICMS ou do ICMS ST
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Outros valores
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUTROS = '';
    this.registers.push([
      REG,
      COD_AJ,
      DESCR_COMPL_AJ,
      COD_ITEM,
      VL_BC_ICMS,
      ALIQ_ICMS,
      VL_ICMS,
      VL_OUTROS,
    ]);
  }

  /**
   * Registro C990 - ENCERRAMENTO DO BLOCO C
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildC990() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "C990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'C990';
    /**
     * Quantidade total de linhas do Bloco C
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_C = '';
    this.registers.push([REG, QTD_LIN_C]);
  }
}
