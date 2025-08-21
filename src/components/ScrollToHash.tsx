// src/components/ScrollToHash.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.replace("#", ""));
    // Try to find element immediately
    let el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // If element not present yet (route change / SSR), wait briefly
    const t = setTimeout(() => {
      el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120); // tweak delay if needed

    return () => clearTimeout(t);
  }, [hash, pathname]);

  return null;
}
