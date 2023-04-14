import { IGetProductsUseCase } from "./useCases/get-product/IGetProductsUseCase";

export interface IProductsProvider {
  getToolbox(
    params: IGetProductsUseCase.GetProductsParams,
  ): Promise<IGetProductsUseCase.GetProductsResponse>;

}

export namespace IProductProvider {
  export type GetProductsParams = IGetProductsUseCase.GetProductsParams;
  export type GetProductsResponse = ProductsEntity[];
}