export interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export const navBarData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Properties",
    href: "#",
    submenu: [
      { label: "For Sale", href: "/properties/for-sale" },
      { label: "For Rent", href: "/properties/for-rent" },
      { label: "Luxury Homes", href: "/properties/luxury-homes" },
      { label: "Commercial", href: "/properties/commercial" },
    ],
  },
  {
    label: "Insights",
    href: "#",
    submenu: [
      {
        label: "Agents",
        href: "#",
      },
      { label: "News", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },

  {
    label: "Contact Us",
    href: "/contact",
  },
];
