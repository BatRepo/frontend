import { IProduct } from "utils/interfaces/product";

export const mockProduct = (): IProduct[] => {
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
    