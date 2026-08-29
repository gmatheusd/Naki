import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FAQ_GERAL } from '@/config/faq'
import { WA } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaSection } from '@/components/CtaSection'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema, faqSchema } from '@/config/schema'

const TITLE = 'Perguntas frequentes'
const DESCRIPTION =
  'Dúvidas sobre o detergente Nakí: certificação Kosher, diferença entre o frasco de 500 ml e o galão de 5 litros, composição sem LAS e amidas, validade, notificação ANVISA e como revender.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/perguntas-frequentes/' },
  openGraph: {
    title: `${TITLE} | Nakí`,
    description: DESCRIPTION,
    url: '/perguntas-frequentes/',
  },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Perguntas frequentes', path: '/perguntas-frequentes/' },
]

const ATALHOS = [
  { href: '/produtos/', label: 'Ver a linha de produtos' },
  { href: '/certificacoes/', label: 'Entender as certificações' },
  { href: '/seja-um-distribuidor/', label: 'Condições para revenda' },
]

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: '/perguntas-frequentes/',
          }),
          faqSchema(FAQ_GERAL),
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        etiqueta="Tire suas dúvidas"
        titulo="Perguntas frequentes"
        subtitulo="As dúvidas que mais chegam ao comercial, respondidas. Se a sua não estiver aqui, chame no WhatsApp."
        faixa="suave"
      />

      <main>
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Revelar>
              <FaqAccordion faqs={FAQ_GERAL} />
            </Revelar>

            <Revelar atraso={120} className="mt-12">
              <h2 className="text-lg font-bold text-petroleo">Atalhos úteis</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {ATALHOS.map((a) => (
                  <li key={a.href}>
                    <Link
                      href={a.href}
                      className="group flex h-full items-center justify-between gap-2 rounded-2xl bg-offwhite p-5 text-sm font-bold text-petroleo transition-colors hover:bg-menta/25"
                    >
                      {a.label}
                      <ArrowRight
                        className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Revelar>
          </div>
        </section>

        <CtaSection
          title="Ficou alguma dúvida?"
          description="Chame o comercial no WhatsApp. Respondemos sobre produto, certificação, condições e logística."
          waLink={WA.contato}
        />
      </main>
    </>
  )
}
