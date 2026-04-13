import { useEffect, useState, useRef } from "react";

/**
 * useVideoPlayer - Manages video playback state and tracking
 * Handles play/pause, current time, duration, and looping
 */
export function useVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  // Handle play/pause execution
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  // Track video time and duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => setCurrentTime(0); // Smooth loop

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return {
    videoRef,
    isPlaying,
    setIsPlaying,
    currentTime,
    duration,
    togglePlayPause,
  };
}
