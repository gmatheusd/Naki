import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sparkles,
  Shirt,
  HandHeart,
  Factory,
  Store,
  UtensilsCrossed,
  Truck,
  ArrowRight,
  Clock,
} from 'lucide-react'
import { SEGMENTOS, CANAIS } from '@/config/segmentos'
import { WA } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { CtaForm } from '@/components/CtaForm'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/config/schema'

const TITLE = 'Segmentos de atuação'
const DESCRIPTION =
  'Onde a Nakí atua: saneantes premium com a linha Lava Louças Neutro disponível hoje, além de conservação têxtil, higiene pessoal e limpeza industrial em desenvolvimento.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/segmentos/' },
  openGraph: {
    title: `${TITLE} | Nakí`,
    description: DESCRIPTION,
    url: '/segmentos/',
  },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Segmentos', path: '/segmentos/' },
]

const ICONES_SEGMENTO = {
  sparkles: Sparkles,
  shirt: Shirt,
  hand: HandHeart,
  factory: Factory,
} as const

const ICONES_CANAL = {
  store: Store,
  utensils: UtensilsCrossed,
  truck: Truck,
} as const

export default function SegmentosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: '/segmentos/' }),
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        etiqueta="Onde a evolução acontece"
        titulo="Segmentos de atuação"
        subtitulo="A Nakí foi projetada para revolucionar múltiplas frentes. Uma já está na prateleira; as outras estão em desenvolvimento."
        faixa="suave"
      />

      <main>
        {/* Os 4 segmentos, com status explícito */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-7 md:grid-cols-2">
              {SEGMENTOS.map((s, i) => {
                const Icone = ICONES_SEGMENTO[s.icone]
                const disponivel = s.status === 'disponivel'

                return (
                  <Revelar
                    key={s.slug}
                    atraso={i * 90}
                    className={
                      disponivel
                        ? 'flex flex-col rounded-3xl border-2 border-petroleo bg-white p-8 shadow-lg'
                        : 'flex flex-col rounded-3xl border border-slate-200 bg-offwhite p-8'
                    }
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          disponivel ? 'bg-petroleo' : 'bg-slate-200'
                        }`}
                      >
                        <Icone
                          className={`h-6 w-6 ${disponivel ? 'text-menta' : 'text-slate-500'}`}
                          aria-hidden
                        />
                      </span>

                      {disponivel ? (
                        <span className="rounded-full bg-menta px-3 py-1 text-xs font-bold text-petroleo uppercase">
                          Disponível
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-600 uppercase">
                          <Clock className="h-3 w-3" aria-hidden />
                          Em desenvolvimento
                        </span>
                      )}
                    </div>

                    <h2
                      className={`mt-6 text-xl font-bold ${
                        disponivel ? 'text-petroleo' : 'text-slate-600'
                      }`}
                    >
                      {s.titulo}
                    </h2>
                    <p className="mt-3 flex-grow leading-relaxed text-slate-600">
                      {s.descricao}
                    </p>

                    {disponivel && s.href ? (
                      <Link
                        href={s.href}
                        className="group mt-6 inline-flex items-center gap-2 font-bold text-petroleo"
                      >
                        Ver os produtos desta linha
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                    ) : (
                      <a
                        href={WA.segmentos}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-petroleo"
                      >
                        Quero ser avisado do lançamento
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    )}
                  </Revelar>
                )
              })}
            </div>

            <Revelar atraso={200} className="mt-10">
              <p className="rounded-2xl bg-areia/40 p-6 text-sm leading-relaxed text-slate-700">
                <strong className="font-bold text-petroleo">Transparência:</strong> hoje a
                Nakí tem produto lançado apenas em Limpeza e Saneantes Premium. Os demais
                segmentos são frentes de desenvolvimento e não estão disponíveis para
                compra ou distribuição.
              </p>
            </Revelar>
          </div>
        </section>

        {/* Canais atendidos */}
        <section className="bg-petroleo py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-menta uppercase">
                Canais atendidos
              </span>
              <h2 className="mt-3 text-3xl font-black text-balance text-white uppercase md:text-4xl">
                Para quem a Nakí vende hoje
              </h2>
            </Revelar>

            <div className="grid gap-6 md:grid-cols-3">
              {CANAIS.map((c, i) => {
                const Icone = ICONES_CANAL[c.icone]
                return (
                  <Revelar
                    key={c.titulo}
                    atraso={i * 90}
                    className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-areia">
                      <Icone className="h-6 w-6 text-petroleo" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-white">{c.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      {c.texto}
                    </p>
                  </Revelar>
                )
              })}
            </div>
          </div>
        </section>

        <CtaForm
          titulo="Seu segmento está aqui?"
          descricao="Conte o perfil da sua operação e o comercial responde com as condições da linha disponível hoje."
          waLink={WA.hero}
        />
      </main>
    </>
  )
}
