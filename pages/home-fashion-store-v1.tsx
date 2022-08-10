import dynamic from "next/dynamic";

import Banners from "../components/Banners";
import InfoCards from "../components/InfoCards";
import PopularCategories from "../components/PopularCategories";
import ShopByBrand from "../components/ShopByBrand";
import TrendingProducts from "../components/TrendingProducts";
import FashionLayout from "../layout/FashionLayout";

const FeaturedCategory = dynamic(
  () => import("../components/FeaturedCategory"),
  {
    ssr: false,
  }
);

const Slider = dynamic(() => import("../components/Slider"), {
  ssr: false,
});

export default function HomeFashionStore() {
  return (
    <FashionLayout title="Home fashion store">
      <>
        <Slider />
        <PopularCategories />
        <TrendingProducts />
        <Banners />
        <FeaturedCategory />
        <ShopByBrand />
        <InfoCards />
      </>
    </FashionLayout>
  );
}
