import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Collections } from "@/components/collections"
import { FeaturedProducts } from "@/components/featured-products"
import { Lookbook } from "@/components/lookbook"
import { Values } from "@/components/values"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Collections />
      <FeaturedProducts />
      <Lookbook />
      <Values />
      <Testimonials />
      <Newsletter />
      <SiteFooter />
    </main>
  )
}
