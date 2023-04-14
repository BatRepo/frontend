
export interface IGetProductsUseCase {
  execute(
    params: IGetProductsUseCase.GetProductsParams,
  ): Promise<IGetProductsUseCase.GetProductsResponse>;
}

export namespace IGetProductsUseCase {
  export type GetProductsParams = {
    products: Partial<ProductsEntity>;
  };
  export type GetProductsResponse = ResponseProfileEntity;
}