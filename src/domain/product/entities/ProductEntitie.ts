export interface ProductsEtitie {
  id: string;
  name: string;
  description: string;
  images?: [];
  value: number;
}

  export interface ResponseProductsEtitie {
    rows: ProductsEtitie[];
    count?: number;
  }
