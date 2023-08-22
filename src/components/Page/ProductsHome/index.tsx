import { Container } from "./styles";
import React from "react";
import ProductList from "components/core/ProductList";
import { IProduct } from "utils/interfaces/product";
import Header from "components/core/Header";
import { QueryClientProvider, useQuery } from "react-query";
import { queryClient } from "infra/services/queryClient";
import convertToProductsEntities from "utils/convertToProductsEntities";
import axios from "axios";
import LoadingLottie from "components/core/LoadingLottie";

const fetchData = async () => {
  try {
    const response = await axios.get(`${process.env.PUBLIC_CONTENT_API}/getAllProducts`);
    const products: IProduct[] = convertToProductsEntities(response.data.products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const Requisition: React.FC = () => {
  const { data, isLoading } = useQuery<IProduct[]>('', fetchData);
  console.log('products', data);

  if (isLoading) {
    return (
      <>
        <LoadingLottie loading fullLoading size={500} />
      </>
    );
  }

  return (
    <>
      <Header noHome />
      <Container>
        <ProductList products={data} />
      </Container>
    </>
  );
};

const ProductsHome: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Requisition />
    </QueryClientProvider>
  );
};

export default ProductsHome;