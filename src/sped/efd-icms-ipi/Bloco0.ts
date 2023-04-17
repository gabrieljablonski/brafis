import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bloco0Options extends BlocoOptions {}

export default class Bloco0 extends Bloco {
  constructor(options: Bloco0Options) {
    super(options);
  }

  build(): string[][] {
    throw new NotImplemented();
    this.registers = [];

    this.build0000();
    this.build0001();
    this.build0002();
    this.build0005();
    this.build0015();
    this.build0100();
    this.build0150();
    this.build0190();
    this.build0200();
    this.build0300();
    this.build0400();
    this.build0450();
    this.build0460();
    this.build0500();
    this.build0600();
    this.build0990();

    return this.registers;
  }

  /**
   * Registro 0000 - ABERTURA DO ARQUIVO DIGITAL E IDENTIFICAÇÃO DA ENTIDADE
   * Nível: 0
   * Ocorrência: um por arquivo
   */
  private build0000(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0000"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0000';
    /**
     * Código da versão do leiaute conforme a tabela indicada no Ato COTEPE
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 003*
     */
    const COD_VER = '';
    /**
     * Código da finalidade do arquivo:
     *  0 - Remessa do arquivo original;
     *  1 - Remessa do arquivo substituto
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 1
     */
    const COD_FIN = '';
    /**
     * Data inicial das informações contidas no arquivo
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final das informações contidas no arquivo
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIN = '';
    /**
     * Nome empresarial da entidade
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 100
     */
    const NOME = '';
    /**
     * Número de inscrição da entidade no CNPJ
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ = '';
    /**
     * Número de inscrição da entidade no CPF
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = '';
    /**
     * Sigla da unidade da federação da entidade
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 002*
     */
    const UF = '';
    /**
     * Inscrição Estadual da entidade
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 14
     */
    const IE = '';
    /**
     * Código do município do
     *  domicílio fiscal da entidade, conforme a tabela IBGE
     *
     * Número: 11
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN = '';
    /**
     * Inscrição Municipal da entidade
     *
     * Número: 12
     * Tipo: C
     * Tamanho: -
     */
    const IM = '';
    /**
     * Inscrição da entidade na SUFRAMA
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 009*
     */
    const SUFRAMA = '';
    /**
     * Perfil de apresentação do arquivo fiscal;
     *  A - Perfil A;
     *  B - Perfil B.;
     *  C - Perfil C
     *
     * Número: 14
     * Tipo: C
     * Tamanho: 1
     */
    const IND_PERFIL = '';
    /**
     * Indicador de tipo de atividade:
     *  0 - Industrial ou equiparado a industrial;
     *  1 - Outros
     *
     * Número: 15
     * Tipo: N
     * Tamanho: 1
     */
    const IND_ATIV = '';
    this.registers.push([
      REG,
      COD_VER,
      COD_FIN,
      DT_INI,
      DT_FIN,
      NOME,
      CNPJ,
      CPF,
      UF,
      IE,
      COD_MUN,
      IM,
      SUFRAMA,
      IND_PERFIL,
      IND_ATIV,
    ]);
  }

  /**
   * Registro 0001 - ABERTURA DO BLOCO 0
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private build0001(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0001"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0001';
    /**
     * Indicador de movimento:
     *  0- Bloco com dados informados;
     *  1- Bloco sem dados informados
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 1
     */
    const IND_MOV = '';
    this.registers.push([REG, IND_MOV]);
  }

  /**
   * Registro 0002 - CLASSIFICAÇÃO DO ESTABELECIMENTO INDUSTRIAL OU EQUIPARADO A INDUSTRIAL
   * Nível: 2
   * Ocorrência: um por arquivo
   */
  private build0002(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0002"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0002';
    /**
     * Informar a classificação do estabelecimento conforme tabela 4.5.5
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 2
     */
    const CLAS_ESTAB_IND = '';
    this.registers.push([REG, CLAS_ESTAB_IND]);
  }

  /**
   * Registro 0005 - DADOS COMPLEMENTARES DA ENTIDADE
   * Nível: 2
   * Ocorrência: um por arquivo
   */
  private build0005(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0005"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0005';
    /**
     * Nome de fantasia associado ao nome empresarial
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const FANTASIA = '';
    /**
     * Código de Endereçamento Postal
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const CEP = '';
    /**
     * Logradouro e endereço do imóvel
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const END = '';
    /**
     * Número do imóvel
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 10
     */
    const NUM = '';
    /**
     * Dados complementares do endereço
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COMPL = '';
    /**
     * Bairro em que o imóvel está situado
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const BAIRRO = '';
    /**
     * Número do telefone (DDD+FONE)
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 11
     */
    const FONE = '';
    /**
     * Número do fax
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 11
     */
    const FAX = '';
    /**
     * Endereço do correio eletrônico
     *
     * Número: 10
     * Tipo: C
     * Tamanho: -
     */
    const EMAIL = '';
    this.registers.push([
      REG,
      FANTASIA,
      CEP,
      END,
      NUM,
      COMPL,
      BAIRRO,
      FONE,
      FAX,
      EMAIL,
    ]);
  }

  /**
   * Registro 0015 - DADOS DO CONTRIBUINTE SUBSTITUTO OU RESPONSÁVEL PELO ICMS DESTINO
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0015(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0015"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0015';
    /**
     * Sigla da unidade da federação do contribuinte substituído ou unidade de federação do consumidor final não contribuinte - ICMS
     *  Destino EC 87/15
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 002*
     */
    const UF_ST = '';
    /**
     * Inscrição Estadual do contribuinte substituto na unidade da federação do contribuinte substituído ou unidade de federação do consumidor final não contribuinte - ICMS Destino EC 87/15
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 14
     */
    const IE_ST = '';
    this.registers.push([REG, UF_ST, IE_ST]);
  }

  /**
   * Registro 0100 - DADOS DO CONTABILISTA
   * Nível: 2
   * Ocorrência: um por arquivo
   */
  private build0100(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0100"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0100';
    /**
     * Nome do contabilista
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 100
     */
    const NOME = '';
    /**
     * Número de inscrição do contabilista no CPF
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = '';
    /**
     * Número de inscrição do contabilista no Conselho Regional de Contabilidade
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 15
     */
    const CRC = '';
    /**
     * Número de inscrição do escritório de contabilidade no CNPJ, se houver
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ = '';
    /**
     * Código de Endereçamento Postal
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 008*
     */
    const CEP = '';
    /**
     * Logradouro e endereço do imóvel
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const END = '';
    /**
     * Número do imóvel
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 10
     */
    const NUM = '';
    /**
     * Dados complementares do endereço
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 60
     */
    const COMPL = '';
    /**
     * Bairro em que o imóvel está situado
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 60
     */
    const BAIRRO = '';
    /**
     * Número do telefone (DDD+FONE)
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 11
     */
    const FONE = '';
    /**
     * Número do fax
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 11
     */
    const FAX = '';
    /**
     * Endereço do correio eletrônico
     *
     * Número: 13
     * Tipo: C
     * Tamanho: -
     */
    const EMAIL = '';
    /**
     * Código do município, conforme tabela IBGE
     *
     * Número: 14
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN = '';
    this.registers.push([
      REG,
      NOME,
      CPF,
      CRC,
      CNPJ,
      CEP,
      END,
      NUM,
      COMPL,
      BAIRRO,
      FONE,
      FAX,
      EMAIL,
      COD_MUN,
    ]);
  }

  /**
   * Registro 0150 - TABELA DE CADASTRO DO PARTICIPANTE
   * Nível: 2
   * Ocorrência: vários por arquivo
   */
  private build0150(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0150"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0150';
    /**
     * Código de identificação do participante no arquivo
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PART = '';
    /**
     * Nome pessoal ou empresarial do participante
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 100
     */
    const NOME = '';
    /**
     * Código do país do participante, conforme a tabela indicada no item 3.2.1
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 5
     */
    const COD_PAIS = '';
    /**
     * CNPJ do participante
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 014*
     */
    const CNPJ = '';
    /**
     * CPF do participante
     *
     * Número: 6
     * Tipo: N
     * Tamanho: 011*
     */
    const CPF = '';
    /**
     * Inscrição Estadual do participante
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 14
     */
    const IE = '';
    /**
     * Código do município, conforme a tabela IBGE
     *
     * Número: 8
     * Tipo: N
     * Tamanho: 007*
     */
    const COD_MUN = '';
    /**
     * Número de inscrição do participante na SUFRAMA
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 009*
     */
    const SUFRAMA = '';
    /**
     * Logradouro e endereço do imóvel
     *
     * Número: 10
     * Tipo: C
     * Tamanho: 60
     */
    const END = '';
    /**
     * Número do imóvel
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 10
     */
    const NUM = '';
    /**
     * Dados complementares do endereço
     *
     * Número: 12
     * Tipo: C
     * Tamanho: 60
     */
    const COMPL = '';
    /**
     * Bairro em que o imóvel está situado
     *
     * Número: 13
     * Tipo: C
     * Tamanho: 60
     */
    const BAIRRO = '';
    this.registers.push([
      REG,
      COD_PART,
      NOME,
      COD_PAIS,
      CNPJ,
      CPF,
      IE,
      COD_MUN,
      SUFRAMA,
      END,
      NUM,
      COMPL,
      BAIRRO,
    ]);
  }

  /**
   * Registro 0175 - ALTERAÇÃO DA TABELA DE CADASTRO DE PARTICIPANTE
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0175(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0175"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0175';
    /**
     * Data de alteração do cadastro
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_ALT = '';
    /**
     * Número do campo alterado (campos 03 a 13, exceto 07)
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 2
     */
    const NR_CAMPO = '';
    /**
     * Conteúdo anterior do campo
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 100
     */
    const CONT_ANT = '';
    this.registers.push([REG, DT_ALT, NR_CAMPO, CONT_ANT]);
  }

  /**
   * Registro 0190 - IDENTIFICAÇÃO DAS UNIDADES DE MEDIDA
   * Nível: 2
   * Ocorrência: vários por arquivo
   */
  private build0190(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0190"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0190';
    /**
     * Código da unidade de medida
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const UNID = '';
    /**
     * Descrição da unidade de medida
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR = '';
    this.registers.push([REG, UNID, DESCR]);
  }

  /**
   * Registro 0200 - TABELA DE IDENTIFICAÇÃO DO ITEM (PRODUTO E SERVIÇOS)
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0200(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0200"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0200';
    /**
     * Código do item
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM = '';
    /**
     * Descrição do item
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_ITEM = '';
    /**
     * Representação alfanumérico do código de barra do produto, se houver
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const COD_BARRA = '';
    /**
     * Código anterior do item com relação à última
     *  informação apresentada
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ANT_ITEM = '';
    /**
     * Unidade de medida utilizada na quantificação de estoques
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 6
     */
    const UNID_INV = '';
    /**
     * Tipo do item - Atividades Industriais, Comerciais e Serviços:
     *  00 - Mercadoria para Revenda; 01 - Matéria-prima;
     *  02 - Embalagem;
     *  03 - Produto em Processo; 04 - Produto Acabado;
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 2
     */
    const TIPO_ITEM = '';
    /**
     * Código da Nomenclatura Comum do Mercosul
     *
     * Número: 8
     * Tipo: C
     * Tamanho: 008*
     */
    const COD_NCM = '';
    /**
     * Código EX, conforme a TIPI
     *
     * Número: 9
     * Tipo: C
     * Tamanho: 3
     */
    const EX_IPI = '';
    /**
     * Código do gênero do item, conforme a Tabela
     *  4.2.1
     *
     * Número: 10
     * Tipo: N
     * Tamanho: 002*
     */
    const COD_GEN = '';
    /**
     * Código do serviço conforme lista do Anexo I da Lei Complementar Federal nº 116/03
     *
     * Número: 11
     * Tipo: C
     * Tamanho: 5
     */
    const COD_LST = '';
    /**
     * Alíquota de ICMS aplicável ao item nas
     *  operações internas
     *
     * Número: 12
     * Tipo: N
     * Tamanho: 6
     */
    const ALIQ_ICMS = '';
    /**
     * Código Especificador da Substituição Tributária
     *
     * Número: 13
     * Tipo: N
     * Tamanho: 007*
     */
    const CEST = '';
    this.registers.push([
      REG,
      COD_ITEM,
      DESCR_ITEM,
      COD_BARRA,
      COD_ANT_ITEM,
      UNID_INV,
      TIPO_ITEM,
      COD_NCM,
      EX_IPI,
      COD_GEN,
      COD_LST,
      ALIQ_ICMS,
      CEST,
    ]);
  }

  /**
   * Registro 0205 - ALTERAÇÃO DO ITEM
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0205(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0205"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0205';
    /**
     * Descrição anterior do item
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_ANT_ITEM = '';
    /**
     * Data inicial de utilização da descrição do item
     *
     * Número: 3
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_INI = '';
    /**
     * Data final de utilização da descrição do item
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_FIM = '';
    /**
     * Código anterior do item com relação à última informação apresentada
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ANT_ITEM = '';
    this.registers.push([REG, DESCR_ANT_ITEM, DT_INI, DT_FIM, COD_ANT_ITEM]);
  }

  /**
   * Registro 0206 - CÓDIGO DE PRODUTO CONFORME TABELA PUBLICADA PELA ANP
   * Nível: 3
   * Ocorrência: 1:1
   */
  private build0206(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0206"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0206';
    /**
     * Código do produto, conforme tabela publicada pela ANP
     *
     * Número: 2
     * Tipo: C
     * Tamanho: -
     */
    const COD_COMB = '';
    this.registers.push([REG, COD_COMB]);
  }

  /**
   * Registro 0210 - CONSUMO ESPECÍFICO PADRONIZADO (VÁLIDO ATÉ 31/12/2021)
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0210(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0210"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0210';
    /**
     * Código do item componente/insumo (campo 02 do Registro 0200)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_COMP = '';
    /**
     * Quantidade do item componente/insumo para se
     *  produzir uma unidade do item composto/resultante
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_COMP = '';
    /**
     * Perda/quebra normal percentual do insumo/componente para se produzir uma unidade do item composto/resultante
     *
     * Número: 4
     * Tipo: N
     * Tamanho: -
     */
    const PERDA = '';
    this.registers.push([REG, COD_ITEM_COMP, QTD_COMP, PERDA]);
  }

  /**
   * Registro 0220 - FATORES DE CONVERSÃO DE UNIDADES
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0220(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0220"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0220';
    /**
     * Unidade comercial a ser convertida na unidade de estoque,
     *  referida no registro 0200. Ou unidade do 0200 utilizada na EFD anterior
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const UNID_CONV = '';
    /**
     * Fator de conversão: fator utilizado para converter (multiplicar) a unidade a ser convertida na unidade adotada no inventário
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const FAT_CONV = '';
    /**
     * Representação alfanumérica do código de barra da unidade comercial do produto, se houver
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const COD_BARRA = '';
    this.registers.push([REG, UNID_CONV, FAT_CONV, COD_BARRA]);
  }

  /**
   * Registro 0221 - CORRELAÇÃO ENTRE CÓDIGOS DE ITENS COMERCIALIZADOS
   * Nível: 3
   * Ocorrência: 1:N
   */
  private build0221(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0221"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0221';
    /**
     * Informar o código do item atômico contido no item informado
     *  no 0200 Pai
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_ITEM_ATOMICO = '';
    /**
     * Informar quantos itens atômicos estão contidos no item informado no 0200 Pai
     *
     * Número: 3
     * Tipo: N
     * Tamanho: -
     */
    const QTD_CONTIDA = '';
    this.registers.push([REG, COD_ITEM_ATOMICO, QTD_CONTIDA]);
  }

  /**
   * Registro 0300 - CADASTRO DE BENS OU COMPONENTES DO ATIVO IMOBILIZADO
   * Nível: 2
   * Ocorrência: Vários (por arquivo)
   */
  private build0300(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0300"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0300';
    /**
     * Código individualizado do bem ou componente adotado no
     *  controle patrimonial do estabelecimento informante
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_IND_BEM = '';
    /**
     * Identificação do tipo de mercadoria:
     *  1 = bem;
     *  2 = componente
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 001*
     */
    const IDENT_MERC = '';
    /**
     * Descrição do bem ou componente (modelo, marca e outras características necessárias a sua individualização)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_ITEM = '';
    /**
     * Código de cadastro do bem principal nos casos em que o bem ou componente (campo 02) esteja vinculado a um bem
     *  principal
     *
     * Número: 5
     * Tipo: C
     * Tamanho: 60
     */
    const COD_PRNC = '';
    /**
     * Código da conta analítica de contabilização do bem ou componente (campo 06 do Registro 0500)
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CTA = '';
    /**
     * Número total de parcelas a serem apropriadas, segundo a
     *  legislação de cada unidade federada
     *
     * Número: 7
     * Tipo: N
     * Tamanho: 3
     */
    const NR_PARC = '';
    this.registers.push([
      REG,
      COD_IND_BEM,
      IDENT_MERC,
      DESCR_ITEM,
      COD_PRNC,
      COD_CTA,
      NR_PARC,
    ]);
  }

  /**
   * Registro 0305 - INFORMAÇÃO SOBRE A UTILIZAÇÃO DO BEM
   * Nível: 3
   * Ocorrência: 1:1
   */
  private build0305(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0305"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0305';
    /**
     * Código do centro de custo onde o bem está sendo ou será utilizado (campo 03 do Registro 0600)
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CCUS = '';
    /**
     * Descrição sucinta da função do bem na atividade do estabelecimento
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const FUNC = '';
    /**
     * Vida útil estimada do bem, em número de meses
     *
     * Número: 4
     * Tipo: N
     * Tamanho: 3
     */
    const VIDA_UTIL = '';
    this.registers.push([REG, COD_CCUS, FUNC, VIDA_UTIL]);
  }

  /**
   * Registro 0400 - TABELA DE NATUREZA DA OPERAÇÃO/PRESTAÇÃO
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0400(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0400"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0400';
    /**
     * Código da natureza da operação/prestação
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 10
     */
    const COD_NAT = '';
    /**
     * Descrição da natureza da operação/prestação
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const DESCR_NAT = '';
    this.registers.push([REG, COD_NAT, DESCR_NAT]);
  }

  /**
   * Registro 0450 - TABELA DE INFORMAÇÃO COMPLEMENTAR DO DOCUMENTO
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0450(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0450"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0450';
    /**
     * Código da informação complementar do documento fiscal
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_INF = '';
    /**
     * Texto livre da informação complementar existente no documento fiscal, inclusive espécie de normas legais, poder normativo, número, capitulação, data e demais referências pertinentes com indicações referentes ao tributo
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT = '';
    this.registers.push([REG, COD_INF, TXT]);
  }

  /**
   * Registro 0460 - TABELA DE OBSERVAÇÕES DO LANÇAMENTO FISCAL
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0460(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0460"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0460';
    /**
     * Código da Observação do lançamento fiscal
     *
     * Número: 2
     * Tipo: C
     * Tamanho: 6
     */
    const COD_OBS = '';
    /**
     * Descrição da observação vinculada ao lançamento fiscal
     *
     * Número: 3
     * Tipo: C
     * Tamanho: -
     */
    const TXT = '';
    this.registers.push([REG, COD_OBS, TXT]);
  }

  /**
   * Registro 0500 - PLANO DE CONTAS CONTÁBEIS
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0500(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0500"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0500';
    /**
     * Data da inclusão/alteração
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_ALT = '';
    /**
     * Código da natureza da conta/grupo de contas: 01 - Contas de ativo;
     *  02 - Contas de passivo; 03 - Patrimônio líquido; 04 - Contas de resultado;
     *  05 - Contas de compensação; 09 - Outras
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 002*
     */
    const COD_NAT_CC = '';
    /**
     * Indicador do tipo de conta:
     *  S - Sintética (grupo de contas); A - Analítica (conta)
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 001*
     */
    const IND_CTA = '';
    /**
     * Nível da conta analítica/grupo de contas
     *
     * Número: 5
     * Tipo: N
     * Tamanho: 5
     */
    const NÍVEL = '';
    /**
     * Código da conta analítica/grupo de contas
     *
     * Número: 6
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CTA = '';
    /**
     * Nome da conta analítica/grupo de contas
     *
     * Número: 7
     * Tipo: C
     * Tamanho: 60
     */
    const NOME_CTA = '';
    this.registers.push([
      REG,
      DT_ALT,
      COD_NAT_CC,
      IND_CTA,
      NÍVEL,
      COD_CTA,
      NOME_CTA,
    ]);
  }

  /**
   * Registro 0600 - CENTRO DE CUSTOS
   * Nível: 2
   * Ocorrência: vários (por arquivo)
   */
  private build0600(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0600"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 004*
     */
    const REG = '0600';
    /**
     * Data da inclusão/alteração
     *
     * Número: 2
     * Tipo: N
     * Tamanho: 008*
     */
    const DT_ALT = '';
    /**
     * Código do centro de custos
     *
     * Número: 3
     * Tipo: C
     * Tamanho: 60
     */
    const COD_CCUS = '';
    /**
     * Nome do centro de custos
     *
     * Número: 4
     * Tipo: C
     * Tamanho: 60
     */
    const CCUS = '';
    this.registers.push([REG, DT_ALT, COD_CCUS, CCUS]);
  }

  /**
   * Registro 0990 - ENCERRAMENTO DO BLOCO 0
   * Nível: 1
   * Ocorrência: um por arquivo
   */
  private build0990(): string[] {
    throw new NotImplemented();
    /**
     * Texto fixo contendo "0990"
     *
     * Número: 1
     * Tipo: C
     * Tamanho: 4
     */
    const REG = '0990';
    /**
     * Quantidade total de linhas do Bloco 0
     *
     * Número: 2
     * Tipo: N
     * Tamanho: -
     */
    const QTD_LIN_0 = '';
    this.registers.push([REG, QTD_LIN_0]);
  }
}
