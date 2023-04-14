import CardProduct from "components/CardProduct";
import { Container } from "./styles";
import { useState } from "react";

interface IProductHome {

}

const ProductsHome = () => {

  const [Products, SetProducts] = useState([]);

    return (
        <>
          <Container>
            {Products && Products.map(index => {
              <CardProduct productName={product?.name} productDescription={product?.description} productValue={product?.value} />
            })}
          </Container>
        </>
    );
};

export default ProductsHome;