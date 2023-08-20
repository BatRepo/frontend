import { Container } from "./styles";
import React from "react";
import ProductList from "components/core/ProductList";
import { IProduct } from "utils/interfaces/product";
import Header from "components/core/Header";
import { QueryClientProvider, useQuery } from "react-query";
import { queryClient } from "infra/services/queryClient";
import convertToProductsEntities from "utils/convertToProductsEntities";
import axios from "axios";

const ProductsHome: React.FC = () => {

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.PUBLIC_CONTENT_API}`);
      const products: IProduct[] = convertToProductsEntities(response.data.products);
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const { data: products, isLoading } = useQuery<IProduct[]>('getAllproducts', fetchData);

  console.log('products', products);

  if (isLoading) {
    return <p>Loading...</p>;
  }

    return (
        <>
          <Header noHome/>
          <QueryClientProvider client={queryClient}>
            <Container>
              <ProductList products={products} />
            </Container>
          </QueryClientProvider>
        </>
    );
};

export default ProductsHome;