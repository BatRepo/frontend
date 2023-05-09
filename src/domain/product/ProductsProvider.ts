import { ResponseProductsEtitie } from "./entities/ProductEntitie";
import { IGetProductsUseCase } from "./useCases/get-product/IGetProductsUseCase";

export interface IProductsProvider {
  getProducts(): Promise<IGetProductsUseCase.GetProductsResponse>;

}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IProductProvider {
  export type GetProductsResponse = ResponseProductsEtitie;
}