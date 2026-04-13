import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * useLoadingPage - Manages loading page display on first app load
 * Shows loading page only on homepage on first visit
 */
export function useLoadingPage() {
  const location = useLocation();
  const loadingInitialized = useRef(false);
  const [showLoading, setShowLoading] = useState(false);
  const LOADING_DURATION = 3000; // 3 seconds

  useEffect(() => {
    const isFirstLoad = !sessionStorage.getItem("appLoaded");
    const isHomePage = location.pathname === "/";

    if (!loadingInitialized.current && isFirstLoad && isHomePage) {
      loadingInitialized.current = true;

      queueMicrotask(() => {
        setShowLoading(true);
      });

      const timer = setTimeout(() => {
        setShowLoading(false);
        sessionStorage.setItem("appLoaded", "true");
      }, LOADING_DURATION);

      return () => clearTimeout(timer);
    } else if (!isHomePage || !isFirstLoad) {
      queueMicrotask(() => {
        setShowLoading(false);
      });
      sessionStorage.setItem("appLoaded", "true");
    }
  }, [location.pathname]);

  return {
    showLoading,
    LOADING_DURATION,
  };
}
