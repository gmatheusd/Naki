import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheck,
  Leaf,
  Recycle,
  HandHeart,
  Stamp,
  ArrowRight,
  Store,
} from 'lucide-react'
import { CERTIFICACOES } from '@/config/certificacoes'
import { FAQ_GERAL } from '@/config/faq'
import { WA } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaSection } from '@/components/CtaSection'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema, faqSchema } from '@/config/schema'

const TITLE = 'Certificações'
const DESCRIPTION =
  'Certificação Kosher, selo Vegano, formulação biodegradável e notificação ANVISA. Conheça as certificações da linha Nakí Lava Louças Neutro e o que cada uma garante para o seu ponto de venda.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'detergente kosher',
    'produtos de limpeza kosher',
    'detergente vegano certificado',
    'detergente biodegradável',
    'saneante notificado ANVISA',
  ],
  alternates: { canonical: '/certificacoes/' },
  openGraph: {
    title: `${TITLE} | Nakí`,
    description: DESCRIPTION,
    url: '/certificacoes/',
  },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Certificações', path: '/certificacoes/' },
]

const ICONES = {
  shield: ShieldCheck,
  leaf: Leaf,
  recycle: Recycle,
  hand: HandHeart,
  stamp: Stamp,
} as const

const FAQ_CERTIFICACAO = FAQ_GERAL.filter((f) =>
  /Kosher|LAS|ANVISA/i.test(f.q),
)

export default function CertificacoesPage() {
  const [destaque, ...demais] = CERTIFICACOES

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: '/certificacoes/',
          }),
          faqSchema(FAQ_CERTIFICACAO),
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        etiqueta="Conformidade e selos"
        titulo="Certificações que abrem canal de venda"
        subtitulo="Não são adesivos no rótulo. Cada selo da linha Nakí decide em qual prateleira o produto pode estar."
        faixa="densa"
      />

      <main>
        {/* Kosher, o diferencial que define o público da marca */}
        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Revelar>
              <span className="inline-flex items-center gap-2 rounded-full bg-petroleo px-4 py-1.5 text-xs font-bold tracking-wide text-menta uppercase">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                {destaque.etiqueta}
              </span>
              <h2 className="mt-6 text-4xl leading-tight font-black text-petroleo uppercase md:text-5xl">
                {destaque.titulo}
              </h2>
              {/* Menta sobre branco não passa em contraste; o tom da marca aqui
                  é o petróleo com peso menor. */}
              <p className="mt-4 text-lg font-semibold text-petroleo/80">
                {destaque.chamada}
              </p>
              {destaque.texto.map((p) => (
                <p key={p} className="mt-5 leading-relaxed text-slate-700">
                  {p}
                </p>
              ))}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA.kosher}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-petroleo px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-petroleo-escuro"
                >
                  Falar sobre a certificação
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
                <Link
                  href="/produtos/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-8 py-4 font-bold text-petroleo transition-all hover:border-petroleo"
                >
                  Ver os produtos
                </Link>
              </div>
            </Revelar>

            <Revelar atraso={120} className="flex justify-center">
              <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-[3rem] bg-gradient-to-b from-offwhite to-menta/30 p-10 shadow-xl">
                <span
                  className="absolute inset-x-10 bottom-10 h-40 rounded-full bg-menta/40 blur-3xl"
                  aria-hidden
                />
                <Image
                  src="/images/naki-lava-loucas-neutro-5-litros.webp"
                  alt="Galão de 5 litros do detergente Nakí, com os selos Vegano, Biodegradável e baixa irritabilidade impressos no rótulo"
                  width={740}
                  height={1247}
                  priority
                  sizes="(max-width: 1024px) 70vw, 380px"
                  className="animate-flutuar relative h-full w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </Revelar>
          </div>
        </section>

        {/* Por que o selo importa no varejo kosher */}
        <section className="bg-areia/40 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <Revelar className="rounded-3xl bg-white p-10 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-petroleo">
                <Store className="h-6 w-6 text-menta" aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-black text-petroleo uppercase md:text-3xl">
                O que isso muda para o lojista
              </h2>
              <p className="mt-5 leading-relaxed text-slate-700">
                Em mercearias e mercados que atendem à comunidade judaica, a certificação
                não é diferencial de marketing: é critério de entrada. O comprador confere
                o selo antes de abrir espaço na prateleira, e um detergente sem
                certificação simplesmente não é avaliado.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                Para quem já atende esse público, a Nakí resolve uma categoria inteira com
                um produto de posicionamento premium. Para quem quer entrar nele, é uma
                porta que a maioria das marcas de detergente não tem.
              </p>
            </Revelar>
          </div>
        </section>

        {/* Demais certificações */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 max-w-3xl">
              <h2 className="text-3xl font-black text-petroleo uppercase md:text-4xl">
                As outras garantias da linha
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Composição, sustentabilidade e conformidade regulatória, cada uma com
                efeito próprio na decisão de compra.
              </p>
            </Revelar>

            <div className="grid gap-7 md:grid-cols-2">
              {demais.map((c, i) => {
                const Icone = ICONES[c.icone]
                return (
                  <Revelar
                    key={c.slug}
                    atraso={i * 90}
                    className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-menta hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-areia">
                        <Icone className="h-6 w-6 text-petroleo" aria-hidden />
                      </span>
                      <span className="rounded-full bg-menta/25 px-3 py-1 text-xs font-semibold text-petroleo">
                        {c.etiqueta}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-petroleo">{c.titulo}</h3>
                    <p className="mt-2 font-semibold text-slate-500">{c.chamada}</p>
                    {c.texto.map((p) => (
                      <p key={p} className="mt-4 leading-relaxed text-slate-600">
                        {p}
                      </p>
                    ))}
                  </Revelar>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {FAQ_CERTIFICACAO.length > 0 && (
          <section className="bg-offwhite py-20 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <Revelar>
                <h2 className="text-center text-3xl font-black text-petroleo uppercase md:text-4xl">
                  Dúvidas sobre certificação
                </h2>
              </Revelar>
              <Revelar atraso={80} className="mt-10">
                <FaqAccordion faqs={FAQ_CERTIFICACAO} />
              </Revelar>
            </div>
          </section>
        )}

        <CtaSection
          title="Sua loja atende o público kosher?"
          description="Fale com o comercial e receba as condições para levar a linha Nakí ao seu ponto de venda."
          waLink={WA.kosher}
        />
      </main>
    </>
  )
}
