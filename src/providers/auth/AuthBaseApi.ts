export default class AuthBaseApi {
  protected baseUrl: string;
  protected withCredentials: boolean;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_AUTH_API}`;
    this.withCredentials = true;
  }

}
