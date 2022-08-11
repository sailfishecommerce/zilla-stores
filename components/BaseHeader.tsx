/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import headerLinks from "@/json/header.json";
import SingleDropdownMenu from "@/components/Header/SingleDropdownMenu";
import MegaDropdownMenu from "@/components/Header/MegaDropdownMenu";
import NestedDropdownMenu from "@/components/Header/NestedDropdownMenu";
import { headerLinksType } from "@/types/headerType";
import Logo from "@/components/Logo";

export default function BaseHeader() {
  return (
    <header className="bg-light shadow-sm navbar-sticky">
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container align-items-center">
          <Logo />
          <div className="navbar-toolbar d-flex align-items-center order-lg-3">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className="btn btn-primary btn-shadow"
              href="https://bandicoot-limited.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ci-cart me-2"></i>Buy now
            </a>
          </div>
          <div
            className="collapse navbar-collapse me-auto order-lg-2"
            id="navbarCollapse"
          >
            <ul className="navbar-nav">
              {headerLinks.map((menuLinks: headerLinksType, index) => {
                const activeMenu = index === 0 ? "active" : "inactive";
                return (
                  <li
                    key={menuLinks.name}
                    className={`nav-item dropdown ${activeMenu}`}
                  >
                    <Link href={menuLinks.link} passHref>
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href={menuLinks.link}
                      >
                        {menuLinks.name}
                      </a>
                    </Link>
                    {menuLinks.type === "single-dropdown" ? (
                      <SingleDropdownMenu
                        key={menuLinks.link}
                        menuLinks={menuLinks}
                      />
                    ) : menuLinks.type === "mega-dropdown" ? (
                      <MegaDropdownMenu
                        key={menuLinks.link}
                        menuLinks={menuLinks}
                      />
                    ) : (
                      <NestedDropdownMenu
                        key={menuLinks.link}
                        menuLinks={menuLinks}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
