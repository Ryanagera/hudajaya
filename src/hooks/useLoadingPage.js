// versi sederhana
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useLoadingPage - Manages loading page display on first app load
 * Shows loading page only on homepage on first visit
 */
export function useLoadingPage() {
  const location = useLocation();
  const LOADING_DURATION = 3000;

  // Tentukan nilai awal langsung di sini, tanpa perlu setState di dalam effect
  const [showLoading, setShowLoading] = useState(() => {
    const isFirstLoad = !sessionStorage.getItem("appLoaded");
    const isHomePage = location.pathname === "/";
    return isFirstLoad && isHomePage;
  });

  useEffect(() => {
    if (!showLoading) {
      sessionStorage.setItem("appLoaded", "true");
      return;
    }

    const timer = setTimeout(() => {
      setShowLoading(false);
      sessionStorage.setItem("appLoaded", "true");
    }, LOADING_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return { showLoading, LOADING_DURATION };
}

// versi kompleks
// import { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";

// export function useLoadingPage() {
//   const location = useLocation();
//   const loadingInitialized = useRef(false);
//   const [showLoading, setShowLoading] = useState(false);
//   const LOADING_DURATION = 2000; // 2 seconds

//   useEffect(() => {
//     // cek
//     const isFirstLoad = !sessionStorage.getItem("appLoaded"); // bisa pakai sessionStorage / localStorage supaya lbh persistent
//     const isHomePage = location.pathname === "/";

//     if (!loadingInitialized.current && isFirstLoad && isHomePage) {
//       loadingInitialized.current = true;

//       // Microtask menghindari glitch render dan race condition, tp dikasus ini overkill
//       queueMicrotask(() => {
//         setShowLoading(true);
//       });

//       const timer = setTimeout(() => {
//         setShowLoading(false);
//         sessionStorage.setItem("appLoaded", "true");
//       }, LOADING_DURATION);

//       return () => clearTimeout(timer);
//     } else if (!isHomePage || !isFirstLoad) {
//       queueMicrotask(() => {
//         setShowLoading(false);
//       });
//       sessionStorage.setItem("appLoaded", "true");
//     }
//   }, [location.pathname]);

//   return {
//     showLoading,
//     LOADING_DURATION,
//   };
// }
