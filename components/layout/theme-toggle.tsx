"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--text)",
      }}
    >
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}