import dynamic from "next/dynamic";

import FashionLayout from "@/layout/FashionLayout";
import FashionBanner from "@/components/Banners/FashionBanner";
import FashionProductGallery from "@/components/Product/FashionProductGallery";
import FashionProductDescription from "@/components/Product/FashionProductDescription";
import FashionReview from "@/components/Reviews/FashionReview";
import getAProduct from "@/lib/getAProduct";
import { productType } from "@/types";

const SingleShopProductCarousel1 = dynamic(
  () => import("@/components/Carousel/SingleShopProductCarousel1"),
  {
    ssr: false,
  }
);

interface Props {
  product: productType;
}

export default function FashionProductPage({ product }: Props) {
  console.log("product-fashion", product);
  return (
    <FashionLayout title=" Homepage">
      <>
        <FashionBanner title={product.name} />
        <div className="container">
          <FashionProductGallery product={product} />
          <FashionProductDescription product={product} />
        </div>
        <FashionReview
          rating={product.rating}
          reviews={product.review_rating}
        />
        <SingleShopProductCarousel1
          vendor={product.vendor}
          slug={product.slug}
        />
      </>
    </FashionLayout>
  );
}

export async function getServerSideProps(context: any) {
  const productData: any = await getAProduct(context.query.id);

  return {
    props: {
      product: productData,
    },
  };
}