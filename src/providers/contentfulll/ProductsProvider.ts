import { IProductsProvider } from "domain/product/ProductsProvider";
import ContentfullBaseApi from "./ContentfullBaseAPI";
import axios from "axios";
import { IGetProductsUseCase } from "domain/product/useCases/get-product/IGetProductsUseCase";

export default class ProductsProvider
  extends ContentfullBaseApi
  implements IProductsProvider
{
  public async getProducts(
    req: IGetProductsUseCase.GetProductsParams,
  ): Promise<IGetProductsUseCase.GetProductsResponse> {
    try {
      const { data } = await axios.get(`${this.baseUrl}/products`);
      if(data) {
        return data;
      }
    } catch {
      throw new Error('Request Get failed');
    }
  }
}