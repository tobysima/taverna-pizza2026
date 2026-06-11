const photos = [
  { src: '/images/photo-1.png', alt: 'Pepperoni slice on checkered paper' },
  { src: '/images/photo-2.png', alt: 'Taverna bar interior' },
  { src: '/images/photo-3.png', alt: 'Prosciutto arugula slice with shaved parm' },
  { src: '/images/photo-4.png', alt: 'Spicy pepperoni slice on marble counter' },
  { src: '/images/photo-5.png', alt: 'Taverna at night' },
]

export function PhotoStrip() {
  return (
    <div className="flex h-64 overflow-hidden border-y border-border sm:h-80">
      {photos.map((photo) => (
        <div key={photo.src} className="group relative flex-1 overflow-hidden">
          <img
            src={photo.src || '/placeholder.svg'}
            alt={photo.alt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
