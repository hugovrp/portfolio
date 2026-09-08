"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosSetup() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return null;
}