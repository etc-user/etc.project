"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LogoProps = {
  priority?: boolean;
};

export default function Logo({
  priority = false,
}: LogoProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setDark(
        document.documentElement.classList.contains("dark")
      );
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={
        dark
          ? "/logos/logo-light.svg"
          : "/logos/logo-dark.svg"
      }
      alt="etc."
      width={146}
      height={50}
      priority={priority}
      draggable={false}
    />
  );
}

