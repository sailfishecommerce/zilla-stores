import { useQuery } from "react-query";

import useSwellProduct from "@/hooks/useSwellProduct";
import ProductCarousel from "@/components/Carousel/ProductCarousel";

interface Props {
  vendor: string;
  slug: string;
  productType: "fashion" | "grocery";
}

export default function RelatedProductsCarousel({
  vendor,
  slug,
  productType,
}: Props) {
  const { getVendorProduct } = useSwellProduct();
  const { data, status } = useQuery(`get-vendor-${slug}`, () =>
    getVendorProduct(vendor)
  );

  let relatedProducts = [];
  let alsoBoughtProducts = [];
  const productData = data?.data?.results;

  if (status === "success") {
    relatedProducts = productData.slice(0, 15);
    alsoBoughtProducts = productData.slice(15, 30);
  }

  return (
    <>
      <div className="container pt-5">
        <ProductCarousel
          title="Related Products"
          products={relatedProducts}
          productType={productType}
        />
        <ProductCarousel
          productType={productType}
          title="Also bought"
          products={alsoBoughtProducts}
        />
      </div>
    </>
  );
}
