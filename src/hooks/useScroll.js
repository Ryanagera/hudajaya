import { useState, useCallback, useEffect } from "react";

/**
 * Hook untuk manage scroll position
 */
export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(() => {
    // Initialize based on current scroll position
    return window.scrollY > 100;
  });

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    // Check scroll state immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return {
    isScrolled,
    handleScroll,
  };
};

export default useScroll;
