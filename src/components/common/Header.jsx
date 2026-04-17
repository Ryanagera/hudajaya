import { Globe, Grid3X3, Menu, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";

// Hooks
import { useScroll } from "@/hooks";

// Constants
import { NAV_ITEMS, ROUTES } from "@/constants";

// Components
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
  // Close menu when clicking overlay
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  // ✅ Body scroll lock using useEffect
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll when menu is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup: restore scroll on unmount or state change
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]); // Runs when isMenuOpen changes

  return (
    <>
      {isMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/35 z-30 transition-opacity duration-300"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />,
          document.body,
        )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldHaveDarkHeader
            ? "bg-white/50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto px-4 sm:px-6 lg:px-8">
          <HeaderLayout
            isMenuOpen={isMenuOpen}
            onMenuToggle={toggleMenu}
            onProductsClick={handleProductsClick}
            shouldHaveDarkHeader={shouldHaveDarkHeader}
            isActive={isActive}
            onSearchToggle={toggleSearch}
          />
        </nav>

        {/* Sidebar Menu */}
        <Sidebar
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          shouldExpandProducts={shouldExpandProducts}
          onProductsExpanded={() => setShouldExpandProducts(false)}
        />

        {/* Search Sidebar */}
        <SearchSidebar
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </header>
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
    <div className="flex items-center justify-between h-24 gap-8">
      {/* Left - Menu Toggle + Navigation Items */}
      <div className="flex items-center gap-8">
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

      {/* Right - Top Navigation Items */}
      <TopNavigationItems
        shouldHaveDarkHeader={shouldHaveDarkHeader}
        onSearchToggle={onSearchToggle}
      />
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
      className={`p-4 rounded-full border transition-colors ${
        shouldHaveDarkHeader
          ? "border-gray-800 text-gray-800 hover:text-slate-600 hover:border-slate-500"
          : "border-white text-white hover:text-white/60 hover:border-white/50"
      }`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={30} /> : <Menu size={30} />}
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
    <div className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item) => {
        // Special handling for Products - open sidebar instead of navigating
        if (item.label === "Products") {
          return (
            <button
              key={item.id}
              onClick={onProductsClick}
              className={`relative text-xl font-light transition-all duration-300 ${
                shouldHaveDarkHeader
                  ? "text-gray-600 border-b-2 border-transparent hover:text-slate-700 hover:border-b-2 hover:border-gray-400"
                  : "text-white/80 border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-white/50"
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
            className={`relative text-xl font-light transition-all duration-300 ${
              isActive(item.path)
                ? shouldHaveDarkHeader
                  ? "text-slate-700 border-b-2 border-blue-500"
                  : "text-white border-b-2 border-blue-500"
                : shouldHaveDarkHeader
                  ? "text-gray-600 border-b-2 border-transparent hover:text-slate-700 hover:border-b-2 hover:border-gray-400"
                  : "text-white/80 border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-white/50"
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
      <Link to={ROUTES.HOME} className="h-12 flex items-center transition-all">
        <img
          src={logoWhite}
          alt="Huda Jaya Logo"
          className={`h-full w-auto transition-all duration-300 ${
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
    { icon: Grid3X3, label: "Tools", path: null },
    { icon: User, label: "Get in touch", path: ROUTES.CONTACT },
  ];

  return (
    <div className="flex items-center gap-3">
      {/* Action Icons */}
      <div className="flex items-center gap-1">
        {navItems.map((item, index) => {
          const content = (
            <>
              <item.icon size={20} />
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
              ? "text-gray-800 hover:text-slate-600 hover:bg-black/5"
              : "text-white hover:text-white/60 hover:bg-white/10"
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
        className={`flex items-center gap-4 px-5 py-2.5 rounded-full border transition-all duration-300 group min-w-48 ${
          shouldHaveDarkHeader
            ? "border-gray-300 bg-white/40 text-gray-700 hover:border-gray-500 hover:bg-white/60 hover:shadow-sm"
            : "border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/20"
        }`}
      >
        <Search
          size={18}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-sm font-light tracking-wide opacity-80 group-hover:opacity-100">
          Search...
        </span>
      </button>
    </div>
  );
}
