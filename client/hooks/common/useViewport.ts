"use client";

import { useEffect, useState } from "react";

const useViewport = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResizeWidth = () => setWidth(window.innerWidth);
      const handleWindowResizeHeight = () => setHeight(window.innerHeight);

      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener("resize", handleWindowResizeWidth);
      window.addEventListener("resize", handleWindowResizeHeight);

      return () => {
        window.removeEventListener("resize", handleWindowResizeWidth);
        window.removeEventListener("resize", handleWindowResizeHeight);
      };
    }
  }, []);

  return { width, height };
};

export { useViewport };
