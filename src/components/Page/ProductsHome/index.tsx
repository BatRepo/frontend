import { ProductController } from "infra/controllers/products/productsController";
import { Container } from "./styles";
import React, { useEffect, useState } from "react";
import ProductList from "components/core/ProductList";
import { IProduct } from "utils/interfaces/product";
import Header from "components/core/Header";

const ProductsHome: React.FC = () => {

  const [Products, SetProducts] = useState<IProduct[]>();

  const mockProduct = (): IProduct[] => {
    return (
      [
        {
            _id: "64d291629790c8ebd7d58f07",
            slug: "teste-store",
            price: 15,
            visible: true,
            description: "teste store wm",
            name: "teste-store",
            type_product: "camiseta",
            images: [
                {
                    assetId: "x3u1Nsx6EhwaSJgpYzRyl",
                    nameAsset: "teste-wmstore",
                    description: "teste",
                    file: [
                        "//images.ctfassets.net/m1fpgi36v4dh/x3u1Nsx6EhwaSJgpYzRyl/b7ed1c22da8d330fb9f10a46627e78c6/tst_2.png"
                    ],
                    contentType: null
                }
            ],
            sizes_image: [
                {
                    assetId: "12adadhYrIElym2YO3ZmCD",
                    nameAsset: "teste dois",
                    description: "teste testado",
                    file: [
                        "//images.ctfassets.net/m1fpgi36v4dh/12adadhYrIElym2YO3ZmCD/b99c68d6da95113f13c0e286fb009042/leao1.png"
                    ],
                    contentType: null
                }
            ],
            id: "6xhSEL6KOBi6oqv1Sg0F0F"
        },
        {
            _id: "64d29774ddecc926ff400219",
            slug: "tested-api",
            price: 12,
            visible: true,
            description: "teste api",
            name: "tested-api",
            type_product: "camiseta",
            images: [
                {
                    assetId: "12adadhYrIElym2YO3ZmCD",
                    nameAsset: "teste dois",
                    description: "teste testado",
                    file: [
                        "//images.ctfassets.net/m1fpgi36v4dh/12adadhYrIElym2YO3ZmCD/b99c68d6da95113f13c0e286fb009042/leao1.png",
                    ],
                    contentType: null
                }
            ],
            sizes_image: [
                {
                    assetId: "2RTu2wQJGe2HtTLEBAIoM7",
                    nameAsset: "teste-leao",
                    description: "teste testado",
                    file: [
                        "//images.ctfassets.net/m1fpgi36v4dh/2RTu2wQJGe2HtTLEBAIoM7/55f0ac93fd222064a8968ddcf8dad8b5/tec.jpg",
                      ],
                    contentType: null
                }
            ],
            id: "7fwmA4tdIUnvF4A1cfcPjp"
        }
    ]
    );
  }
    

  const updateData = (data: IProduct[]) => {
    if (data) {
        SetProducts(data);
      }
    }

  useEffect(() => {
    const file = mockProduct();
    if(file) {
      updateData(file)
    }
  }, [])
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const productController = new ProductController();
  //       const products = await productController.getProducts();
  //       console.log('Products component laft', products);
  //       if (products) {
  //         console.log('Products component', products);
  //         SetProducts(products);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


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
          <Header noHome/>
          <Container>
            <ProductList products={Products} />
          </Container>
        </>
    );
};

export default ProductsHome;