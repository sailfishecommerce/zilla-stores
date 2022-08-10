import Link from "next/link";
import type { megaMenuLinks } from "@/types/headerType";

interface Props {
  secondSubMenuLink: megaMenuLinks["subLink"][0][0];
}

export default function MegaDropdown({ secondSubMenuLink }: Props) {
  return (
    <ul className="widget-list">
      {secondSubMenuLink.sublinks?.map((thirdSubMenuLink) => {
        return (
          <li key={thirdSubMenuLink.link} className="widget-list-item">
            <Link href={thirdSubMenuLink.link} passHref>
              <a className="widget-list-link">{thirdSubMenuLink.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
