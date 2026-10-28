"use client";

import { useState } from "react";
import { skillGroups, timeline } from "@/lib/data";
import { miscIcons, skillIcons } from "@/lib/visuals";
import { CertModal, type Certificate } from "./CertModal";
import { IconMarkup } from "./IconMarkup";
import { Reveal } from "./Reveal";

export function About() {
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const arrow = miscIcons.arrow ?? "";

  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="about__pane">
          <h3 className="about__pane-title">Tech Stack</h3>
          <ul className="skills">
            {skillGroups.map((group) => (
              <li className="skills__group" key={group.group}>
                <span className="label skills__group-title">{group.group}</span>
                <ul className="skills__items">
                  {group.items.map((item) => {
                    const icon = skillIcons[item];
                    return (
                      <li className="skills__item" key={item}>
                        {icon && <IconMarkup html={icon} />}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="about__timeline">
          <Reveal className="about__timeline-head">
            <span className="label">Experience &amp; Education</span>
            <span className="label about__count">
              {String(timeline.length).padStart(2, "0")} entries
            </span>
          </Reveal>

          <ol className="timeline">
            {timeline.map((entry, index) => (
              <Reveal
                as="li"
                className="timeline__row"
                variant="left"
                delay={index * 50}
                key={entry.period + entry.role}
              >
                <span className="label timeline__period">{entry.period}</span>
                <div className="timeline__body">
                  <h3 className="h2 timeline__role">{entry.role}</h3>
                  <span className="label timeline__company">
                    {entry.company}
                  </span>
                  <p className="body">{entry.summary}</p>
                  {entry.cert && (
                    <button
                      type="button"
                      className="label timeline__cert-btn"
                      onClick={() =>
                        setCertificate({
                          label: entry.role,
                          src: entry.cert as string,
                        })
                      }
                    >
                      View Cert
                      <IconMarkup html={arrow} />
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      {certificate && (
        <CertModal
          certificate={certificate}
          onClose={() => setCertificate(null)}
        />
      )}
    </section>
  );
}
