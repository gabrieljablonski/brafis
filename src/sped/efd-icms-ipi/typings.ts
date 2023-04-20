import { Bloco0Options } from './Bloco0';
import { Bloco1Options } from './Bloco1';
import { Bloco9Options } from './Bloco9';
import { BlocoBOptions } from './BlocoB';
import { BlocoCOptions } from './BlocoC';
import { BlocoDOptions } from './BlocoD';
import { BlocoEOptions } from './BlocoE';
import { BlocoGOptions } from './BlocoG';
import { BlocoHOptions } from './BlocoH';
import { BlocoKOptions } from './BlocoK';
import { State } from '@/typings/estados';

export interface EfdIcmsIpiEntidade {
  nome: string;
  nomeFantasia?: string;
  cpfCnpj: string;
  cep: string;
  uf: State;
  codigoMunicipio: string;
  bairro: string;
  endereco: string;
  numero?: string;
  complemento?: string;
  telefone?: string;
  fax?: string;
  email?: string;
  ie: string;
  perfil: 'A' | 'B' | 'C';
  im?: string;
  suframa?: string;
  atividadeIndustrial?: boolean;
  contabilista: {
    nome: string;
    cpf: string;
    crc: string;
    cnpj?: string;
    cep?: string;
    endereco?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    telefone?: string;
    fax?: string;
    email: string;
    codigoMunicipio: string;
  };
}

export interface EfdIcmsIpiParticipante {
  codigo: string;
  nome: string;
  codigoPais: string;
  cpfCnpj: string;
  ie?: string;
  codigoMunicipio?: string;
  suframa?: string;
  endereco: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  changes: EfdIcmsIpiParticipanteChange[];
}

export interface EfdIcmsIpiParticipanteChange {
  data: Date;
  numeroCampo:
    | '03'
    | '04'
    | '05'
    | '06'
    | '08'
    | '09'
    | '10'
    | '11'
    | '12'
    | '13';
  conteudoAnterior: string;
}

export interface EfdIcmsIpiItem {
  codigo: string;
  descricao: string;
  codigoBarras?: string;
  unidade: string;
  tipo:
    | '00'
    | '01'
    | '02'
    | '03'
    | '04'
    | '05'
    | '06'
    | '07'
    | '08'
    | '09'
    | '10'
    | '99';
  ncm?: string;
  exIpi?: string;
  genero?: string;
  lst?: string;
  aliquotaIcms?: string;
  cest?: string;
}

export interface EfdIcmsIpiOperacao {
  codigo: string;
  descricao: string;
}

export interface EfdIcmsIpiDocument {
  xml: string;
  cancelled?: boolean;
}

export interface EfdIcmsIpiBuildOptions {
  entity: EfdIcmsIpiEntidade;
  documents: EfdIcmsIpiDocument[];
  bloco0Options: Bloco0Options;
  blocoBOptions?: BlocoBOptions;
  blocoCOptions?: BlocoCOptions;
  blocoDOptions?: BlocoDOptions;
  blocoEOptions?: BlocoEOptions;
  blocoGOptions?: BlocoGOptions;
  blocoHOptions?: BlocoHOptions;
  blocoKOptions?: BlocoKOptions;
  bloco1Options?: Bloco1Options;
  bloco9Options?: Bloco9Options;
}
