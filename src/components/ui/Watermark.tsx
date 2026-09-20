export function Watermark({ n }: { n: string }) {
  return (
    <span className="watermark" aria-hidden>
      {n}
    </span>
  );
}
