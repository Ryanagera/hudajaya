import {
  ChevronDown,
  ChevronRight,
  Globe,
  LogIn,
  MapPin,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Constants
import {
  SIDEBAR_BOTTOM_ITEMS,
  SIDEBAR_CONFIG,
  SIDEBAR_MAIN_ITEMS,
} from "@/constants";
import { PRODUCT_CATEGORIES } from "@/constants/products";

/**
 * Sidebar Component
 * Hamburger menu sidebar with multi-level navigation
 */
export default function Sidebar({
  isOpen,
  onClose,
  shouldExpandProducts,
  onProductsExpanded,
}) {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const prevIsOpenRef = useRef(isOpen);

  useEffect(() => {
    // Only reset state when sidebar transitions from closed to open
    if (isOpen && !prevIsOpenRef.current) {
      queueMicrotask(() => {
        if (shouldExpandProducts) {
          // Auto-expand Products menu if triggered from header
          setExpandedMenu(1);
          setSelectedCategory(null); // Reset to categories view
          onProductsExpanded?.();
        } else {
          setExpandedMenu(null);
          setSelectedCategory(null);
        }
      });
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen, shouldExpandProducts, onProductsExpanded]);

  // Handle body scroll locking when sidebar is open
  useEffect(() => {
    if (isOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  const handleMenuToggle = (menuId) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className={`fixed inset-0 ${SIDEBAR_CONFIG.OVERLAY_OPACITY} ${SIDEBAR_CONFIG.Z_INDEX} transition-opacity duration-300`}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed left-0 top-0 h-screen w-full md:max-w-xl bg-white shadow-2xl z-50 transition-transform duration-500 ease-in-out flex flex-col pt-16 md:pt-20 px-6 md:pl-20 md:pr-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="navigation"
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        {/* Close Button */}
        {isOpen && <CloseButton onClose={onClose} />}

        {/* Content */}
        <SidebarContent
          expandedMenu={expandedMenu}
          selectedCategory={selectedCategory}
          onMenuToggle={handleMenuToggle}
          onCategorySelect={handleCategorySelect}
          onBackToCategories={handleBackToCategories}
          onClose={onClose}
        />
      </div>
    </>
  );
}

/**
 * CloseButton Sub-Component
 */
function CloseButton({ onClose }) {
  return (
    <button
      onClick={onClose}
      className="absolute right-4 top-4 md:fixed md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center shadow-md z-[60]"
      aria-label="Close sidebar"
    >
      <X size={20} className="md:w-6 md:h-6 text-gray-800" />
    </button>
  );
}

/**
 * SidebarContent Sub-Component
 */
function SidebarContent({
  expandedMenu,
  selectedCategory,
  onMenuToggle,
  onCategorySelect,
  onBackToCategories,
  onClose,
}) {
  return (
    <>
      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto">
        {/* Show Categories if Products expanded */}
        {expandedMenu === 1 && selectedCategory === null ? (
          <ProductCategories
            onCategorySelect={onCategorySelect}
            onBackToMenu={onMenuToggle}
            onClose={onClose}
          />
        ) : selectedCategory ? (
          <ProductList
            category={selectedCategory}
            onBack={onBackToCategories}
          />
        ) : (
          <>
            {/* Main Items */}
            <MainItems
              expandedMenu={expandedMenu}
              onMenuToggle={onMenuToggle}
              onClose={onClose}
            />
          </>
        )}
      </nav>

      {/* Bottom Section - only show when not in product menu */}
      {!selectedCategory && !expandedMenu && <BottomSection />}
    </>
  );
}

/**
 * MainItems Sub-Component
 */
function MainItems({ onMenuToggle, onClose }) {
  return (
    <div className="p-1">
      <div className="space-y-8 md:space-y-12">
        {SIDEBAR_MAIN_ITEMS.map((item) => (
          <div key={item.id}>
            {item.expandable ? (
              <button
                onClick={() => onMenuToggle(item.id)}
                className="w-full flex items-center justify-between text-3xl md:text-5xl font-light text-gray-900 hover:text-blue-600 transition-colors duration-200 group"
              >
                <span>{item.label}</span>
                <ChevronRight
                  size={20}
                  className="text-gray-400 group-hover:text-blue-600 transition-colors"
                />
              </button>
            ) : (
              <Link
                to={item.path}
                onClick={onClose}
                className="flex items-center justify-between text-3xl md:text-5xl font-light text-gray-900 hover:text-blue-600 transition-colors duration-200 group"
              >
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * ProductCategories Sub-Component
 */
function ProductCategories({ onCategorySelect, onBackToMenu }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      {/* Header with back and tabs */}
      <div className="px-6 py-4">
        {/* Back Button */}
        <button
          onClick={() => onBackToMenu()}
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium mb-12 transition-colors"
        >
          <ChevronDown size={18} className="rotate-90" />
          <span className="text-lg">Menu</span>
        </button>

        {/* Products & Overview Tabs */}
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-light text-gray-900 flex-1">Products</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-md font-light text-gray-600 hover:text-blue-600 pb-2 border-b-2 border-transparent hover:border-blue-600 transition-all"
          >
            Overview
          </button>
        </div>
      </div>

      {/* Categories List */}
      <nav className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-100">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category)}
              className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group text-left"
            >
              {/* Icon with background */}
              <div
                className={`shrink-0 w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-2xl overflow-hidden`}
              >
                {typeof category.icon === "string" &&
                category.icon.length > 10 ? (
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  category.icon
                )}
              </div>

              {/* Content */}
              <span className="flex-1 font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                {category.name}
              </span>

              {/* Chevron */}
              <ChevronRight
                size={20}
                className="shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors"
              />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

/**
 * ProductList Sub-Component
 */
function ProductList({ category, onBack }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      {/* Header with back, title and overview tab */}
      <div className="px-6 py-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium mb-12 transition-colors"
        >
          <ChevronDown size={18} className="rotate-90" />
          <span className="text-lg">Products</span>
        </button>

        {/* Category Name & Overview Tab */}
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-light text-gray-900 flex-1">
            {category.name}
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="text-sm font-light text-gray-600 hover:text-blue-600 pb-2 border-b-2 border-transparent hover:border-blue-600 transition-all"
          >
            Overview
          </button>
        </div>
      </div>

      {/* Products List */}
      <nav className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-100">
          {category.products.map((product) => (
            <button
              key={product.id}
              className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group text-left"
            >
              {/* Product Icon */}
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg group-hover:bg-blue-100 transition-colors">
                {product.icon}
              </div>

              {/* Product Name */}
              <span className="flex-1 font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                {product.name}
              </span>

              {/* Chevron */}
              <ChevronRight
                size={18}
                className="shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors"
              />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

/**
 * BottomSection Sub-Component
 */
function BottomSection() {
  const iconMap = {
    MapPin,
    LogIn,
    Globe,
  };

  return (
    <div className="border-t border-gray-200 px-6 py-6 space-y-4">
      <div className="flex flex-col space-y-3">
        {SIDEBAR_BOTTOM_ITEMS.map((item) => {
          const Icon = iconMap[item.icon] || MapPin;

          return (
            <button
              key={item.id}
              className="flex items-center gap-3 px-0 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
