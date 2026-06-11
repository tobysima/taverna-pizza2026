import { Reveal } from '@/components/reveal'

type Item = { name: string; desc: string; price: string }

const signature: Item[] = [
  { name: 'Classic Cheese', desc: 'Tomato sauce, mozzarella', price: '$24' },
  { name: 'Pepperoni Pie', desc: 'Tomato sauce, mozzarella, pepperoni', price: '$27' },
  { name: 'The Bianca', desc: 'White pie, garlic, mozzarella', price: '$27' },
  { name: 'St. Francis', desc: 'House specialty — ask your server', price: '$25' },
  { name: 'Veggie Lovers', desc: 'Fresh seasonal vegetables, tomato sauce, mozzarella', price: '$29' },
  { name: 'Backyard BBQ Chicken', desc: 'BBQ sauce, grilled chicken, mozzarella, red onion, cilantro', price: '$30' },
  { name: 'Fig & Bacon', desc: 'Fig jam, crispy bacon, mozzarella, arugula', price: '$30' },
  { name: 'The Maradona', desc: 'House signature — bold flavors, ask your server', price: '$30' },
  { name: 'Sgt. Pepper', desc: 'Roasted peppers, mozzarella, tomato sauce, Italian sausage', price: '$30' },
  { name: 'Sweet Heat', desc: 'Honey, chili flakes, pepperoni, mozzarella, tomato sauce', price: '$30' },
  { name: 'Fresh Pesto Pie', desc: 'House pesto, mozzarella, cherry tomatoes, basil', price: '$30' },
  { name: 'The Royal Supreme', desc: 'Loaded — pepperoni, sausage, peppers, mushrooms, onion', price: '$35' },
  { name: 'Prosciutto Burrata', desc: 'Prosciutto di Parma, fresh burrata, arugula, olive oil', price: '$37' },
  { name: 'Prosciutto Rucola', desc: 'Prosciutto crudo, wild arugula, shaved parm, lemon, olive oil', price: '$37' },
  { name: 'Burrata Pie', desc: 'Fresh burrata, tomato sauce, basil, olive oil', price: '$35' },
]

const vodka: Item[] = [
  { name: 'Classic Vodka', desc: 'House vodka cream sauce, mozzarella, basil', price: '$27' },
  { name: 'Vodka Dona', desc: 'Vodka cream, prosciutto, fresh mozzarella', price: '$32' },
  { name: 'Spicy Vodka', desc: 'Spicy vodka cream sauce, chili flakes, mozzarella', price: '$32' },
]

const tomato: Item[] = [
  { name: 'Classic Tomato', desc: 'Crushed San Marzano tomatoes, olive oil, fresh basil', price: '$24' },
  { name: 'Spicy Tomato', desc: 'Spiced tomato sauce, chili flakes, mozzarella', price: '$27' },
  { name: 'Deluxe Tomato', desc: 'Tomato, burrata, basil, extra virgin olive oil', price: '$30' },
]

const sides: Item[] = [
  { name: 'Garlic Knots', desc: 'House dough, garlic butter, grated parm, parsley', price: '$7.50' },
]

const sauces: Item[] = [
  { name: 'Marinara', desc: 'Classic dipping sauce', price: '$1' },
  { name: 'Ranch', desc: 'House-made ranch', price: '$2' },
  { name: 'Pesto', desc: 'Fresh basil pesto', price: '$3' },
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

function Category({ title, items, note }: { title: string; items: Item[]; note?: string }) {
  return (
    <>
      <p className="mb-2 mt-12 text-xs font-medium uppercase tracking-[0.28em] text-green first:mt-0">{title}</p>
      {note && <p className="mb-2 text-xs text-muted-foreground">{note}</p>}
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
              href="https://www.taverna.pizza"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-cream transition-all hover:-translate-y-0.5 hover:bg-green-dark"
            >
              Order Online
            </a>
          </div>
        </Reveal>
        <div className="mt-10">
          <Category title="Signature Pies" items={signature} note="All whole pies are 18&quot; cut into 8 slices" />
          <Category title="Vodka Pie — 3 Ways" items={vodka} />
          <Category title="Tomato Pie — 3 Ways" items={tomato} />
          <Category title="Sides" items={sides} />
          <Category title="Dipping Sauces" items={sauces} />
        </div>
        <Reveal>
          <div className="mt-12 flex items-start gap-4 rounded-xl border border-border bg-secondary px-6 py-5">
            <div className="mt-0.5 size-5 flex-shrink-0 rounded-full border-2 border-green" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Order online at{' '}
              <a href="https://www.taverna.pizza" target="_blank" rel="noopener noreferrer" className="font-medium text-cream underline-offset-4 hover:underline">
                taverna.pizza
              </a>{' '}
              or walk in and order at the counter.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
