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

const linksArray = [
  { link: "/", text: "Home" },
  { link: "/products", text: "Product Catalog" },
  { link: "/products", text: "Singe Product" },
];

export default function GrocerySingleProductPage({ product }: Props) {
  console.log("product", product);
  return (
    <GroceryLayout title="Grocery single">
      <section className="ps-lg-4 pe-lg-3 pt-4">
        <div className="px-3 pt-2">
          <Breadcrumb linksArray={linksArray} />
          <GroceryProductGallery />
          <section className="pb-5 mb-2 mb-xl-4">
            <h2 className="h3 pb-2 mb-grid-gutter text-center">
              You may also like
            </h2>
            <GroceryRelatedProduct />
          </section>
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
