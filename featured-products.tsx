import Image from "next/image"

const products = [
  { name: "حجاب شيفون ـــ كراميل", price: "١٢٠ ر.س", image: "/images/product-1.jpg", tag: "الأكثر مبيعاً" },
  { name: "حجاب حرير ـــ عاجي", price: "١٨٠ ر.س", image: "/images/product-2.jpg", tag: "جديد" },
  { name: "حجاب مطبوع ـــ بُني", price: "١٤٥ ر.س", image: "/images/product-3.jpg" },
  { name: "حجاب قطن ـــ بيج", price: "٩٥ ر.س", image: "/images/product-4.jpg" },
]

export function FeaturedProducts() {
  return (
    <section id="shop" className="border-y border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">
            القطع المميزة
          </p>
          <h2 className="font-serif text-4xl text-primary md:text-5xl">
            تصاميم اخترناها لكِ
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-background">
                {p.tag && (
                  <span className="absolute top-3 start-3 z-10 bg-primary px-3 py-1 text-[10px] tracking-wider text-primary-foreground uppercase">
                    {p.tag}
                  </span>
                )}
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <button
                  type="button"
                  className="absolute bottom-0 inset-x-0 translate-y-full bg-primary py-3 text-xs tracking-wider text-primary-foreground uppercase transition-transform duration-300 group-hover:translate-y-0"
                >
                  إضافة سريعة
                </button>
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="text-sm leading-snug text-foreground">{p.name}</h3>
                <p className="text-sm whitespace-nowrap text-primary">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
