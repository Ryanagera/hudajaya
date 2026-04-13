/**
 * Types dan interfaces untuk aplikasi
 */

// Navigation Types
export interface NavItem {
  id: number;
  label: string;
  path: string;
}

export interface TopNavItem {
  id: number;
  icon: string;
  label: string;
  action: string;
}

// Hero Types
export interface HeroContent {
  title: string;
  description: string;
  ctaButton: string;
  backgroundImage: string;
}

// Button Types
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
