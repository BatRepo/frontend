export default class AuthBaseApi {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.PUBLIC_AUTH_API}`;
  }

}
