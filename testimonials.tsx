const testimonials = [
  {
    quote:
      "أقمشة فاخرة وألوان لا تُقاوم. أصبحت نُهى وجهتي الأولى لكل مناسبة.",
    name: "ليلى الأحمدي",
    location: "الرياض",
  },
  {
    quote: "الحرفية في كل تفصيلة تجعلكِ تشعرين بقيمة ما ترتدين. تجربة استثنائية.",
    name: "سارة المنصور",
    location: "دبي",
  },
  {
    quote: "ذوقٌ راقٍ وتفاصيلٌ مدروسة. بكل بساطة، أناقة لا تُضاهى.",
    name: "نور الحربي",
    location: "جدة",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">
            شهادات العميلات
          </p>
          <h2 className="font-serif text-4xl text-primary md:text-5xl">
            ما يقلنه عنّا
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col border border-border bg-card p-8 md:p-10"
            >
              <span className="font-serif text-5xl leading-none text-accent">"</span>
              <blockquote className="mt-4 flex-1 text-pretty font-serif text-lg leading-relaxed text-foreground italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-medium text-primary">{t.name}</p>
                <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                  {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
