import type { MouseEvent } from "react";

export function goTo(e: MouseEvent, href: string, after?: () => void) {
  e.preventDefault();
  after?.();
  const id = href.replace("#", "");
  setTimeout(() => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 60);
}