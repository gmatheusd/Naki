import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PRODUTOS } from '@/config/produtos'
import { PageHero } from '@/components/PageHero'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/config/schema'

const TITLE = 'Mapa do site'
const DESCRIPTION =
  'Todas as páginas do site da Nakí em um só lugar: produtos, certificações, segmentos de atuação, informações comerciais e contato.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/mapa-do-site/' },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Mapa do site', path: '/mapa-do-site/' },
]

/* Gerado a partir de PRODUTOS para não sair do ar quando um SKU for adicionado. */
const GRUPOS = [
  {
    titulo: 'Principais',
    links: [
      { href: '/', label: 'Início', descricao: 'A linha Nakí e seus diferenciais.' },
      {
        href: '/produtos/',
        label: 'Produtos',
        descricao: 'Catálogo da linha Lava Louças Neutro e ficha técnica.',
      },
      {
        href: '/certificacoes/',
        label: 'Certificações',
        descricao: 'Kosher, Vegano, Biodegradável e notificação ANVISA.',
      },
      {
        href: '/segmentos/',
        label: 'Segmentos de atuação',
        descricao: 'Onde a Nakí atua hoje e o que está em desenvolvimento.',
      },
    ],
  },
  {
    titulo: 'Produtos',
    links: PRODUTOS.map((p) => ({
      href: `/produtos/${p.slug}/`,
      label: p.nome,
      descricao: p.resumo,
    })),
  },
  {
    titulo: 'Comercial',
    links: [
      {
        href: '/seja-um-distribuidor/',
        label: 'Seja um distribuidor',
        descricao: 'Proposta de valor, como funciona e formulário comercial.',
      },
      {
        href: '/contato/',
        label: 'Contato',
        descricao: 'WhatsApp, e-mail e dados regulatórios.',
      },
    ],
  },
  {
    titulo: 'Institucional',
    links: [
      {
        href: '/sobre/',
        label: 'Sobre a Nakí',
        descricao: 'Quem somos, pilares e capacidade técnica.',
      },
      {
        href: '/perguntas-frequentes/',
        label: 'Perguntas frequentes',
        descricao: 'Dúvidas sobre produto, certificação e revenda.',
      },
      {
        href: '/politica-de-privacidade/',
        label: 'Política de Privacidade',
        descricao: 'Como tratamos dados neste site.',
      },
    ],
  },
]

export default function MapaDoSitePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: '/mapa-do-site/' }),
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        titulo="Mapa do site"
        subtitulo="Todas as páginas em um só lugar."
      />

      <main>
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl space-y-14 px-6">
            {GRUPOS.map((g, gi) => (
              <Revelar key={g.titulo} atraso={gi * 80}>
                <h2 className="border-l-4 border-menta pl-4 text-xl font-bold text-petroleo">
                  {g.titulo}
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group flex h-full items-start justify-between gap-3 rounded-2xl bg-offwhite p-6 transition-colors hover:bg-menta/20"
                      >
                        <span>
                          <span className="block font-bold text-petroleo">{l.label}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                            {l.descricao}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="mt-1 h-4 w-4 shrink-0 text-menta transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Revelar>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
