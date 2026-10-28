import { Reveal } from "./Reveal";

export function SectionTitle({
  index,
  label,
  title,
  lead,
}: {
  index: string;
  label: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="sect-title">
      <Reveal className="sect-title__meta" delay={0}>
        <span className="label sect-title__index">{index}</span>
        <span className="label sect-title__label">{label}</span>
      </Reveal>
      <Reveal as="h2" className="h1 sect-title__heading" delay={100}>
        {title}
      </Reveal>
      <Reveal as="p" className="body sect-title__lead" delay={200}>
        {lead}
      </Reveal>
    </header>
  );
}
