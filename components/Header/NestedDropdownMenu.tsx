import NestedDropdown from "@/components/Header/NestedDropdown";
import { nestedLinks } from "@/types/headerType";

interface Props {
  menuLinks: nestedLinks;
}

export default function NestedDropdownMenu({ menuLinks }: Props) {
  return (
    <ul className="dropdown-menu">
      {menuLinks.subLink.map((subMenuLink) => {
        return subMenuLink.map((secondSubMenuLink, index2) => (
          <NestedDropdown key={index2} menuLink={secondSubMenuLink} />
        ));
      })}
    </ul>
  );
}
