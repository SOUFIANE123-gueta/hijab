import { Leaf, Scissors, Truck, HeartHandshake } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "أقمشة طبيعية",
    desc: "نختار قطننا وحريرنا بعناية من أجود المصادر العالمية.",
  },
  {
    icon: Scissors,
    title: "حرفية يدوية",
    desc: "كل قطعة تُخاط بأيدي حرفيات ماهرات بلمسة حب.",
  },
  {
    icon: Truck,
    title: "شحن آمن",
    desc: "نوصلكِ طلبكِ بعنايةٍ فائقة وتغليفٍ يليق بالهدية.",
  },
  {
    icon: HeartHandshake,
    title: "خدمة شخصية",
    desc: "فريقنا متاح لمساعدتكِ في اختيار ما يناسبكِ.",
  },
]

export function Values() {
  return (
    <section className="bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col">
              <v.icon className="h-8 w-8 text-accent" strokeWidth={1.25} />
              <h3 className="mt-5 font-serif text-xl text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
