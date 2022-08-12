import Link from "next/link";
import dynamic from "next/dynamic";

import useProductInRange from "@/hooks/useProductInRange";
import GroceryProduct from "@/components/Product/GroceryProduct";
import type { productType } from "@/types";

const CarouselWrapper = dynamic(
  () => import("@/components/Carousel/CarouselWrapper"),
  {
    ssr: false,
  }
);

const settings = {
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

export default function GroceryBestSellers() {
  const [data, status] = useProductInRange({
    query: { $gt: 4 },
    id: "bestSeller",
  });

  return (
    <section className="pt-5 pb-4 px-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-3">Bestsellers</h2>
        <div className="pt-3">
          <Link href="/grocery-catalog" passHref>
            <a className="btn btn-outline-accent btn-sm">
              More products
              <i className="ci-arrow-right ms-1 me-n1"></i>
            </a>
          </Link>
        </div>
      </div>
      {status === "error" ? (
        "unable to fetch best-selling products"
      ) : status === "loading" ? (
        "loading..."
      ) : (
        <div className="tns-carousel tns-controls-static tns-controls-outside tns-dots-enabled pt-2">
          <CarouselWrapper onClick={() => {}} settings={settings}>
            {data.map((dataItem: productType) => {
              return <GroceryProduct key={dataItem.id} product={dataItem} />;
            })}
          </CarouselWrapper>
        </div>
      )}
    </section>
  );
}
