export default class InvalidIE extends Error {
  constructor(ie: string) {
    super(`IE '${ie}' is not valid`);
    this.name = 'InvalidIE';
  }
}
