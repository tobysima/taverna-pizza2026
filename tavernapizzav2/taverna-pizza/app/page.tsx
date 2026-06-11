import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Ticker } from '@/components/ticker'
import { Story } from '@/components/story'
import { About } from '@/components/about'
import { PhotoStrip } from '@/components/photo-strip'
import { Menu } from '@/components/menu'
import { Location } from '@/components/location'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <Ticker />
      <Story />
      <About />
      <PhotoStrip />
      <Menu />
      <Location />
      <SiteFooter />
    </main>
  )
}
