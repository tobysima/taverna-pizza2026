export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-6 px-6 py-14 text-center md:px-12">
      <div className="font-heading text-3xl tracking-[0.18em] text-cream">TAVERNA</div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <a href="https://www.instagram.com/taverna.pizza.slc/" target="_blank" rel="noopener noreferrer"
          className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-cream">
          Instagram
        </a>
        <a href="#menu"
          className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-cream">
          Menu
        </a>
        <a href="#location"
          className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-cream">
          Visit
        </a>
      </div>
      <div className="text-xs text-muted-foreground">© 2025 Taverna · Pizza & Bar</div>
    </footer>
  )
}
