import { useState, useEffect } from "react";

/**
 * Hook untuk manage loading state pada page load
 */
export default function useLoading(duration = 2000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading state ke false setelah duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return { isLoading };
}
