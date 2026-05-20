export function Marquee() {
  const items = [
    "شحن مجاني للطلبات فوق ٣٠٠ ر.س",
    "إرجاع مجاني خلال ١٤ يوماً",
    "أقمشة طبيعية ١٠٠٪",
    "تغليف فاخر بدون إضافات",
    "صنع بحبٍ في دبي",
  ]
  return (
    <div className="border-y border-border bg-primary text-primary-foreground">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_35s_linear_infinite] items-center gap-12 px-6 py-3 whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-12 text-xs tracking-wider uppercase">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(50%); }
        }
      `}</style>
    </div>
  )
}
