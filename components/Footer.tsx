import { profile } from "@/lib/data";
import { footerIcons } from "@/lib/visuals";
import { IconMarkup } from "./IconMarkup";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__row">
        {/* Portrait slot kept for the original three-column alignment. */}
        <figure
          className="footer__portrait footer__portrait--placeholder"
          aria-hidden="true"
        />

        <Reveal as="p" className="body footer__copy" variant="footer" delay={80}>
          Copyright © {year} {profile.name}
        </Reveal>

        <Reveal
          as="ul"
          className="footer__socials"
          role="list"
          variant="footer"
          delay={160}
        >
          {profile.socials.map((social) => {
            const icon = footerIcons[social.label];
            if (!icon) return null;
            return (
              <li key={social.label}>
                <a
                  className="footer__social"
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
      </div>
    </footer>
  );
}
