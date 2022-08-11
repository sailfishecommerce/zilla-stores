/* eslint-disable @next/next/no-img-element */

import { productType } from "@/types";

interface Props {
  product: productType;
}

export default function FashionProductDescription({ product }: Props) {
  return (
    <>
      <div className="row align-items-center py-md-3">
        <div className="col-12">
          <h3 className="fs-lg  mb-0 h3">{product.name}</h3>
          <p
            className="fs-sm text-muted pb-1"
            dangerouslySetInnerHTML={{
              __html: product["description"],
            }}
          />
        </div>
      </div>
    </>
  );
}
