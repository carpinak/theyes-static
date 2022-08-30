import { useEffect, useState } from "react";
import { isMobile } from "./media";

export default function useIsMobile() {
  const [isMobileState, setIsMobileState] = useState(null);

  useEffect(() => {
    setIsMobileState(isMobile());
  }, []);

  return isMobileState;
}
