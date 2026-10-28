"use client";

import {
  createElement,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "footer";
  delay?: number;
  immediate?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  variant = "up",
  delay = 0,
  immediate = false,
  style,
  ...rest
}: RevealProps<T>) {
  const element = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      immediate ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frame = requestAnimationFrame(() => {
        node.classList.add("is-visible");
      });
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          node.classList.add("is-visible");
          observer.disconnect();
          break;
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return createElement(
    element,
    {
      ...rest,
      ref,
      className: `reveal-${variant} ${className}`.trim(),
      style: { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children,
  );
}
