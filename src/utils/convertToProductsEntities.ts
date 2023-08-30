import { IMedia } from "./interfaces/media";
import { IProduct } from "./interfaces/product";

interface InputItem {
  _id: string;
  slug: string;
  price: number;
  visible: boolean;
  description: string;
  name: string;
  type_product: string;
  images: IMedia[];
  sizes_image: IMedia[];
  __v: number;
  id: string;
}

function convertToProductsEntities(inputData: []): IProduct[] {
  const productsEntities: IProduct[] = inputData.map((item: InputItem) => {
    if (item.visible) {
      const product: IProduct = {
        id: item.id,
        name: item.name,
        description: item.description,
        slug: item.slug,
        price: item.price,
        visible: item.visible,
        type_product: item.type_product,
        images: item.images,
        sizes_image: item.sizes_image,
      };
      return product;
    }
  });

  return productsEntities;
}

export default convertToProductsEntities;