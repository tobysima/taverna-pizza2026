import { Reveal } from '@/components/reveal'

const rows = [
  {
    label: 'Address',
    value: '[Street Address Here]',
    sub: 'City, State ZIP',
    href: 'https://maps.google.com',
  },
  {
    label: 'Hours',
    value: 'Tue – Sun, 12pm – 12am',
    sub: 'Closed Mondays · Kitchen closes at 11pm',
  },
  {
    label: 'Reservations',
    value: 'Walk-ins welcome · Call ahead for parties of 6+',
    sub: '(000) 000-0000',
  },
  {
    label: 'Instagram',
    value: '@tavernapizza',
    sub: 'Follow for specials and rotating slices',
    href: 'https://instagram.com',
  },
]

export function Location() {
  return (
    <section id="location" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-24 md:px-12 lg:px-16">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-green">Find Us</p>
          <h2 className="font-heading text-5xl leading-[0.9] tracking-wide text-cream sm:text-6xl">
            Come In.<br />Stay a While.
          </h2>
          <div className="mt-10 space-y-px">
            {rows.map((row) => (
              <div key={row.label} className="border-t border-border py-5">
                <div className="text-[0.7rem] uppercase tracking-[0.16em] text-green">{row.label}</div>
                {row.href ? (
                  <a href={row.href} target="_blank" rel="noopener noreferrer"
                    className="mt-2 inline-block text-base text-cream underline-offset-4 transition-colors hover:text-green hover:underline">
                    {row.value}
                  </a>
                ) : (
                  <div className="mt-2 text-base text-cream">{row.value}</div>
                )}
                <div className="mt-1 text-sm text-muted-foreground">{row.sub}</div>
              </div>
            ))}
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-green px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-all hover:-translate-y-0.5 hover:bg-green-dark">
            Get Directions
          </a>
        </Reveal>
      </div>

      <div className="relative min-h-[50vh] overflow-hidden border-l border-border bg-secondary lg:min-h-full">
        <iframe
          title="Map to Taverna"
          src="https://www.google.com/maps?q=Taverna+Pizza&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.4]"
          allowFullScreen
        />
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background/80 px-5 py-2 text-xs uppercase tracking-[0.16em] text-cream backdrop-blur-md transition-colors hover:border-cream">
          Open in Google Maps
        </a>
      </div>
    </section>
  )
}
