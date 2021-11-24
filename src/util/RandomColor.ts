export function RandomColor() {
  const randomBetween = (min = 20, max = 230) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgba(${r}, ${g}, ${b}`;
  return {
    border: `${rgb}, 0.7)`,
    background: `${rgb}, 0.1)`,
  };
}
