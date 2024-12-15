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
    label: "Tenants",
    href: "/tenants",
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Guaranteed Rent", href: "/guaranteed-rent" },
      { label: "Property Management", href: "/property-management" },
      { label: "Smart Care Plan", href: "/smart-care-plan" },
    ],
  },
  {
    label: "Landlords",
    href: "/landlords",
  },
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
