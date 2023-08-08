import { IProductsProvider } from "domain/product/ProductsProvider";
import ContentfullBaseApi from "./ContentfullBaseAPI";
import axios from "axios";
import { IGetProductsUseCase } from "domain/product/useCases/get-product/IGetProductsUseCase";
import convertToProductsEntities from "utils/convertToProductsEntities";

export default class ProductsProvider
  extends ContentfullBaseApi
  implements IProductsProvider
{
  public async getProducts(): Promise<IGetProductsUseCase.GetProductsResponse> {
    try {
      await axios.get(`${this.baseUrl}/getAllproducts`).then(entry => {
        const products: IGetProductsUseCase.GetProductsResponse = convertToProductsEntities(entry.data.products);
        return products;
      });
      return undefined;
    } catch {
      throw new Error('Request Get failed');
    }
  }
}

