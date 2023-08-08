import { ProductController } from "infra/controllers/products/productsController";
import { Container } from "./styles";
import { useEffect, useState } from "react";

const ProductsHome: React.FC = () => {

  const [Products, SetProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productController = new ProductController();
        const products = await productController.getProducts();
        console.log('Products component laft', products);
        if (products) {
          console.log('Products component', products);
          SetProducts(products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);


  // console.log('productList', productList);

  // const listProductsUpdate = async () => {
  //   const products = (await productList).execute();
  //   products.then((product) => {
  //     SetProducts(product);
  //   });
  // }
  // listProductsUpdate();
  // console.log('Products component', Products);

  // // useEffect(() => {
  // //   SetProducts(listProductsUpdate);
  // // }, []);

    return (
        <>
          <Container>
            {/* <ProductList products={Products} /> */}
          </Container>
        </>
    );
};

export default ProductsHome;