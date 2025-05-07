import { useEffect, useState } from "react";
import { isMobile as checkMobile } from "react-device-detect";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (checkMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return isMobile;
};

export { useMobile };
