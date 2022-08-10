/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { headerLinksType, menuLinksTypes } from "@/types/headerType";

interface Props {
  menuLink: menuLinksTypes;
}

export default function SingleDropdown({ menuLink }: Props) {
  return (
    <li className="dropdown bg-white">
      <Link href={menuLink?.link} passHref>
        <a className="dropdown-item py-2 border-bottom">
          <span className="d-block text-heading">{menuLink?.title}</span>
          {menuLink?.small && (
            <small className="d-block text-muted">{menuLink?.small}</small>
          )}
        </a>
      </Link>
      <div className="dropdown-menu h-100 animation-none mt-0 p-3 bg-white">
        <Link href={menuLink.link} passHref>
          <a className="d-block" style={{ width: "250px" }}>
            <img src={menuLink.img} alt="Fashion Store v.1" />
          </a>
        </Link>
      </div>
    </li>
  );
}
