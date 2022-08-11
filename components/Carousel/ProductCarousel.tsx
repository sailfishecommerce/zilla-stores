import dynamic from "next/dynamic";

import type { productType } from "@/types";
import FashionRelatedProduct from "@/components/Product/FashionRelatedProduct";
import GroceryProduct from "@/components/Product/GroceryProduct";

const CarouselWrapper = dynamic(
  () => import("@/components/Carousel/CarouselWrapper"),
  {
    ssr: false,
  }
);

interface Props {
  products: productType[];
  title: string;
  productType?: "fashion" | "grocery";
}

const productSettings = {
  items: 2,
  controls: true,
  nav: false,
  responsive: {
    "0": { items: 1 },
    "500": { items: 2, gutter: 18 },
    "768": { items: 3, gutter: 20 },
    "1100": { items: 4, gutter: 30 },
  },
  controlsText: [
    '<i class="ci-arrow-left"></i>',
    '<i class="ci-arrow-right"></i>',
  ],
};

export default function ProductCarousel({
  products,
  title,
  productType,
}: Props) {
  return (
    <>
      {products.length > 0 && (
        <>
          <h2 className="h3 text-center pb-4">{title}</h2>
          <div className="tns-carousel tns-controls-static tns-controls-outside pb-4">
            <CarouselWrapper onClick={() => {}} settings={productSettings}>
              {products.map((relatedProduct: productType) => {
                return productType === "grocery" ? (
                  <GroceryProduct
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ) : (
                  <FashionRelatedProduct
                    key={relatedProduct.id}
                    relatedProduct={relatedProduct}
                  />
                );
              })}
            </CarouselWrapper>
          </div>
        </>
      )}
    </>
  );
}
