import { State } from '@/typings/estados';

export interface EfdIcmsIpiEntity {
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
}
