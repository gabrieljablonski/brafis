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
    this.registers = [];

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

    return this.registers;
  }

  /**
   * Registro B001 - ABERTURA DO BLOCO B
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildB001(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B001';
    /**
     * Indicador de movimento:
     *  0 - Bloco com dados informados
     *  1 - Bloco sem dados informados
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_DAD = '';
    this.registers.push([REG, IND_DAD]);
  }

  /**
   * Registro B020 - NOTA FISCAL (CÓDIGO 01), NOTA FISCAL DE SERVIÇOS (CÓDIGO 03), NOTA FISCAL DE SERVIÇOS AVULSA (CÓDIGO 3B), NOTA FISCAL DE PRODUTOR (CÓDIGO 04), CONHECIMENTO DE TRANSPORTE RODOVIÁRIO DE CARGAS (CÓDIGO 08), NF-e (CÓDIGO 55), NFC-e (CÓDIGO 65) e NF3-e (CÓDIGO 66).
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildB020(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B020"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B020';
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
     *  1 - Terceiros
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_EMIT = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do prestador, no caso de declarante na condição de tomador;
     *  - do tomador, no caso de declarante na condição de prestador
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Código do modelo do documento fiscal,
     *  conforme a Tabela 4.1.3
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_MOD = '';
    /**
     * Código da situação do documento conforme
     *  tabela 4.1.2
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
     * Código do município onde o serviço foi prestado, conforme a tabela IBGE
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 007*
     */
    const COD_MUN_SERV = '';
    /**
     * Valor contábil (valor total do documento)
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT = '';
    /**
     * Valor do material fornecido por terceiros na prestação do serviço
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_MAT_TERC = '';
    /**
     * Valor da subempreitada
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_SUB = '';
    /**
     * Valor das operações isentas ou não- tributadas pelo ISS
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISNT_ISS = '';
    /**
     * Valor da dedução da base de cálculo
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_DED_BC = '';
    /**
     * Valor da base de cálculo do ISS
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS = '';
    /**
     * Valor da base de cálculo de retenção do ISS
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS_RT = '';
    /**
     * Valor do ISS retido pelo tomador
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_RT = '';
    /**
     * Valor do ISS destacado
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS = '';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 21
     * Tipo: C
     * Tamanho: 60
     */
    const COD_INF_OBS = '';
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
      COD_MUN_SERV,
      VL_CONT,
      VL_MAT_TERC,
      VL_SUB,
      VL_ISNT_ISS,
      VL_DED_BC,
      VL_BC_ISS,
      VL_BC_ISS_RT,
      VL_ISS_RT,
      VL_ISS,
      COD_INF_OBS,
    ]);
  }

  /**
   * Registro B025 - DETALHAMENTO POR COMBINAÇÃO DE ALÍQUOTA E ITEM DA LISTA DE SERVIÇOS DA LC 116/2003)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildB025(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B025"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B025';
    /**
     * Parcela correspondente ao "Valor Contábil" referente à combinação da alíquota e item da lista
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT_P = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do ISS" referente à combinação da alíquota e item da lista
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS_P = '';
    /**
     * Alíquota do ISS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ISS = '';
    /**
     * Parcela correspondente ao "Valor
     *  do ISS" referente à combinação da alíquota e item da lista
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_P = '';
    /**
     * Parcela correspondente ao "Valor das operações isentas ou não- tributadas pelo ISS" referente à combinação da alíquota e item da lista
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISNT_ISS_P = '';
    /**
     * Item da lista de serviços, conforme Tabela 4.6.3
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 004*
     */
    const COD_SERV = '';
    this.registers.push([
      REG,
      VL_CONT_P,
      VL_BC_ISS_P,
      ALIQ_ISS,
      VL_ISS_P,
      VL_ISNT_ISS_P,
      COD_SERV,
    ]);
  }

  /**
   * Registro B030 - NOTA FISCAL DE SERVIÇOS SIMPLIFICADA (CÓDIGO 3A)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildB030(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B030"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B030';
    /**
     * Código do modelo do documento fiscal, conforme a Tabela 4.1.3
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
     * Número do primeiro documento fiscal
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_INI = '';
    /**
     * Número do último documento fiscal
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 9
     */
    const NUM_DOC_FIN = '';
    /**
     * Data da emissão dos documentos
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Quantidade de documentos
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CANC = '';
    /**
     * Valor contábil (valor total acumulado
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT = '';
    /**
     * Valor acumulado das operações
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISNT_ISS = '';
    /**
     * Valor acumulado da base de cálculo
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS = '';
    /**
     * Valor acumulado do ISS destacado
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS = '';
    /**
     * Código da observação do
     *  lançamento fiscal (campo 02 do
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 60
     */
    const COD_INF_OBS = '';
    this.registers.push([
      REG,
      COD_MOD,
      SER,
      NUM_DOC_INI,
      NUM_DOC_FIN,
      DT_DOC,
      QTD_CANC,
      VL_CONT,
      VL_ISNT_ISS,
      VL_BC_ISS,
      VL_ISS,
      COD_INF_OBS,
    ]);
  }

  /**
   * Registro B035 - DETALHAMENTO POR COMBINAÇÃO DE ALÍQUOTA E ITEM DA LISTA DE SERVIÇOS DA LC 116/2003)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildB035(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B035"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B035';
    /**
     * Parcela correspondente ao "Valor
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT_P = '';
    /**
     * Parcela correspondente ao "Valor
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS_P = '';
    /**
     * Alíquota do ISS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ISS = '';
    /**
     * Parcela correspondente ao "Valor
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_P = '';
    /**
     * Parcela correspondente ao "Valor
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISNT_ISS_P = '';
    /**
     * Item da lista de serviços,
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 004*
     */
    const COD_SERV = '';
    this.registers.push([
      REG,
      VL_CONT_P,
      VL_BC_ISS_P,
      ALIQ_ISS,
      VL_ISS_P,
      VL_ISNT_ISS_P,
      COD_SERV,
    ]);
  }

  /**
   * Registro B350 - SERVIÇOS PRESTADOS POR INSTITUIÇÕES FINANCEIRAS
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildB350(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B350"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004
     *
     */
    const REG = 'B350';
    /**
     * Código da conta do plano de contas
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const COD_CTD = '';
    /**
     * Descrição da conta no plano de contas
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const CTA_ISS = '';
    /**
     * Código COSIF a que está subordinada a conta do ISS das instituições financeiras
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008
     *
     */
    const CTA_COSIF = '';
    /**
     * Quantidade de ocorrências na conta
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const QTD_OCOR = '';
    /**
     * Item da lista de serviços, conforme Tabela 4.6.3
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 004
     *
     */
    const COD_SERV = '';
    /**
     * Valor contábil
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT = '';
    /**
     * Valor da base de cálculo do ISS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS = '';
    /**
     * Alíquota do ISS
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ISS = '';
    /**
     * Valor do ISS
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS = '';
    /**
     * Código da observação do lançamento fiscal (campo 02 do Registro 0460)
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 60
     */
    const COD_INF_OBS = '';
    this.registers.push([
      REG,
      COD_CTD,
      CTA_ISS,
      CTA_COSIF,
      QTD_OCOR,
      COD_SERV,
      VL_CONT,
      VL_BC_ISS,
      ALIQ_ISS,
      VL_ISS,
      COD_INF_OBS,
    ]);
  }

  /**
   * Registro B420 - TOTALIZAÇÃO DOS VALORES DE SERVIÇOS PRESTADOS POR
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildB420(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B420"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B420';
    /**
     * Totalização do Valor Contábil das prestações do declarante referente à combinação da alíquota e item da lista
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT = '';
    /**
     * Totalização do Valor da base de cálculo do ISS das prestações do declarante referente à combinação da alíquota e item da lista
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS = '';
    /**
     * Alíquota do ISS
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const ALIQ_ISS = '';
    /**
     * Totalização do valor das operações isentas ou não-tributadas pelo ISS referente à combinação da alíquota e item da lista
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISNT_ISS = '';
    /**
     * Totalização, por combinação da alíquota e item da lista, do Valor do ISS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS = '';
    /**
     * Item da lista de serviços, conforme Tabela 4.6.3
     *
     * Número: 7
     * Tipo: C
     * Tamanho: -
     */
    const COD_SERV = '';
    this.registers.push([
      REG,
      VL_CONT,
      VL_BC_ISS,
      ALIQ_ISS,
      VL_ISNT_ISS,
      VL_ISS,
      COD_SERV,
    ]);
  }

  /**
   * Registro B440 - TOTALIZAÇÃO DOS VALORES RETIDOS
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildB440(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B440"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004
     *
     */
    const REG = 'B440';
    /**
     * Indicador do tipo de operação:
     *  0 - Aquisição;
     *  1 - Prestação
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const IND_OPER = '';
    /**
     * Código do participante (campo 02 do Registro 0150):
     *  - do prestador, no caso de aquisição de serviço pelo declarante;
     *  - do tomador, no caso de prestação de serviço pelo declarante
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const COD_PART = '';
    /**
     * Totalização do Valor Contábil das prestações e/ou aquisições do declarante pela combinação de tipo de operação e participante
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT_RT = '';
    /**
     * Totalização do Valor da base de cálculo de retenção do ISS das prestações e/ou aquisições do declarante pela combinação de tipo de operação e participante
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS_RT = '';
    /**
     * Totalização do Valor do ISS retido pelo tomador das prestações e/ou aquisições do declarante pela combinação de tipo de operação e participante
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_RT = '';
    this.registers.push([
      REG,
      IND_OPER,
      COD_PART,
      VL_CONT_RT,
      VL_BC_ISS_RT,
      VL_ISS_RT,
    ]);
  }

  /**
   * Registro B460 - DEDUÇÕES DO ISS
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private buildB460(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B460"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B460';
    /**
     * Indicador do tipo de dedução:
     *  0 - Compensação do ISS calculado a maior;
     *  1 - Benefício fiscal por incentivo à cultura;
     *  2 - Decisão administrativa ou judicial;
     *  9 - Outros
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_DED = '';
    /**
     * Valor da dedução
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_DED = '';
    /**
     * Número do processo ao qual o ajuste está vinculado, se houver
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const NUM_PROC = '';
    /**
     * Indicador da origem do processo:
     *  0 - Sefin;
     *  1 - Justiça Federal;
     *  2 - Justiça Estadual; 9 - Outros
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_PROC = '';
    /**
     * Descrição do processo que embasou o lançamento
     *
     * Número: 6
     * Tipo: C
     * Tamanho: -
     */
    const PROC = '';
    /**
     * Código da observação do lançamento fiscal
     *  (campo 02 do Registro 0460)
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const COD_INF_OBS = '';
    /**
     * Indicador da obrigação onde será aplicada a dedução:
     *  0 - ISS Próprio;
     *  - ISS Substituto (devido pelas aquisições de serviços do declarante).
     *  - ISS Uniprofissionais
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_OBR = '';
    this.registers.push([
      REG,
      IND_DED,
      VL_DED,
      NUM_PROC,
      IND_PROC,
      PROC,
      COD_INF_OBS,
      IND_OBR,
    ]);
  }

  /**
   * Registro B470 - APURAÇÃO DO ISS
   * Nível: 2
   * Ocorrência: um (por arquivo)
   */
  private buildB470(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B470"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B470';
    /**
     * A - Valor total referente às prestações de serviço do período
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT = '';
    /**
     * B - Valor total do material fornecido por terceiros na prestação do serviço
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_MAT_TERC = '';
    /**
     * C - Valor do material próprio utilizado na prestação do serviço
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_MAT_PROP = '';
    /**
     * D - Valor total das subempreitadas
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_SUB = '';
    /**
     * E - Valor total das operações isentas ou não-tributadas pelo ISS
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISNT = '';
    /**
     * F - Valor total das deduções da base de cálculo (B + C + D + E)
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_DED_BC = '';
    /**
     * G - Valor total da base de cálculo do ISS
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS = '';
    /**
     * H - Valor total da base de cálculo de retenção do ISS referente às prestações do declarante
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_ISS_RT = '';
    /**
     * I - Valor total do ISS destacado
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS = '';
    /**
     * J - Valor total do ISS retido pelo tomador
     *  nas prestações do declarante
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_RT = '';
    /**
     * K - Valor total das deduções do ISS
     *  próprio
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DED = '';
    /**
     * L - Valor total apurado do ISS próprio a recolher (I - J - K)
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_REC = '';
    /**
     * M - Valor total do ISS substituto a recolher pelas aquisições do declarante
     *  (tomador)
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_ST = '';
    /**
     * N - Valor do ISS próprio a recolher pela
     *  Sociedade Uniprofissional
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_ISS_REC_UNI = '';
    this.registers.push([
      REG,
      VL_CONT,
      VL_MAT_TERC,
      VL_MAT_PROP,
      VL_SUB,
      VL_ISNT,
      VL_DED_BC,
      VL_BC_ISS,
      VL_BC_ISS_RT,
      VL_ISS,
      VL_ISS_RT,
      VL_DED,
      VL_ISS_REC,
      VL_ISS_ST,
      VL_ISS_REC_UNI,
    ]);
  }

  /**
   * Registro B500 - APURAÇÃO DO ISS SOCIEDADE UNIPROFISSIONAL
   * Nível: 2
   * Ocorrência: um (por arquivo)
   */
  private buildB500(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B500"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B500';
    /**
     * Valor mensal das receitas auferidas pela sociedade uniprofissional
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_REC = '';
    /**
     * Quantidade de profissionais habilitados
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_PROF = '';
    /**
     * Valor do ISS devido
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_OR = '';
    this.registers.push([REG, VL_REC, QTD_PROF, VL_OR]);
  }

  /**
   * Registro B510 - UNIPROFISSIONAL - EMPREGADOS E SÓCIOS
   * Nível: 3
   * Ocorrência: vários (por arquivo)
   */
  private buildB510(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B510"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B510';
    /**
     * Indicador de habilitação:
     *  0- Profissional habilitado
     *  1- Profissional não habilitado
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_PROF = '';
    /**
     * Indicador de escolaridade:
     *  0- Nível superior
     *  1- Nível médio
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_ESC = '';
    /**
     * Indicador de participação societária:
     *  0 - Sócio
     *  1 - Não sócio
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_SOC = '';
    /**
     * Número de inscrição do profissional no CPF
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = '';
    /**
     * Nome do profissional
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 100
     */
    const NOME = '';
    this.registers.push([REG, IND_PROF, IND_ESC, IND_SOC, CPF, NOME]);
  }

  /**
   * Registro B990 - ENCERRAMENTO DO BLOCO B
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private buildB990(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "B990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = 'B990';
    /**
     * Quantidade total de linhas do Bloco B
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_B = '';
    this.registers.push([REG, QTD_LIN_B]);
  }
}
