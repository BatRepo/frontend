import { Media, ProductsEtitie } from "domain/product/entities/ProductEntitie";

interface InputItem {
  _id: string;
  slug: string;
  price: number;
  visible: boolean;
  description: string;
  name: string;
  type_product: string;
  images: Media[];
  sizes_image: Media[];
  __v: number;
  id: string;
}

function convertToProductsEntities(inputData: []): ProductsEtitie[] {
  console.log('inputData', inputData);
  const productsEntities: ProductsEtitie[] = inputData.map((item: InputItem) => {
    if (item.visible) {
      const product: ProductsEtitie = {
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
      console.log('output Data', product);
      return product;
    }
  });

  return productsEntities;
}

export default convertToProductsEntities;