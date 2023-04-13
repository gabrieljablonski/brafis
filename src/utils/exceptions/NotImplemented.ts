export default class NotImplemented extends Error {
  constructor(message = 'Not implemented') {
    super(message);
    this.name = 'NotImplemented';
  }
}
