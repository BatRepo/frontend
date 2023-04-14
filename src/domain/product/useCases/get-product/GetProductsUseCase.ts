import { IProductsProvider } from "domain/product/ProductsProvider";
import { IGetProductsUseCase } from "./IGetProductsUseCase";

export default class GetProductsUseCase implements IGetProductsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private productsProvider: IProductsProvider) {}

  async execute(
    params: IGetProductsUseCase.GetProductsParams,
  ): Promise<IGetProductsUseCase.GetProductsResponse> {
    const products = await this.productsProvider.getProducts(params);

    return products;
  }
}
