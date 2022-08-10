import MegaDropdown from "@/components/Header/MegaDropdown";
import { megaMenuLinks } from "@/types/headerType";

interface Props {
  menuLinks: megaMenuLinks;
}

export default function MegaDropdownMenu({ menuLinks }: Props) {
  return (
    <div className="dropdown-menu p-0">
      <div className="d-flex flex-wrap flex-sm-nowrap px-2">
        {menuLinks.subLink.map((subMenuLink, index) => {
          return (
            <div
              key={index}
              className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3"
            >
              {subMenuLink.map((secondSubMenuLink, index2: number) => {
                return (
                  <div key={index2} className="widget widget-links mb-4">
                    <h6 className="fs-base mb-3">{secondSubMenuLink.title}</h6>
                    <MegaDropdown secondSubMenuLink={secondSubMenuLink} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
