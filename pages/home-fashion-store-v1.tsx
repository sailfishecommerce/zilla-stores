import dynamic from "next/dynamic";

import Banners from "../component/Banners";
import InfoCards from "../component/InfoCards";
import PopularCategories from "../component/PopularCategories";
import ShopByBrand from "../component/ShopByBrand";
import TrendingProducts from "../component/TrendingProducts";
import FashionLayout from "../layout/FashionLayout";

const FeaturedCategory = dynamic(
  () => import("../component/FeaturedCategory"),
  {
    ssr: false,
  }
);

const Slider = dynamic(() => import("../component/Slider"), {
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
