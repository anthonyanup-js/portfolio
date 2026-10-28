import { profile, timeline } from "@/lib/data";
import { socialIcons } from "@/lib/visuals";
import { IconMarkup } from "./IconMarkup";
import { Reveal } from "./Reveal";

const work = timeline.filter((entry) => entry.work);

export function Hero() {
  return (
    <section id="home" className="section section--hero hero">
      <div className="container hero__inner">
        {/* The reference portrait is intentionally omitted; its 96px slot is
            preserved so the rest of the composition keeps its position. */}
        <figure
          className="hero__portrait hero__portrait--placeholder"
          aria-hidden="true"
        />

        <Reveal
          as="header"
          className="hero__header"
          immediate
          delay={100}
        >
          <h6 className="hero__name">{profile.name}</h6>
          <h1 className="hero__role">{profile.heroRole}</h1>
        </Reveal>

        <Reveal
          className="hero__bio"
          immediate
          delay={180}
        >
          <p className="hero__lead">{profile.introLead}</p>
          <p className="hero__note">{profile.intro}</p>
        </Reveal>

        <Reveal
          as="ul"
          className="hero__socials"
          role="list"
          immediate
          delay={260}
        >
          {profile.socials.map((social) => {
            const icon = socialIcons[social.label];
            if (!icon) return null;
            return (
              <li key={social.label}>
                <a
                  className="hero__social"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <IconMarkup html={icon} />
                </a>
              </li>
            );
          })}
        </Reveal>

        <Reveal className="hero__cta" immediate delay={340}>
          <a className="btn btn--ghost" href="#projects">
            <span className="btn__label">View Projects</span>
          </a>
          <a className="btn btn--primary" href="#contact">
            <span className="btn__label">Get in Touch</span>
          </a>
        </Reveal>

        <Reveal as="section" className="hero__work" delay={80}>
          <Reveal as="h2" className="label hero__work-head" delay={0}>
            Work
          </Reveal>
          <ul className="work" role="list">
            {work.map((entry) => (
              <Reveal as="li" className="work__item" key={entry.role} delay={80}>
                <span className="work__period">{entry.period}</span>
                <span className="work__leader" aria-hidden="true" />
                <span className="work__details">
                  {entry.tag && <span className="work__tag">{entry.tag}</span>}
                  <span className="work__role">{entry.role}</span>
                  <span className="work__at"> — </span>
                  <span className="work__company">{entry.company}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
