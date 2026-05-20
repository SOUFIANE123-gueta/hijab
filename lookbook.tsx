import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Lookbook() {
  return (
    <section id="lookbook" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <Image
                src="/images/lookbook.jpg"
                alt="عارضة في فناء عربي تقليدي"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">
              لوك بوك ٢٠٢٦
            </p>
            <h2 className="text-balance font-serif text-4xl text-primary md:text-5xl">
              حكاية تُروى
              <span className="italic"> بألوان الأرض.</span>
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              مستوحاة من الأفنية العتيقة وضوء الأصيل، تنسج مجموعتنا الجديدة قصةً
              من الأناقة الهادئة. ألوان البُني الدافئة تتناغم مع العاجي الناعم،
              لتمنحكِ إطلالةً تليق بكل تفاصيل يومكِ.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-primary px-8 text-sm tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
              >
                استكشفي اللوك بوك
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
