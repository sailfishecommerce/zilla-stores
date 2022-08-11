import Link from "next/link";
import Product from "@/components/Product";
import { productType } from "@/types";

export default function TrendingElectricProducts({ products }: any) {
  return (
    <section className="container pt-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-2">Trending products</h2>
        <div className="pt-3">
          <Link href="/shop-grid-ls" passHref>
            <a className="btn btn-outline-accent btn-sm">
              More products
              <i className="ci-arrow-right ms-1 me-n1"></i>
            </a>
          </Link>
        </div>
      </div>
      <div className="row pt-4 mx-n2">
        {products.map((product: productType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
