import { IProductsProvider } from "domain/product/ProductsProvider";
import ContentfullBaseApi from "./ContentfullBaseAPI";
import axios from "axios";
import { IGetProductsUseCase } from "domain/product/useCases/get-product/IGetProductsUseCase";

// export default class ProductsProvider
//   extends ContentfullBaseApi
//   implements IProductsProvider
// {
//   public async getProducts(): Promise<IGetProductsUseCase.GetProductsResponse> {
//     try {
//       await axios.get(`${this.baseUrl}/content/show-entries`).then(entry => {
//         console.log('entry', entry);
//       });
//     } catch {
//       throw new Error('Request Get failed');
//     }
//   }
// }

export default class ProductsProvider
{
  public async getProducts(): Promise<any> {
    try {
      await axios.get('http://localhost:3333/content/show-entries').then(entry => {
        console.log('entry', entry);
      });
    } catch {
      throw new Error('Request Get failed');
    }
  }
}