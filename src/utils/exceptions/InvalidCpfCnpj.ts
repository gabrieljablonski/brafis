export default class InvalidCpfCnpj extends Error {
  constructor(cpfCnpj: string) {
    super(`CPF/CNPJ '${cpfCnpj}' is not valid`);
    this.name = 'InvalidCpfCnpj';
  }
}
