import { Instagram, Facebook, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-3xl font-bold text-primary">نُهى</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              أزياء محتشمة فاخرة، مصممة بحبٍّ من أجلكِ.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink icon={Instagram} label="انستغرام" />
              <SocialLink icon={Facebook} label="فيسبوك" />
              <SocialLink icon={Twitter} label="تويتر" />
            </div>
          </div>

          <FooterCol
            title="تسوق"
            links={["الحجاب", "العباءات", "الإكسسوارات", "الجديد", "العروض"]}
          />
          <FooterCol
            title="المساعدة"
            links={["الشحن والتوصيل", "الإرجاع والاستبدال", "دليل المقاسات", "الأسئلة الشائعة"]}
          />
          <FooterCol
            title="الشركة"
            links={["قصتنا", "مدونتنا", "تواصلي معنا", "سياسة الخصوصية", "الشروط والأحكام"]}
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© ٢٠٢٦ نُهى. جميع الحقوق محفوظة.</p>
          <p className="tracking-wider">صُنع بحبٍّ في دبي ✦</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      <Icon className="h-4 w-4" />
    </a>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-primary">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
