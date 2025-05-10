"use client";

import { useEffect, useState } from "react";

const useViewport = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => setWidth(window.innerWidth);

      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  return { width };
};

export { useViewport };
