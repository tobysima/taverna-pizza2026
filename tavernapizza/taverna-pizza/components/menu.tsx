import { Reveal } from '@/components/reveal'

type Item = { name: string; desc: string; price: string }

const slices: Item[] = [
  { name: 'Margherita', desc: 'Crushed plum tomato, aged mozzarella, fresh basil, olive oil', price: '$5' },
  { name: 'Pepperoni', desc: 'Aged mozz, plum tomato, cup-and-char pepperoni, grated parm, oregano', price: '$6' },
  { name: 'Prosciutto & Arugula', desc: 'Tomato base, aged mozz, prosciutto crudo, wild arugula, shaved parm, lemon', price: '$7' },
  { name: 'Spicy Verde', desc: 'Jalapeño-infused tomato, aged mozz, cup pepperoni, charred green pepper', price: '$6' },
  { name: 'White Pie', desc: 'Garlic cream, fontina, fresh mozz, roasted garlic, rosemary', price: '$6' },
]

const pies: Item[] = [
  { name: 'Plain Pie', desc: 'Plum tomato, aged mozz, fresh mozz, olive oil — 18 inches, 8 slices', price: '$27' },
  { name: 'Build Your Own', desc: 'Start with the plain, add from our rotating topping list', price: 'from $27' },
]

const sides: Item[] = [
  { name: 'House Salad', desc: 'Little gem, shaved fennel, pickled red onion, lemon vinaigrette', price: '$12' },
  { name: 'Garlic Knots', desc: 'House dough, garlic butter, grated parm, parsley — 6 per order', price: '$8' },
  { name: 'Burrata', desc: 'Roasted tomato, basil oil, flaky salt, grilled bread', price: '$14' },
]

const drinks: Item[] = [
  { name: 'Draft Beer', desc: 'Rotating local and regional taps — ask your server', price: '$7–9' },
  { name: 'House Cocktails', desc: 'Negroni · Aperol Spritz · Spicy Margarita · Mezcal Sour', price: '$13' },
  { name: 'Wine', desc: 'Red, white, and sparkling by the glass', price: '$11–15' },
  { name: 'Soft Drinks', desc: 'Coke · Sprite · Topo Chico · Fresh-squeezed lemonade', price: '$4' },
]

function MenuRow({ item }: { item: Item }) {
  return (
    <Reveal>
      <div className="group relative flex items-start justify-between gap-6 border-b border-border py-5 pl-4 transition-colors hover:bg-secondary">
        <span className="absolute left-0 top-0 h-full w-0.5 bg-green transition-all duration-300 group-hover:w-1" />
        <div className="flex-1">
          <div className="font-heading text-2xl tracking-wide text-cream">{item.name}</div>
          <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</div>
        </div>
        <div className="font-heading text-2xl text-green">{item.price}</div>
      </div>
    </Reveal>
  )
}

function Category({ title, items }: { title: string; items: Item[] }) {
  return (
    <>
      <p className="mb-2 mt-12 text-xs font-medium uppercase tracking-[0.28em] text-green first:mt-0">{title}</p>
      <div>{items.map((item) => <MenuRow key={item.name} item={item} />)}</div>
    </>
  )
}

export function Menu() {
  return (
    <section id="menu" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-green">The Menu</p>
              <h2 className="font-heading text-5xl tracking-wide text-cream sm:text-6xl">What We Make</h2>
            </div>
            <a
              href="#location"
              className="rounded-full bg-green px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-cream transition-all hover:-translate-y-0.5 hover:bg-green-dark"
            >
              Visit Us
            </a>
          </div>
        </Reveal>
        <div className="mt-10">
          <Category title="Slices" items={slices} />
          <Category title="Whole Pies" items={pies} />
          <Category title="Sides" items={sides} />
          <Category title="Drinks" items={drinks} />
        </div>
        <Reveal>
          <div className="mt-12 flex items-start gap-4 rounded-xl border border-border bg-secondary px-6 py-5">
            <div className="mt-0.5 size-5 flex-shrink-0 rounded-full border-2 border-green" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Slices rotate daily based on what&apos;s fresh.{' '}
              <strong className="font-medium text-cream">Happy Hour</strong> runs Tue – Fri, 4–7pm — $1 off all slices and $2 off drinks.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
