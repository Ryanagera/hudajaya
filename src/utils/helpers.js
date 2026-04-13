/**
 * Klasifikasi class name dengan kondisi tertentu
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Format string ke dalam format title case
 */
export const toTitleCase = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/**
 * Debounce function untuk optimize performance
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeoutId);
      func(...args);
    };
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };
};

/**
 * Throttle function untuk control event firing
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
