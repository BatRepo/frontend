import GetProductsUseCase from "domain/product/useCases/get-product/GetProductsUseCase";
import { IGetProductsUseCase } from "domain/product/useCases/get-product/IGetProductsUseCase";
import ProductsProvider from "providers/content/ProductsProvider";

export const GetProductsFactory = (): IGetProductsUseCase => {
  return new GetProductsUseCase(new ProductsProvider());
};
