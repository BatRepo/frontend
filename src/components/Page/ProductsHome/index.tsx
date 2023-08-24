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
import { useMediaQuery, useTheme } from "@mui/material";
import Carousel from "components/core/Carrossel";
import BatFooter from "components/core/Footer";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

        {isMobile ? (
          <>
          <Container isMobile>
            <Carousel array={data}/>
          </Container>
        </>
        ) : (
          <>
            <Container id="aqui">
              <ProductList products={data} />
            </Container>
            
          </>
        )
        }
        <BatFooter loggued={false} />
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