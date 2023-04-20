export default class InvalidXml extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidXml';
  }
}
