import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

export interface BlocoDOptions {
  include?: boolean;
}

export default class BlocoD extends Bloco {
  private include: boolean;

  constructor(options: BlocoOptions & BlocoDOptions) {
    super(options);
    this.include = options.include ?? false;
  }

  build(): string[][] {
    this.registers = [];

    this.buildD001();
    if (this.include) {
      this.buildD100();
      this.buildD300();
      this.buildD350();
      this.buildD400();
      this.buildD500();
      this.buildD600();
      this.buildD695();
      this.buildD700();
      this.buildD750();
    }
    this.buildD990();

    return this.registers;
  }

  /**
   * Registro D001 - ABERTURA DO BLOCO D
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildD001() {
    /**
     * Texto fixo contendo "D001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D001';
    /**
     * Indicador de movimento:
     *  0 - Bloco com dados informados;
     *  1 - Bloco sem dados informados
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 1
     */
    const IND_MOV = this.include ? '0' : '1';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro D100 - NOTA FISCAL DE SERVIÇO DE TRANSPORTE (CÓDIGO 07) E CONHECIMENTOS DE TRANSPORTE RODOVIÁRIO DE CARGAS (CÓDIGO 08), CONHECIMENTOS DE TRANSPORTE DE CARGAS AVULSO (CÓDIGO 8B), AQUAVIÁRIO DE CARGAS (CÓDIGO 09), AÉREO (CÓDIGO 10), FERROVIÁRIO DE CARGAS (CÓDIGO 11), MULTIMODAL DE CARGAS (CÓDIGO 26), NOTA FISCAL DE TRANSPORTE FERROVIÁRIO DE CARGA (CÓDIGO 27), CONHECIMENTO DE TRANSPORTE ELETRÔNICO - CT-e (CÓDIGO 57), CONHECIMENTO DE TRANSPORTE ELETRÔNICO PARA OUTROS SERVIÇOS - CT-e OS (CÓDIGO 67) E BILHETE DE PASSAGEM ELETRÔNICO - BP-e (CÓDIGO 63)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD100() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D100"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D100';
    /**
     * Indicador do tipo de operação:
     *  0 - Aquisição;
     *  1 - Prestação
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OPER = '';
    /**
     * Indicador do emitente do documento fiscal:
     *  0 - Emissão própria;
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do prestador de serviço, no caso de aquisição de serviço;
     *  - do tomador do serviço, no caso de prestação de serviços
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do modelo do documento fiscal, conforme a
     *  Tabela 4.1.1
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento fiscal, conforme a Tabela 4.1.2
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
     * Tipo: C
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do documento fiscal
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Chave do Conhecimento de Transporte Eletrônico ou
     *  do Bilhete de Passagem Eletrônico
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_CTE = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Data da aquisição ou da prestação do serviço
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_A_P = '';
    /**
     * Tipo de Conhecimento de Transporte Eletrônico conforme definido no Manual de Integração do CT-e ou do Bilhete de Passagem Eletrônico conforme definido no Manual de Integração do BP-e
     *
     * Número: 13
     * Tipo: N
     * Tamanho: 001*
     */
    const TP_CT_e = '';
    /**
     * Chave do Bilhete de Passagem Eletrônico substituído
     *
     * Número: 14
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_CTE_REF = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor total do desconto
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
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
     * Valor total da prestação de serviço
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor do ICMS
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não-tributado
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_NT = '';
    /**
     * Código da informação complementar do documento fiscal (campo 02 do Registro 0450)
     *
     * Número: 22
     * Tipo: C
     * Tamanho: 6
     */
    const COD_INF = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 23
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    /**
     * Código do município de origem do serviço, conforme a tabela IBGE (Preencher com 9999999, se Exterior)
     *
     * Número: 24
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Código do município de destino, conforme a tabela IBGE (Preencher com 9999999, se Exterior)
     *
     * Número: 25
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    this.registers.push([
      REG,
      IND_OPER,
      IND_EMIT,
      COD_PART,
      COD_MOD,
      COD_SIT,
      SER,
      SUB,
      NUM_DOC,
      CHV_CTE,
      DT_DOC,
      DT_A_P,
      TP_CT_e,
      CHV_CTE_REF,
      VL_DOC,
      VL_DESC,
      IND_FRT,
      VL_SERV,
      VL_BC_ICMS,
      VL_ICMS,
      VL_NT,
      COD_INF,
      COD_CTA,
      COD_MUN_ORIG,
      COD_MUN_DEST,
    ]);
  }

  /**
   * Registro D101 - INFORMAÇÃO COMPLEMENTAR DOS DOCUMENTOS FISCAIS QUANDO DAS PRESTAÇÕES INTERESTADUAIS DESTINADAS A CONSUMIDOR FINAL NÃO CONTRIBUINTE EC 87/15 (CÓDIGOS 57, 63 e 67)
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildD101() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D101"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D101';
    /**
     * Valor total relativo ao Fundo de Combate à
     *  Pobreza (FCP) da UF de destino
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
     * Valor total do ICMS Interestadual para a UF do
     *  remetente
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF_REM = '';
    this.registers.push([REG, VL_FCP_UF_DEST, VL_ICMS_UF_DEST, VL_ICMS_UF_REM]);
  }

  /**
   * Registro D110 - ITENS DO DOCUMENTO - NOTA FISCAL DE SERVIÇOS DE TRANSPORTE (CÓDIGO 07)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD110() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D110"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D110';
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
     * Valor do serviço
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Outros valores
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT = '';
    this.registers.push([REG, NUM_ITEM, COD_ITEM, VL_SERV, VL_OUT]);
  }

  /**
   * Registro D120 - COMPLEMENTO DA NOTA FISCAL DE SERVIÇOS DE TRANSPORTE (CÓDIGO 07)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildD120() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D120"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D120';
    /**
     * Código do município de origem do serviço,
     *  conforme a tabela IBGE (Preencher com 9999999, se Exterior)
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Código do município de destino, conforme a tabela IBGE (Preencher com 9999999, se Exterior)
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    /**
     * Placa de identificação do veículo
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 7
     */
    const VEIC_ID = '';
    /**
     * Sigla da UF da placa do veículo
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 2
     */
    const UF_ID = '';
    this.registers.push([REG, COD_MUN_ORIG, COD_MUN_DEST, VEIC_ID, UF_ID]);
  }

  /**
   * Registro D130 - COMPLEMENTO DO CONHECIMENTO RODOVIÁRIO DE CARGAS (CÓDIGO 08) E DO CONHECIMENTO RODOVIÁRIO DE CARGAS AVULSO (CÓDIGO 8B)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD130() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D130"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D130';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - consignatário, se houver
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_CONSG = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - redespachado, se houver
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_RED = '';
    /**
     * Indicador do tipo do frete da operação de redespacho:
     *  0 - Sem redespacho;
     *  1 - Por conta do emitente;
     *  2 - Por conta do destinatário; 9 - Outros
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_FRT_RED = '';
    /**
     * Código do município de origem do serviço, conforme a tabela IBGE(Preencher com 9999999, se
     *  Exterior)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Código do município de destino, conforme a tabela IBGE(Preencher com 9999999, se Exterior)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    /**
     * Placa de identificação do veículo
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 7
     */
    const VEIC_ID = '';
    /**
     * Valor líquido do frete
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_LIQ_FRT = '';
    /**
     * Soma de valores de Sec/Cat (serviços de coleta/custo adicional de transporte)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_SEC_CAT = '';
    /**
     * Soma de valores de despacho
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESP = '';
    /**
     * Soma dos valores de pedágio
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_PEDG = '';
    /**
     * Outros valores
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT = '';
    /**
     * Valor total do frete
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_FRT = '';
    /**
     * Sigla da UF da placa do veículo
     *
     * Número: 14
     * Tipo: C
     * Tamanho: 2
     */
    const UF_ID = '';
    this.registers.push([
      REG,
      COD_PART_CONSG,
      COD_PART_RED,
      IND_FRT_RED,
      COD_MUN_ORIG,
      COD_MUN_DEST,
      VEIC_ID,
      VL_LIQ_FRT,
      VL_SEC_CAT,
      VL_DESP,
      VL_PEDG,
      VL_OUT,
      VL_FRT,
      UF_ID,
    ]);
  }

  /**
   * Registro D140 - COMPLEMENTO DO CONHECIMENTO AQUAVIÁRIO DE CARGAS (CÓDIGO 09)
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildD140() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D140"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D140';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - consignatário, se houver
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_CONSG = '';
    /**
     * Código do município de origem do serviço, conforme a tabela IBGE(Preencher com 9999999, se Exterior)
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Código do município de destino, conforme a tabela IBGE(Preencher com 9999999, se
     *  Exterior)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    /**
     * Indicador do tipo do veículo transportador:
     *  0- Embarcação;
     *  1- Empurrador/rebocador
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_VEIC = '';
    /**
     * Identificação da embarcação (IRIM ou Registro CPP)
     *
     * Número: 6
     * Tipo: C
     * Tamanho: -
     */
    const VEIC_ID = '';
    /**
     * Indicador do tipo da navegação:
     *  0- Interior;
     *  1- Cabotagem
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_NAV = '';
    /**
     * Número da viagem
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VIAGEM = '';
    /**
     * Valor líquido do frete
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_FRT_LIQ = '';
    /**
     * Valor das despesas portuárias
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESP_PORT = '';
    /**
     * Valor das despesas com carga e descarga
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESP_CAR_DESC = '';
    /**
     * Outros valores
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT = '';
    /**
     * Valor bruto do frete
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_FRT_BRT = '';
    /**
     * Valor adicional do frete para renovação da
     *  Marinha Mercante
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_FRT_MM = '';
    this.registers.push([
      REG,
      COD_PART_CONSG,
      COD_MUN_ORIG,
      COD_MUN_DEST,
      IND_VEIC,
      VEIC_ID,
      IND_NAV,
      VIAGEM,
      VL_FRT_LIQ,
      VL_DESP_PORT,
      VL_DESP_CAR_DESC,
      VL_OUT,
      VL_FRT_BRT,
      VL_FRT_MM,
    ]);
  }

  /**
   * Registro D150 - COMPLEMENTO DO CONHECIMENTO AÉREO (CÓDIGO 10)
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildD150() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D150"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D150';
    /**
     * Código do município de origem do serviço,
     *  conforme a tabela IBGE (Preencher com 9999999, se Exterior)
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Código do município de destino, conforme a tabela IBGE (Preencher com 9999999, se
     *  Exterior)
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    /**
     * Identificação da aeronave (DAC)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const VEIC_ID = '';
    /**
     * Número do vôo
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VIAGEM = '';
    /**
     * Indicador do tipo de tarifa aplicada:
     *  0- Exp.;
     *  1- Enc.;
     *  2- C.I.;
     *  9- Outra
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_TFA = '';
    /**
     * Peso taxado
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_PESO_TX = '';
    /**
     * Valor da taxa terrestre
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_TX_TERR = '';
    /**
     * Valor da taxa de redespacho
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_TX_RED = '';
    /**
     * Outros valores
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT = '';
    /**
     * Valor da taxa "ad valorem"
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_TX_ADV = '';
    this.registers.push([
      REG,
      COD_MUN_ORIG,
      COD_MUN_DEST,
      VEIC_ID,
      VIAGEM,
      IND_TFA,
      VL_PESO_TX,
      VL_TX_TERR,
      VL_TX_RED,
      VL_OUT,
      VL_TX_ADV,
    ]);
  }

  /**
   * Registro D160 - CARGA TRANSPORTADA (CÓDIGO 08, 8B, 09, 10, 11, 26 e 27)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD160() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D160"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D160';
    /**
     * Identificação do número do despacho
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const DESPACHO = '';
    /**
     * CNPJ ou CPF do remetente das mercadorias que
     *  constam na nota fiscal
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 14
     */
    const CNPJ_CPF_REM = '';
    /**
     * Inscrição Estadual do remetente das mercadorias que constam na nota fiscal
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 14
     */
    const IE_REM = '';
    /**
     * Código do Município de origem, conforme tabela IBGE (Preencher com 9999999, se exterior)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORI = '';
    /**
     * CNPJ ou CPF do destinatário das mercadorias
     *  que constam na nota fiscal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 14
     */
    const CNPJ_CPF_DEST = '';
    /**
     * Inscrição Estadual do destinatário
     *  das mercadorias que constam na nota fiscal
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 14
     */
    const IE_DEST = '';
    /**
     * Código do Município de destino, conforme tabela IBGE (Preencher com 9999999, se
     *  Exterior)
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    this.registers.push([
      REG,
      DESPACHO,
      CNPJ_CPF_REM,
      IE_REM,
      COD_MUN_ORI,
      CNPJ_CPF_DEST,
      IE_DEST,
      COD_MUN_DEST,
    ]);
  }

  /**
   * Registro D161 - LOCAL DA COLETA E ENTREGA (CÓDIGO 08, 8B, 09, 10, 11 e 26)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildD161() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D161"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D161';
    /**
     * Indicador do tipo de transporte da carga coletada:
     *  0-Rodoviário 1-Ferroviário
     *  2-Rodo-Ferroviário 3-Aquaviário
     *  4-Dutoviário 5-Aéreo
     *  9-Outros
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 001*
     */
    const IND_CARGA = '';
    /**
     * Número do CNPJ ou CPF do local da coleta
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 14
     */
    const CNPJ_CPF_COL = '';
    /**
     * Inscrição Estadual do contribuinte do local de coleta
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 14
     */
    const IE_COL = '';
    /**
     * Código do Município do local de coleta, conforme tabela IBGE (Preencher com 9999999,
     *  se Exterior)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_COL = '';
    /**
     * Número do CNPJ ou CPF do local da entrega
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 14
     */
    const CNPJ_CPF_ENTG = '';
    /**
     * Inscrição Estadual do contribuinte do local de
     *  entrega
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 14
     */
    const IE_ENTG = '';
    /**
     * Código do Município do local de entrega,
     *  conforme tabela IBGE (Preencher com 9999999, se Exterior)
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ENTG = '';
    this.registers.push([
      REG,
      IND_CARGA,
      CNPJ_CPF_COL,
      IE_COL,
      COD_MUN_COL,
      CNPJ_CPF_ENTG,
      IE_ENTG,
      COD_MUN_ENTG,
    ]);
  }

  /**
   * Registro D162 - IDENTIFICAÇÃO DOS DOCUMENTOS FISCAIS (CÓDIGOS 08, 8B, 09, 10, 11, 26 E 27)
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildD162() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D162"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D162';
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
     * Número do documento fiscal
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
     * Valor das mercadorias constantes no documento
     *  fiscal
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_MERC = '';
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
    this.registers.push([
      REG,
      COD_MOD,
      SER,
      NUM_DOC,
      DT_DOC,
      VL_DOC,
      VL_MERC,
      QTD_VOL,
      PESO_BRT,
      PESO_LIQ,
    ]);
  }

  /**
   * Registro D170 - COMPLEMENTO DO CONHECIMENTO MULTIMODAL DE CARGAS (CÓDIGO 26)
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildD170() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D170"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D170';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - consignatário, se houver
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_CONSG = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - redespachante, se houver
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_RED = '';
    /**
     * Código do município de origem do serviço, conforme a tabela IBGE(Preencher com
     *  9999999, se Exterior)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Código do município de destino, conforme a tabela IBGE(Preencher com 9999999, se Exterior)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    /**
     * Registro do operador de transporte multimodal
     *
     * Número: 6
     * Tipo: C
     * Tamanho: -
     */
    const OTM = '';
    /**
     * Indicador da natureza do frete:
     *  0- Negociável;
     *  1- Não negociável
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_NAT_FRT = '';
    /**
     * Valor líquido do frete
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_LIQ_FRT = '';
    /**
     * Valor do gris (gerenciamento de risco)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_GRIS = '';
    /**
     * Somatório dos valores de pedágio
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_PDG = '';
    /**
     * Outros valores
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT = '';
    /**
     * Valor total do frete
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_FRT = '';
    /**
     * Placa de identificação do veículo
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 7
     */
    const VEIC_ID = '';
    /**
     * Sigla da UF da placa do veículo
     *
     * Número: 14
     * Tipo: C
     * Tamanho: 2
     */
    const UF_ID = '';
    this.registers.push([
      REG,
      COD_PART_CONSG,
      COD_PART_RED,
      COD_MUN_ORIG,
      COD_MUN_DEST,
      OTM,
      IND_NAT_FRT,
      VL_LIQ_FRT,
      VL_GRIS,
      VL_PDG,
      VL_OUT,
      VL_FRT,
      VEIC_ID,
      UF_ID,
    ]);
  }

  /**
   * Registro D180 - MODAIS (CÓDIGO 26)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD180() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D180"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D180';
    /**
     * Número de ordem sequencial do modal
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const NUM_SEQ = '';
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
     * CNPJ ou CPF do participante emitente do
     *  modal
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 14
     */
    const CNPJ_CPF_EMIT = '';
    /**
     * Sigla da unidade da federação do participante emitente do modal
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const UF_EMIT = '';
    /**
     * Inscrição Estadual do participante emitente do
     *  modal
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 14
     */
    const IE_EMIT = '';
    /**
     * Código do município de origem do serviço, conforme a tabela IBGE(Preencher com 9999999, se Exterior)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * CNPJ/CPF do participante tomador do serviço
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 14
     */
    const CNPJ_CPF_TOM = '';
    /**
     * Sigla da unidade da federação do participante tomador do serviço
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 002*
     */
    const UF_TOM = '';
    /**
     * Inscrição Estadual do participante tomador do
     *  serviço
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 14
     */
    const IE_TOM = '';
    /**
     * Código do município de destino, conforme a tabela IBGE(Preencher com 9999999, se Exterior)
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Série do documento fiscal
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Subsérie do documento fiscal
     *
     * Número: 14
     * Tipo: N
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do documento fiscal
     *
     * Número: 15
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 16
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    this.registers.push([
      REG,
      NUM_SEQ,
      IND_EMIT,
      CNPJ_CPF_EMIT,
      UF_EMIT,
      IE_EMIT,
      COD_MUN_ORIG,
      CNPJ_CPF_TOM,
      UF_TOM,
      IE_TOM,
      COD_MUN_DEST,
      COD_MOD,
      SER,
      SUB,
      NUM_DOC,
      DT_DOC,
      VL_DOC,
    ]);
  }

  /**
   * Registro D190 - REGISTRO ANALÍTICO DOS DOCUMENTOS (CÓDIGO 07, 08, 8B, 09, 10,
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD190() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D190"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D190';
    /**
     * Código da Situação Tributária, conforme a tabela
     *  indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação, conforme a tabela indicada no item 4.2.2
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
     * Valor da operação correspondente à combinação de
     *  CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente à combinação CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à combinação de
     *  CST_ICMS, CFOP e alíquota do ICMS
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
   * Registro D195 - OBSERVAÇÕES DO LANÇAMENTO FISCAL (CÓDIGO 07, 08, 8B, 09, 10,
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD195() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D195"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D195';
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
   * Registro D197 - OUTRAS OBRIGAÇÕES TRIBUTÁRIAS, AJUSTES E INFORMAÇÕES DE VALORES PROVENIENTES DE DOCUMENTO FISCAL
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildD197() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D197"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D197';
    /**
     * Código do ajustes/benefício/incentivo, conforme tabela indicada no item 5.3
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
   * Registro D300 - REGISTRO ANALÍTICO DOS BILHETES CONSOLIDADOS DE PASSAGEM RODOVIÁRIO (CÓDIGO 13), DE PASSAGEM AQUAVIÁRIO (CÓDIGO 14), DE PASSAGEM E NOTA DE BAGAGEM (CÓDIGO 15) E DE PASSAGEM FERROVIÁRIO (CÓDIGO 16)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD300() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D300"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D300';
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
     * Subsérie do documento fiscal
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 4
     */
    const SUB = '';
    /**
     * Número do primeiro documento fiscal emitido (mesmo modelo, série e subsérie)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_DOC_INI = '';
    /**
     * Número do último documento fiscal emitido (mesmo modelo, série e subsérie)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const NUM_DOC_FIN = '';
    /**
     * Código da Situação Tributária, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação conforme tabela indicada no item 4.2.2
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Alíquota do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Data da emissão dos documentos fiscais
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Valor total acumulado das operações correspondentes à combinação de CST_ICMS,
     *  CFOP e alíquota do ICMS, incluídas as despesas acessórias e acréscimos
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor total dos descontos
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor total da prestação de serviço
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor de seguro
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_SEG = '';
    /**
     * Valor de outras despesas
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUTDESP = '';
    /**
     * Valor total da base de cálculo do ICMS
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor total do ICMS
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à
     *  combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação do lançamento fiscal
     *  (campo 02 do Registro 0460)
     *
     * Número: 19
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 20
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
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      DT_DOC,
      VL_OPR,
      VL_DESC,
      VL_SERV,
      VL_SEG,
      VL_OUTDESP,
      VL_BC_ICMS,
      VL_ICMS,
      VL_RED_BC,
      COD_OBS,
      COD_CTA,
    ]);
  }

  /**
   * Registro D301 - DOCUMENTOS CANCELADOS DOS BILHETES DE PASSAGEM RODOVIÁRIO (CÓDIGO 13), DE PASSAGEM AQUAVIÁRIO (CÓDIGO 14), DE PASSAGEM E NOTA DE BAGAGEM (CÓDIGO 15) E DE PASSAGEM FERROVIÁRIO (CÓDIGO 16).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD301() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D301"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D301';
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
   * Registro D310 - COMPLEMENTO DOS BILHETES (CÓDIGO 13, 14, 15 E 16).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD310() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D310"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D310';
    /**
     * Código do município de origem do serviço,
     *  conforme a tabela IBGE
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Valor total da prestação de serviço
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor total da base de cálculo do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor total do ICMS
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    this.registers.push([REG, COD_MUN_ORIG, VL_SERV, VL_BC_ICMS, VL_ICMS]);
  }

  /**
   * Registro D350 - EQUIPAMENTO ECF (CÓDIGOS 2E, 13, 14, 15 e 16).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD350() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D350"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D350';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
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
   * Registro D355 - REDUÇÃO Z (CÓDIGOS 2E, 13, 14, 15 e 16).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD355() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D355"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D355';
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
     * Número do Contador de Ordem de Operação do último documento emitido no dia. (Número do COO na Redução Z)
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
   * Registro D360 - PIS E COFINS TOTALIZADOS NO DIA (CÓDIGOS 2E, 13, 14, 15 e 16).
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildD360() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D360"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D360';
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
   * Registro D365 - REGISTRO DOS TOTALIZADORES PARCIAIS DA REDUÇÃO Z (CÓDIGOS 2E, 13, 14, 15 e 16).
   * Nível: 4
   * Ocorrência: vários (por arquivo)
   */
  private buildD365() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D365"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D365';
    /**
     * Código do totalizador, conforme Tabela
     *  4.4.6
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 7
     */
    const COD_TOT_PAR = '';
    /**
     * Valor acumulado no totalizador, relativo à respectiva Redução Z
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VLR_ACUM_TOT = '';
    /**
     * Número do totalizador quando ocorrer mais
     *  de uma situação com a mesma carga tributária efetiva
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 2
     */
    const NR_TOT = '';
    /**
     * Descrição da situação tributária relativa ao
     *  totalizador parcial, quando houver mais de um com a mesma carga tributária efetiva
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_NR_TOT = '';
    this.registers.push([REG, COD_TOT_PAR, VLR_ACUM_TOT, NR_TOT, DESCR_NR_TOT]);
  }

  /**
   * Registro D370 - COMPLEMENTO DOS DOCUMENTOS INFORMADOS (CÓDIGOS 13, 14,
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildD370() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D370"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D370';
    /**
     * Código do município de origem do serviço, conforme a tabela IBGE
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Valor total da prestação de serviço
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Quantidade de bilhetes emitidos
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const QTD_BILH = '';
    /**
     * Valor total da base de cálculo do ICMS
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor total do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    this.registers.push([
      REG,
      COD_MUN_ORIG,
      VL_SERV,
      QTD_BILH,
      VL_BC_ICMS,
      VL_ICMS,
    ]);
  }

  /**
   * Registro D390 - REGISTRO ANALÍTICO DO MOVIMENTO DIÁRIO (CÓDIGOS 13, 14, 15, 16 E 2E).
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildD390() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D390"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D390';
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
     * Valor da operação correspondente à combinação de CST_ICMS, CFOP, e alíquota do ICMS, incluídas as despesas acessórias e acréscimos
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor da base de cálculo do ISSQN
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISSQN = '';
    /**
     * Alíquota do ISSQN
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ISSQN = '';
    /**
     * Valor do ISSQN
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISSQN = '';
    /**
     * Base de cálculo do ICMS acumulada relativa à alíquota informada
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor do ICMS acumulado relativo à alíquota
     *  informada
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
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
      VL_BC_ISSQN,
      ALIQ_ISSQN,
      VL_ISSQN,
      VL_BC_ICMS,
      VL_ICMS,
      COD_OBS,
    ]);
  }

  /**
   * Registro D400 - RESUMO DE MOVIMENTO DIÁRIO - RMD (CÓDIGO 18).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD400() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D400"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D400';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - agência, filial ou posto
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento fiscal, conforme a Tabela 4.1.2
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_SIT = '';
    /**
     * Série do documento fiscal
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Subsérie do documento fiscal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do documento fiscal resumo
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor acumulado dos descontos
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor acumulado da prestação de serviço
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor total da base de cálculo do ICMS
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor total do ICMS
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor do PIS
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 16
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    this.registers.push([
      REG,
      COD_PART,
      COD_MOD,
      COD_SIT,
      SER,
      SUB,
      NUM_DOC,
      DT_DOC,
      VL_DOC,
      VL_DESC,
      VL_SERV,
      VL_BC_ICMS,
      VL_ICMS,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
    ]);
  }

  /**
   * Registro D410 - DOCUMENTOS INFORMADOS (CÓDIGOS 13, 14, 15 E 16).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD410() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D410"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D410';
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
     * Subsérie do documento fiscal
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do documento fiscal inicial (mesmo modelo, série e subsérie)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 6
     */
    const NUM_DOC_INI = '';
    /**
     * Número do documento fiscal final (mesmo modelo, série e subsérie)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
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
     * Código da Situação Tributária, conforme a Tabela indicada no item 4.3.1
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
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
     * Valor total acumulado das operações correspondentes à combinação de CST_ICMS, CFOP e alíquota do ICMS, incluídas as despesas acessórias e acréscimos
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Valor acumulado dos descontos
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor acumulado da prestação de serviço
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor acumulado da base de cálculo do ICMS
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    this.registers.push([
      REG,
      COD_MOD,
      SER,
      SUB,
      NUM_DOC_INI,
      NUM_DOC_FIN,
      DT_DOC,
      CST_ICMS,
      CFOP,
      ALIQ_ICMS,
      VL_OPR,
      VL_DESC,
      VL_SERV,
      VL_BC_ICMS,
      VL_ICMS,
    ]);
  }

  /**
   * Registro D411 - DOCUMENTOS CANCELADOS DOS DOCUMENTOS INFORMADOS (CÓDIGO 13, 14, 15 e 16).
   * Nível: 4
   * Ocorrência: vários (por arquivo)
   */
  private buildD411() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D411"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D411';
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
   * Registro D420 - COMPLEMENTO DOS DOCUMENTOS INFORMADOS (CÓDIGO 13, 14, 15 e 16).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD420() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D420"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D420';
    /**
     * Código do município de origem do serviço, conforme a tabela IBGE
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_ORIG = '';
    /**
     * Valor total da prestação de serviço
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor total da base de cálculo do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor total do ICMS
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    this.registers.push([REG, COD_MUN_ORIG, VL_SERV, VL_BC_ICMS, VL_ICMS]);
  }

  /**
   * Registro D500 - NOTA FISCAL DE SERVIÇO DE COMUNICAÇÃO (CÓDIGO 21) E NOTA FISCAL DE SERVIÇO DE TELECOMUNICAÇÃO (CÓDIGO 22).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD500() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D500"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D500';
    /**
     * Indicador do tipo de operação:
     *  0- Aquisição;
     *  1- Prestação
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OPER = '';
    /**
     * Indicador do emitente do documento fiscal:
     *  0- Emissão própria;
     *  1- Terceiros
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do prestador do serviço, no caso de aquisição;
     *  - do tomador do serviço, no caso de prestação
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do modelo do documento fiscal, conforme a
     *  Tabela 4.1.1
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento fiscal, conforme a Tabela 4.1.2
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
     * Tipo: C
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do documento fiscal
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Data da entrada (aquisição) ou da saída (prestação do
     *  serviço)
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_A_P = '';
    /**
     * Valor total do documento fiscal
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor total do desconto
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor da prestação de serviços
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor total dos serviços não-tributados pelo ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV_NT = '';
    /**
     * Valores cobrados em nome de terceiros
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_TERC = '';
    /**
     * Valor de outras despesas indicadas no documento fiscal
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_DA = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor do ICMS
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Código da informação complementar (campo 02 do Registro 0450)
     *
     * Número: 20
     * Tipo: C
     * Tamanho: 6
     */
    const COD_INF = '';
    /**
     * Valor do PIS
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 22
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 23
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTA = '';
    /**
     * Código do Tipo de Assinante:
     *  1 - Comercial/Industrial
     *  2 - Poder Público
     *  3 - Residencial/Pessoa física
     *  4 - Público
     *  5 - Semi-Público
     *  6 - Outros
     *
     * Número: 24
     * Tipo: N
     * Tamanho: 001*
     */
    const TP_ASSINANTE = '';
    this.registers.push([
      REG,
      IND_OPER,
      IND_EMIT,
      COD_PART,
      COD_MOD,
      COD_SIT,
      SER,
      SUB,
      NUM_DOC,
      DT_DOC,
      DT_A_P,
      VL_DOC,
      VL_DESC,
      VL_SERV,
      VL_SERV_NT,
      VL_TERC,
      VL_DA,
      VL_BC_ICMS,
      VL_ICMS,
      COD_INF,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
      TP_ASSINANTE,
    ]);
  }

  /**
   * Registro D510 - ITENS DO DOCUMENTO - NOTA FISCAL DE SERVIÇO DE COMUNICAÇÃO (CÓDIGO 21) E SERVIÇO DE TELECOMUNICAÇÃO (CÓDIGO 22).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD510() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D510"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D510';
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
     * Código de classificação do item do serviço de
     *  comunicação ou de telecomunicação, conforme a Tabela 4.4.1
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
     * Unidade do item (Campo 02 do registro 0190)
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
     * Código da Situação Tributária, conforme a Tabela indicada no item 4.3.1
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
     * Valor da base de cálculo do ICMS de outras UFs
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_UF = '';
    /**
     * Valor do ICMS de outras UFs
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF = '';
    /**
     * Indicador do tipo de receita:
     *  0- Receita própria - serviços prestados;
     *  1- Receita própria - cobrança de débitos;
     *  2- Receita própria - venda de mercadorias;
     *  3- Receita própria - venda de serviço pré-pago;
     *  4- Outras receitas próprias;
     *  5- Receitas de terceiros (co-faturamento); 9- Outras receitas de terceiros
     *
     * Número: 16
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_REC = '';
    /**
     * Código do participante (campo 02 do Registro 0150) receptor da receita, terceiro da operação, se houver
     *
     * Número: 17
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Valor do PIS
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil debitada/creditada
     *
     * Número: 20
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
      VL_BC_ICMS_UF,
      VL_ICMS_UF,
      IND_REC,
      COD_PART,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
    ]);
  }

  /**
   * Registro D530 - TERMINAL FATURADO.
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD530() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D530"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D530';
    /**
     * Indicador do tipo de serviço prestado:
     *  0 - Telefonia;
     *  1 - Comunicação de dados;
     *  2 - TV por assinatura;
     *  3 - Provimento de acesso à Internet;
     *  4 - Multimídia;
     *  9 - Outros
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_SERV = '';
    /**
     * Data em que se iniciou a prestação do serviço
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI_SERV = '';
    /**
     * Data em que se encerrou a prestação do serviço
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN_SERV = '';
    /**
     * Período fiscal da prestação do serviço (MMAAAA)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 006*
     */
    const PER_FISCAL = '';
    /**
     * Código de área do terminal faturado
     *
     * Número: 6
     * Tipo: C
     * Tamanho: -
     */
    const COD_AREA = '';
    /**
     * Identificação do terminal faturado
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const TERMINAL = '';
    this.registers.push([
      REG,
      IND_SERV,
      DT_INI_SERV,
      DT_FIN_SERV,
      PER_FISCAL,
      COD_AREA,
      TERMINAL,
    ]);
  }

  /**
   * Registro D590 - REGISTRO ANALÍTICO DO DOCUMENTO (CÓDIGO 21 E 22).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD590() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D590"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D590';
    /**
     * Código da Situação Tributária, conforme a tabela
     *  indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação, conforme a
     *  tabela indicada no item 4.2.2
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
     * Valor da operação correspondente à combinação de CST_ICMS, CFOP, e alíquota do ICMS, incluídas as despesas acessórias e acréscimos
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Parcela correspondente ao valor da base de cálculo
     *  do ICMS de outras UFs, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_UF = '';
    /**
     * Parcela correspondente ao valor do ICMS de outras
     *  UFs, referente à combinação de CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação (campo 02 do Registro 0460)
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
      VL_BC_ICMS_UF,
      VL_ICMS_UF,
      VL_RED_BC,
      COD_OBS,
    ]);
  }

  /**
   * Registro D600 - CONSOLIDAÇÃO DA PRESTAÇÃO DE SERVIÇOS - NOTAS DE SERVIÇO DE COMUNICAÇÃO (CÓDIGO 21) E DE SERVIÇO DE TELECOMUNICAÇÃO (CÓDIGO 22).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD600() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D600"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D600';
    /**
     * Código do modelo do documento fiscal, conforme a
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código do município dos terminais faturados,
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
     * Código de classe de consumo dos serviços de
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_CONS = '';
    /**
     * Quantidade de documentos consolidados neste
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CONS = '';
    /**
     * Data dos documentos consolidados
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Valor total acumulado dos documentos fiscais
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor acumulado dos descontos
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor acumulado das prestações de serviços tributados
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valor acumulado dos serviços não-tributados pelo
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV_NT = '';
    /**
     * Valores cobrados em nome de terceiros
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_TERC = '';
    /**
     * Valor acumulado das despesas acessórias
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_DA = '';
    /**
     * Valor acumulado da base de cálculo do ICMS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor acumulado do ICMS
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor do PIS
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor da COFINS
     *
     * Número: 18
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
      DT_DOC,
      VL_DOC,
      VL_DESC,
      VL_SERV,
      VL_SERV_NT,
      VL_TERC,
      VL_DA,
      VL_BC_ICMS,
      VL_ICMS,
      VL_PIS,
      VL_COFINS,
    ]);
  }

  /**
   * Registro D610 - ITENS DO DOCUMENTO CONSOLIDADO (CÓDIGO 21 E 22).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD610() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D610"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D610';
    /**
     * comunicação ou de telecomunicação,
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
     * Unidade do item (Campo 02 do registro 0190)
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
     * Código da Situação Tributária, conforme a
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação
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
     * Valor da base de cálculo do ICMS de outras
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_UF = '';
    /**
     * Valor do ICMS de outras UFs
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF = '';
    /**
     * base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP e alíquota
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Valor acumulado do PIS
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor acumulado da COFINS
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Código da conta analítica contábil
     *
     * Número: 18
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
      VL_BC_ICMS_UF,
      VL_ICMS_UF,
      VL_RED_BC,
      VL_PIS,
      VL_COFINS,
      COD_CTA,
    ]);
  }

  /**
   * Registro D690 - REGISTRO ANALÍTICO DOS DOCUMENTOS (CÓDIGOS 21 e 22).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD690() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D690"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D690';
    /**
     * Código da Situação Tributária, conforme a tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação,
     *  conforme a tabela indicada no item 4.2.2
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
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de
     *  cálculo do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente à combinação CST_ICMS, CFOP, e
     *  alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Parcela correspondente ao valor da base de cálculo do ICMS de outras UFs, referente à
     *  combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_UF = '';
    /**
     * Parcela correspondente ao valor do ICMS de outras UFs, referente à combinação de CST ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF = '';
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
     * Código da observação do lançamento fiscal
     *  (campo 02 do Registro 0460)
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
      VL_BC_ICMS_UF,
      VL_ICMS_UF,
      VL_RED_BC,
      COD_OBS,
    ]);
  }

  /**
   * Registro D695 - CONSOLIDAÇÃO DA PRESTAÇÃO DE SERVIÇOS - NOTAS DE SERVIÇO DE COMUNICAÇÃO (CÓDIGO 21) E DE SERVIÇO DE TELECOMUNICAÇÃO (CÓDIGO 22) (EMPRESAS OBRIGADAS À ENTREGA DOS ARQUIVOS PREVISTOS NO CONVÊNIO ICMS 115/03).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD695() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D695"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D695';
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
     * Data de emissão inicial dos documentos / Data
     *  inicial de vencimento da fatura
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
     * Chave de codificação digital do arquivo Mestre
     *  de Documento Fiscal
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
   * Registro D696 - REGISTRO ANALÍTICO DOS DOCUMENTOS (CÓDIGO 21 E 22).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD696() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D696"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D696';
    /**
     * Código da Situação Tributária, conforme a tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação, conforme a tabela indicada no item 4.2.2
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
     * Valor da operação correspondente à combinação de CST_ICMS, CFOP, e alíquota do ICMS, incluídas as despesas acessórias e acréscimos
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo
     *  do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Parcela correspondente ao valor da base de cálculo
     *  do ICMS de outras UFs, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_UF = '';
    /**
     * Parcela correspondente ao valor do ICMS de outras UFs, referente à combinação de CST_ICMS, CFOP,
     *  e alíquota do ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_UF = '';
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
      VL_BC_ICMS_UF,
      VL_ICMS_UF,
      VL_RED_BC,
      COD_OBS,
    ]);
  }

  /**
   * Registro D697 - REGISTRO DE INFORMAÇÕES DE OUTRAS UFs, RELATIVAMENTE
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildD697() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D697"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D697';
    /**
     * Sigla da unidade da federação
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor do ICMS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    this.registers.push([REG, UF, VL_BC_ICMS, VL_ICMS]);
  }

  /**
   * Registro D700 - NOTA FISCAL FATURA ELETRÔNICA DE SERVIÇOS DE COMUNICAÇÃO - NFCom (CÓDIGO 62).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildD700() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D700"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D700';
    /**
     * Indicador do tipo de prestação: 0: Entrada
     *  1: Saída
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OPER = '';
    /**
     * Indicador do emitente do documento fiscal: 0: Emissão própria;
     *  1: Terceiros
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante (Campo 02 do Registro 0150) do prestador, no caso de entradas
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
     * Código da situação do documento fiscal, conforme a Tabela 4.1.2
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
     * Tipo: N
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
     * Data da emissão do documento fiscal
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Data da entrada
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_E_S = '';
    /**
     * Valor do documento fiscal
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor do desconto
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor dos serviços tributados pelo ICMS
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valores cobrados em nome do prestador sem destaque
     *  de ICMS
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
     */
    const VL_TERC = '';
    /**
     * Valor de despesas acessórias indicadas no documento fiscal
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_DA = '';
    /**
     * Valor da Base de Cálculo (BC) do ICMS
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor do ICMS
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Código da informação complementar do documento fiscal (campo 02 do Registro 0450)
     *
     * Número: 19
     * Tipo: C
     * Tamanho: 6
     */
    const COD_INF = '';
    /**
     * Valor do PIS/Pasep
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor do Cofins
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    /**
     * Chave da Nota Fiscal Fatura de Serviço de Comunicação Eletrônica
     *
     * Número: 22
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DOCe = '';
    /**
     * Finalidade da emissão do documento eletrônico: 0 - NFCom Normal;
     *  3 - NFCom de Substituição;
     *  4 - NFCom de Ajuste;
     *
     * Número: 23
     * Tipo: N
     * Tamanho: 001*
     */
    const FIN_DOCe = '';
    /**
     * Tipo de faturamento do documento eletrônico:
     *  0 - Faturamento Normal;
     *  1 - Faturamento centralizado;
     *  2 - Cofaturamento
     *
     * Número: 24
     * Tipo: N
     * Tamanho: 001*
     */
    const TIP_FAT = '';
    /**
     * Código do modelo do documento fiscal referenciado,
     *  conforme a Tabela 4.1.1
     *
     * Número: 25
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_MOD_DOC_REF = '';
    /**
     * Chave da nota referenciada
     *
     * Número: 26
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DOCe_REF = '';
    /**
     * Código de autenticação digital do registro, campo 36 do registro do Arquivo tipo mestre de documento fiscal, conforme definido no Convênio 115/2003
     *
     * Número: 27
     * Tipo: C
     * Tamanho: 32
     */
    const HASH_DOC_REF = '';
    /**
     * Série do documento fiscal referenciado
     *
     * Número: 28
     * Tipo: C
     * Tamanho: 4
     */
    const SER_DOC_REF = '';
    /**
     * Número do documento fiscal referenciado
     *
     * Número: 29
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_REF = '';
    /**
     * Mês e ano da emissão do documento fiscal
     *  referenciado
     *
     * Número: 30
     * Tipo: N
     * Tamanho: 006*
     */
    const MES_DOC_REF = '';
    /**
     * Código do município do destinatário conforme a tabela
     *  do IBGE
     *
     * Número: 31
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN_DEST = '';
    this.registers.push([
      REG,
      IND_OPER,
      IND_EMIT,
      COD_PART,
      COD_MOD,
      COD_SIT,
      SER,
      NUM_DOC,
      DT_DOC,
      DT_E_S,
      VL_DOC,
      VL_DESC,
      VL_SERV,
      VL_SERV_NT,
      VL_TERC,
      VL_DA,
      VL_BC_ICMS,
      VL_ICMS,
      COD_INF,
      VL_PIS,
      VL_COFINS,
      CHV_DOCe,
      FIN_DOCe,
      TIP_FAT,
      COD_MOD_DOC_REF,
      CHV_DOCe_REF,
      HASH_DOC_REF,
      SER_DOC_REF,
      NUM_DOC_REF,
      MES_DOC_REF,
      COD_MUN_DEST,
    ]);
  }

  /**
   * Registro D730 - REGISTRO ANALÍTICO NOTA FISCAL FATURA ELETRÔNICA DE SERVIÇOS DE COMUNICAÇÃO - NFCom (CÓDIGO 62).
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD730() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo " D730"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D730';
    /**
     * Código da Situação Tributária, conforme a tabela
     *  indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação, conforme a
     *  tabela indicada no item 4.2.2
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
     * Valor da prestação correspondente à combinação de CST_ICMS, CFOP, e alíquota do ICMS, incluídas as
     *  despesas acessórias e acréscimos
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ICMS" referente à combinação CST_ICMS, CFOP, e
     *  alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS, incluindo o FCP, quando aplicável, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação (campo 02 do Registro 0460)
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
   * Registro D731 - INFORMAÇÕES DO FUNDO DE COMBATE À POBREZA - FCP - (CÓDIGO 62)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildD731() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D731"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D731';
    /**
     * Valor do Fundo de Combate à Pobreza (FCP) vinculado à operação própria, na combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_OP = '';
    this.registers.push([REG, VL_FCP_OP]);
  }

  /**
   * Registro D735 - OBSERVAÇÕES DO LANÇAMENTO FISCAL (CÓDIGO 62)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD735() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D735"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D735';
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
   * Registro D737 - OUTRAS OBRIGAÇÕES TRIBUTÁRIAS, AJUSTES E INFORMAÇÕES DE VALORES PROVENIENTES DE DOCUMENTO FISCAL
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildD737() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D737"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D737';
    /**
     * Código do ajustes/benefício/incentivo, conforme tabela indicada no item 5.3
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
     * Base de cálculo do ICMS
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
     * Valor do ICMS
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
   * Registro D750 - ESCRITURAÇÃO CONSOLIDADA DA NOTA FISCAL FATURA ELETRÔNICA DE SERVIÇOS DE COMUNICAÇÃO - NFCom (CÓDIGO 62)
   * Nível: 2
   * Ocorrência: 1:N
   */
  private buildD750() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D750"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D750';
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
     * Tamanho: 3
     */
    const SER = '';
    /**
     * Data da emissão dos documentos
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Quantidade de documentos consolidados neste registro
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CONS = '';
    /**
     * Forma de pagamento:
     *  0 - pré pago
     *  1 - pós pago
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 1
     */
    const IND_PREPAGO = '';
    /**
     * Valor total dos documentos
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_DOC = '';
    /**
     * Valor dos serviços tributados pelo ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV = '';
    /**
     * Valores cobrados em nome do prestador sem destaque de ICMS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_SERV_NT = '';
    /**
     * Valor total cobrado em nome de terceiros
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_TERC = '';
    /**
     * Valor total dos descontos
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_DESC = '';
    /**
     * Valor total das despesas acessórias
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DA = '';
    /**
     * Valor total da base de cálculo do ICMS
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor total do ICMS
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor total do PIS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_PIS = '';
    /**
     * Valor total da COFINS
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_COFINS = '';
    this.registers.push([
      REG,
      COD_MOD,
      SER,
      DT_DOC,
      QTD_CONS,
      IND_PREPAGO,
      VL_DOC,
      VL_SERV,
      VL_SERV_NT,
      VL_TERC,
      VL_DESC,
      VL_DA,
      VL_BC_ICMS,
      VL_ICMS,
      VL_PIS,
      VL_COFINS,
    ]);
  }

  /**
   * Registro D760 - REGISTRO ANALÍTICO DA ESCRITURAÇÃO CONSOLIDADA DA NOTA FISCAL FATURA ELETRÔNICA DE SERVIÇOS DE COMUNICAÇÃO - NFCom (CÓDIGO 62)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildD760() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D760"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D760';
    /**
     * Código da Situação Tributária, conforme a tabela indicada no item 4.3.1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const CST_ICMS = '';
    /**
     * Código Fiscal de Operação e Prestação, conforme a tabela indicada no item 4.2.2
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
     * Valor da operação correspondente à combinação de CST_ICMS, CFOP, e alíquota do ICMS, incluídas as
     *  despesas acessórias menos os descontos incondicionais
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OPR = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ICMS" referente à combinação CST_ICMS, CFOP, e alíquota do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Parcela correspondente ao "Valor do ICMS", incluindo o FCP, quando aplicável, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS = '';
    /**
     * Valor não tributado em função da redução da base de cálculo do ICMS, referente à combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_RED_BC = '';
    /**
     * Código da observação (campo 02 do Registro 0460)
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
   * Registro D761 - INFORMAÇÕES DO FUNDO DE COMBATE À POBREZA - FCP - (CÓDIGO 62)
   * Nível: 4
   * Ocorrência: 1:1
   */
  private buildD761() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "D761"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D761';
    /**
     * Valor do Fundo de Combate à Pobreza (FCP) vinculado à operação própria, na combinação de CST_ICMS, CFOP e alíquota do ICMS
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_OP = '';
    this.registers.push([REG, VL_FCP_OP]);
  }

  /**
   * Registro D990 - ENCERRAMENTO DO BLOCO D.
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildD990() {
    /**
     * Texto fixo contendo "D990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'D990';
    /**
     * Quantidade total de linhas do Bloco D
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_D = `${this.registers.length + 1}`;
    this.registers.push([REG, QTD_LIN_D]);
  }
}
