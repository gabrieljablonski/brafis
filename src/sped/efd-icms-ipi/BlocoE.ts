import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

export interface BlocoEOptions {
  include?: boolean;
}

export default class BlocoE extends Bloco {
  private include: boolean;

  constructor(options: BlocoOptions & BlocoEOptions) {
    super(options);
    this.include = options.include ?? false;
  }

  build(): string[][] {
    this.registers = [];

    this.buildE001();
    if (this.include) {
      this.buildE100();
      this.buildE200();
      this.buildE300();
      this.buildE500();
    }
    this.buildE990();

    return this.registers;
  }

  /**
   * Registro E001 - ABERTURA DO BLOCO E
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private buildE001() {
    /**
     * Texto fixo contendo "E001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E001';
    /**
     * Indicador de movimento:
     *  0- Bloco com dados informados;
     *  1- Bloco sem dados informados
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 1
     */
    const IND_MOV = this.include ? '0' : '1';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro E100 - PERÍODO DA APURAÇÃO DO ICMS
   * Nível: 2
   * Ocorrência: 1:N
   */
  private buildE100() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E100"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E100';
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
    this.registers.push([REG, DT_INI, DT_FIN]);
  }

  /**
   * Registro E110 - APURAÇÃO DO ICMS - OPERAÇÕES PRÓPRIAS
   * Nível: 3
   * Ocorrência: um por período
   */
  private buildE110() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E110"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E110';
    /**
     * Valor total dos débitos por "Saídas e prestações com débito do imposto"
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_DEBITOS = '';
    /**
     * Valor total dos ajustes a débito decorrentes do documento
     *  fiscal
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ_DEBITOS = '';
    /**
     * Valor total de "Ajustes a débito"
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_AJ_DEBITOS = '';
    /**
     * Valor total de Ajustes "Estornos de créditos"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_ESTORNOS_CRED = '';
    /**
     * Valor total dos créditos por "Entradas e aquisições com crédito do imposto"
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_CREDITOS = '';
    /**
     * Valor total dos ajustes a crédito decorrentes do
     *  documento fiscal
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ_CREDITOS = '';
    /**
     * Valor total de "Ajustes a crédito"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_AJ_CREDITOS = '';
    /**
     * Valor total de Ajustes "Estornos de Débitos"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_ESTORNOS_DEB = '';
    /**
     * Valor total de "Saldo credor do período anterior"
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CREDOR_ANT = '';
    /**
     * Valor do saldo devedor apurado
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_APURADO = '';
    /**
     * Valor total de "Deduções"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_DED = '';
    /**
     * Valor total de "ICMS a recolher (11-12)
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_RECOLHER = '';
    /**
     * Valor total de "Saldo credor a transportar para o período seguinte"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CREDOR_TRANSPORTAR = '';
    /**
     * Valores recolhidos ou a recolher, extra-apuração
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const DEB_ESP = '';
    this.registers.push([
      REG,
      VL_TOT_DEBITOS,
      VL_AJ_DEBITOS,
      VL_TOT_AJ_DEBITOS,
      VL_ESTORNOS_CRED,
      VL_TOT_CREDITOS,
      VL_AJ_CREDITOS,
      VL_TOT_AJ_CREDITOS,
      VL_ESTORNOS_DEB,
      VL_SLD_CREDOR_ANT,
      VL_SLD_APURADO,
      VL_TOT_DED,
      VL_ICMS_RECOLHER,
      VL_SLD_CREDOR_TRANSPORTAR,
      DEB_ESP,
    ]);
  }

  /**
   * Registro E111 - AJUSTE/BENEFÍCIO/INCENTIVO DA APURAÇÃO DO ICMS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildE111() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E111"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E111';
    /**
     * Código do ajuste da apuração e dedução, conforme a Tabela indicada no item 5.1.1
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
   * Registro E112 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA APURAÇÃO DO ICMS
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildE112() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E112"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E112';
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
     *  0- Sefaz;
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
   * Registro E113 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA APURAÇÃO DO ICMS -
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildE113() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E113"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E113';
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
   * Registro E115 - INFORMAÇÕES ADICIONAIS DA APURAÇÃO - VALORES DECLARATÓRIOS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildE115() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E115"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E115';
    /**
     * Código da informação adicional conforme tabela a ser
     *  definida pelas SEFAZ, conforme tabela definida no item 5.2
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
   * Registro E116 - OBRIGAÇÕES DO ICMS RECOLHIDO OU A RECOLHER - OPERAÇÕES PRÓPRIAS
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildE116() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E116"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E116';
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
     * Código de receita referente à obrigação, próprio da unidade da federação, conforme legislação estadual
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const COD_REC = '';
    /**
     * Número do processo ou auto de infração ao qual a obrigação está
     *  vinculada, se houver
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
   * Registro E200 - PERÍODO DA APURAÇÃO DO ICMS - SUBSTITUIÇÃO TRIBUTÁRIA
   * Nível: 2
   * Ocorrência: 1:N
   */
  private buildE200() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E200"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E200';
    /**
     * Sigla da unidade da federação a que se refere a apuração do ICMS ST
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = '';
    /**
     * Data inicial a que a apuração se refere
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final a que a apuração se refere
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN = '';
    this.registers.push([REG, UF, DT_INI, DT_FIN]);
  }

  /**
   * Registro E210 - APURAÇÃO DO ICMS - SUBSTITUIÇÃO TRIBUTÁRIA
   * Nível: 3
   * Ocorrência: um por período
   */
  private buildE210() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E210"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E210';
    /**
     * Indicador de movimento:
     *  0 - Sem operações com ST
     *  1 - Com operações de ST
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 1
     */
    const IND_MOV_ST = '';
    /**
     * Valor do "Saldo credor de período anterior - Substituição Tributária"
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CRED_ANT_ST = '';
    /**
     * Valor total do ICMS ST de devolução de mercadorias
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_DEVOL_ST = '';
    /**
     * Valor total do ICMS ST de ressarcimentos
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_RESSARC_ST = '';
    /**
     * Valor total de Ajustes "Outros créditos ST" e "Estorno de débitos ST"
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_CRED_ST = '';
    /**
     * Valor total dos ajustes a crédito de ICMS ST, provenientes de ajustes do documento fiscal
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ_CREDITOS_ST = '';
    /**
     * Valor Total do ICMS retido por Substituição Tributária
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_RETENÇAO_ST = '';
    /**
     * Valor Total dos ajustes "Outros débitos ST" " e "Estorno de créditos ST"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_DEB_ST = '';
    /**
     * Valor total dos ajustes a débito de ICMS ST, provenientes de ajustes do documento fiscal
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ_DEBITOS_ST = '';
    /**
     * Valor total de Saldo devedor antes das deduções
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_DEV_ANT_ST = '';
    /**
     * Valor total dos ajustes "Deduções ST"
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const VL_DEDUÇÕES_ST = '';
    /**
     * Imposto a recolher ST (11-12)
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_ICMS_RECOL_ST = '';
    /**
     * Saldo credor de ST a transportar para o período seguinte [(03+04+05+06+07+12) - (08+09+10)]
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CRED_ST_TRANSPORTAR = '';
    /**
     * Valores recolhidos ou a recolher, extra-apuração
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const DEB_ESP_ST = '';
    this.registers.push([
      REG,
      IND_MOV_ST,
      VL_SLD_CRED_ANT_ST,
      VL_DEVOL_ST,
      VL_RESSARC_ST,
      VL_OUT_CRED_ST,
      VL_AJ_CREDITOS_ST,
      VL_RETENÇAO_ST,
      VL_OUT_DEB_ST,
      VL_AJ_DEBITOS_ST,
      VL_SLD_DEV_ANT_ST,
      VL_DEDUÇÕES_ST,
      VL_ICMS_RECOL_ST,
      VL_SLD_CRED_ST_TRANSPORTAR,
      DEB_ESP_ST,
    ]);
  }

  /**
   * Registro E220 - AJUSTE/BENEFÍCIO/INCENTIVO DA APURAÇÃO DO ICMS SUBSTITUIÇÃO TRIBUTÁRIA
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildE220() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E220"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E220';
    /**
     * Código do ajuste da apuração e dedução, conforme a
     *  Tabela indicada no item 5.1.1
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
   * Registro E230 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA APURAÇÃO DO ICMS SUBSTITUIÇÃO TRIBUTÁRIA
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildE230() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E230"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E230';
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
     *  0 - Sefaz;
     *  1 - Justiça Federal;
     *  2 - Justiça Estadual; 9 - Outros
     *
     * Número: 4
     * Tipo: N
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
   * Registro E240 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA APURAÇÃO DO ICMS
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildE240() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E240"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E240';
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
   * Registro E250 - OBRIGAÇÕES DO ICMS RECOLHIDO OU A RECOLHER - SUBSTITUIÇÃO TRIBUTÁRIA
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildE250() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E250"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E250';
    /**
     * Código da obrigação a recolher, conforme a Tabela 5.4
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 003*
     */
    const COD_OR = '';
    /**
     * Valor da obrigação ICMS ST a recolher
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
     * Código de receita referente à obrigação, próprio da unidade da federação do contribuinte substituído
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const COD_REC = '';
    /**
     * Número do processo ou auto de infração ao qual a obrigação está vinculada, se houver
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
   * Registro E300 - PERÍODO DE APURAÇÃO DO FUNDO DE COMBATE À POBREZA E DO ICMS DIFERENCIAL DE ALÍQUOTA - UF ORIGEM/DESTINO EC 87/15
   * Nível: 2
   * Ocorrência: 1:N
   */
  private buildE300() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E300"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E300';
    /**
     * Sigla da unidade da federação a que se refere à apuração do FCP e do ICMS Diferencial de Alíquota da UF de Origem/Destino
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 2
     */
    const UF = '';
    /**
     * Data inicial a que a apuração se refere
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final a que a apuração se refere
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN = '';
    this.registers.push([REG, UF, DT_INI, DT_FIN]);
  }

  /**
   * Registro E310 - APURAÇÃO DO FUNDO DE COMBATE À POBREZA E DO ICMS DIFERENCIAL DE ALÍQUOTA - UF ORIGEM/DESTINO EC 87/15. (VÁLIDO A PARTIR DE 01/01/2017)
   * Nível: 3
   * Ocorrência: um (por período)
   */
  private buildE310() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E310"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E310';
    /**
     * Indicador de movimento:
     *  0 - Sem operações
     *  1 - Com operações
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const IND_MOV_FCP_DIFAL = '';
    /**
     * Valor do "Saldo credor de período anterior - ICMS Diferencial de Alíquota da UF de Origem/Destino"
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CRED_ANT_DIFAL = '';
    /**
     * Valor total dos débitos por "Saídas e prestações com débito do ICMS referente ao diferencial de alíquota devido à UF de Origem/Destino"
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_DEBITOS_DIFAL = '';
    /**
     * Valor total dos ajustes "Outros débitos ICMS Diferencial de Alíquota da UF de Origem/Destino" e "Estorno de créditos ICMS Diferencial de Alíquota da UF de Origem/Destino"
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_DEB_DIFAL = '';
    /**
     * Valor total dos créditos do ICMS referente ao diferencial de alíquota devido à UF de Origem/Destino
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_CREDITOS_DIFAL = '';
    /**
     * Valor total de Ajustes "Outros créditos ICMS Diferencial de Alíquota da UF de Origem/Destino" e "Estorno de débitos ICMS Diferencial de Alíquota da UF de Origem/Destino"
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_CRED_DIFAL = '';
    /**
     * Valor total de "Saldo devedor ICMS Diferencial de Alíquota da UF de Origem/Destino antes das deduções"
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_DEV_ANT_DIFAL = '';
    /**
     * Valor total dos ajustes "Deduções ICMS Diferencial de Alíquota da UF de Origem/Destino"
     *
     * Número: 9
     * Tipo: N
     * Tamanho: -
     */
    const VL_DEDUÇÕES_DIFAL = '';
    /**
     * Valor recolhido ou a recolher referente ao ICMS Diferencial de Alíquota da UF de Origem/Destino (08-09)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_RECOL_DIFAL = '';
    /**
     * Saldo credor a transportar para o período seguinte referente ao ICMS Diferencial de Alíquota da UF de Origem/Destino
     *
     * Número: 11
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CRED_TRANSPORTAR_DIFAL = '';
    /**
     * Valores recolhidos ou a recolher, extra-apuração - ICMS Diferencial de Alíquota da UF de Origem/Destino
     *
     * Número: 12
     * Tipo: N
     * Tamanho: -
     */
    const DEB_ESP_DIFAL = '';
    /**
     * Valor do "Saldo credor de período anterior - FCP"
     *
     * Número: 13
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CRED_ANT_FCP = '';
    /**
     * Valor total dos débitos FCP por "Saídas e prestações"
     *
     * Número: 14
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_DEB_FCP = '';
    /**
     * Valor total dos ajustes "Outros débitos FCP" e "Estorno de créditos FCP"
     *
     * Número: 15
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_DEB_FCP = '';
    /**
     * Valor total dos créditos FCP por Entradas
     *
     * Número: 16
     * Tipo: N
     * Tamanho: -
     */
    const VL_TOT_CRED_FCP = '';
    /**
     * Valor total de Ajustes "Outros créditos FCP" e "Estorno de débitos FCP"
     *
     * Número: 17
     * Tipo: N
     * Tamanho: -
     */
    const VL_OUT_CRED_FCP = '';
    /**
     * Valor total de Saldo devedor FCP antes das deduções
     *
     * Número: 18
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_DEV_ANT_FCP = '';
    /**
     * Valor total das deduções "FCP"
     *
     * Número: 19
     * Tipo: N
     * Tamanho: -
     */
    const VL_DEDUÇÕES_FCP = '';
    /**
     * Valor recolhido ou a recolher referente ao FCP (18- 19)
     *
     * Número: 20
     * Tipo: N
     * Tamanho: -
     */
    const VL_RECOL_FCP = '';
    /**
     * Saldo credor a transportar para o período seguinte referente ao FCP
     *
     * Número: 21
     * Tipo: N
     * Tamanho: -
     */
    const VL_SLD_CRED_TRANSPORTAR_FCP = '';
    /**
     * Valores recolhidos ou a recolher, extra-apuração - FCP
     *
     * Número: 22
     * Tipo: N
     * Tamanho: -
     */
    const DEB_ESP_FCP = '';
    this.registers.push([
      REG,
      IND_MOV_FCP_DIFAL,
      VL_SLD_CRED_ANT_DIFAL,
      VL_TOT_DEBITOS_DIFAL,
      VL_OUT_DEB_DIFAL,
      VL_TOT_CREDITOS_DIFAL,
      VL_OUT_CRED_DIFAL,
      VL_SLD_DEV_ANT_DIFAL,
      VL_DEDUÇÕES_DIFAL,
      VL_RECOL_DIFAL,
      VL_SLD_CRED_TRANSPORTAR_DIFAL,
      DEB_ESP_DIFAL,
      VL_SLD_CRED_ANT_FCP,
      VL_TOT_DEB_FCP,
      VL_OUT_DEB_FCP,
      VL_TOT_CRED_FCP,
      VL_OUT_CRED_FCP,
      VL_SLD_DEV_ANT_FCP,
      VL_DEDUÇÕES_FCP,
      VL_RECOL_FCP,
      VL_SLD_CRED_TRANSPORTAR_FCP,
      DEB_ESP_FCP,
    ]);
  }

  /**
   * Registro E311 - AJUSTE/BENEFÍCIO/INCENTIVO DA APURAÇÃO DO FUNDO DE COMBATE À POBREZA E DO ICMS DIFERENCIAL DE ALÍQUOTA UF ORIGEM/DESTINO EC 87/15
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildE311() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E311"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E311';
    /**
     * Código do ajuste da apuração e dedução, conforme a Tabela indicada no item 5.1.1
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
   * Registro E312 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA APURAÇÃO DO FUNDO DE COMBATE À POBREZA E DO ICMS DIFERENCIAL DE ALÍQUOTA UF ORIGEM/DESTINO EC 87/15
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildE312() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E312"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E312';
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
     *  0- Sefaz;
     *  1- Justiça Federal;
     *  2- Justiça Estadual;
     *  9- Outros
     *
     * Número: 4
     * Tipo: N
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
   * Registro E313 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA APURAÇÃO DO FUNDO DE COMBATE À POBREZA E DO ICMS DIFERENCIAL DE ALÍQUOTA UF ORIGEM/DESTINO EC 87/15 - IDENTIFICAÇÃO DOS DOCUMENTOS FISCAIS
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildE313() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E313"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E313';
    /**
     * Código do participante (campo 02 do Registro 0150)
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
     * Chave do Documento Eletrônico
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_DOCe = '';
    /**
     * Data da emissão do documento fiscal
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_DOC = '';
    /**
     * Código do item (campo 02 do Registro 0200)
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Valor do ajuste para a operação/item
     *
     * Número: 10
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ_ITEM = '';
    this.registers.push([
      REG,
      COD_PART,
      COD_MOD,
      SER,
      SUB,
      NUM_DOC,
      CHV_DOCe,
      DT_DOC,
      COD_ITEM,
      VL_AJ_ITEM,
    ]);
  }

  /**
   * Registro E316 - OBRIGAÇÕES RECOLHIDAS OU A RECOLHER - FUNDO DE COMBATE
   * Nível: 4
   * Ocorrência: 1:N
   */
  private buildE316() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E316"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E316';
    /**
     * Código da obrigação recolhida ou a recolher, conforme a Tabela 5.4
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 003*
     */
    const COD_OR = '';
    /**
     * Valor da obrigação recolhida ou a recolher
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
     * Código de receita referente à obrigação, próprio da unidade da
     *  federação da origem/destino, conforme legislação estadual
     *
     * Número: 5
     * Tipo: C
     * Tamanho: -
     */
    const COD_REC = '';
    /**
     * Número do processo ou auto de infração ao qual a obrigação está vinculada, se houver
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
     * Descrição complementar das obrigações recolhidas ou a recolher
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
   * Registro E500 - PERÍODO DE APURAÇÃO DO IPI
   * Nível: 2
   * Ocorrência: um ou vários (por arquivo)
   */
  private buildE500() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E500"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E500';
    /**
     * Indicador de período de apuração do IPI:
     *  0 - Mensal;
     *  1 - Decendial
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 1*
     */
    const IND_APUR = '';
    /**
     * Data inicial a que a apuração se refere
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final a que a apuração se refere
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN = '';
    this.registers.push([REG, IND_APUR, DT_INI, DT_FIN]);
  }

  /**
   * Registro E510 - CONSOLIDAÇÃO DOS VALORES DO IPI
   * Nível: 3
   * Ocorrência: 1:N
   */
  private buildE510() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E510"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E510';
    /**
     * Código Fiscal de Operação e Prestação do agrupamento de itens
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 004*
     */
    const CFOP = '';
    /**
     * Código da Situação Tributária referente ao IPI, conforme a Tabela
     *  indicada no item 4.3.2
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const CST_IPI = '';
    /**
     * Parcela correspondente ao "Valor Contábil" referente ao CFOP e ao Código de Tributação do IPI
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_CONT_IPI = '';
    /**
     * Parcela correspondente ao "Valor da base de cálculo do IPI" referente ao CFOP e ao Código de Tributação do IPI, para
     *  operações tributadas
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_BC_IPI = '';
    /**
     * Parcela correspondente ao "Valor do IPI" referente ao CFOP e ao
     *  Código de Tributação do IPI, para operações tributadas
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_IPI = '';
    this.registers.push([REG, CFOP, CST_IPI, VL_CONT_IPI, VL_BC_IPI, VL_IPI]);
  }

  /**
   * Registro E520 - APURAÇÃO DO IPI
   * Nível: 3
   * Ocorrência: 1:1
   */
  private buildE520() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E520"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E520';
    /**
     * Saldo credor do IPI transferido do período anterior
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const VL_SD_ANT_IPI = '';
    /**
     * Valor total dos débitos por "Saídas com débito do imposto"
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_DEB_IPI = '';
    /**
     * Valor total dos créditos por "Entradas e aquisições com crédito do imposto"
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const VL_CRED_IPI = '';
    /**
     * Valor de "Outros débitos" do IPI (inclusive estornos de crédito)
     *
     * Número: 5
     * Tipo: N
     * Tamanho: -
     */
    const VL_OD_IPI = '';
    /**
     * Valor de "Outros créditos" do IPI (inclusive estornos de débitos)
     *
     * Número: 6
     * Tipo: N
     * Tamanho: -
     */
    const VL_OC_IPI = '';
    /**
     * Valor do saldo credor do IPI a transportar para o período seguinte
     *
     * Número: 7
     * Tipo: N
     * Tamanho: -
     */
    const VL_SC_IPI = '';
    /**
     * Valor do saldo devedor do IPI a recolher
     *
     * Número: 8
     * Tipo: N
     * Tamanho: -
     */
    const VL_SD_IPI = '';
    this.registers.push([
      REG,
      VL_SD_ANT_IPI,
      VL_DEB_IPI,
      VL_CRED_IPI,
      VL_OD_IPI,
      VL_OC_IPI,
      VL_SC_IPI,
      VL_SD_IPI,
    ]);
  }

  /**
   * Registro E530 - AJUSTES DA APURAÇÃO DO IPI
   * Nível: 4
   * Ocorrência: 1:N por Período
   */
  private buildE530() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E530"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E530';
    /**
     * Indicador do tipo de ajuste:
     *  0- Ajuste a débito;
     *  1- Ajuste a crédito
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_AJ = '';
    /**
     * Valor do ajuste
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const VL_AJ = '';
    /**
     * Código do ajuste da apuração, conforme a Tabela indicada no item 4.5.4
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 003*
     */
    const COD_AJ = '';
    /**
     * Indicador da origem do documento vinculado ao ajuste:
     *  0 - Processo Judicial;
     *  1 - Processo Administrativo;
     *  2 - PER/DCOMP;
     *  3 - Documento Fiscal 9 - Outros
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_DOC = '';
    /**
     * Número do documento / processo / declaração ao qual o ajuste está vinculado, se houver
     *
     * Número: 6
     * Tipo: C
     * Tamanho: -
     */
    const NUM_DOC = '';
    /**
     * Descrição detalhada do ajuste, com citação dos documentos fiscais
     *
     * Número: 7
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_AJ = '';
    this.registers.push([
      REG,
      IND_AJ,
      VL_AJ,
      COD_AJ,
      IND_DOC,
      NUM_DOC,
      DESCR_AJ,
    ]);
  }

  /**
   * Registro E531 - INFORMAÇÕES ADICIONAIS DOS AJUSTES DA APURAÇÃO DO IPI - IDENTIFICAÇÃO DOS DOCUMENTOS FISCAIS (01 e 55)
   * Nível: 5
   * Ocorrência: 1:N
   */
  private buildE531() {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "E531"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E531';
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
     * Chave da Nota Fiscal Eletrônica (modelo 55)
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 044*
     */
    const CHV_NFE = '';
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
      CHV_NFE,
    ]);
  }

  /**
   * Registro E990 - ENCERRAMENTO DO BLOCO E
   * Nível: 1
   * Ocorrência: um por Arquivo
   */
  private buildE990() {
    /**
     * Texto fixo contendo "E990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = 'E990';
    /**
     * Quantidade total de linhas do Bloco E
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_E = `${this.registers.length + 1}`;
    this.registers.push([REG, QTD_LIN_E]);
  }
}
