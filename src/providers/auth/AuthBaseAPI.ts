export default class AuthBaseAPI {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.BACKEND}`;
  }
}
