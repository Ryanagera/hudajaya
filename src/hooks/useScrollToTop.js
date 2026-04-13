import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook untuk scroll to top saat page navigate
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useScrollToTop;
