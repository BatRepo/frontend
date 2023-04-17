import { IProduct } from "utils/interfaces/product";
import CardProduct from "../../core/CardProduct";
import { Container } from "./styles";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <Container id="product-list">
        {products.map((product) => (
          <CardProduct key={product.id} />
        ))}
      </Container>
    </>
  );
};

export default ProductList;