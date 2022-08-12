import dynamic from "next/dynamic";

import FashionLayout from "@/layout/FashionLayout";
import FashionBanner from "@/components/Banners/FashionBanner";
import FashionProductGallery from "@/components/Product/FashionProductGallery";
import FashionProductDescription from "@/components/Product/FashionProductDescription";
import FashionReview from "@/components/Reviews/FashionReview";
import getAProduct from "@/lib/getAProduct";
import type { productType } from "@/types";

const RelatedProductsCarousel = dynamic(
  () => import("@/components/Carousel/RelatedProductsCarousel"),
  {
    ssr: false,
  }
);

interface Props {
  product: productType;
}

export default function FashionProductPage({ product }: Props) {
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
        <RelatedProductsCarousel
          vendor={product.vendor}
          slug={product.slug}
          productType="fashion"
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
