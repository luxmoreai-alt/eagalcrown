import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { brandAssets } from "../data/siteContent";

type LoaderOverlayProps = {
  label?: string;
};

export function LoaderOverlay({ label = "Eagle Crown" }: LoaderOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center overflow-hidden bg-crown-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="loader-pattern absolute inset-0 opacity-70" />
      <motion.div
        className="relative grid place-items-center"
        initial={{ opacity: 0, scale: 0.9, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="loader-ring absolute size-44 rounded-full sm:size-52" />
        <motion.img
          src={brandAssets.logoMark}
          alt="Eagle Crown Group of Companies"
          decoding="async"
          className="relative size-24 object-contain drop-shadow-2xl sm:size-28"
          animate={{ y: [0, -8, 0], rotateY: [0, 12, 0] }}
          transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.p
          className="mt-8 font-display text-2xl font-semibold text-gold-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
        >
          {label}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>{isVisible ? <LoaderOverlay /> : null}</AnimatePresence>
  );
}
