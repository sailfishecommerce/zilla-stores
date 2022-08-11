import Link from "next/link";
import Product from "@/components/Product";
import { productType } from "@/types";

export default function TrendingFashionProducts({ products }: any) {
  return (
    <section className="container pt-md-3 pb-5 mb-md-3">
      <h2 className="h3 text-center">Trending products</h2>
      <div className="row pt-4 mx-n2">
        {products.map((product: productType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center pt-3">
        <Link href="/shop-grid-ls" passHref>
          <a className="btn btn-outline-accent">
            More products<i className="ci-arrow-right ms-1"></i>
          </a>
        </Link>
      </div>
    </section>
  );
}
