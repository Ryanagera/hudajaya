/**
 * Sidebar/Menu Data Constants
 */

export const SIDEBAR_MAIN_ITEMS = [
  {
    id: 1,
    label: "Products",
    path: "/products",
    icon: "Grid3X3",
    expandable: true,
    type: "categories",
  },
  {
    id: 2,
    label: "Services",
    path: "/services",
    icon: "Grid3X3",
    expandable: false,
  },
  {
    id: 3,
    label: "About",
    path: "/about",
    icon: "Grid3X3",
    expandable: false,
  },
];

export const SIDEBAR_SECONDARY_ITEMS = [
  { id: 1, label: "Find distributor", icon: "MapPin" },
  { id: 2, label: "Digital tools", icon: "Grid3X3" },
  { id: 3, label: "Sustainability", icon: "Globe" },
  { id: 4, label: "Career", icon: "User" },
  { id: 5, label: "Investor relations", icon: "Globe" },
];

export const SIDEBAR_BOTTOM_ITEMS = [
  { id: 1, label: "Contacts", icon: "MapPin", action: "contacts" },
  { id: 2, label: "Log in", icon: "LogIn", action: "login" },
  { id: 3, label: "International", icon: "Globe", action: "language" },
];

export const SIDEBAR_CONFIG = {
  WIDTH: "w-xl", // 42rem = 672px
  ANIMATION_DURATION: 300,
  OVERLAY_OPACITY: "bg-black/40",
  Z_INDEX: "z-50",
  BUTTON_Z_INDEX: 50,
};
