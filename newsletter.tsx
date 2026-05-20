"use client"

import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-accent">
          انضمي إلينا
        </p>
        <h2 className="text-balance font-serif text-4xl md:text-5xl">
          كوني أوّل من تعلم بالمجموعات الجديدة.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
          اشتركي في نشرتنا واحصلي على خصم ١٠٪ على طلبكِ الأول، إلى جانب دعوات حصرية
          لإطلاق مجموعاتنا.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (email) setSubmitted(true)
          }}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            بريدكِ الإلكتروني
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="بريدكِ الإلكتروني"
            className="flex-1 border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-accent px-6 py-3 text-sm tracking-wider text-accent-foreground uppercase transition-colors hover:bg-accent/90"
          >
            اشتراك
            <ArrowLeft className="h-4 w-4" />
          </button>
        </form>

        {submitted && (
          <p className="mt-5 text-sm text-accent" role="status">
            شكراً لكِ! تم تسجيل بريدكِ بنجاح.
          </p>
        )}
      </div>
    </section>
  )
}
