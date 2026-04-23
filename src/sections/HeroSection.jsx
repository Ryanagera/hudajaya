import { ChevronRight, Pause, Play } from "lucide-react";
import Button from "../components/common/Button";
import { useVideo } from "../context/VideoContext";
import { HERO_CONTENT, PAGE_FEEDBACK_URL } from "../constants/hero";
import { calculateProgressPercent, calculateStrokeDashOffset } from "@/utils";

/**
 * HeroSection Component
 * Main hero section with background video and controls
 */
export default function HeroSection() {
  const { isVideoPlaying, currentTime, duration, toggleVideoPlayPause } =
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
        onToggle={toggleVideoPlayPause}
        circumference={circumference}
        strokeDashoffset={strokeDashoffset}
      />

      {/* Hero Content */}
      <HeroContent />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Page Feedback Button */}
      {/* <PageFeedbackButton feedbackUrl={PAGE_FEEDBACK_URL} /> */}
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
      className="absolute top-28 right-3 md:top-32 md:right-8 xl:right-10 z-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 group"
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
      <div className="absolute inset-0 flex items-center justify-center text-gray-300 hover:bg-opacity-20 rounded-full transition-all duration-300">
        {isPlaying ? (
          <Pause
            size={14}
            className="md:w-6 md:h-6 group-hover:scale-110 transition-transform"
            aria-hidden="true"
          />
        ) : (
          <Play
            size={14}
            className="md:w-6 md:h-6 group-hover:scale-110 transition-transform ml-0.5"
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
}

/**
 * HeroContent Sub-Component
 */
function HeroContent() {
  return (
    <div className="relative z-10 h-full flex flex-col w-full mx-auto px-4 sm:px-8 lg:px-24">
      {/* Top Spacer */}
      <div className="flex-1" />

      {/* Main Title*/}
      <div className="max-w-xs md:max-w-2xl xl:max-w-5xl">
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-black text-white leading-14 md:leading-20 xl:leading-28 tracking-wide drop-shadow-2xl">
          {HERO_CONTENT.title}
        </h1>
      </div>

      {/* Bottom Section - Description and CTA */}
      <div className="flex-1 flex flex-col justify-end pb-18 md:pb-32 lg:pb-28">
        <div className="max-w-full md:max-w-lg xl:max-w-xl md:ml-auto">
          <p className="text-gray-200 text-[11pt] md:text-[14pt] lg:text-lg xl:text-xl leading-[16pt] md:leading-[20pt] xl:leading-8 tracking-wide drop-shadow-md mb-4 md:mb-8">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col items-end">
            <Button
              variant="primary"
              size="md"
              onClick={() => console.log("Konsultasi Gratis")}
              className="group flex items-center justify-center gap-4 md:w-sm text-[12pt] md:text-[16pt] lg:w-md"
            >
              {HERO_CONTENT.ctaButton}
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ScrollIndicator Sub-Component
 */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <div className="flex flex-col items-center gap-2 text-white text-[8pt] md:text-[14pt]">
        <span>Scroll</span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce"
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
