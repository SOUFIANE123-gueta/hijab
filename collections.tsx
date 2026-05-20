import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const collections = [
  {
    title: "الحجاب",
    count: "٤٨ قطعة",
    image: "/images/collection-hijabs.jpg",
    description: "حرير وشيفون بألوان دافئة",
  },
  {
    title: "العباءات",
    count: "٣٢ قطعة",
    image: "/images/collection-abayas.jpg",
    description: "تصاميم عصرية بلمسة كلاسيكية",
  },
  {
    title: "الإكسسوارات",
    count: "١٨ قطعة",
    image: "/images/collection-accessories.jpg",
    description: "تفاصيل تكتمل بها إطلالتكِ",
  },
]

export function Collections() {
  return (
    <section id="collections" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">
              مجموعاتنا
            </p>
            <h2 className="max-w-xl text-balance font-serif text-4xl text-primary md:text-5xl">
              اختاري ما يعكس
              <span className="italic"> روحكِ.</span>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm tracking-wider text-foreground hover:text-accent"
          >
            عرض جميع المجموعات
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {collections.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-primary">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </div>
                <span className="text-xs tracking-wider text-muted-foreground">
                  {c.count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
