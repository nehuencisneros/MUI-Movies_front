import { useState, useEffect } from "react";

export const useProgressBar = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 0;
        }
        return Math.min(oldProgress + 3, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return progress;
};

export const useLoadingBar = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return loading;
};