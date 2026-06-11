import { Reveal } from '@/components/reveal'
import { MapPin, Clock, UtensilsCrossed, Wine } from 'lucide-react'

const features = [
  { icon: UtensilsCrossed, title: 'NY Style', lines: ['By the slice.', 'By the pie.'] },
  { icon: Wine, title: 'Full Bar', lines: ['Craft cocktails.', 'Local drafts.'] },
  { icon: MapPin, title: 'Dine In', lines: ['Come as you are.', 'Stay a while.'] },
  { icon: Clock, title: 'Open Late', lines: ['Tue – Sun.', 'Till midnight.'] },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex flex-col justify-start px-6 pb-16 pt-24 md:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-green">
          Pizza · Bar · Good Times
        </p>
        <h1 className="mt-4 font-heading text-[5.5rem] leading-[0.88] tracking-[0.06em] text-cream sm:text-[7rem]">
          TAVERNA
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          New York–style pizza made right. A bar worth staying at. Marble
          counters, green leather, and a slice that actually hits. Come hungry.
          Leave whenever.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-green px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-all hover:-translate-y-0.5 hover:bg-green-dark"
          >
            See the Menu
          </a>
          <a
            href="#location"
            className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream"
          >
            Find Us
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start">
              <feature.icon className="size-6 text-green" strokeWidth={1.75} />
              <h3 className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-green">
                {feature.title}
              </h3>
              <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {feature.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[50vh] overflow-hidden lg:min-h-screen">
        <img
          src="/images/hero-pizza.png"
          alt="Taverna pizza slice on checkered paper"
          className="h-full w-full animate-hero-zoom scale-125 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:hidden" />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'radial-gradient(120% 130% at 95% 50%, transparent 38%, oklch(0.07 0.005 60 / 0.55) 58%, var(--background) 80%)',
          }}
        />
        <div className="absolute right-8 top-1/2 flex flex-col items-end rounded-xl border border-border bg-background/70 px-6 py-4 backdrop-blur-md">
          <span className="font-heading text-4xl leading-none text-green">
            Slice + Drink
          </span>
          <span className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
            Daily Special
          </span>
        </div>
      </div>
    </section>
  )
}
