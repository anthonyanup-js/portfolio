type IconMarkupProps = {
  html: string;
};

/**
 * The original icon set was captured from the reference bundle as exact SVG
 * markup. `display: contents` lets the SVG behave as a direct child of the
 * surrounding flex/grid item without introducing an extra layout box.
 */
export function IconMarkup({ html }: IconMarkupProps) {
  return (
    <span
      className="icon-embed"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
