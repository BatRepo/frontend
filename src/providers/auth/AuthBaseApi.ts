import axios, { Axios } from "axios";
export default class AuthBaseApi {
  protected baseUrl: string;
  protected api: Axios;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_AUTH_API}`;
    this.api = axios.create();
  }
}
