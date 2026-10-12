"use client";
import { useEffect, useState } from "react";

export function useCanDrag() {
  const [can, setCan] = useState(false);
  useEffect(() => {
    setCan(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);
  return can;
}