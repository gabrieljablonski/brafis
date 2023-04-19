export default class CityNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadArgs';
  }
}
