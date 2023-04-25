import EfdIcmsIpi from '@/sped/efd-icms-ipi';

export { EfdIcmsIpi };

import fs from 'fs';

const xmls = fs.readdirSync('./misc/xmls');

const documents = xmls.map(f => {
  return {
    xml: fs.readFileSync(`./misc/xmls/${f}`).toString(),
    cancelled: f.endsWith('Cancelada.xml'),
  };
});

(async () => {
  const efd = await EfdIcmsIpi.build({
    documents,
    entity: {
      nome: 'IDALINO EBANI',
      nomeFantasia: 'IDALINO EBANI',
      cpfCnpj: '214.150.567-49',
      cep: '73390-200',
      uf: 'DF',
      codigoMunicipio: '5300108',
      bairro: 'Zona Rural',
      endereco: 'NUCLEO RURAL RIO PRETO LOTE 50',
      ie: '07.411.161/001-35',
      perfil: 'A',
      contabilista: {
        nome: 'CONTADOR',
        cpf: '214.150.567-49',
        crc: '1111111111',
        codigoMunicipio: '5300108',
        email: 'contador@gmail.com',
      },
    },
    bloco0Options: {
      isSubstitute: false,
      periodStart: new Date('2023-04-01T00:00:00-03:00'),
      periodEnd: new Date('2023-04-30T23:59:59-03:00'),
    },
    blocoCOptions: {
      include: true,
    },
  });
  console.log(efd);
})();
