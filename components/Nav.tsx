"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useSmoothScroll } from "./SmoothScroll";
import { ThemeToggle } from "./ThemeToggle";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const lenis = useSmoothScroll();

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current?.target?.id) setActive(current.target.id);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (lenis && !reduce) {
      lenis.scrollTo(target, { offset: 0, lerp: 0.075 });
      return;
    }
    target.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav className="nav" aria-label="Primary">
      <ul className="nav__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav__link label ${
                active === item.id ? "is-active" : ""
              }`}
              aria-current={active === item.id ? "true" : undefined}
              onClick={(event) => handleClick(event, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="nav__divider" aria-hidden="true" />
      <ThemeToggle />
    </nav>
  );
}
