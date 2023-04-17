import { IGetProductsUseCase } from "./useCases/get-product/IGetProductsUseCase";

export interface IProductsProvider {
  getProducts(
    params: IGetProductsUseCase.GetProductsParams,
  ): Promise<IGetProductsUseCase.GetProductsResponse>;

}

export namespace IProductProvider {
  export type GetProductsParams = IGetProductsUseCase.GetProductsParams;
  export type GetProductsResponse = ProductsEntity[];
}