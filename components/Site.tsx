"use client";

import { useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Loader } from "./Loader";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { SmoothScroll } from "./SmoothScroll";

export function Site() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <SmoothScroll>
      {!introDone && <Loader onDone={() => setIntroDone(true)} />}
      <div className="app" aria-busy={!introDone}>
        <a className="visually-hidden" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
