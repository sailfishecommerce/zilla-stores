/* eslint-disable @next/next/no-img-element */

import GroceryPromoBanner from "@/components/Banners/GroceryPromoBanner";
import dynamic from "next/dynamic";

import swellNode from "@/lib/swellNode";
import GroceryLayout from "@/layout/GroceryLayout";
import { productType } from "@/types";

const HomeGroceryCarousel = dynamic(
  () => import("@/components/Carousel/HomeGroceryCarousel"),
  {
    ssr: false,
  }
);

const DiscountedProductCarousel = dynamic(
  () => import("@/components/Carousel/DiscountedProductCarousel"),
  {
    ssr: false,
  }
);

const BestSellersCarousel = dynamic(
  () => import("@/components/Carousel/BestsellersCarousel"),
  {
    ssr: false,
  }
);

const CustomerReviewCarousel = dynamic(
  () => import("@/components/Carousel/CustomerReviewCarousel"),
  {
    ssr: false,
  }
);

interface Props {
  products: productType[];
}

export default function HomeGroceryStore({ products }: Props) {
  return (
    <GroceryLayout title="Home grocery stores">
      <>
        <HomeGroceryCarousel />
        <GroceryPromoBanner />
        <DiscountedProductCarousel products={products} />
        <BestSellersCarousel />
        <CustomerReviewCarousel />
      </>
    </GroceryLayout>
  );
}

export async function getStaticProps() {
  const { swell, initSwell } = swellNode();
  initSwell();
  const products: any = await swell.get("/products", {
    where: { select_store: "livehealthy" },
  });

  return {
    props: {
      products: products.results,
    },
  };
}
