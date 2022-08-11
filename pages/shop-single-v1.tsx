import dynamic from "next/dynamic";

import FashionLayout from "@/layout/FashionLayout";
import FashionBanner from "@/components/Banners/FashionBanner";
import FashionProductGallery from "@/components/Product/FashionProductGallery";
import FashionReview from "@/components/Reviews/FashionReview";
import FashionProductDescription from "@/components/Product/FashionProductDescription";

const SingleShopProductCarousel1 = dynamic(
  () => import("@/components/Carousel/SingleShopProductCarousel1"),
  {
    ssr: false,
  }
);

export default function index() {
  return (
    <FashionLayout title=" Homepage">
      <>
        <FashionBanner title="Shop" />
        <div className="container">
          <FashionProductGallery />
          <FashionProductDescription />
        </div>
        <FashionReview />
        <SingleShopProductCarousel1 />
      </>
    </FashionLayout>
  );
}
