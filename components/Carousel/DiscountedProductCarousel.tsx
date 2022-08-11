/* eslint-disable @next/next/no-img-element */
import { ProductProps, productType } from "@/types";
import Link from "next/link";
import GroceryProduct from "../Product/GroceryProduct";

import CarouselWrapper from "./CarouselWrapper";

interface Props {
  products: productType[];
}

export default function DiscountedProductCarousel({ products }: Props) {
  const settings = {
    items: 2,
    gutter: 16,
    controls: true,
    autoHeight: true,
    responsive: {
      "0": { items: 1 },
      "480": { items: 2 },
      "720": { items: 3 },
      "991": { items: 2 },
      "1140": { items: 3 },
      "1300": { items: 4 },
      "1500": { items: 5 },
    },
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
  };
  return (
    <section className="pt-3 pt-md-4 px-4">
      {/*<!-- Heading-->*/}
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-3">Discounted products</h2>
        <div className="pt-3">
          <Link href="/grocery-catalog" passHref>
            <a className="btn btn-outline-accent btn-sm">
              More products
              <i className="ci-arrow-right ms-1 me-n1"></i>
            </a>
          </Link>
        </div>
      </div>
      <div className="tns-carousel tns-controls-static tns-controls-outside tns-nav-enabled pt-2">
        <CarouselWrapper onClick={() => {}} settings={settings}>
          {/*<!-- Product-->*/}
          {products.map((product) => {
            return <GroceryProduct key={product.id} product={product} />;
          })}
        </CarouselWrapper>
      </div>
    </section>
  );
}
