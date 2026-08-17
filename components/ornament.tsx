export function Ornament({ label }: { label?: string }) {
  return (
    <div className="ornament" aria-hidden={!label}>
      <span />{label && <em>{label}</em>}<b>✦</b><span />
    </div>
  );
}
