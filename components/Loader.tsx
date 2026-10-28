"use client";

import { useEffect, useRef, useState } from "react";

const GREETINGS = ["Hello", "Namaste","Bonjour","Hola", "Ciao", "Guten tag"];
const GREETING_MS = 140;
const IDENTITY_MS = 420;
const CURTAIN_MS = 500;
const STORAGE_KEY = "anthony-intro-played";

type Phase = "idle" | "greetings" | "identity" | "profile" | "done";

export function Loader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const onDoneRef = useRef(onDone);
  const completed = useRef(false);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  const finish = () => {
    if (completed.current) return;
    completed.current = true;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage may be unavailable */
    }
    setPhase("done");
    onDoneRef.current();
  };

  // Reference behavior: lock the page while the intro is mounted, then check
  // whether it has already played (or whether reduced motion is requested).
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let played = false;
    try {
      played = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage may be unavailable */
    }

    if (
      played ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      finish();
      document.body.style.overflow = previous;
      return () => {
        document.body.style.overflow = previous;
      };
    }

    let cancelled = false;
    const start = () => {
      if (!cancelled) {
        setPhase((current) => (current === "idle" ? "greetings" : current));
      }
    };
    const fallback = window.setTimeout(start, 900);
    document.fonts?.ready.then(start).catch(start);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      document.body.style.overflow = previous;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== "greetings") return;
    const timers: number[] = [];

    GREETINGS.slice(1).forEach((_, index) => {
      timers.push(
        window.setTimeout(
          () => setGreetingIndex(index + 1),
          (index + 1) * GREETING_MS,
        ),
      );
    });
    timers.push(
      window.setTimeout(
        () => setPhase("identity"),
        GREETINGS.length * GREETING_MS,
      ),
    );

    return () => timers.forEach(window.clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "identity") return;
    const timer = window.setTimeout(() => setPhase("profile"), IDENTITY_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "profile") return;
    const timer = window.setTimeout(finish, CURTAIN_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`loader${phase === "profile" ? " loader--profile" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader__curtain" aria-hidden="true" />
      <div className="loader__stage" aria-hidden="true">
        {phase === "greetings" && (
          <p className="loader__line">
            <span className="loader__dot" />
            <span className="loader__word" key={greetingIndex}>
              {GREETINGS[greetingIndex]}
            </span>
          </p>
        )}
        {phase === "identity" && (
          <p className="loader__line loader__line--identity">
            <span className="loader__pronoun">I’m</span>
            <span className="loader__name">Anthony</span>
          </p>
        )}
      </div>
    </div>
  );
}
