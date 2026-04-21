import { useState, useEffect, useRef } from "react";
import { X, Search } from "lucide-react";

// Constants
import { SIDEBAR_CONFIG } from "@/constants";
import { PRODUCT_SEARCH_INDEX } from "@/constants/products";

/**
 * SearchSidebar Component
 * Slides in from right side with search functionality
 */
export default function SearchSidebar({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  // Handle auto-focus when search sidebar is open
  useEffect(() => {
    if (isOpen) {
      // Focus input after transition
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 500); // Wait for transition duration

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Search through products, categories, and pages
    if (query.trim()) {
      setSearchResults(
        PRODUCT_SEARCH_INDEX.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase()),
        ).slice(0, 10), // Limit to 10 results
      );
    } else {
      setSearchResults([]);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Search Sidebar Container - slides from right */}
      <div
        className={`fixed right-0 top-0 h-screen ${SIDEBAR_CONFIG.WIDTH} bg-white shadow-2xl z-[60] transition-all duration-500 ease-in-out flex flex-col pt-20 px-10 ${
          isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        }`}
        role="search"
        aria-label="Search sidebar"
        aria-hidden={!isOpen}
      >
        {/* Close Button */}
        {isOpen && (
          <button
            onClick={onClose}
            className="fixed left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center shadow-md"
            aria-label="Close search sidebar"
          >
            <X size={24} className="text-gray-800" />
          </button>
        )}

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Search Input Section */}
          <SearchInputSection
            searchQuery={searchQuery}
            onSearch={handleSearch}
            onClear={handleClear}
            inputRef={inputRef}
          />

          {/* Search Results Section */}
          <SearchResultsSection
            results={searchResults}
            query={searchQuery}
            onClose={onClose}
          />
        </div>
      </div>
    </>
  );
}

/**
 * SearchInputSection Sub-Component
 */
function SearchInputSection({ searchQuery, onSearch, onClear, inputRef }) {
  return (
    <div className="border-b border-gray-200 p-1 pb-6">
      <div className="relative group">
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 group-hover:border-blue-400 group-focus-within:border-blue-500 transition-colors duration-200">
          <Search size={20} className="text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, services, info..."
            value={searchQuery}
            onChange={onSearch}
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-base"
          />
          {searchQuery && (
            <button
              onClick={onClear}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * SearchResultsSection Sub-Component
 */
function SearchResultsSection({ results, query, onClose }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {query.trim() === "" ? (
        <div className="p-6 text-center text-gray-500">
          <p className="text-base">Start typing to search...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-4">
            Found {results.length} result{results.length !== 1 ? "s" : ""}
          </p>
          <div className="space-y-3">
            {results.map((result, index) => (
              <button
                key={index}
                onClick={onClose}
                className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {result.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {result.type === "category"
                        ? "Product Category"
                        : `In: ${result.categoryName}`}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 text-center text-gray-500">
          <p className="text-base">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
}
