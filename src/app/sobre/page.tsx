import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FlaskConical, Building2, ShieldCheck, Package } from 'lucide-react'
import {
  QUEM_SOMOS,
  PILARES,
  CAPACIDADE_TECNICA,
  TAGLINE,
} from '@/config/institucional'
import { EMPRESA, WA } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { CtaForm } from '@/components/CtaForm'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/config/schema'

const TITLE = 'Sobre a Nakí'
const DESCRIPTION =
  'A Nakí é uma marca de produtos premium de limpeza, higiene e conservação, com composição vegana, biodegradável e certificação Kosher. Conheça os pilares e a capacidade técnica por trás da linha.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/sobre/' },
  openGraph: {
    title: `${TITLE} | Nakí`,
    description: DESCRIPTION,
    url: '/sobre/',
  },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre/' },
]

const PROXIMOS = [
  {
    icon: Package,
    href: '/produtos/',
    label: 'Produtos',
    descricao: 'A linha Lava Louças Neutro, nas apresentações de 500 ml e 5 litros.',
  },
  {
    icon: ShieldCheck,
    href: '/certificacoes/',
    label: 'Certificações',
    descricao: 'Kosher, Vegano, Biodegradável e notificação ANVISA, uma a uma.',
  },
  {
    icon: Building2,
    href: '/seja-um-distribuidor/',
    label: 'Seja um distribuidor',
    descricao: 'Margem, diferenciação e consistência para quem revende.',
  },
]

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: '/sobre/' }),
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        etiqueta="Quem somos"
        titulo={TAGLINE}
        subtitulo="Alta performance, sustentabilidade e inovação em cada solução."
        faixa="ampla"
      />

      <main>
        {/* Quem somos + packshots */}
        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Revelar>
              <h2 className="text-3xl font-black text-petroleo uppercase md:text-4xl">
                A evolução do cuidado
              </h2>
              {QUEM_SOMOS.map((p) => (
                <p key={p} className="mt-5 text-lg leading-relaxed text-slate-700">
                  {p}
                </p>
              ))}

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  ['2', 'apresentações na linha'],
                  ['24', 'meses de validade'],
                  ['0', 'LAS e amidas na fórmula'],
                ].map(([numero, rotulo]) => (
                  <div key={rotulo} className="rounded-2xl bg-offwhite p-5">
                    <span className="block text-3xl font-black text-menta">{numero}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-600">
                      {rotulo}
                    </span>
                  </div>
                ))}
              </div>
            </Revelar>

            <Revelar atraso={120} className="flex justify-center">
              <div className="relative flex w-full max-w-md items-end justify-center gap-4 rounded-[3rem] bg-gradient-to-b from-offwhite to-menta/30 p-10">
                <span
                  className="absolute inset-x-10 bottom-10 h-40 rounded-full bg-menta/40 blur-3xl"
                  aria-hidden
                />
                <Image
                  src="/images/naki-lava-loucas-neutro-500ml.webp"
                  alt="Frasco de 500 ml do detergente lava louças neutro Nakí"
                  width={339}
                  height={1194}
                  sizes="(max-width: 1024px) 30vw, 150px"
                  className="animate-flutuar relative h-[300px] w-auto object-contain drop-shadow-2xl"
                />
                <Image
                  src="/images/naki-lava-loucas-neutro-5-litros.webp"
                  alt="Galão de 5 litros do detergente lava louças neutro Nakí"
                  width={740}
                  height={1247}
                  sizes="(max-width: 1024px) 45vw, 220px"
                  className="animate-flutuar-lento relative h-[250px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </Revelar>
          </div>
        </section>

        {/* Pilares */}
        <section className="bg-offwhite py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                O DNA da excelência
              </span>
              <h2 className="mt-3 text-3xl font-black text-petroleo uppercase md:text-4xl">
                Nossos pilares
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                O que sustenta a operação e garante a qualidade máxima das entregas.
              </p>
            </Revelar>

            <div className="grid gap-6 md:grid-cols-2">
              {PILARES.map((p, i) => (
                <Revelar
                  key={p.titulo}
                  atraso={i * 90}
                  className="rounded-3xl bg-white p-8 shadow-sm transition-colors hover:bg-menta/15"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-black text-menta">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-bold text-petroleo">{p.titulo}</h3>
                  </span>
                  <p className="mt-4 leading-relaxed text-slate-600">{p.texto}</p>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Capacidade técnica */}
        <section className="bg-petroleo py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 max-w-3xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-menta">
                <FlaskConical className="h-6 w-6 text-petroleo" aria-hidden />
              </span>
              <h2 className="mt-6 text-3xl font-black text-balance text-white uppercase md:text-4xl">
                A ciência por trás da eficiência
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                {CAPACIDADE_TECNICA.intro}
              </p>
            </Revelar>

            <div className="grid gap-6 md:grid-cols-3">
              {CAPACIDADE_TECNICA.itens.map((item, i) => (
                <Revelar
                  key={item.titulo}
                  atraso={i * 90}
                  className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-bold text-menta">{item.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    {item.texto}
                  </p>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Dados da empresa */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Revelar className="mb-10">
              <h2 className="text-2xl font-black text-petroleo uppercase md:text-3xl">
                Dados da empresa
              </h2>
            </Revelar>
            <Revelar atraso={80}>
              <dl className="grid gap-px overflow-hidden rounded-3xl bg-slate-100 sm:grid-cols-2">
                {[
                  ['Razão social', EMPRESA.razaoSocial],
                  ['CNPJ', EMPRESA.cnpj],
                  ['Notificação ANVISA', `Saneante notificado nº ${EMPRESA.anvisa}`],
                  ['Emergência (CEATOX)', EMPRESA.ceatox],
                ].map(([termo, valor]) => (
                  <div key={termo} className="bg-white p-6">
                    <dt className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      {termo}
                    </dt>
                    <dd className="mt-2 font-semibold text-petroleo">{valor}</dd>
                  </div>
                ))}
              </dl>
            </Revelar>
          </div>
        </section>

        {/* Próximos passos */}
        <section className="bg-offwhite py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-10 text-center">
              <h2 className="text-2xl font-black text-petroleo uppercase md:text-3xl">
                Continue por aqui
              </h2>
            </Revelar>
            <div className="grid gap-6 md:grid-cols-3">
              {PROXIMOS.map((p, i) => (
                <Revelar key={p.href} atraso={i * 90}>
                  <Link
                    href={p.href}
                    className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-petroleo">
                      <p.icon className="h-5 w-5 text-menta" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-petroleo">{p.label}</h3>
                    <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                      {p.descricao}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-petroleo">
                      Acessar
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        <CtaForm
          titulo="Vamos conversar sobre a sua operação?"
          descricao="Conte o perfil do seu negócio e o comercial responde com tudo o que você precisa para começar."
          waLink={WA.hero}
        />
      </main>
    </>
  )
}
