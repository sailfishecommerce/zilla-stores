/* eslint-disable @next/next/no-img-element */

import GroceryPromoBanner from "@/components/Banners/GroceryPromoBanner";
import dynamic from "next/dynamic";
import Link from "next/link";

import GroceryLayout from "../layout/GroceryLayout";

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
export default function HomeGroceryStore() {
  return (
    <GroceryLayout title="Home grocery stores">
      <section className="ps-lg-4 pe-lg-3 pt-4">
        <HomeGroceryCarousel />
        <GroceryPromoBanner />
        <DiscountedProductCarousel />
        <BestSellersCarousel />
        <CustomerReviewCarousel />
      </section>
    </GroceryLayout>
  );
}
