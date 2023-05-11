export default class ContentfullBaseApi {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_API}`;
  }
}
