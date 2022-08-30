import { useEffect, useState } from "react";
import { isMobile } from "./media";

export default function useIsMobile() {
  const [isMobileState, setIsMobileState] = useState(false);

  useEffect(() => {
    setIsMobileState(isMobile());
  }, []);

  return isMobileState;
}
