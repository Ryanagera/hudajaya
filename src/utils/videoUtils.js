/**
 * Video Player Utilities
 * Helper functions for video playback calculations
 */

/**
 * Calculate video progress percentage
 * @param {number} currentTime - Current playback time in seconds
 * @param {number} duration - Total video duration in seconds
 * @returns {number} Progress percentage (0-100)
 */
export const calculateProgressPercent = (currentTime, duration) => {
  if (duration <= 0) return 0;
  return (currentTime / duration) * 100;
};

/**
 * Calculate SVG stroke dash offset for circular progress
 * @param {number} progressPercent - Progress percentage (0-100)
 * @param {number} radius - Circle radius in units
 * @returns {number} Stroke dash offset value
 */
export const calculateStrokeDashOffset = (progressPercent, radius = 45) => {
  const circumference = 2 * Math.PI * radius;
  return circumference - (circumference * progressPercent) / 100;
};

/**
 * Format video time to display format
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time (MM:SS)
 */
export const formatVideoTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "00:00";

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

/**
 * Check if video is near end (within 2 seconds)
 * @param {number} currentTime - Current playback time
 * @param {number} duration - Total duration
 * @returns {boolean} True if near end
 */
export const isVideoNearEnd = (currentTime, duration) => {
  return duration - currentTime <= 2;
};
