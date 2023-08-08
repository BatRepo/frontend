import { IGetProductsUseCase } from "domain/product/useCases/get-product/IGetProductsUseCase";
import { GetProductsFactory } from "infra/factories/use-cases/products/GetProductsFactory";

export class ProductController {
  async getProducts(): Promise<IGetProductsUseCase.GetProductsResponse> {
    const getResult = GetProductsFactory();
    return getResult.execute();
  }
}
