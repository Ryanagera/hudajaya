import { useEffect, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import FindLocation from "./pages/FindLocation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import QuoteRequest from "./pages/QuoteRequest";
import Services from "./pages/Services";

import { useLoadingPage } from "./hooks/useLoadingPage";
import { useVideoPlayer } from "./hooks/useVideoPlayer";

import heroVideo from "./assets/video/clip1.mp4";
import LoadingPage from "./components/common/LoadingPage";
import { ROUTES, VIDEO_CONFIG } from "./constants/app";
import { VideoContext } from "./context/VideoContext";

/**
 * App Component
 * Root component managing global state and routing
 */
export default function App() {
  const location = useLocation();
  const { showLoading } = useLoadingPage();
  const { videoRef, isPlaying, currentTime, duration, togglePlayPause } =
    useVideoPlayer();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Determine if video should be visible (only on homepage)
  const isHomePage = location.pathname === ROUTES.HOME;
  const videoClassName = isHomePage
    ? "absolute inset-0 w-full h-screen object-cover"
    : "hidden";

  const contextValue = useMemo(
    () => ({
      videoRef,
      isVideoPlaying: isPlaying,
      toggleVideoPlayPause: togglePlayPause,
      currentTime,
      duration,
    }),
    [videoRef, isPlaying, currentTime, duration, togglePlayPause],
  );

  return (
    <VideoContext.Provider value={contextValue}>
      {/* Persistent Video Element */}
      <div className="relative">
        <video
          ref={videoRef}
          className={videoClassName}
          muted={VIDEO_CONFIG.MUTED}
          loop={VIDEO_CONFIG.LOOP}
          playsInline={VIDEO_CONFIG.PLAYS_INLINE}
          autoPlay={VIDEO_CONFIG.AUTO_PLAY}
        >
          <source src={heroVideo} type={VIDEO_CONFIG.MIME_TYPE} />
        </video>

        {/* Loading Page - Show only on first homepage visit */}
        {showLoading && <LoadingPage />}

        {/* Routes */}
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.QUOTE} element={<QuoteRequest />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.LOCATION} element={<FindLocation />} />

          {/* <Route path="*" element={<NotFound />} /> tambah 404 / Tambah route fallback*/}
        </Routes>
      </div>
    </VideoContext.Provider>
  );
}
