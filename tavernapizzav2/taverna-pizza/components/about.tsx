import { Reveal } from '@/components/reveal'

const chapters = [
  {
    chapter: '01',
    title: 'The Slice That Started It',
    img: '/images/about-slice.png',
    alt: 'Taverna arugula prosciutto pizza slice on checkered paper',
    body: "Taverna was built around one idea: a truly great New York slice, the kind you fold and eat standing up — but made with the same care you'd give a whole pie. Cold-fermented dough, crushed plum tomatoes, aged mozzarella. No shortcuts. The crust is the thing.",
  },
  {
    chapter: '02',
    title: 'The Room You Want to Be In',
    img: '/images/about-interior.png',
    alt: 'Taverna bar interior with pink walls, bottles on wooden shelves and fresh flowers',
    body: 'We wanted a place that felt like it had been there forever — stone arches, pink plaster, warm wood ceiling. The kind of bar where the flowers on the counter are always fresh and the beer list changes every few weeks. Comfortable and specific.',
  },
  {
    chapter: '03',
    title: 'The Bar Side of Things',
    img: '/images/about-bar.png',
    alt: 'Taverna cocktails and craft beer selection',
    body: 'A pizza this good deserves a bar that keeps up. We rotate local drafts, keep a tight list of cocktails made properly, and stock the shelves with bottles worth reaching for. Happy hour runs Tuesday through Friday, 4–7pm.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-green">
            About Taverna
          </p>
          <h2 className="max-w-3xl text-balance font-heading text-5xl leading-[0.9] tracking-wide text-cream sm:text-6xl">
            Pizza, Bar, and a Room Worth Staying In
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.chapter}>
              <div
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                  <img
                    src={chapter.img || '/placeholder.svg'}
                    alt={chapter.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="font-heading text-6xl leading-none text-green/25">
                    {chapter.chapter}
                  </div>
                  <h3 className="mt-3 font-heading text-3xl tracking-wide text-cream sm:text-4xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {chapter.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
