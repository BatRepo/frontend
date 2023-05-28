export default class AuthBaseApi {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_AUTH_API}`;
  }
}
