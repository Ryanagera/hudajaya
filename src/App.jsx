import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import FindLocation from "./pages/FindLocation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import QuoteRequest from "./pages/QuoteRequest";
import Services from "./pages/Services";

// Hooks
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import { useLoadingPage } from "./hooks/useLoadingPage";

// Context and assets
import heroVideo from "@/assets/video/clip1.mp4";
import { VideoContext } from "@/context/VideoContext";

// Constants
import { ROUTES, VIDEO_CONFIG } from "@/constants";

// Components
import LoadingPage from "@/components/common/LoadingPage";

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
    ? "absolute inset-0 w-full h-full object-cover"
    : "hidden";

  return (
    <VideoContext.Provider
      value={{
        videoRef,
        isVideoPlaying: isPlaying,
        setIsVideoPlaying: () => togglePlayPause(),
        currentTime,
        duration,
        handlePlayPauseClick: togglePlayPause,
      }}
    >
      {/* Persistent Video Element */}
      <video
        ref={videoRef}
        className={videoClassName}
        muted={VIDEO_CONFIG.MUTED}
        loop={VIDEO_CONFIG.LOOP}
        playsInline={VIDEO_CONFIG.PLAYS_INLINE}
        autoPlay={VIDEO_CONFIG.AUTO_PLAY}
        onPlay={() => {}}
        onPause={() => {}}
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
      </Routes>
    </VideoContext.Provider>
  );
}
