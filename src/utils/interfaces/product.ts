import { IMedia } from "./media";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  visible: boolean;
  type_product: string;
  images: IMedia[],
  sizes_image: IMedia[],
}