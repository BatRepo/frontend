import { IProduct } from "utils/interfaces/product";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import ProductList from "components/core/ProductList";
import { GetProductsFactory } from "infra/factories/use-cases/products/GetProductsFactory";

const ProductsHome = () => {

  const [Products, SetProducts] = useState<IProduct[]>([]);

  const productList = GetProductsFactory();

  const listProductsUpdate = async () => {
    const products = await productList.execute();
    return products;
  }

  useEffect(() => {
    SetProducts(listProductsUpdate);
  }, []);

    return (
        <>
          <Container>
            {/* <ProductList products={Products} /> */}
          </Container>
        </>
    );
};

export default ProductsHome;