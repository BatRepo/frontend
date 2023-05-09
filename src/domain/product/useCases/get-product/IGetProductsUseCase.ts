import { ResponseProductsEtitie } from "domain/product/entities/ProductEntitie";

export interface IGetProductsUseCase {
  execute(): Promise<IGetProductsUseCase.GetProductsResponse>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IGetProductsUseCase {
  export type GetProductsResponse = ResponseProductsEtitie;
}