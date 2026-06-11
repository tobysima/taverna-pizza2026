const items = [
  'NY Style Pizza',
  'By the Slice',
  'Full Bar',
  'Dine In & Takeout',
  'Open Late',
  'Stone-Baked Crust',
  'Taverna',
]

export function Ticker() {
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-border bg-green py-4">
      <div className="flex w-max animate-ticker whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-heading text-xl tracking-wide text-cream"
          >
            <span className="px-6">{item}</span>
            <span className="text-cream/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
