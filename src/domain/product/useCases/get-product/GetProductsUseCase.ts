import { IProductsProvider } from "domain/product/ProductsProvider";
import { IGetProductsUseCase } from "./IGetProductsUseCase";

export default class GetProductsUseCase implements IGetProductsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private productsProvider: IProductsProvider) {}

  async execute(): Promise<IGetProductsUseCase.GetProductsResponse> {
    const products = await this.productsProvider.getProducts();

    return products;
  }
}
