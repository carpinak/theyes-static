// Converts a css style object to a list of css properties (pure text/css format)
export default function styleToCss(style) {
  return Object.entries(style)
    .map(
      ([k, v]) =>
        `${k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}:${v};`
    )
    .join("");
}
