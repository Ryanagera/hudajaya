import { useState, useCallback, useEffect } from "react";

/**
 * useMenu - Manages hamburger menu state and scroll locking
 * Handles menu toggle and prevents background scroll when menu is open
 */
export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };
};

export default useMenu;
