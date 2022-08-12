import Breadcrumb from "@/components/UI/Breadcrumb";

interface Props {
  title: string;
}

export default function FashionBanner({ title }: Props) {
  const linkArray = [
    { text: "Home", link: "/" },
    {
      text: "Shop",
      link: "products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8",
    },
    { text: title, link: null },
  ];
  return (
    <div className="page-title-overlap bg-dark pt-4">
      <div className="container d-lg-flex justify-content-between align-items-center py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <Breadcrumb linksArray={linkArray} />
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h6 className="h6 text-light mb-0">{title}</h6>
        </div>
      </div>
    </div>
  );
}
