export type nestedLinks = {
  name: string;
  link: string;
  type: string;
  subLink: {
    title: string;
    link: string;
    sublinks?: {
      title: string;
      link: string;
    }[];
  }[][];
};

export type megaMenuLinks = {
  name: string;
  link: string;
  type: string;
  subLink: {
    title: string;
    link: string;
    sublinks?: {
      title: string;
      link: string;
    }[];
  }[][];
};

export type singleMenuLinkType = {
  type: string;
  link: string;
  name: string;
  subLink: menuLinksTypes[][];
};

export type menuLinksTypes = {
  title: string;
  small?: string;
  link: string;
  img?: string;
};

export type headerLinksType = {
  name: string;
  link: string;
  type: string;
  subLink: {
    title: string;
    link: string;
    small?: string;
    img?: string;
    sublinks?: {
      title: string;
      link: string;
    }[];
  }[][];
};
