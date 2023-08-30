import ContentfullBaseApi from "./ContentfullBaseAPI";
import axios from "axios";
import convertToProductsEntities from "utils/convertToProductsEntities";
import { IProduct } from "utils/interfaces/product";

export default class ProductsProvider
  extends ContentfullBaseApi
{
  public async getProducts(): Promise<IProduct[]> {
    try {
      await axios.get(`${this.baseUrl}/getAllproducts`).then(entry => {
        const products: IProduct[] = convertToProductsEntities(entry.data.products);
        return products;
      });
      return undefined;
    } catch {
      throw new Error('Request Get failed');
    }
  }
}

