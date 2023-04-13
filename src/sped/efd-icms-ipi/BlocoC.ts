import { NotImplemented } from '@/utils/exceptions';
import Bloco from './Bloco';
import type { BlocoOptions } from './Bloco';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlocoCOptions extends BlocoOptions {}

export default class BlocoC extends Bloco {
  constructor(options: BlocoCOptions) {
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
   * Abertura do Bloco C
   * Nível 1
   * Ocorrência 1
   */
  private buildC001(): string[] {
    throw new NotImplemented();
    this.registers.push(['C001']);
  }

  /**
   * Documento - Nota Fiscal (código 01), Nota Fiscal Avulsa (código 1B), Nota Fiscal de Produtor (código 04), Nota Fiscal Eletrônica (código 55) e Nota Fiscal Eletrônica para Consumidor Final (código 65)
   * Nível 2
   * Ocorrência V
   */
  private buildC100(): string[] {
    throw new NotImplemented();
    this.registers.push(['C100']);
  }

  /**
   * Informação complementar dos documentos fiscais quando das operações interestaduais destinadas a consumidor final não contribuinte EC 87/15 (código 55)
   * Nível 3
   * Ocorrência 1:1
   */
  private buildC101(): string[] {
    throw new NotImplemented();
    this.registers.push(['C101']);
  }

  /**
   * Operações com ICMS ST recolhido para UF diversa do destinatário do documento fiscal (Código 55)
   * Nível 3
   * Ocorrência 1:1
   */
  private buildC105(): string[] {
    throw new NotImplemented();
    this.registers.push(['C105']);
  }

  /**
   * Complemento de Documento - Informação Complementar da Nota Fiscal (código 01, 1B, 55)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC110(): string[] {
    throw new NotImplemented();
    this.registers.push(['C110']);
  }

  /**
   * Complemento de Documento - Processo referenciado
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC111(): string[] {
    throw new NotImplemented();
    this.registers.push(['C111']);
  }

  /**
   * Complemento de Documento - Documento de Arrecadação Referenciado
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC112(): string[] {
    throw new NotImplemented();
    this.registers.push(['C112']);
  }

  /**
   * Complemento de Documento - Documento Fiscal Referenciado
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC113(): string[] {
    throw new NotImplemented();
    this.registers.push(['C113']);
  }

  /**
   * Complemento de Documento - Cupom Fiscal Referenciado
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC114(): string[] {
    throw new NotImplemented();
    this.registers.push(['C114']);
  }

  /**
   * Local de coleta e/ou entrega (CÓDIGOS 01, 1B e 04)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC115(): string[] {
    throw new NotImplemented();
    this.registers.push(['C115']);
  }

  /**
   * Cupom Fiscal Eletrônico - CF-e referenciado
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC116(): string[] {
    throw new NotImplemented();
    this.registers.push(['C116']);
  }

  /**
   * Complemento de Documento - Operações de Importação (código 01 e 55)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC120(): string[] {
    throw new NotImplemented();
    this.registers.push(['C120']);
  }

  /**
   * Complemento de Documento - ISSQN, IRRF e Previdência Social
   * Nível 3
   * Ocorrência 1:1
   */
  private buildC130(): string[] {
    throw new NotImplemented();
    this.registers.push(['C130']);
  }

  /**
   * Complemento de Documento - Fatura (código 01)
   * Nível 3
   * Ocorrência 1:1
   */
  private buildC140(): string[] {
    throw new NotImplemented();
    this.registers.push(['C140']);
  }

  /**
   * Complemento de Documento - Vencimento da Fatura (código 01)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC141(): string[] {
    throw new NotImplemented();
    this.registers.push(['C141']);
  }

  /**
   * Complemento de Documento - Volumes Transportados (código 01 e 04) Exceto Combustíveis
   * Nível 3
   * Ocorrência 1:1
   */
  private buildC160(): string[] {
    throw new NotImplemented();
    this.registers.push(['C160']);
  }

  /**
   * Complemento de Documento - Operações com combustíveis (código 01)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC165(): string[] {
    throw new NotImplemented();
    this.registers.push(['C165']);
  }

  /**
   * Complemento de Documento - Itens do Documento (código 01, 1B, 04 e 55)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC170(): string[] {
    throw new NotImplemented();
    this.registers.push(['C170']);
  }

  /**
   * Complemento de Item - Armazenamento de Combustíveis (código 01,55)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC171(): string[] {
    throw new NotImplemented();
    this.registers.push(['C171']);
  }

  /**
   * Complemento de Item - Operações com ISSQN (código 01)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC172(): string[] {
    throw new NotImplemented();
    this.registers.push(['C172']);
  }

  /**
   * Complemento de Item - Operações com Medicamentos (código 01,55)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC173(): string[] {
    throw new NotImplemented();
    this.registers.push(['C173']);
  }

  /**
   * Complemento de Item - Operações com Armas de Fogo (código 01)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC174(): string[] {
    throw new NotImplemented();
    this.registers.push(['C174']);
  }

  /**
   * Complemento de Item - Operações com Veículos Novos (código 01,55)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC175(): string[] {
    throw new NotImplemented();
    this.registers.push(['C175']);
  }

  /**
   * Complemento de Item -Ressarcimento de ICMS em operações com Substituição Tributária (código 01,55)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC176(): string[] {
    throw new NotImplemented();
    this.registers.push(['C176']);
  }

  /**
   * Complemento de Item - Outras informações (Cód. 01, 55) - (Válido a partir de 01/01/2019)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC177(): string[] {
    throw new NotImplemented();
    this.registers.push(['C177']);
  }

  /**
   * Complemento de Item - Operações com Produtos Sujeitos a Tributação de IPI por Unidade ou Quantidade de produto
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC178(): string[] {
    throw new NotImplemented();
    this.registers.push(['C178']);
  }

  /**
   * Complemento de Item - Informações Complementares ST (código 01)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC179(): string[] {
    throw new NotImplemented();
    this.registers.push(['C179']);
  }

  /**
   * Informações complementares das operações de entrada de mercadorias sujeitas à substituição tributária (código 01, 1B, 04 e 55)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC180(): string[] {
    throw new NotImplemented();
    this.registers.push(['C180']);
  }

  /**
   * Informações complementares das operações de devolução de saídas de mercadorias sujeitas à substituição tributária (código 01, 1B, 04 e 55).
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC181(): string[] {
    throw new NotImplemented();
    this.registers.push(['C181']);
  }

  /**
   * Informações complementares das operações de saída de mercadorias sujeitas à substituição tributária (código 01, 1B, 04 e 55)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC185(): string[] {
    throw new NotImplemented();
    this.registers.push(['C185']);
  }

  /**
   * Informações complementares das operações de devolução de entradas de mercadorias sujeitas à substituição tributária (código 01, 1B, 04 e 55).
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC186(): string[] {
    throw new NotImplemented();
    this.registers.push(['C186']);
  }

  /**
   * Registro Analítico do Documento (código 01, 1B, 04, 55 e 65)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC190(): string[] {
    throw new NotImplemented();
    this.registers.push(['C190']);
  }

  /**
   * Informações do Fundo de Combate à Pobreza - FCP - na NF-e (Código 55)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC191(): string[] {
    throw new NotImplemented();
    this.registers.push(['C191']);
  }

  /**
   * Complemento do Registro Analítico - Observações do Lançamento Fiscal (código 01, 1B, 04 e 55)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC195(): string[] {
    throw new NotImplemented();
    this.registers.push(['C195']);
  }

  /**
   * Outras Obrigações Tributárias, Ajustes e Informações provenientes de Documento Fiscal
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC197(): string[] {
    throw new NotImplemented();
    this.registers.push(['C197']);
  }

  /**
   * Documento - Resumo Diário das Notas Fiscais de Venda a Consumidor (código 02)
   * Nível 2
   * Ocorrência V
   */
  private buildC300(): string[] {
    throw new NotImplemented();
    this.registers.push(['C300']);
  }

  /**
   * Documentos Cancelados de Nota Fiscal de Venda a Consumidor (código 02)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC310(): string[] {
    throw new NotImplemented();
    this.registers.push(['C310']);
  }

  /**
   * Registro Analítico das Notas Fiscais de Venda a Consumidor (código 02)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC320(): string[] {
    throw new NotImplemented();
    this.registers.push(['C320']);
  }

  /**
   * Itens dos Resumos Diários dos Documentos (código 02)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC321(): string[] {
    throw new NotImplemented();
    this.registers.push(['C321']);
  }

  /**
   * Informações complementares das operações de saída de mercadorias sujeitas à substituição tributária (código 02)
   * Nível 5
   * Ocorrência 1:1
   */
  private buildC330(): string[] {
    throw new NotImplemented();
    this.registers.push(['C330']);
  }

  /**
   * Nota Fiscal de venda a consumidor (código 02)
   * Nível 2
   * Ocorrência V
   */
  private buildC350(): string[] {
    throw new NotImplemented();
    this.registers.push(['C350']);
  }

  /**
   * Itens do documento (código 02)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC370(): string[] {
    throw new NotImplemented();
    this.registers.push(['C370']);
  }

  /**
   * Informações complementares das operações de saída de mercadorias sujeitas à substituição tributária (código 02)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC380(): string[] {
    throw new NotImplemented();
    this.registers.push(['C380']);
  }

  /**
   * Registro Analítico das Notas Fiscais de Venda a Consumidor (código 02)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC390(): string[] {
    throw new NotImplemented();
    this.registers.push(['C390']);
  }

  /**
   * Equipamento ECF (código 02, 2D e 60)
   * Nível 2
   * Ocorrência V
   */
  private buildC400(): string[] {
    throw new NotImplemented();
    this.registers.push(['C400']);
  }

  /**
   * Redução Z (código 02, 2D e 60)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC405(): string[] {
    throw new NotImplemented();
    this.registers.push(['C405']);
  }

  /**
   * PIS e COFINS Totalizados no Dia (código 02 e 2D)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC410(): string[] {
    throw new NotImplemented();
    this.registers.push(['C410']);
  }

  /**
   * Registro dos Totalizadores Parciais da Redução Z (código 02, 2D e 60)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC420(): string[] {
    throw new NotImplemented();
    this.registers.push(['C420']);
  }

  /**
   * Resumo de itens do movimento diário (código 02 e 2D)
   * Nível 5
   * Ocorrência 1:N
   */
  private buildC425(): string[] {
    throw new NotImplemented();
    this.registers.push(['C425']);
  }

  /**
   * Informações complementares das operações de saída de mercadorias sujeitas à substituição tributária (código 02, 2D e 60)
   * Nível 6
   * Ocorrência 1:N
   */
  private buildC430(): string[] {
    throw new NotImplemented();
    this.registers.push(['C430']);
  }

  /**
   * Documento Fiscal Emitido por ECF (código 02, 2D e 60)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC460(): string[] {
    throw new NotImplemented();
    this.registers.push(['C460']);
  }

  /**
   * Complemento do Cupom Fiscal Eletrônico Emitido por ECF - CF-e-ECF (código 60)
   * Nível 5
   * Ocorrência 1:1
   */
  private buildC465(): string[] {
    throw new NotImplemented();
    this.registers.push(['C465']);
  }

  /**
   * Itens do Documento Fiscal Emitido por ECF (código 02 e 2D)
   * Nível 5
   * Ocorrência 1:N
   */
  private buildC470(): string[] {
    throw new NotImplemented();
    this.registers.push(['C470']);
  }

  /**
   * Informações complementares das operações de saída de mercadorias sujeitas à substituição tributária (código 02, 2D e 60)
   * Nível 6
   * Ocorrência 1:1
   */
  private buildC480(): string[] {
    throw new NotImplemented();
    this.registers.push(['C480']);
  }

  /**
   * Registro Analítico do movimento diário (código 02, 2D e 60)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC490(): string[] {
    throw new NotImplemented();
    this.registers.push(['C490']);
  }

  /**
   * Resumo Mensal de Itens do ECF por Estabelecimento (código 02 e 2D e 2E)
   * Nível 2
   * Ocorrência V
   */
  private buildC495(): string[] {
    throw new NotImplemented();
    this.registers.push(['C495']);
  }

  /**
   * Nota Fiscal/Conta de Energia Elétrica (código 06), Nota Fiscal de Energia Elétrica Eletrônica (código 66) , Nota Fiscal/Conta de fornecimento dágua canalizada (código 29) e Nota Fiscal/Consumo Fornecimento de Gás (Código 28)
   * Nível 2
   * Ocorrência V
   */
  private buildC500(): string[] {
    throw new NotImplemented();
    this.registers.push(['C500']);
  }

  /**
   * Itens do Documento - Nota Fiscal/Conta de Energia Elétrica (código 06), Nota Fiscal/Conta de fornecimento d'água canalizada (código 29) e Nota Fiscal/Conta Fornecimento de Gás (Código 28)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC510(): string[] {
    throw new NotImplemented();
    this.registers.push(['C510']);
  }

  /**
   * Registro Analítico do Documento - Nota Fiscal/Conta de Energia Elétrica (código 06), Nota Fiscal de Energia Elétrica Eletrônica (código 66), Nota Fiscal/Conta de fornecimento d'água canalizada (código 29) e Nota Fiscal/Conta Fornecimento de Gás (Código 28)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC590(): string[] {
    throw new NotImplemented();
    this.registers.push(['C590']);
  }

  /**
   * Informações do Fundo de Combate à Pobreza - FCP na NF3e (código 66)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC591(): string[] {
    throw new NotImplemented();
    this.registers.push(['C591']);
  }

  /**
   * Observações do Lançamento Fiscal (códigos 06, 28, 29 e 66)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC595(): string[] {
    throw new NotImplemented();
    this.registers.push(['C595']);
  }

  /**
   * Outras obrigações tributárias, ajustes e informações de valores provenientes de documento fiscal.
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC597(): string[] {
    throw new NotImplemented();
    this.registers.push(['C597']);
  }

  /**
   * Consolidação Diária de Notas Fiscais/Contas de Energia Elétrica (Código 06), Nota Fiscal/Conta de Fornecimento d´água (código 29) e Nota Fiscal/Conta de Fornecimento de Gás (Código 28) - (Empresas não obrigadas ao Convênio ICMS 115/03)
   * Nível 2
   * Ocorrência V
   */
  private buildC600(): string[] {
    throw new NotImplemented();
    this.registers.push(['C600']);
  }

  /**
   * Documentos cancelados - Consolidação diária de notas fiscais/conta de energia elétrica (Código 06), nota fiscal/conta de fornecimento de água (código 29) e nota fiscal/conta de fornecimento de gás (código 28)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC601(): string[] {
    throw new NotImplemented();
    this.registers.push(['C601']);
  }

  /**
   * Itens do Documento Consolidado - Notas Fiscais/Contas de Energia Elétrica (Código 06), Nota Fiscal/Conta de Fornecimento d´água (código 29) e Nota Fiscal/Conta de Fornecimento de Gás (Código 28) - (Empresas não obrigadas ao Convênio ICMS 115/03)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC610(): string[] {
    throw new NotImplemented();
    this.registers.push(['C610']);
  }

  /**
   * Registro Analítico dos Documentos - Notas Fiscais/Contas de Energia Elétrica (Código 06), Nota Fiscal/Conta de Fornecimento d´água (código 29) e Nota Fiscal/Conta de Fornecimento de Gás (Código 28)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC690(): string[] {
    throw new NotImplemented();
    this.registers.push(['C690']);
  }

  /**
   * Consolidação dos Documentos Nota Fiscal/Conta Energia Elétrica (código 06) emitidas em via única - (Empresas obrigadas à entrega do arquivo previsto no Convênio ICMS 115/03), Nota Fiscal/Conta de Fornecimento de Gás Canalizado (Código 28) e Nota Fiscal de Energia Elétrica Eletrônica (código 66)
   * Nível 2
   * Ocorrência V
   */
  private buildC700(): string[] {
    throw new NotImplemented();
    this.registers.push(['C700']);
  }

  /**
   * Registro Analítico dos Documentos (Códigos 06, 28 e 66)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC790(): string[] {
    throw new NotImplemented();
    this.registers.push(['C790']);
  }

  /**
   * Registro de Informações de ICMS ST por UF (Código 06 e 66)
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC791(): string[] {
    throw new NotImplemented();
    this.registers.push(['C791']);
  }

  /**
   * Registro Cupom Fiscal Eletrônico - CF-e (Código 59)
   * Nível 2
   * Ocorrência V
   */
  private buildC800(): string[] {
    throw new NotImplemented();
    this.registers.push(['C800']);
  }

  /**
   * Itens do documento do cupom fiscal eletrônico - SAT (CF-E-SAT) (código 59)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC810(): string[] {
    throw new NotImplemented();
    this.registers.push(['C810']);
  }

  /**
   * Informações complementares das operações de saída de mercadorias sujeitas à substituição tributária (CF-E-SAT) (código 59)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC815(): string[] {
    throw new NotImplemented();
    this.registers.push(['C815']);
  }

  /**
   * Registro Analítico do CF-e (Código 59)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC850(): string[] {
    throw new NotImplemented();
    this.registers.push(['C850']);
  }

  /**
   * Observações do lançamento fiscal (Código 59)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC855(): string[] {
    throw new NotImplemented();
    this.registers.push(['C855']);
  }

  /**
   * Outras obrigações tributárias, ajustes e informações de valores provenientes de documento fiscal.
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC857(): string[] {
    throw new NotImplemented();
    this.registers.push(['C857']);
  }

  /**
   * Identificação do equipamento SAT-CF-e (Código 59)
   * Nível 2
   * Ocorrência V
   */
  private buildC860(): string[] {
    throw new NotImplemented();
    this.registers.push(['C860']);
  }

  /**
   * Itens do documento do cupom fiscal eletrônico - SAT (CF-E-SAT) (código 59)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC870(): string[] {
    throw new NotImplemented();
    this.registers.push(['C870']);
  }

  /**
   * Informações complementares das operações de saída de mercadorias sujeitas à substituição tributária (CF-E-SAT) (código 59)
   * Nível 4
   * Ocorrência 1:1
   */
  private buildC880(): string[] {
    throw new NotImplemented();
    this.registers.push(['C880']);
  }

  /**
   * Resumo diário de CF-e (Código 59) por equipamento SAT-CF-e
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC890(): string[] {
    throw new NotImplemented();
    this.registers.push(['C890']);
  }

  /**
   * Observações do lançamento fiscal (Código 59)
   * Nível 3
   * Ocorrência 1:N
   */
  private buildC895(): string[] {
    throw new NotImplemented();
    this.registers.push(['C895']);
  }

  /**
   * Outras obrigações tributárias, ajustes e informações de valores provenientes de documento fiscal.
   * Nível 4
   * Ocorrência 1:N
   */
  private buildC897(): string[] {
    throw new NotImplemented();
    this.registers.push(['C897']);
  }

  /**
   * Encerramento do Bloco C
   * Nível 1
   * Ocorrência 1
   */
  private buildC990(): string[] {
    throw new NotImplemented();
    this.registers.push(['C990']);
  }
}
