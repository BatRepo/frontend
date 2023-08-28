import React from 'react';
import ProductsHome from "../components/Page/ProductsHome";
import { Box } from '@mui/material';

const Products = () => {
  return (
    <>
      <Box sx={{ '& div': { backgroundColor: '#363636'} }} id="aqui">
        <ProductsHome />
      </Box>
    </>
  );
};

export default Products;