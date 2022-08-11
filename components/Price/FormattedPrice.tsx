import { formatPrice } from "@/components/Price/formatPrice";

interface FormattedPriceProps {
  price: number | string;
  className?: string;
  currency?: string;
}

export default function FormattedPrice({
  price,
  currency,
  className,
}: FormattedPriceProps): JSX.Element {
  const priceClassName = className ? className : "text-red-600 md:text-lg";

  const nPrice = Number(price);
  const itemNPrice = formatPrice(nPrice);
  const storeCurrency = currency ? currency : "HK$";
  return (
    <span className={priceClassName}>
      {storeCurrency}
      {itemNPrice}
    </span>
  );
}
