import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

export interface Bloco1Options {
  include?: boolean;
}

export default class Bloco1 extends Bloco {
  private include: boolean;

  constructor(options: BlocoOptions & Bloco1Options) {
    super(options);
    this.include = options.include ?? false;
  }

  build(): string[][] {
    this.registers = [];

    this.build1001();
    this.build1010();
    if (this.include) {
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
    }
    this.build1990();

    return this.registers;
  }

  /**
   * Registro 1001 - ABERTURA DO BLOCO 1
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private build1001() {
    /**
     * Texto fixo contendo "1001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1001';
    /**
     * Indicador de movimento:
     *  0- Bloco com dados informados;
     *  1- Bloco sem dados informados
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 001*
     */
    const IND_MOV = this.include ? '0' : '1';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro 1010 - OBRIGATORIEDADE DE REGISTROS DO BLOCO 1
   * Nível: 2
   * Ocorrência: 1
   */
  private build1010() {
    /**
     * Texto fixo contendo "1010"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '1010';
    /**
     * Reg. 1100 - Ocorreu averbação (conclusão) de exportação no período:
     *  S - Sim N - Não
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EXP = 'N';
    /**
     * Reg 1200 - Existem informações acerca de créditos de ICMS a serem controlados, definidos pela Sefaz:
     *  S - Sim N - Não
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_CCRF = 'N';
    /**
     * Reg. 1300 - É comércio varejista de combustíveis com movimentação e/ou estoque no período:
     *  S - Sim N - Não
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_COMB = 'N';
    /**
     * Reg. 1390 - Usinas de açúcar e/álcool - O estabelecimento é produtor de açúcar e/ou álcool carburante com movimentação e/ou estoque no período: S - Sim
     *  N - Não
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_USINA = 'N';
    /**
     * Reg 1400 - Sendo o registro obrigatório em sua Unidade de Federação, existem informações a serem prestadas neste registro:
     *  S - Sim;
     *  N - Não
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_VA = 'N';
    /**
     * Reg 1500 - A empresa é distribuidora de energia e ocorreu fornecimento de energia elétrica para consumidores de outra UF:
     *  S - Sim;
     *  N - Não
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EE = 'N';
    /**
     * Reg 1601 - Realizou vendas com instrumentos eletrônicos de pagamento:
     *  S - Sim;
     *  N - Não
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_CART = 'N';
    /**
     * Reg. 1700 - Foram emitidos documentos fiscais em papel no período em unidade da federação que exija o controle de utilização de documentos fiscais:
     *  S - Sim N - Não
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_FORM = 'N';
    /**
     * Reg 1800 - A empresa prestou serviços de transporte aéreo de cargas e de passageiros:
     *  S - Sim N - Não
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_AER = 'N';
    /**
     * Reg. 1960 - Possui informações GIAF1? S - Sim;
     *  N - Não
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_GIAF1 = 'N';
    /**
     * Reg. 1970 - Possui informações GIAF3? S - Sim;
     *  N - Não
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_GIAF3 = 'N';
    /**
     * Reg. 1980 - Possui informações GIAF4? S - Sim;
     *  N - Não
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_GIAF4 = 'N';
    /**
     * Reg. 1250 - Possui informações consolidadas de saldos de restituição, ressarcimento e complementação do ICMS?
     *  S - Sim;
     *  N - Não
     *
     * Número: 14
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_REST_RESSARC_COMPL_ICMS = 'N';
    this.registers.push([
      REG,
      IND_EXP,
      IND_CCRF,
      IND_COMB,
      IND_USINA,
      IND_VA,
      IND_EE,
      IND_CART,
      IND_FORM,
      IND_AER,
      IND_GIAF1,
      IND_GIAF3,
      IND_GIAF4,
      IND_REST_RESSARC_COMPL_ICMS,
    ]);
  }

  /**
   * Registro 1100 - REGISTRO DE INFORMAÇÕES SOBRE EXPORTAÇÃO.
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1100() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1100"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1100';
    /**
     * Informe o tipo de documento:
     *  0 - Declaração de Exportação;
     *  1 - Declaração Simplificada de Exportação;
     *  2 - Declaração Única de Exportação
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 001*
     */
    const IND_DOC = '';
    /**
     * Número da declaração
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 14
     */
    const NRO_DE = '';
    /**
     * Data da declaração (DDMMAAAA)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DE = '';
    /**
     * Preencher com:
     *  0 - Exportação Direta
     *  1 - Exportação Indireta
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 001*
     */
    const NAT_EXP = '';
    /**
     * Nº do registro de Exportação
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 12
     */
    const NRO_RE = '';
    /**
     * Data do Registro de Exportação (DDMMAAAA)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_RE = '';
    /**
     * Nº do conhecimento de embarque
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 18
     */
    const CHC_EMB = '';
    /**
     * Data do conhecimento de embarque (DDMMAAAA)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_CHC = '';
    /**
     * Data da averbação da Declaração de exportação (ddmmaaaa)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_AVB = '';
    /**
     * Informação do tipo de conhecimento de embarque: 01 - AWB;
     *  02 - MAWB;
     *  03 - HAWB;
     *  04 - COMAT;
     *  06 - R. EXPRESSAS;
     *  07 - ETIQ. REXPRESSAS;
     *  08 - HR. EXPRESSAS;
     *  09 - AV7;
     *  10 - BL;
     *  11 - MBL;
     *  12 - HBL;
     *  13 - CRT;
     *  14 - DSIC;
     *  16 - COMAT BL;
     *  17 - RWB;
     *  18 - HRWB;
     *  19 - TIF/DTA;
     *  20 - CP2;
     *  91 - NÂO IATA;
     *  92 - MNAO IATA;
     *  93 - HNAO IATA;
     *  99 - OUTROS
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 002*
     */
    const TP_CHC = '';
    /**
     * Código do país de destino da mercadoria (Preencher conforme
     *  tabela do SISCOMEX)
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 3
     */
    const PAIS = '';
    this.registers.push([
      REG,
      IND_DOC,
      NRO_DE,
      DT_DE,
      NAT_EXP,
      NRO_RE,
      DT_RE,
      CHC_EMB,
      DT_CHC,
      DT_AVB,
      TP_CHC,
      PAIS,
    ]);
  }

  /**
   * Registro 1105 - DOCUMENTOS FISCAIS DE EXPORTAÇÃO.
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1105() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1105"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1105';
    /**
     * Código do modelo da NF, conforme tabela 4.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Série da Nota Fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 3
     */
    const SERIE = '';
    /**
     * Número de Nota Fiscal de Exportação emitida pelo Exportador
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Chave da Nota Fiscal Eletrônica
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_NFE = '';
    /**
     * Data da emissão da NF de exportação
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    this.registers.push([
      REG,
      COD_MOD,
      SERIE,
      NUM_DOC,
      CHV_NFE,
      DT_DOC,
      COD_ITEM,
    ]);
  }

  /**
   * Registro 1110 - OPERAÇÕES DE EXPORTAÇÃO INDIRETA - MERCADORIAS DE TERCEIROS.
   * Nível: 4
   * Ocorrência: 1:N
   */
  private build1110() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1110"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1110';
    /**
     * Código do participante-Fornecedor da Mercadoria destinada à exportação (campo 02 do Registro 0150)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do documento fiscal, conforme a Tabela 4.1.1
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Número do documento fiscal recebido com fins específicos de exportação
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal recebido com fins específicos
     *  de exportação
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Chave da Nota Fiscal Eletrônica
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_NFE = '';
    /**
     * Número do Memorando de Exportação
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const NR_MEMO = '';
    /**
     * Quantidade do item efetivamente exportado
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const QTD = '';
    /**
     * Unidade do item (Campo 02 do registro 0190)
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    this.registers.push([
      REG,
      COD_PART,
      COD_MOD,
      NUM_DOC,
      DT_DOC,
      CHV_NFE,
      NR_MEMO,
      QTD,
      UNID,
    ]);
  }

  /**
   * Registro 1200 - CONTROLE DE CRÉDITOS FISCAIS - ICMS.
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1200() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1200"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1200';
    /**
     * Código de ajuste, conforme informado na Tabela indicada no
     *  item 5.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 008*
     */
    const COD_AJ_APUR = '';
    /**
     * Saldo de créditos fiscais de períodos anteriores
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const SLD_CRED = '';
    /**
     * Total de crédito apropriado no mês
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const CRED_APR = '';
    /**
     * Total de créditos recebidos por transferência
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const CRED_RECEB = '';
    /**
     * Total de créditos utilizados no período
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const CRED_UTIL = '';
    /**
     * Saldo de crédito fiscal acumulado a transportar para o período
     *  seguinte
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const SLD_CRED_FIM = '';
    this.registers.push([
      REG,
      COD_AJ_APUR,
      SLD_CRED,
      CRED_APR,
      CRED_RECEB,
      CRED_UTIL,
      SLD_CRED_FIM,
    ]);
  }

  /**
   * Registro 1210 - UTILIZAÇÃO DE CRÉDITOS FISCAIS - ICMS.
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1210() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1210"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1210';
    /**
     * Tipo de utilização do crédito, conforme tabela indicada no
     *  item 5.5
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 004*
     */
    const TIPO_UTIL = '';
    /**
     * Número do documento utilizado na baixa de créditos
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const NR_DOC = '';
    /**
     * Total de crédito utilizado
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_CRED_UTIL = '';
    /**
     * Chave do Documento Eletrônico
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DOCe = '';
    this.registers.push([REG, TIPO_UTIL, NR_DOC, VL_CRED_UTIL, CHV_DOCe]);
  }

  /**
   * Registro 1250 - INFORMAÇÕES CONSOLIDADAS DE SALDOS DE RESTITUIÇÃO, RESSARCIMENTO E COMPLEMENTAÇÃO DO ICMS
   * Nível: 2
   * Ocorrência: 1:1
   */
  private build1250() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1250"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1250';
    /**
     * Informar o valor total do ICMS operação própria que o informante tem direito ao crédito, na forma prevista na
     *  legislação, referente às hipóteses de restituição em que há previsão deste crédito
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_CREDITO_ICMS_OP = '';
    /**
     * Informar o valor total do ICMS ST que o informante tem direito ao crédito, na forma prevista na legislação, referente
     *  às hipóteses de restituição em que há previsão deste crédito
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST_REST = '';
    /**
     * Informar o valor total do FCP_ST agregado ao valor do
     *  ICMS ST informado no campo "VL_ICMS_ST_REST"
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_ST_REST = '';
    /**
     * Informar o valor total do débito referente ao complemento do imposto, nos casos previstos na legislação
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST_COMPL = '';
    /**
     * Informar o valor total do FCP_ST agregado ao valor
     *  informado no campo "VL_ICMS_ST_COMPL"
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_ST_COMPL = '';
    this.registers.push([
      REG,
      VL_CREDITO_ICMS_OP,
      VL_ICMS_ST_REST,
      VL_FCP_ST_REST,
      VL_ICMS_ST_COMPL,
      VL_FCP_ST_COMPL,
    ]);
  }

  /**
   * Registro 1255 - INFORMAÇÕES CONSOLIDADAS DE SALDOS DE RESTITUIÇÃO, RESSARCIMENTO E COMPLEMENTAÇÃO DO ICMS POR MOTIVO
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1255() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1255"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1255';
    /**
     * Código do motivo da restituição ou complementação conforme Tabela 5.7
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 005*
     */
    const COD_MOT_REST_COMPL = '';
    /**
     * Informar o valor total do ICMS operação própria que o informante tem direito ao crédito, na forma prevista na legislação, referente às hipóteses de restituição em que
     *  há previsão deste crédito, para o mesmo "COD_MOT_REST_COMPL"
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_CREDITO_ICMS_OP_MOT = '';
    /**
     * Informar o valor total do ICMS ST que o informante tem direito ao crédito, na forma prevista na legislação, referente às hipóteses de restituição em que há previsão deste crédito, para o mesmo
     *  "COD_MOT_REST_COMPL"
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST_REST_MOT = '';
    /**
     * Informar o valor total do FCP_ST agregado ao valor do ICMS ST informado no campo
     *  "VL_ICMS_ST_REST_MOT"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_ST_REST_MOT = '';
    /**
     * Informar o valor total do débito referente ao complemento do imposto, nos casos previstos na
     *  legislação, para o mesmo "COD_MOT_REST_COMPL"
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST_COMPL_MOT = '';
    /**
     * Informar o valor total do FCP_ST agregado ao valor informado no campo "VL_ICMS_ST_COMPL_MOT"
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_FCP_ST_COMPL_MOT = '';
    this.registers.push([
      REG,
      COD_MOT_REST_COMPL,
      VL_CREDITO_ICMS_OP_MOT,
      VL_ICMS_ST_REST_MOT,
      VL_FCP_ST_REST_MOT,
      VL_ICMS_ST_COMPL_MOT,
      VL_FCP_ST_COMPL_MOT,
    ]);
  }

  /**
   * Registro 1300 - MOVIMENTAÇÃO DIÁRIA DE COMBUSTÍVEIS
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1300() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1300"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1300';
    /**
     * Código do Produto, constante do registro 0200
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Data do fechamento da movimentação
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FECH = '';
    /**
     * Estoque no início do dia, em litros
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const ESTQ_ABERT = '';
    /**
     * Volume Recebido no dia (em litros)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VOL_ENTR = '';
    /**
     * Volume Disponível (04 + 05), em litros
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VOL_DISP = '';
    /**
     * Volume Total das Saídas, em litros
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VOL_SAIDAS = '';
    /**
     * Estoque Escritural (06 - 07), litros
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const ESTQ_ESCR = '';
    /**
     * Valor da Perda, em litros
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VAL_AJ_PERDA = '';
    /**
     * Valor do ganho, em litros
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VAL_AJ_GANHO = '';
    /**
     * Estoque de Fechamento, em litros
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const FECH_FISICO = '';
    this.registers.push([
      REG,
      COD_ITEM,
      DT_FECH,
      ESTQ_ABERT,
      VOL_ENTR,
      VOL_DISP,
      VOL_SAIDAS,
      ESTQ_ESCR,
      VAL_AJ_PERDA,
      VAL_AJ_GANHO,
      FECH_FISICO,
    ]);
  }

  /**
   * Registro 1310 - MOVIMENTAÇÃO DIÁRIA DE COMBUSTÍVEIS POR TANQUE
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1310() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1310"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1310';
    /**
     * Tanque que armazena o combustível
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 3
     */
    const NUM_TANQUE = '';
    /**
     * Estoque no início do dia, em litros
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const ESTQ_ABERT = '';
    /**
     * Volume Recebido no dia (em litros)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VOL_ENTR = '';
    /**
     * Volume Disponível (03 + 04), em litros
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VOL_DISP = '';
    /**
     * Volume Total das Saídas, em litros
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VOL_SAIDAS = '';
    /**
     * Estoque Escritural(05 - 06), litros
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const ESTQ_ESCR = '';
    /**
     * Valor da Perda, em litros
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VAL_AJ_PERDA = '';
    /**
     * Valor do ganho, em litros
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VAL_AJ_GANHO = '';
    /**
     * Volume aferido no tanque, em litros. Estoque de fechamento
     *  físico do tanque
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const FECH_FISICO = '';
    this.registers.push([
      REG,
      NUM_TANQUE,
      ESTQ_ABERT,
      VOL_ENTR,
      VOL_DISP,
      VOL_SAIDAS,
      ESTQ_ESCR,
      VAL_AJ_PERDA,
      VAL_AJ_GANHO,
      FECH_FISICO,
    ]);
  }

  /**
   * Registro 1320 - VOLUME DE VENDAS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private build1320() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1320"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1320';
    /**
     * Bico Ligado à Bomba
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const NUM_BICO = '';
    /**
     * Número da intervenção
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const NR_INTERV = '';
    /**
     * Motivo da Intervenção
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 50
     */
    const MOT_INTERV = '';
    /**
     * Nome do Interventor
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 30
     */
    const NOM_INTERV = '';
    /**
     * CNPJ da empresa responsável pela intervenção
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ_INTERV = '';
    /**
     * CPF do técnico responsável pela intervenção
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF_INTERV = '';
    /**
     * Valor da leitura final do contador, no fechamento do bico
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VAL_FECHA = '';
    /**
     * Valor da leitura inicial do contador, na abertura do bico
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VAL_ABERT = '';
    /**
     * Aferições da Bomba, em litros
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VOL_AFERI = '';
    /**
     * Vendas (08 - 09 - 10 ) do bico , em litros
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VOL_VENDAS = '';
    this.registers.push([
      REG,
      NUM_BICO,
      NR_INTERV,
      MOT_INTERV,
      NOM_INTERV,
      CNPJ_INTERV,
      CPF_INTERV,
      VAL_FECHA,
      VAL_ABERT,
      VOL_AFERI,
      VOL_VENDAS,
    ]);
  }

  /**
   * Registro 1350 - BOMBAS
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1350() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1350"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1350';
    /**
     * Número de Série da Bomba
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const SERIE = '';
    /**
     * Nome do Fabricante da Bomba
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const FABRICANTE = '';
    /**
     * Modelo da Bomba
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const MODELO = '';
    /**
     * Identificador de medição:
     *  0 - analógico
     *  1 - digital
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 1
     */
    const TIPO_MEDICAO = '';
    this.registers.push([REG, SERIE, FABRICANTE, MODELO, TIPO_MEDICAO]);
  }

  /**
   * Registro 1360 - LACRES DA BOMBA
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1360() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1360"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1360';
    /**
     * Número do Lacre associado na Bomba
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 20
     */
    const NUM_LACRE = '';
    /**
     * Data de aplicação do Lacre
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_APLICACAO = '';
    this.registers.push([REG, NUM_LACRE, DT_APLICACAO]);
  }

  /**
   * Registro 1370 - BICOS DA BOMBA
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1370() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1370"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1370';
    /**
     * Número sequencial do bico ligado a bomba
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 3
     */
    const NUM_BICO = '';
    /**
     * Código do Produto, constante do registro 0200
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Tanque que armazena o combustível
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 3
     */
    const NUM_TANQUE = '';
    this.registers.push([REG, NUM_BICO, COD_ITEM, NUM_TANQUE]);
  }

  /**
   * Registro 1390 - CONTROLE DE PRODUÇÃO DE USINA
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1390() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1390"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1390';
    /**
     * Código do produto conforme tabela 5.8
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_PROD = '';
    this.registers.push([REG, COD_PROD]);
  }

  /**
   * Registro 1391 - PRODUÇÃO DIÁRIA DA USINA
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1391() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1391"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1391';
    /**
     * Data de produção (DDMMAAAA)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 008*
     */
    const DT_REGISTRO = '';
    /**
     * Quantidade de insumo esmagado (toneladas)
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_MOID = '';
    /**
     * Estoque inicial (litros / kg)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const ESTQ_INI = '';
    /**
     * Quantidade produzida (litros / kg)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD_PRODUZ = '';
    /**
     * Entrada de álcool anidro decorrente da transformação do álcool hidratado ou
     *  Entrada de álcool hidratado decorrente da transformação do álcool anidro (litros)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const ENT_ANID_HID = '';
    /**
     * Outras entradas (litros / kg)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const OUTR_ENTR = '';
    /**
     * Evaporação (litros) ou Quebra de peso (kg)
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const PERDA = '';
    /**
     * Consumo (litros)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const CONS = '';
    /**
     * Saída para transformação (litros)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const SAI_ANI_HID = '';
    /**
     * Saídas (litros / kg)
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const SAÍDAS = '';
    /**
     * Estoque final (litros / kg)
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const ESTQ_FIN = '';
    /**
     * Estoque inicial de mel residual (kg)
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const ESTQ_INI_MEL = '';
    /**
     * Produção de mel residual (kg) e entradas de mel (kg)
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const PROD_DIA_MEL = '';
    /**
     * Mel residual utilizado (kg) e saídas de mel (kg)
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const UTIL_MEL = '';
    /**
     * Produção de álcool (litros) ou açúcar (kg) proveniente do mel residual
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const PROD_ALC_MEL = '';
    /**
     * Observações
     *
     * Número: 17
     * Tipo: C
     * Tamanho: -
     */
    const OBS = '';
    /**
     * Informar o insumo conforme código do item (campo 02 do
     *  Registro 0200)
     *
     * Número: 18
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Tipo de resíduo produzido: 01 - Bagaço de cana
     *  02 - DDG
     *  03 - WDG
     *
     * Número: 19
     * Tipo: N
     * Tamanho: 002*
     */
    const TP_RESIDUO = '';
    /**
     * Quantidade de resíduo produzido (toneladas)
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const QTD_RESIDUO = '';
    this.registers.push([
      REG,
      DT_REGISTRO,
      QTD_MOID,
      ESTQ_INI,
      QTD_PRODUZ,
      ENT_ANID_HID,
      OUTR_ENTR,
      PERDA,
      CONS,
      SAI_ANI_HID,
      SAÍDAS,
      ESTQ_FIN,
      ESTQ_INI_MEL,
      PROD_DIA_MEL,
      UTIL_MEL,
      PROD_ALC_MEL,
      OBS,
      COD_ITEM,
      TP_RESIDUO,
      QTD_RESIDUO,
    ]);
  }

  /**
   * Registro 1400 - INFORMAÇÃO SOBRE VALORES AGREGADOS
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1400() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1400"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1400';
    /**
     * Código do item (Tabela própria da unidade da federação (Tabela
     *  de Itens UF Índice de Participação dos Municípios) ou campo 02 do Registro 0200
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_IPM = '';
    /**
     * Código do Município de origem/destino
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 007*
     */
    const MUN = '';
    /**
     * Valor mensal correspondente ao município
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VALOR = '';
    this.registers.push([REG, COD_ITEM_IPM, MUN, VALOR]);
  }

  /**
   * Registro 1500 - NOTA FISCAL/CONTA DE ENERGIA ELÉTRICA (CÓDIGO 06) - OPERAÇÕES INTERESTADUAIS.
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build1500() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1500"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1500';
    /**
     * Indicador do tipo de operação:
     *  1- Saída
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OPER = '';
    /**
     * Indicador do emitente do documento fiscal: 0- Emissão própria;
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do adquirente, no caso das saídas
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
     * Tipo: N
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Código de classe de consumo de energia elétrica: 01 - Comercial
     *  02 - Consumo Próprio 03 - Iluminação Pública 04 - Industrial
     *  05 - Poder Público
     *  06 - Residencial
     *  07 - Rural
     *  08 - Serviço Público
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
     * Valor total dos serviços não-tributados pelo ICMS
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
     * Valor acumulado da base de cálculo do ICMS
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
     * Valor acumulado do ICMS retido por substituição tributária
     *
     * Número: 22
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Código da informação complementar do documento fiscal (campo 02 do Registro 0450)
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
    const TP_LIGACAO = '';
    /**
     * Código de grupo de tensão:
     *
     * Número: 27
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_GRUPO_TENSAO = '';
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
      TP_LIGACAO,
      COD_GRUPO_TENSAO,
    ]);
  }

  /**
   * Registro 1510 - ITENS DO DOCUMENTO NOTA FISCAL/CONTA ENERGIA ELÉTRICA (CÓDIGO 06)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1510() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1510"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1510';
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
     * Código de classificação do item de energia elétrica, conforme a Tabela 4.4.1
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
     * Código da Situação Tributária, conforme a Tabela indicada no
     *  item 4.3.1
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
     * Valor da base de cálculo referente à substituição tributária
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_ST = '';
    /**
     * Alíquota do ICMS da substituição tributária na unidade da federação de destino
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ST = '';
    /**
     * Valor do ICMS referente à substituição tributária
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ST = '';
    /**
     * Indicador do tipo de receita:
     *  0- Receita própria;
     *  1- Receita de terceiros
     *
     * Número: 17
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_REC = '';
    /**
     * Código do participante receptor da receita, terceiro da operação
     *  (campo 02 do Registro 0150)
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
     * Código da conta analítica contábil debitada/creditada
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
   * Registro 1600 - TOTAL DAS OPERAÇÕES COM CARTÃO DE CRÉDITO E/OU DÉBITO, LOJA (PRIVATE LABEL) E DEMAIS INSTRUMENTOS DE PAGAMENTOS ELETRÔNICOS (VÁLIDO ATÉ 31/12/2021)
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1600() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1600"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1600';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  identificação da instituição financeira e/ou de pagamento
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Valor total das operações de crédito realizadas no período
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const TOT_CREDITO = '';
    /**
     * Valor total das operações de débito realizadas no período
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const TOT_DEBITO = '';
    this.registers.push([REG, COD_PART, TOT_CREDITO, TOT_DEBITO]);
  }

  /**
   * Registro 1601 - OPERAÇÕES COM INSTRUMENTOS DE PAGAMENTOS ELETRÔNICOS (VÁLIDO A PARTIR DE 01/01/2022)
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1601() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1601"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1601';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  identificação da instituição que efetuou o pagamento
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_IP = '';
    /**
     * Código do participante (campo 02 do Registro 0150): identificação do intermediador da transação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART_IT = '';
    /**
     * Valor total bruto das vendas e/ou prestações de
     *  serviços no campo de incidência do ICMS, incluindo operações com imunidade do imposto
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const TOT_VS = '';
    /**
     * Valor total bruto das prestações de serviços no campo
     *  de incidência do ISS
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const TOT_ISS = '';
    /**
     * Valor total de operações deduzido dos valores dos campos TOT_VS e TOT_ISS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const TOT_OUTROS = '';
    this.registers.push([
      REG,
      COD_PART_IP,
      COD_PART_IT,
      TOT_VS,
      TOT_ISS,
      TOT_OUTROS,
    ]);
  }

  /**
   * Registro 1700 - DOCUMENTOS FISCAIS UTILIZADOS
   * Nível: 2
   * Ocorrência: V
   */
  private build1700() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1700"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1700';
    /**
     * Código dispositivo autorizado:
     *  00 - Formulário de Segurança - impressor autônomo
     *  01 - FS-DA - Formulário de Segurança para Impressão de DANFE
     *  02 - Formulário de segurança - NF-e 03 - Formulário Contínuo
     *  04 - Blocos
     *  05 - Jogos Soltos
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_DISP = '';
    /**
     * Código do modelo do dispositivo autorizado, conforme a Tabela 4.1.1
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Série do dispositivo autorizado
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 4
     */
    const SER = '';
    /**
     * Subsérie do dispositivo autorizado
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 3
     */
    const SUB = '';
    /**
     * Número do dispositivo autorizado (utilizado) inicial
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 12
     */
    const NUM_DOC_INI = '';
    /**
     * Número do dispositivo autorizado (utilizado) final
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 12
     */
    const NUM_DOC_FIN = '';
    /**
     * Número da autorização, conforme dispositivo autorizado
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 60
     */
    const NUM_AUT = '';
    this.registers.push([
      REG,
      COD_DISP,
      COD_MOD,
      SER,
      SUB,
      NUM_DOC_INI,
      NUM_DOC_FIN,
      NUM_AUT,
    ]);
  }

  /**
   * Registro 1710 - DOCUMENTOS FISCAIS CANCELADOS/INUTILIZADOS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1710() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1710"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1710';
    /**
     * Número do dispositivo autorizado (inutilizado) inicial
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 12
     */
    const NUM_DOC_INI = '';
    /**
     * Número do dispositivo autorizado (inutilizado) final
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 12
     */
    const NUM_DOC_FIN = '';
    this.registers.push([REG, NUM_DOC_INI, NUM_DOC_FIN]);
  }

  /**
   * Registro 1800 - DCTA - DEMONSTRATIVO DE CRÉDITO DO ICMS SOBRE TRANSPORTE AÉREO
   * Nível: 2
   * Ocorrência: 1
   */
  private build1800() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1800"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '1800';
    /**
     * Valor das prestações cargas (Tributado)
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_CARGA = '';
    /**
     * Valor das prestações passageiros/cargas (Não Tributado)
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_PASS = '';
    /**
     * Valor total do faturamento (2+3)
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_FAT = '';
    /**
     * Índice para rateio(2 / 4)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 8
     */
    const IND_RAT = '';
    /**
     * Valor total dos créditos do ICMS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_ANT = '';
    /**
     * Valor da base de cálculo do ICMS
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS = '';
    /**
     * Valor do ICMS apurado no cálculo (5 x 6)
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_APUR = '';
    /**
     * Valor da base de cálculo do ICMS apurada (5 x 7)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ICMS_APUR = '';
    /**
     * Valor da diferença a ser levada a estorno de crédito na apuração (6 - 8)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_DIF = '';
    this.registers.push([
      REG,
      VL_CARGA,
      VL_PASS,
      VL_FAT,
      IND_RAT,
      VL_ICMS_ANT,
      VL_BC_ICMS,
      VL_ICMS_APUR,
      VL_BC_ICMS_APUR,
      VL_DIF,
    ]);
  }

  /**
   * Registro 1900 - INDICADOR DE SUB-APURAÇÃO DO ICMS
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1900() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1900"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1900';
    /**
     * Indicador de outra apuração do ICMS:
     *  3 - APURAÇÃO 1;
     *  4 - APURAÇÃO 2;
     *  5 - APURAÇÃO 3;
     *  6 - APURAÇÃO 4;
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_APUR_ICMS = '';
    /**
     * Descrição complementar de Outra Apuração do ICMS
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL_OUT_APUR = '';
    this.registers.push([REG, IND_APUR_ICMS, DESCR_COMPL_OUT_APUR]);
  }

  /**
   * Registro 1910 - PERÍODO DA SUB-APURAÇÃO DO ICMS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build1910() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1910"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1910';
    /**
     * Data inicial da sub-apuração
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final da sub-apuração
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN = '';
    this.registers.push([REG, DT_INI, DT_FIN]);
  }

  /**
   * Registro 1920 - SUB-APURAÇÃO DO ICMS
   * Nível: 4
   * Ocorrência: um (por período)
   */
  private build1920() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1920"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1920';
    /**
     * Valor total dos débitos por "Saídas e prestações com débito do imposto"
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_TRANSF_DEBITOS_OA = '';
    /**
     * Valor total de "Ajustes a débito"
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_AJ_DEBITOS_OA = '';
    /**
     * Valor total de Ajustes "Estornos de
     *  créditos"
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_ESTORNOS_CRED_OA = '';
    /**
     * Valor total dos créditos por "Entradas e aquisições com crédito do imposto"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_TRANSF_CREDITOS_OA = '';
    /**
     * Valor total de "Ajustes a crédito"
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_AJ_CREDITOS_OA = '';
    /**
     * Valor total de Ajustes "Estornos de
     *  Débitos"
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_ESTORNOS_DEB_OA = '';
    /**
     * Valor total de "Saldo credor do período anterior"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CREDOR_ANT_OA = '';
    /**
     * Valor do saldo devedor apurado
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_APURADO_OA = '';
    /**
     * Valor total de "Deduções"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_DED = '';
    /**
     * Valor total de "ICMS a recolher (09-10)
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_RECOLHER_OA = '';
    /**
     * Valor total de "Saldo credor a transportar
     *  para o período seguinte"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CREDOR_TRANSP_OA = '';
    /**
     * Valores recolhidos ou a recolher, extra- apuração
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const DEB_ESP_OA = '';
    this.registers.push([
      REG,
      VL_TOT_TRANSF_DEBITOS_OA,
      VL_TOT_AJ_DEBITOS_OA,
      VL_ESTORNOS_CRED_OA,
      VL_TOT_TRANSF_CREDITOS_OA,
      VL_TOT_AJ_CREDITOS_OA,
      VL_ESTORNOS_DEB_OA,
      VL_SLD_CREDOR_ANT_OA,
      VL_SLD_APURADO_OA,
      VL_TOT_DED,
      VL_ICMS_RECOLHER_OA,
      VL_SLD_CREDOR_TRANSP_OA,
      DEB_ESP_OA,
    ]);
  }

  /**
   * Registro 1921 - AJUSTE/BENEFÍCIO/INCENTIVO DA SUB-APURAÇÃO DO ICMS
   * Nível: 5
   * Ocorrência: 1:N
   */
  private build1921() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1921"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1921';
    /**
     * Código do ajuste da SUB-APURAÇÃO e dedução,
     *  conforme a Tabela indicada no item 5.1.1
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 008*
     */
    const COD_AJ_APUR = '';
    /**
     * Descrição complementar do ajuste da apuração
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL_AJ = '';
    /**
     * Valor do ajuste da apuração
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ_APUR = '';
    this.registers.push([REG, COD_AJ_APUR, DESCR_COMPL_AJ, VL_AJ_APUR]);
  }

  /**
   * Registro 1922 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA SUB-APURAÇÃO DO ICMS
   * Nível: 6
   * Ocorrência: 1:N
   */
  private build1922() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1922"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1922';
    /**
     * Número do documento de arrecadação estadual, se houver
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const NUM_DA = '';
    /**
     * Número do processo ao qual o ajuste está vinculado, se houver
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const NUM_PROC = '';
    /**
     * Indicador da origem do processo:
     *  0- SEFAZ;
     *  1- Justiça Federal;
     *  2- Justiça Estadual;
     *  9- Outros
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_PROC = '';
    /**
     * Descrição resumida do processo que embasou o lançamento
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const PROC = '';
    /**
     * Descrição complementar
     *
     * Número: 6
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    this.registers.push([REG, NUM_DA, NUM_PROC, IND_PROC, PROC, TXT_COMPL]);
  }

  /**
   * Registro 1923 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA SUB-APURAÇÃO DO ICMS - IDENTIFICAÇÃO DOS DOCUMENTOS FISCAIS
   * Nível: 6
   * Ocorrência: 1:N
   */
  private build1923() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1923"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1923';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do emitente do documento ou do remetente das mercadorias, no caso de entradas;
     *  - do adquirente, no caso de saídas
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
     * Número do documento fiscal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Valor do ajuste para a operação/item
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ_ITEM = '';
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
      COD_PART,
      COD_MOD,
      SER,
      SUB,
      NUM_DOC,
      DT_DOC,
      COD_ITEM,
      VL_AJ_ITEM,
      CHV_DOCe,
    ]);
  }

  /**
   * Registro 1925 - INFORMAÇÕES ADICIONAIS DA SUB-APURAÇÃO - VALORES
   * Nível: 5
   * Ocorrência: 1:N
   */
  private build1925() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1925"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1925';
    /**
     * Código da informação adicional conforme tabela a ser definida pelas SEFAZ, conforme tabela definida no item
     *  5.2
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 008*
     */
    const COD_INF_ADIC = '';
    /**
     * Valor referente à informação adicional
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_INF_ADIC = '';
    /**
     * Descrição complementar do ajuste
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_COMPL_AJ = '';
    this.registers.push([REG, COD_INF_ADIC, VL_INF_ADIC, DESCR_COMPL_AJ]);
  }

  /**
   * Registro 1926 - OBRIGAÇÕES DO ICMS A RECOLHER - OPERAÇÕES REFERENTES À SUB-APURAÇÃO
   * Nível: 5
   * Ocorrência: 1:N
   */
  private build1926() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1926"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1926';
    /**
     * Código da obrigação a recolher, conforme a Tabela 5.4
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 003*
     */
    const COD_OR = '';
    /**
     * Valor da obrigação a recolher
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_OR = '';
    /**
     * Data de vencimento da obrigação
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_VCTO = '';
    /**
     * Código de receita referente à obrigação, próprio da unidade da federação, conforme legislação estadual,
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const COD_REC = '';
    /**
     * Número do processo ou auto de infração ao qual a
     *  obrigação está vinculada, se houver
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const NUM_PROC = '';
    /**
     * Indicador da origem do processo:
     *  0- SEFAZ;
     *  1- Justiça Federal;
     *  2- Justiça Estadual;
     *  9- Outros
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_PROC = '';
    /**
     * Descrição resumida do processo que embasou o lançamento
     *
     * Número: 8
     * Tipo: C
     * Tamanho: -
     */
    const PROC = '';
    /**
     * Descrição complementar das obrigações a recolher
     *
     * Número: 9
     * Tipo: C
     * Tamanho: -
     */
    const TXT_COMPL = '';
    /**
     * Informe o mês de referência no formato "mmaaaa"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 006*
     */
    const MES_REF = '';
    this.registers.push([
      REG,
      COD_OR,
      VL_OR,
      DT_VCTO,
      COD_REC,
      NUM_PROC,
      IND_PROC,
      PROC,
      TXT_COMPL,
      MES_REF,
    ]);
  }

  /**
   * Registro 1960 - GIAF 1 - GUIA DE INFORMAÇÃO E APURAÇÃO DE INCENTIVOS FISCAIS E FINANCEIROS: INDÚSTRIA (CRÉDITO PRESUMIDO)
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1960() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1960"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1960';
    /**
     * Indicador da sub-apuração por tipo de benefício (conforme tabela 4.7.1)
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 002*
     */
    const IND_AP = '';
    /**
     * Percentual de crédito presumido
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const G1_01 = '';
    /**
     * Saídas não incentivadas de PI
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const G1_02 = '';
    /**
     * Saídas incentivadas de PI
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const G1_03 = '';
    /**
     * Saídas incentivadas de PI para fora do Nordeste
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const G1_04 = '';
    /**
     * Saldo devedor do ICMS antes das deduções do incentivo
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const G1_05 = '';
    /**
     * Saldo devedor do ICMS relativo à faixa incentivada de PI
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const G1_06 = '';
    /**
     * Crédito presumido nas saídas incentivadas de PI para fora do Nordeste
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const G1_07 = '';
    /**
     * Saldo devedor relativo à faixa incentivada de PI após o crédito presumido nas saídas para fora do Nordeste
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const G1_08 = '';
    /**
     * Crédito presumido
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const G1_09 = '';
    /**
     * Dedução de incentivo da Indústria (crédito presumido)
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const G1_10 = '';
    /**
     * Saldo devedor do ICMS após deduções
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const G1_11 = '';
    this.registers.push([
      REG,
      IND_AP,
      G1_01,
      G1_02,
      G1_03,
      G1_04,
      G1_05,
      G1_06,
      G1_07,
      G1_08,
      G1_09,
      G1_10,
      G1_11,
    ]);
  }

  /**
   * Registro 1970 - GIAF 3 - GUIA DE INFORMAÇÃO E APURAÇÃO DE INCENTIVOS FISCAIS E FINANCEIROS: IMPORTAÇÃO (DIFERIMENTO NA ENTRADA E CRÉDITO PRESUMIDO NA SAÍDA SUBSEQUENTE)
   * Nível: 2
   * Ocorrência: 1:N
   */
  private build1970() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1970"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1970';
    /**
     * Indicador da sub-apuração por tipo de benefício (conforme tabela 4.7.1)
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 002*
     */
    const IND_AP = '';
    /**
     * Importações com ICMS diferido
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const G3_01 = '';
    /**
     * ICMS diferido nas importações
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const G3_02 = '';
    /**
     * Saídas não incentivadas de PI
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const G3_03 = '';
    /**
     * Percentual de incentivo nas saídas para fora do Estado
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const G3_04 = '';
    /**
     * Saídas incentivadas de PI para fora do Estado
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const G3_05 = '';
    /**
     * ICMS das saídas incentivadas de PI para fora do Estado
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const G3_06 = '';
    /**
     * Crédito presumido nas saídas para fora do Estado
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const G3_07 = '';
    /**
     * Dedução de incentivo da Importação (crédito presumido)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const G3_T = '';
    /**
     * Saldo devedor do ICMS antes das deduções do incentivo
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const G3_08 = '';
    /**
     * Saldo devedor do ICMS após deduções do incentivo
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const G3_09 = '';
    this.registers.push([
      REG,
      IND_AP,
      G3_01,
      G3_02,
      G3_03,
      G3_04,
      G3_05,
      G3_06,
      G3_07,
      G3_T,
      G3_08,
      G3_09,
    ]);
  }

  /**
   * Registro 1975 - GIAF 3 - GUIA DE INFORMAÇÃO E APURAÇÃO DE INCENTIVOS FISCAIS E FINANCEIROS: IMPORTAÇÃO (SAÍDAS INTERNAS POR FAIXA DE ALÍQUOTA)
   * Nível: 3
   * Ocorrência: 1:4
   */
  private build1975() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1975"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1975';
    /**
     * Alíquota incidente sobre as importações-base
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_IMP_BASE = '';
    /**
     * Saídas incentivadas de PI
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const G3_10 = '';
    /**
     * Importações-base para o crédito presumido
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const G3_11 = '';
    /**
     * Crédito presumido nas saídas internas
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const G3_12 = '';
    this.registers.push([REG, ALIQ_IMP_BASE, G3_10, G3_11, G3_12]);
  }

  /**
   * Registro 1980 - GIAF 4 GUIA DE INFORMAÇÃO E APURAÇÃO DE INCENTIVOS FISCAIS E FINANCEIROS: CENTRAL DE DISTRIBUIÇÃO (ENTRADAS/SAÍDAS)
   * Nível: 2
   * Ocorrência: 1
   */
  private build1980() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "1980"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1980';
    /**
     * Indicador da sub-apuração por tipo de benefício (conforme Tabela
     *  4.7.1)
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 002*
     */
    const IND_AP = '';
    /**
     * Entradas (percentual de incentivo)
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const G4_01 = '';
    /**
     * Entradas não incentivadas de PI
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const G4_02 = '';
    /**
     * Entradas incentivadas de PI
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const G4_03 = '';
    /**
     * Saídas (percentual de incentivo)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const G4_04 = '';
    /**
     * Saídas não incentivadas de PI
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const G4_05 = '';
    /**
     * Saídas incentivadas de PI
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const G4_06 = '';
    /**
     * Saldo devedor do ICMS antes das deduções do incentivo (PI e itens não incentivados)
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const G4_07 = '';
    /**
     * Crédito presumido nas entradas incentivadas de PI
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const G4_08 = '';
    /**
     * Crédito presumido nas saídas incentivadas de PI
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const G4_09 = '';
    /**
     * Dedução de incentivo da Central de Distribuição (entradas/saídas)
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const G4_10 = '';
    /**
     * Saldo devedor do ICMS após deduções do incentivo
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const G4_11 = '';
    /**
     * Índice de recolhimento da central de distribuição
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const G4_12 = '';
    this.registers.push([
      REG,
      IND_AP,
      G4_01,
      G4_02,
      G4_03,
      G4_04,
      G4_05,
      G4_06,
      G4_07,
      G4_08,
      G4_09,
      G4_10,
      G4_11,
      G4_12,
    ]);
  }

  /**
   * Registro 1990 - ENCERRAMENTO DO BLOCO 1
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private build1990() {
    /**
     * Texto fixo contendo "1990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '1990';
    /**
     * Quantidade total de linhas do Bloco 1
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_1 = `${this.registers.length + 1}`;
    this.registers.push([REG, QTD_LIN_1]);
  }
}
