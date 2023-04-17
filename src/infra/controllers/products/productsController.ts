import { IGetProductsUseCase } from "domain/product/useCases/get-product/IGetProductsUseCase";
import { GetProductsFactory } from "../factories/use-cases/products/GetProductsFactory";

export class productController {
  async getProducts(
    params: IGetProductsUseCase.GetProductsParams,
  ): Promise<IGetProductsUseCase.GetProductsResponse> {
    const getResult = GetProductsFactory();
    return getResult.execute(params);
  }
}
