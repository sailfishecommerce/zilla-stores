import Link from "next/link";

import { nestedLinks } from "@/types/headerType";

interface Props {
  menuLink: nestedLinks["subLink"][0][0];
}

export default function NestedDropdown({ menuLink }: Props) {
  const showToggle = menuLink?.sublinks ? "dropdown-toggle" : "";
  return (
    <li className="dropdown">
      <Link href={menuLink?.link} passHref>
        <a
          className={`dropdown-item ${showToggle}`}
          data-bs-toggle="dropdown"
          href="#"
        >
          {menuLink?.title}
        </a>
      </Link>
      {menuLink?.sublinks && (
        <ul className="dropdown-menu">
          {menuLink?.sublinks?.map((secondSubLink) => {
            return (
              <li key={secondSubLink.link}>
                <Link href={secondSubLink.link} passHref>
                  <a className="dropdown-item">{secondSubLink.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
