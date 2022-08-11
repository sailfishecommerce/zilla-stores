import { productType } from "@/types";
import Image from "next/image";

interface Props {
  product: productType;
  activeImage: string;
  updateMainImage: (productImage:string) => void;
}

export default function ProductImageThumbnail({
  product,
  activeImage,
  updateMainImage,
}: Props) {
  return (
    <div className="product-gallery-thumblist order-sm-1">
      {product.images.map((image, index) => {
        const productImage = typeof image === "string" ? image : image.file.url;
        const productIndex = typeof image === "string" ? index : image.id;

        const activethumb = activeImage === productImage ? "active" : "";
        return (
          <a
            key={productIndex}
            className={`product-gallery-thumblist-item ${activethumb}`}
            onClick={() => updateMainImage(productImage)}
          >
            <Image
              src={productImage}
              alt={product.name}
              blurDataURL={productImage}
              height={78}
              width={78}
            />
          </a>
        );
      })}
    </div>
  );
}
