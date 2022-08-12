import dynamic from "next/dynamic";

import swellNode from "@/lib/swellNode";
import Banners from "@/components/Banners";
import InfoCards from "@/components/InfoCards";
import PopularCategories from "@/components/PopularCategories";
import ShopByBrand from "@/components/ShopByBrand";
import FashionLayout from "@/layout/FashionLayout";
import TrendingFashionProducts from "@/components/TrendingProducts/FashionStore";

const FeaturedCategory = dynamic(
  () => import("@/components/FeaturedCategory"),
  {
    ssr: false,
  }
);

const Slider = dynamic(() => import("@/components/Slider"), {
  ssr: false,
});

export default function HomeFashionStore({ products }: any) {
  return (
    <FashionLayout title="Home fashion store">
      <>
        <Slider />
        <PopularCategories />
        <TrendingFashionProducts products={products} />
        <Banners />
        <FeaturedCategory />
        <ShopByBrand />
        <InfoCards />
      </>
    </FashionLayout>
  );
}

export async function getStaticProps() {
  const { swell, initSwell } = swellNode();
  initSwell();
  const products: any = await swell.get("/products", {
    where: { select_store: "livehealthy"},
    limit: 16,
  });

  return {
    props: {
      products: products.results,
    },
  };
}
