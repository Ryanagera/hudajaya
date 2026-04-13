/**
 * Application Configuration Constants
 * Centralized settings for the entire application
 */

export const APP_CONFIG = {
  NAME: "Huda Jaya",
  VERSION: "1.0.0",
  DESCRIPTION: "Industrial Engineering Solution Company",
};

export const LOADING_CONFIG = {
  DURATION: 3000, // 3 seconds
  ANIMATION_DELAY: 70,
  SESSION_KEY: "appLoaded",
};

export const VIDEO_CONFIG = {
  SOURCE_PATH: "/clip1.mp4",
  MIME_TYPE: "video/mp4",
  MUTED: true,
  AUTO_PLAY: true,
  LOOP: true,
  PLAYS_INLINE: true,
};

export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  SERVICES: "/services",
  ABOUT: "/about",
};

export const RESPONSIVE_BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
};

export const Z_INDEX = {
  DROPDOWN: 40,
  STICKY: 40,
  FIXED: 50,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 50,
  TOOLTIP: 50,
};

export const ANIMATION_DURATIONS = {
  QUICK: 150,
  BASE: 300,
  SLOW: 500,
};
