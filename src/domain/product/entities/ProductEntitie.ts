export interface ProductsEtitie {
  id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  visible: boolean;
  type_product: string;
  images: Media[],
  sizes_image: Media[],
}

export interface Media {
  id: string;
  assetId: string;
  nameAsset: string;
  description: string;
  file: object;
  contentType: string;
}
