export interface TableVersaoLeiauteEntry {
  codigo: string;
  versao: string;
  instituidoPor: string;
  obrigatoriedade: Date;
}

export interface TableEstadosEntry {
  codigo: string;
  sigla: string;
  nome: string;
}

export interface TableCidadesEntry {
  codigo: string;
  nome: string;
  estado: string;
}
