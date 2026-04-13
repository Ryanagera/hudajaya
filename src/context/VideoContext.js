import { createContext, useContext } from "react";

export const VideoContext = createContext();

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within VideoProvider");
  }
  return context;
}
