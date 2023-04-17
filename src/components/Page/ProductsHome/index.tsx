import { IProduct } from "utils/interfaces/product";
import { Container } from "./styles";
import { useState } from "react";
import ProductList from "components/core/ProductList";

const ProductsHome = () => {

  const [Products, SetProducts] = useState<IProduct[]>([]);

    return (
        <>
          <Container>
            <ProductList products={[]} />
          </Container>
        </>
    );
};

export default ProductsHome;