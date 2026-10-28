"use client";

import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle
          index="04"
          label="Contact"
          title="Have a project in mind? Let's talk."
          lead="I'm open to conversations about full-stack development, backend engineering, and cloud-based systems. Email is the best way to reach me."
        />

        <div className="contact__grid">
          <Reveal as="aside" className="contact__side" delay={120}>
            <div className="contact__block">
              <span className="label">Direct</span>
              <a className="contact__email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>

            <div className="contact__block">
              <span className="label">Phone</span>
              <a
                className="contact__email"
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              >
                {profile.phone}
              </a>
            </div>

            <div className="contact__block">
              <span className="label">Elsewhere</span>
              <ul className="contact__socials" role="list">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      className="contact__social"
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{social.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact__block">
              <span className="label">Response</span>
              <p className="body contact__note">
                Replies are sent from a personal address. Email is the fastest
                way to reach me.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
