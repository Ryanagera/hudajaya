/**
 * DOM and Browser Utilities
 * Helper functions for DOM manipulation and browser APIs
 */

/**
 * Lock body scroll (prevent background scroll)
 */
export const lockBodyScroll = () => {
  if (typeof document === "undefined") return;
  document.body.style.overflow = "hidden";
};

/**
 * Unlock body scroll (allow background scroll)
 */
export const unlockBodyScroll = () => {
  if (typeof document === "undefined") return;
  document.body.style.overflow = "auto";
};

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

/**
 * Check if localStorage is available
 * @returns {boolean} True if localStorage is available
 */
export const isLocalStorageAvailable = () => {
  if (typeof window === "undefined") return false;
  try {
    const test = "__test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Check if sessionStorage is available
 * @returns {boolean} True if sessionStorage is available
 */
export const isSessionStorageAvailable = () => {
  if (typeof window === "undefined") return false;
  try {
    const test = "__test__";
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector of element
 * @param {object} options - Scroll options
 */
export const smoothScrollToElement = (selector, options = {}) => {
  const element = document.querySelector(selector);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    ...options,
  });
};

/**
 * Scroll to top of page
 * @param {number} duration - Animation duration in ms
 */
export const scrollToTop = (duration = 300) => {
  const startPosition = window.scrollY;
  const distance = -startPosition;
  let start = null;

  const animation = (currentTime) => {
    if (start === null) start = currentTime;
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollBy(0, distance * progress - distance * (progress - 1));

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
