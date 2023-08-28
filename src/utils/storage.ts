import { IProduct } from "./interfaces/product";

export function setProductData(product: IProduct): void {
  localStorage.setItem(`${process.env.LOCALSTORAGE}`, JSON.stringify(product));
}

export function getProductData(): IProduct | null {
  const productString = localStorage.getItem(`${process.env.LOCALSTORAGE}`);
  if (productString) {
    return JSON.parse(productString) as IProduct;
  }
  return null;
}