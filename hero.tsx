import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-6">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-accent">
              مجموعة خريف ٢٠٢٦ ـــ
            </p>
            <h1 className="text-balance font-serif text-5xl leading-[1.1] text-primary md:text-6xl lg:text-7xl">
              أناقةٌ هادئة،
              <br />
              <span className="italic text-accent">واحتشامٌ</span> راقٍ.
            </h1>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              نقدّم لكِ تشكيلة مختارة من الحجاب والعباءات بأرقى الأقمشة الطبيعية،
              مصممة لتمنحكِ ثقةً ودفئاً في كل تفصيلة.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-none px-8 text-sm tracking-wider">
                تسوقي المجموعة
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-none text-sm tracking-wider underline-offset-8 hover:bg-transparent hover:underline"
              >
                اكتشفي قصتنا
              </Button>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-border/60 pt-8">
              <Stat value="+٢٥٠" label="تصميم حصري" />
              <div className="h-10 w-px bg-border" />
              <Stat value="١٠٠٪" label="أقمشة طبيعية" />
              <div className="hidden h-10 w-px bg-border sm:block" />
              <Stat value="+٤٠" label="دولة حول العالم" className="hidden sm:block" />
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src="/images/hero.jpg"
                alt="عارضة ترتدي حجاباً حريرياً بلون الكراميل"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -start-6 hidden w-64 border border-border bg-background p-6 shadow-sm md:block">
              <p className="font-serif text-sm italic text-muted-foreground">
                «الأناقة الحقيقية تكمن في البساطة.»
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent">
                ـــ مجلة الأناقة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  value,
  label,
  className = "",
}: {
  value: string
  label: string
  className?: string
}) {
  return (
    <div className={className}>
      <p className="font-serif text-2xl text-primary md:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
