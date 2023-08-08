export default class ContentfullBaseApi {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.PUBLIC_CONTENT_API}`;
  }
}
