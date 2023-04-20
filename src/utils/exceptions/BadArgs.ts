export default class BadArgs extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadArgs';
  }
}
