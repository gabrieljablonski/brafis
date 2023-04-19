import tables from '@/tables';

export default function isValidCityCode(code: string): boolean {
  return tables.cidades.has(code);
}
