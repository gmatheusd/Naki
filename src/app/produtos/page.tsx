import type { Metadata } from 'next'
import { ArrowRight, FileText, MessageCircle } from 'lucide-react'
import { PRODUTOS, FICHA_TECNICA } from '@/config/produtos'
import { SELOS_RESUMO } from '@/config/certificacoes'
import { WA, SITE_URL } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { ProdutoCard } from '@/components/ProdutoCard'
import { SelosGrid } from '@/components/SelosGrid'
import { FichaTecnicaTabela } from '@/components/FichaTecnicaTabela'
import { CtaForm } from '@/components/CtaForm'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/config/schema'

const TITLE = 'Produtos'
const DESCRIPTION =
  'Linha Nakí Lava Louças Neutro: detergente vegano, biodegradável e com certificação Kosher, nas apresentações de 500 ml e galão de 5 litros. Alto poder desengordurante e baixa irritabilidade dérmica.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/produtos/' },
  openGraph: {
    title: `${TITLE} | Nakí`,
    description: DESCRIPTION,
    url: '/produtos/',
  },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Produtos', path: '/produtos/' },
]

/** ItemList ajuda o buscador a entender que a página é um catálogo de dois itens. */
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Linha Nakí Lava Louças Neutro',
  itemListElement: PRODUTOS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.nome,
    url: `${SITE_URL}/produtos/${p.slug}/`,
  })),
}

export default function ProdutosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: '/produtos/' }),
          itemListSchema,
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        etiqueta="Linha Lava Louças Neutro"
        titulo="Um produto, duas apresentações"
        subtitulo="A mesma engenharia química de precisão, embalada para o giro da gôndola e para o volume da cozinha profissional."
        faixa="ampla"
      />

      <main>
        {/* Cards dos SKUs */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {PRODUTOS.map((p, i) => (
                <ProdutoCard key={p.slug} produto={p} atraso={i * 110} />
              ))}
            </div>
          </div>
        </section>

        {/* Selos */}
        <section className="bg-offwhite py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-10 text-center">
              <h2 className="text-3xl font-black text-petroleo uppercase md:text-4xl">
                O que vem em toda embalagem
              </h2>
            </Revelar>
            <Revelar atraso={80}>
              <SelosGrid selos={SELOS_RESUMO} />
            </Revelar>
          </div>
        </section>

        {/* Ficha técnica comum */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-12 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Especificações
              </span>
              <h2 className="mt-3 text-3xl font-black text-petroleo uppercase md:text-4xl">
                Ficha técnica da linha
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Os dados abaixo valem para as duas apresentações. A diferença entre elas é
                de embalagem e volume, não de formulação.
              </p>
            </Revelar>

            <Revelar>
              <FichaTecnicaTabela />
            </Revelar>

            {/* Modo de uso */}
            <Revelar atraso={100} className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-menta/20 p-8">
                <h3 className="text-lg font-bold text-petroleo">Modo de uso</h3>
                <p className="mt-4 leading-relaxed text-slate-700">
                  {FICHA_TECNICA.modoDeUso}
                </p>
              </div>

              {/* A lacuna de dado vira caminho para o comercial, e não tabela vazia. */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-areia">
                  <FileText className="h-5 w-5 text-petroleo" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-petroleo">
                  Ficha técnica, FISPQ e dados logísticos
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Caixa master, EAN, peso, dimensões e paletização são enviados pelo
                  comercial conforme o perfil e o volume da operação, junto com a ficha
                  técnica completa e a FISPQ.
                </p>
                <a
                  href={WA.fichaTecnica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 font-bold text-petroleo"
                >
                  Solicitar documentação
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </Revelar>
          </div>
        </section>

        {/* Faixa de conversão para o varejo */}
        <section className="bg-petroleo py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
            <h2 className="text-2xl font-black text-balance text-white uppercase md:text-3xl">
              Quer a Nakí na sua gôndola?
            </h2>
            <p className="max-w-2xl text-white/85">
              Atendemos mercados, mercearias, food service e distribuidores. Fale com o
              comercial e receba as condições para o seu canal.
            </p>
            <a
              href={WA.mercado}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-petroleo transition-all hover:-translate-y-0.5 hover:bg-areia"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Falar com o comercial
            </a>
          </div>
        </section>

        <CtaForm
          etiqueta="Condições comerciais"
          titulo="Precisa de volume maior?"
          descricao="Se você distribui ou atende várias unidades, há condições específicas para operações de escala."
          waLink={WA.distribuidor}
          variante="distribuidor"
        />
      </main>
    </>
  )
}
