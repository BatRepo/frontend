import { ProductsEtitie } from "domain/product/entities/ProductEntitie";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IGetProductsUseCase {
  export type GetProductsResponse = ProductsEtitie[];
}

export interface IGetProductsUseCase {
  execute(): Promise<IGetProductsUseCase.GetProductsResponse>;
}