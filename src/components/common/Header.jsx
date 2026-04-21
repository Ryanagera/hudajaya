import { Globe, Menu, PhoneIncoming, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";

import { useScroll } from "@/hooks";
import { NAV_ITEMS, ROUTES } from "@/constants";
import SearchSidebar from "./SearchSidebar";
import Sidebar from "./Sidebar";

/**
 * Header Component
 * Fixed navigation header with hamburger menu
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [shouldExpandProducts, setShouldExpandProducts] = useState(false);
  const location = useLocation();
  const { isScrolled } = useScroll();

  // Helper + Derived State
  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === ROUTES.HOME;
  const shouldHaveDarkHeader = !isHomePage || isScrolled;

  // Event Handler
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };
  const handleProductsClick = () => {
    setShouldExpandProducts(true);
    setIsMenuOpen(true);
  };
  // Close everything when clicking overlay
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  // Body scroll lock and accessibility using useEffect
  useEffect(() => {
    const mainElement = document.querySelector("main");
    const headerElement = document.querySelector("header");
    const footerElement = document.querySelector("footer");

    if (isMenuOpen || isSearchOpen) {
      // Disable scroll on both body and html
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Prevent interaction with all background elements
      if (mainElement) mainElement.setAttribute("inert", "");
      if (headerElement) headerElement.setAttribute("inert", "");
      if (footerElement) footerElement.setAttribute("inert", "");
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (mainElement) mainElement.removeAttribute("inert");
      if (headerElement) headerElement.removeAttribute("inert");
      if (footerElement) footerElement.removeAttribute("inert");
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (mainElement) mainElement.removeAttribute("inert");
      if (headerElement) headerElement.removeAttribute("inert");
      if (footerElement) footerElement.removeAttribute("inert");
    };
  }, [isMenuOpen, isSearchOpen]);

  return (
    <>
      {(isMenuOpen || isSearchOpen) &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />,
          document.body,
        )}

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          shouldHaveDarkHeader
            ? "bg-white/50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-300 ${
            shouldHaveDarkHeader
              ? "px-4 md:px-6 xl:px-10"
              : "p-4 md:px-6 xl:px-10"
          }`}
        >
          <HeaderLayout
            isMenuOpen={isMenuOpen}
            onMenuToggle={toggleMenu}
            onProductsClick={handleProductsClick}
            shouldHaveDarkHeader={shouldHaveDarkHeader}
            isActive={isActive}
            onSearchToggle={toggleSearch}
          />
        </nav>

      </header>

      {/* Sidebar Menu - Rendered outside header to manage stacking */}
      <Sidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        shouldExpandProducts={shouldExpandProducts}
        onProductsExpanded={() => setShouldExpandProducts(false)}
      />

      {/* Search Sidebar - Rendered outside header to manage stacking */}
      <SearchSidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

/**
 * HeaderLayout Sub-Component
 */
function HeaderLayout({
  isMenuOpen,
  onMenuToggle,
  onProductsClick,
  shouldHaveDarkHeader,
  isActive,
  onSearchToggle,
}) {
  return (
    <div
      className={`flex items-center justify-between transition-all duration-300 gap-4 md:gap-8 w-full ${
        shouldHaveDarkHeader
          ? "min-h-[64px] md:min-h-[80px]"
          : "min-h-[80px] md:min-h-[96px] p-4 bg-white/20 lg:bg-transparent rounded-2xl backdrop-blur-md lg:backdrop-blur-none"
      }`}
    >
      {/* Left - Menu Toggle + Navigation Items */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Hamburger Menu Button */}
        <HamburgerButton
          isOpen={isMenuOpen}
          onToggle={onMenuToggle}
          shouldHaveDarkHeader={shouldHaveDarkHeader}
        />

        {/* Desktop Navigation */}
        <DesktopNavigation
          isActive={isActive}
          shouldHaveDarkHeader={shouldHaveDarkHeader}
          onProductsClick={onProductsClick}
        />
      </div>

      {/* Center - Logo */}
      <LogoSection shouldHaveDarkHeader={shouldHaveDarkHeader} />

      {/* Right - Desktop: Full nav items | Mobile: Search icon only */}
      <div className="hidden lg:flex items-center gap-4">
        <TopNavigationItems
          shouldHaveDarkHeader={shouldHaveDarkHeader}
          onSearchToggle={onSearchToggle}
        />
      </div>

      {/* Mobile Search Icon */}
      <button
        onClick={onSearchToggle}
        className={`lg:hidden p-2 md:p-3 rounded-full border transition-all duration-200 ${
          shouldHaveDarkHeader
            ? "border-gray-800 text-gray-950 hover:border-black/40"
            : "border-white text-white hover:border-white/50"
        }`}
        aria-label="Search"
      >
        <Search size={18} className="md:w-6 md:h-4" />
      </button>
    </div>
  );
}

/**
 * HamburgerButton Sub-Component
 */
function HamburgerButton({ isOpen, onToggle, shouldHaveDarkHeader }) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 md:p-3 lg:p-4 rounded-full border transition-all duration-200 ${
        shouldHaveDarkHeader
          ? "border-gray-800 text-gray-950 hover:border-black/40"
          : "border-white text-white hover:border-white/50"
      }`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X size={18} className="md:w-6 md:h-4" />
      ) : (
        <Menu size={18} className="md:w-6 md:h-4" />
      )}
    </button>
  );
}

/**
 * DesktopNavigation Sub-Component
 */
function DesktopNavigation({
  isActive,
  shouldHaveDarkHeader,
  onProductsClick,
}) {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {NAV_ITEMS.map((item) => {
        // Special handling for Products - open sidebar instead of navigating
        if (item.label === "Products") {
          return (
            <button
              key={item.id}
              onClick={onProductsClick}
              className={`relative text-2xl font-light transition-all duration-200 tracking-wider ${
                isActive(item.path)
                  ? shouldHaveDarkHeader
                    ? "text-slate-800 border-b-2 border-blue-500"
                    : "text-white border-b-2 border-blue-500"
                  : shouldHaveDarkHeader
                    ? "text-gray-600 border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-black/70"
                    : "text-white/80 border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-white"
              }`}
            >
              {item.label}
            </button>
          );
        }

        // Normal navigation for other items
        return (
          <Link
            key={item.id}
            to={item.path}
            className={`relative text-2xl font-light transition-all duration-200 tracking-wider ${
              isActive(item.path)
                ? shouldHaveDarkHeader
                  ? "text-slate-800 border-b-2 border-blue-500"
                  : "text-white border-b-2 border-blue-500"
                : shouldHaveDarkHeader
                  ? "text-gray-600 border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-black/70"
                  : "text-white/80 border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

import logoWhite from "@/assets/images/branding/logohj_white.png";
/**
 * LogoSection Sub-Component
 */
function LogoSection({ shouldHaveDarkHeader }) {
  return (
    <div className="flex-1 flex justify-center">
      <Link
        to={ROUTES.HOME}
        className="h-10 md:h-12 lg:h-14 flex items-center transition-all"
      >
        <img
          src={logoWhite}
          alt="Huda Jaya Logo"
          className={`h-full w-auto transition-all duration-200 ${
            shouldHaveDarkHeader ? "brightness-0 grayscale" : ""
          }`}
        />
      </Link>
    </div>
  );
}

/**
 * TopNavigationItems Sub-Component
 */
function TopNavigationItems({ shouldHaveDarkHeader, onSearchToggle }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { icon: Globe, label: "Language", path: null },
    { icon: PhoneIncoming, label: "Get in touch", path: ROUTES.CONTACT },
  ];

  return (
    <div className="flex items-center gap-4">
      {/* Action Icons */}
      <div className="flex items-center gap-4">
        {navItems.map((item, index) => {
          const content = (
            <>
              <item.icon size={22} />
              {/* Tooltip on hover */}
              {hoveredIndex === index && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-20 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-50">
                  {item.label}
                </div>
              )}
            </>
          );

          const className = `relative px-3 py-2 rounded-lg transition-all duration-200 ${
            shouldHaveDarkHeader
              ? "text-black hover:text-black/70 hover:bg-black/10"
              : "text-white hover:text-white/70 hover:bg-white/10"
          }`;

          return item.path ? (
            <Link
              key={index}
              to={item.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={className}
              aria-label={item.label}
            >
              {content}
            </Link>
          ) : (
            <button
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={className}
              aria-label={item.label}
            >
              {content}
            </button>
          );
        })}
      </div>

      {/* Pill Search Bar */}
      <button
        onClick={onSearchToggle}
        className={`flex items-center gap-4 px-5 py-3 rounded-full border transition-all duration-200 group min-w-56 ${
          shouldHaveDarkHeader
            ? "border-gray-300 bg-white/40 text-gray-700 hover:border-gray-500 hover:bg-white/60 hover:shadow-sm"
            : "border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/20"
        }`}
      >
        <Search
          size={18}
          className="transition-transform duration-200 group-hover:scale-110"
        />
        <span className="text-sm font-light tracking-wider opacity-80 group-hover:opacity-100">
          Search...
        </span>
      </button>
    </div>
  );
}
