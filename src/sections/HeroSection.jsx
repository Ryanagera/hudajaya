import { ChevronRight, Pause, Play } from "lucide-react";

// Components
import { Button } from "@/components/common";

// Hooks
import { useVideo } from "@/context/VideoContext";

// Constants
import { HERO_CONTENT, PAGE_FEEDBACK_URL } from "@/constants";

// Utils
import { calculateProgressPercent, calculateStrokeDashOffset } from "@/utils";

/**
 * HeroSection Component
 * Main hero section with background video and controls
 */
export default function HeroSection() {
  const { isVideoPlaying, currentTime, duration, handlePlayPauseClick } =
    useVideo();

  // Calculate progress for circular indicator
  const progressPercent = calculateProgressPercent(currentTime, duration);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = calculateStrokeDashOffset(progressPercent, 45);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video - Managed globally in App.jsx */}

      {/* Video Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/50" />

      {/* Play/Pause Button with Circular Progress */}
      <PlayPauseButton
        isPlaying={isVideoPlaying}
        onToggle={handlePlayPauseClick}
        circumference={circumference}
        strokeDashoffset={strokeDashoffset}
      />

      {/* Page Feedback Button */}
      <PageFeedbackButton feedbackUrl={PAGE_FEEDBACK_URL} />

      {/* Hero Content */}
      <HeroContent />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

/**
 * PlayPauseButton Sub-Component
 * Circular progress indicator with play/pause icon
 */
function PlayPauseButton({
  isPlaying,
  onToggle,
  circumference,
  strokeDashoffset,
}) {
  return (
    <button
      onClick={onToggle}
      className="absolute bottom-6 left-6 z-20 w-20 h-20 group"
      title={isPlaying ? "Pause video" : "Play video"}
      aria-label={isPlaying ? "Pause video" : "Play video"}
    >
      {/* SVG Circular Progress Background */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {/* Background circle (static) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1"
        />
        {/* Progress circle (animated) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>

      {/* Icon Container */}
      <div className="absolute inset-0 flex items-center justify-center text-white hover:bg-opacity-20 rounded-full transition-all duration-300">
        {isPlaying ? (
          <Pause
            size={24}
            className="group-hover:scale-110 transition-transform"
            aria-hidden="true"
          />
        ) : (
          <Play
            size={24}
            className="group-hover:scale-110 transition-transform ml-1"
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
}

/**
 * PageFeedbackButton Sub-Component
 */
function PageFeedbackButton({ feedbackUrl }) {
  return (
    <div className="absolute bottom-6 right-6 z-20">
      <a
        href={feedbackUrl}
        className="flex items-center gap-2 bg-blue-900 bg-opacity-60 text-white px-3 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300 text-sm font-medium write-mode-vertical"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
        title="Page feedback"
      >
        <span>Page feedback</span>
      </a>
    </div>
  );
}

/**
 * HeroContent Sub-Component
 */
function HeroContent() {
  return (
    <div className="relative z-10 h-full flex flex-col items-start justify-center w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Title */}
      <div className="max-w-3xl ml-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-wider drop-shadow-lg">
          {/* {HERO_CONTENT.title} */}
        </h1>
      </div>

      {/* Description and CTA */}
      <div className="absolute bottom-20 right-20 max-w-md">
        <p className="text-gray-200 text-lg font-light leading-relaxed mb-6 drop-shadow-md">
          {HERO_CONTENT.description}
        </p>

        <Button
          variant="primary"
          size="lg"
          onClick={() => console.log("Explore remanufacturing clicked")}
          className="group flex items-center gap-2"
        >
          {HERO_CONTENT.ctaButton}
          <ChevronRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </div>
    </div>
  );
}

/**
 * ScrollIndicator Sub-Component
 */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <div className="flex flex-col items-center gap-2 text-white text-sm">
        <span>Scroll</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
