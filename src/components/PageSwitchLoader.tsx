import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoaderOverlay } from "./SiteLoader";

export function PageSwitchLoader() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setIsVisible(true);
    const timer = window.setTimeout(() => setIsVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible ? <LoaderOverlay label="Loading" /> : null}
    </AnimatePresence>
  );
}
