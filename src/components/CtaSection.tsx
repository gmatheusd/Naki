import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

type CtaSectionProps = {
  title: string
  description: string
  waLink: string
  waLabel?: string
  secundarioHref?: string
  secundarioLabel?: string
}

export function CtaSection({
  title,
  description,
  waLink,
  waLabel = 'Falar no WhatsApp',
  secundarioHref = '/seja-um-distribuidor/',
  secundarioLabel = 'Seja um distribuidor',
}: CtaSectionProps) {
  return (
    <section className="gradiente-marca py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-black text-balance text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-white px-9 py-4 font-bold text-petroleo shadow-lg transition-all hover:-translate-y-0.5 hover:bg-areia"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            {waLabel}
          </a>
          <Link
            href={secundarioHref}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/50 px-9 py-4 font-bold text-white transition-all hover:border-white hover:bg-white/10"
          >
            {secundarioLabel}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
