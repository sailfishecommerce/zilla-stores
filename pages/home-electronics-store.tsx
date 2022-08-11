import dynamic from "next/dynamic";

import swellNode from "@/lib/swellNode";

const HomeElectronicsCarousel = dynamic(
  () => import("@/components/Carousel/HomeElectronicsCarousel"),
  {
    ssr: false,
  }
);

const ElectronicBrandsCarousel = dynamic(
  () => import("@/components/Carousel/ElectronicBrandsCarousel"),
  {
    ssr: false,
  }
);

import Electroniclayout from "@/layout/Electroniclayout";
import TrendingElectricProducts from "@/components/TrendingProducts/ElectricStore";
import ElectronicsPromoBanner from "@/components/Banners/ElectronicsPromoBanner";
import ElectronicsStore from "@/components/Bestsellers/ElectronicsStoreBestSeller";
import InfoCards from "@/components/InfoCards";
import VideoGroup from "@/components/View/VideoGroup";

export default function HomeElectronicStore({ products }: any) {
  return (
    <Electroniclayout title="Home electronics store">
      <>
        <section className="bg-secondary py-4 pt-md-5">
          <div className="container py-xl-2">
            <div className="row">
              <HomeElectronicsCarousel />
            </div>
          </div>
        </section>
        <TrendingElectricProducts products={products} />
        <ElectronicsPromoBanner />
        <ElectronicBrandsCarousel />
        <ElectronicsStore />
        <VideoGroup />
        <InfoCards />
      </>
    </Electroniclayout>
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
