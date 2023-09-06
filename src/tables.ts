import {
  TableCidadesEntry,
  TableEstadosEntry,
  TableVersaoLeiauteEntry,
} from '@/typings';
import fs from 'fs';
import path from 'path';

/**
 * @todo only load tables when they're first used
 */

const versaoLeiauteRaw = JSON.parse(
  fs
    .readFileSync(
      path.resolve(__dirname, '../tables/sped/efd-icms-ipi/versao-leiaute.json')
    )
    .toString()
);
const versaoLeiaute = new Map<string, TableVersaoLeiauteEntry>(
  Object.entries(
    versaoLeiauteRaw as Record<string, TableVersaoLeiauteEntry>
  ).map(([codigo, entry]) => [
    codigo,
    {
      ...entry,
      obrigatoriedade: new Date(entry.obrigatoriedade),
    },
  ])
);

const estadosRaw = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../tables/estados.json')).toString()
);
const estados = new Map<string, TableEstadosEntry>(
  Object.entries(estadosRaw).map(([codigo, entry]) => [
    codigo,
    entry as TableEstadosEntry,
  ])
);

const cidadesRaw = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../tables/cidades.json')).toString()
);
const cidades = new Map<string, TableCidadesEntry>(
  Object.entries(cidadesRaw).map(([codigo, entry]) => [
    codigo,
    entry as TableCidadesEntry,
  ])
);

export default { versaoLeiaute, estados, cidades };
