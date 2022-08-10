import SingleDropdown from "@/components/Header/SingleDropdown";
import type { headerLinksType } from "@/types/headerType";

interface Props {
  menuLinks: headerLinksType;
}

export default function SingleDropdownMenu({ menuLinks }: Props) {
  return (
    <ul className="dropdown-menu">
      {menuLinks.subLink.map((subMenuLink) => {
        return subMenuLink.map((secondSubMenuLink, index2) => (
          <SingleDropdown key={index2} menuLink={secondSubMenuLink} />
        ));
      })}
    </ul>
  );
}
