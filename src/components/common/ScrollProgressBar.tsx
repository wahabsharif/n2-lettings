// src/components/common/ScrollProgressBar.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "8px",
        background: "linear-gradient(90deg, #8d9598, #e93d3d)",
        transformOrigin: "0%",
        zIndex: 1000,
        borderTopRightRadius: "200px",
        borderBottomRightRadius: "200px",
      }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
