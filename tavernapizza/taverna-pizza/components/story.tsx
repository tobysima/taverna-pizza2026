import { Reveal } from '@/components/reveal'

export function Story() {
  return (
    <section
      id="story"
      className="grid grid-cols-1 items-stretch lg:grid-cols-2"
    >
      <div className="relative min-h-[60vh] overflow-hidden lg:min-h-[80vh]">
        <img
          src="/images/story-interior.png"
          alt="Taverna bar interior — pink plastered walls, stone arches, wooden shelves lined with bottles"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-green">
            The Place
          </p>
          <h2 className="font-heading text-5xl leading-[0.9] tracking-wide text-cream sm:text-6xl">
            A Tavern That
            <br />
            Takes Its Pizza
            <br />
            Seriously.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Pink plaster walls. Stone arches. Dark marble counters and green
            leather seats worn soft over years of good nights. Taverna is the
            kind of place you stumble in for a slice and end up staying for
            three rounds. The pizza is NY-style and uncompromising — crisp
            crust, serious sauce, proper cheese pull. The bar matches it.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-8">
            {[
              { num: '18"', label: 'Every Pie' },
              { num: '6+', label: 'Rotating Slices' },
              { num: 'Till 12', label: 'Open Late' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl leading-none text-green">
                  {stat.num}
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
