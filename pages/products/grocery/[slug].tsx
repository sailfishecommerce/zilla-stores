import dynamic from "next/dynamic";

import GroceryLayout from "@/layout/GroceryLayout";
import getAProduct from "@/lib/getAProduct";
import { productType } from "@/types";
import GroceryProductGallery from "@/components/Product/GroceryProductGallery";
import Breadcrumb from "@/components/UI/Breadcrumb";

const GroceryRelatedProduct = dynamic(
  () => import("@/components/Carousel/GroceryRelatedProduct"),
  {
    ssr: false,
  }
);

interface Props {
  product: productType;
}

export default function GrocerySingleProductPage({ product }: Props) {
  const linksArray = [
    { link: "/home-grocery-store", text: "Home" },
    { link: "/grocery-catalog", text: "Shop" },
    { link: null, text: product.name },
  ];
  return (
    <GroceryLayout title="Grocery single">
      <section className="ps-lg-4 pe-lg-3 pt-4">
        <div className="px-3 pt-2">
          <Breadcrumb className="text-black mb-4" linksArray={linksArray} />
          <GroceryProductGallery product={product} />
          <GroceryRelatedProduct />
        </div>
      </section>
    </GroceryLayout>
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
