import Link from "next/link";

interface Props {
  linksArray: {
    link: string | null;
    text: string;
  }[];
  className?: string;
}

export default function Breadcrumb({ linksArray, className }: Props) {
  const breadcrumbClassName = className ? className : "breadcrumb-light";
  return (
    <nav className="mb-0" aria-label="breadcrumb">
      <ol className={`breadcrumb ${breadcrumbClassName} flex-lg-nowrap`}>
        {linksArray.map((linkItem, index) => {
          const activeIndex = linksArray.length - 1;
          const activeClassName =
            activeIndex === index ? "active text-nowrap" : "text-nowrap";
          return (
            <li
              key={linkItem.link}
              className={`breadcrumb-item ${activeClassName}`}
            >
              {activeIndex === index
                ? linkItem.text
                : linkItem.link !== null && (
                    <Link href={linkItem.link}>
                      <a className="text-nowrap">
                        {index === 0 && <i className="ci-home"></i>}
                        {linkItem.text}
                      </a>
                    </Link>
                  )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
