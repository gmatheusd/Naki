import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  MessageCircle,
  Package,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react'
import { PRODUTOS, findProduto, FICHA_TECNICA } from '@/config/produtos'
import { SEGURANCA } from '@/config/institucional'
import { FAQ_GERAL } from '@/config/faq'
import { WA, EMPRESA } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { ProdutoCard } from '@/components/ProdutoCard'
import { FichaTecnicaTabela } from '@/components/FichaTecnicaTabela'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaForm } from '@/components/CtaForm'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, produtoSchema, faqSchema } from '@/config/schema'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PRODUTOS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const produto = findProduto(slug)
  if (!produto) return {}

  return {
    title: produto.metaTitle,
    description: produto.metaDescription,
    keywords: produto.keywords,
    alternates: { canonical: `/produtos/${produto.slug}/` },
    openGraph: {
      title: `${produto.metaTitle} | Nakí`,
      description: produto.metaDescription,
      url: `/produtos/${produto.slug}/`,
      images: [{ url: produto.imagem, alt: produto.imagemAlt }],
    },
  }
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params
  const produto = findProduto(slug)
  if (!produto) notFound()

  const outro = PRODUTOS.find((p) => p.slug !== produto.slug)

  const crumbs = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos/' },
    { name: produto.nomeCurto, path: `/produtos/${produto.slug}/` },
  ]

  /* FAQ da página: as perguntas gerais que tocam produto e certificação.
     O FAQPage exige que a resposta esteja visível, e o FaqAccordion garante isso. */
  const faqs = FAQ_GERAL.filter((f) =>
    /Kosher|500 ml|LAS|ANVISA|validade|mãos/i.test(f.q),
  )

  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(crumbs), produtoSchema(produto), faqSchema(faqs)]}
      />

      <PageHero
        crumbs={crumbs}
        etiqueta={produto.apresentacao}
        titulo={produto.nome}
        subtitulo={produto.resumo}
        faixa="densa"
      />

      <main>
        {/* Packshot + argumento principal */}
        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Revelar className="flex justify-center">
              <div className="relative flex w-full max-w-md items-center justify-center rounded-[3rem] bg-gradient-to-b from-offwhite to-menta/30 p-12">
                <span
                  className="absolute inset-x-10 bottom-12 h-40 rounded-full bg-menta/40 blur-3xl"
                  aria-hidden
                />
                <Image
                  src={produto.imagem}
                  alt={produto.imagemAlt}
                  width={produto.largura}
                  height={produto.altura}
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="relative h-[420px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </Revelar>

            <Revelar atraso={100}>
              <p className="text-lg leading-relaxed text-slate-700">
                {produto.descricao}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {produto.selos.map((selo) => (
                  <li
                    key={selo}
                    className="rounded-full bg-menta/25 px-4 py-1.5 text-sm font-semibold text-petroleo"
                  >
                    {selo}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-5">
                {produto.destaques.map((d) => (
                  <div key={d.titulo} className="border-l-4 border-menta pl-5">
                    <h2 className="font-bold text-petroleo">{d.titulo}</h2>
                    <p className="mt-1 leading-relaxed text-slate-600">{d.texto}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-areia/40 p-6">
                <h2 className="flex items-center gap-2 font-bold text-petroleo">
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Vantagens do produto
                </h2>
                <p className="mt-3 leading-relaxed text-slate-700">{produto.vantagens}</p>
              </div>

              <a
                href={WA[produto.waLink]}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-petroleo px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-petroleo-escuro"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Pedir condições deste produto
              </a>
            </Revelar>
          </div>
        </section>

        {/* Indicado para */}
        <section className="bg-offwhite py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-petroleo">
                <Users className="h-5 w-5 text-menta" aria-hidden />
              </span>
              <h2 className="text-2xl font-black text-petroleo uppercase">
                Indicado para
              </h2>
            </Revelar>
            <div className="grid gap-4 sm:grid-cols-3">
              {produto.publico.map((p, i) => (
                <Revelar
                  key={p}
                  atraso={i * 80}
                  className="rounded-2xl bg-white p-6 font-semibold text-petroleo shadow-sm"
                >
                  {p}
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Ficha técnica */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-12 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Especificações
              </span>
              <h2 className="mt-3 text-3xl font-black text-petroleo uppercase md:text-4xl">
                Ficha técnica
              </h2>
            </Revelar>

            <Revelar>
              <FichaTecnicaTabela apresentacao={produto.apresentacao} />
            </Revelar>

            <Revelar atraso={100} className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-menta/20 p-8">
                <h3 className="text-lg font-bold text-petroleo">Modo de uso</h3>
                <p className="mt-4 leading-relaxed text-slate-700">
                  {FICHA_TECNICA.modoDeUso}
                </p>
              </div>

              {/*
                Todos os campos de `comercial` estão null enquanto a Nakí não
                fornece os dados. Em vez de tabela vazia, o bloco vira caminho
                para o comercial, que é quem tem a informação hoje.
              */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-areia">
                  <Package className="h-5 w-5 text-petroleo" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-petroleo">
                  Informações logísticas
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Caixa master, EAN, peso bruto, dimensões e paletização deste
                  {' '}{produto.apresentacao.toLowerCase()} são enviados pelo comercial de
                  acordo com o volume e o canal de venda.
                </p>
                <a
                  href={WA.logistica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 font-bold text-petroleo"
                >
                  Solicitar dados logísticos
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </Revelar>
          </div>
        </section>

        {/* Segurança */}
        <section className="bg-petroleo py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-10 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-areia">
                <ShieldAlert className="h-5 w-5 text-petroleo" aria-hidden />
              </span>
              <h2 className="text-2xl font-black text-white uppercase md:text-3xl">
                Precauções e segurança
              </h2>
            </Revelar>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['Conservação', SEGURANCA.conservacao],
                ['Prevenção', SEGURANCA.prevencao],
                ['Primeiros socorros', SEGURANCA.primeirosSocorros],
              ].map(([titulo, texto], i) => (
                <Revelar
                  key={titulo}
                  atraso={i * 90}
                  className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm"
                >
                  <h3 className="font-bold text-menta">{titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{texto}</p>
                </Revelar>
              ))}
            </div>

            <Revelar atraso={200} className="mt-8 rounded-2xl bg-white/10 p-6 text-sm text-white/80">
              <p>
                Centro de Assistência Toxicológica (CEATOX):{' '}
                <a href={EMPRESA.ceatoxHref} className="font-bold text-menta">
                  {EMPRESA.ceatox}
                </a>{' '}
                · Produto saneante notificado na ANVISA nº {EMPRESA.anvisa} ·
                Comercializado por {EMPRESA.razaoSocial}, CNPJ {EMPRESA.cnpj}.
              </p>
            </Revelar>
          </div>
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="py-20 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <Revelar>
                <h2 className="text-center text-3xl font-black text-petroleo uppercase md:text-4xl">
                  Dúvidas sobre este produto
                </h2>
              </Revelar>
              <Revelar atraso={80} className="mt-10">
                <FaqAccordion faqs={faqs} />
              </Revelar>
            </div>
          </section>
        )}

        {/* Outro formato */}
        {outro && (
          <section className="bg-offwhite py-20">
            <div className="mx-auto max-w-3xl px-6">
              <Revelar className="mb-10 text-center">
                <h2 className="text-2xl font-black text-petroleo uppercase md:text-3xl">
                  Conheça a outra apresentação
                </h2>
              </Revelar>
              <ProdutoCard produto={outro} />
            </div>
          </section>
        )}

        <CtaForm
          titulo={`Peça condições do ${produto.apresentacao.toLowerCase()}`}
          descricao="Conte o perfil do seu negócio e o comercial responde com preço, logística e documentação deste produto."
          waLink={WA[produto.waLink]}
        />
      </main>
    </>
  )
}
