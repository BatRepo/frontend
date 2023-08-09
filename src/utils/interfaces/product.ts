import { Media } from "domain/product/entities/ProductEntitie";

export interface IProduct {
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