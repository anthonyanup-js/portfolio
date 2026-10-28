import { projects } from "@/lib/data";
import { chipIcons, miscIcons } from "@/lib/visuals";
import { IconMarkup } from "./IconMarkup";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const arrow = miscIcons.arrow ?? "";

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle
          index="03"
          label="Selected Work"
          title="Full-stack work, built end to end."
          lead="Two recent projects focused on cloud storage, real-time communication, and reliable backend systems."
        />

        <ul className="projects__grid" role="list">
          {projects.map((project) => (
            <Reveal as="li" key={project.title}>
              <article className="card">
                <div className="card__head">
                  <div className="card__badges">
                    <span className="label card__category">
                      {project.category}
                    </span>
                    <span className="label">{project.tag}</span>
                  </div>
                  <span className="label card__year">{project.year}</span>
                </div>
                <h3 className="h2 card__title">{project.title}</h3>
                <p className="body card__desc">{project.description}</p>
                <ul className="card__stack" aria-label="Stack">
                  {project.stack.map((item) => {
                    const icon = chipIcons[item];
                    return (
                      <li className="label card__chip" key={item}>
                        {icon && <IconMarkup html={icon} />}
                        {item}
                      </li>
                    );
                  })}
                </ul>
                {(project.href || project.repo) && (
                  <div className="card__actions">
                    {project.href && (
                      <a
                        className="card__link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                      >
                        <span>Open</span>
                        <IconMarkup html={arrow} />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        className="card__link card__link--muted"
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source`}
                      >
                        <span>Source</span>
                        <IconMarkup html={arrow} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
