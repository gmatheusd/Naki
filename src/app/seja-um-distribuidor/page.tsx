import type { Metadata } from 'next'
import {
  TrendingUp,
  Award,
  BadgeCheck,
  MessageCircle,
  FileSpreadsheet,
  Truck,
  Handshake,
} from 'lucide-react'
import { VALOR_DISTRIBUIDOR } from '@/config/institucional'
import { FAQ_GERAL } from '@/config/faq'
import { WA, CONTACT } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { ContatoForm } from '@/components/ContatoForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema, faqSchema } from '@/config/schema'

const TITLE = 'Seja um distribuidor'
const DESCRIPTION =
  'Distribua a linha Nakí Lava Louças Neutro: produto premium com certificação Kosher, selo vegano e biodegradável, alto rendimento e margem saudável para mercados, mercearias e atacado.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'distribuidor de detergente',
    'detergente lava louças atacado',
    'revenda de saneantes',
    'detergente kosher para revenda',
  ],
  alternates: { canonical: '/seja-um-distribuidor/' },
  openGraph: {
    title: `${TITLE} | Nakí`,
    description: DESCRIPTION,
    url: '/seja-um-distribuidor/',
  },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Seja um distribuidor', path: '/seja-um-distribuidor/' },
]

const ICONES_VALOR = [TrendingUp, Award, BadgeCheck]

const PASSOS = [
  {
    titulo: 'Você fala com o comercial',
    texto:
      'Pelo formulário desta página ou direto no WhatsApp. Conte o perfil do negócio, a região que atende e o volume estimado.',
  },
  {
    titulo: 'Recebe a proposta completa',
    texto:
      'Tabela de preços, condições comerciais, caixa master, dados logísticos, ficha técnica e FISPQ, tudo conforme o seu canal.',
  },
  {
    titulo: 'Fecha o primeiro pedido',
    texto:
      'Definimos o mix entre o frasco de 500 ml, de alto giro em gôndola, e o galão de 5 litros, para operações que lavam em volume.',
  },
  {
    titulo: 'Reposição e acompanhamento',
    texto:
      'Padronização rigorosa de lote a lote e conformidade regulatória em cada entrega, com o comercial acompanhando o giro.',
  },
]

const RECEBE = [
  {
    icon: FileSpreadsheet,
    titulo: 'Tabela de preços e condições',
    texto: 'Valores por apresentação e condições de pagamento conforme o volume.',
  },
  {
    icon: Truck,
    titulo: 'Dados logísticos completos',
    texto: 'Caixa master, EAN, peso, dimensões e paletização para o seu planejamento.',
  },
  {
    icon: Handshake,
    titulo: 'Documentação técnica',
    texto: 'Ficha técnica, FISPQ e comprovação da notificação ANVISA.',
  },
]

const FAQ_COMERCIAL = FAQ_GERAL.filter((f) =>
  /revender|distribuir|diferença|Kosher/i.test(f.q),
)

export default function DistribuidorPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: '/seja-um-distribuidor/',
          }),
          faqSchema(FAQ_COMERCIAL),
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        etiqueta="Parcerias comerciais"
        titulo="Por que escolher a Nakí?"
        subtitulo="Entendemos que o mercado exige mais do que produtos: exige diferenciação, eficiência e confiança."
        faixa="densa"
      />

      <main>
        {/* Proposta de valor */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-7 md:grid-cols-3">
              {VALOR_DISTRIBUIDOR.map((v, i) => {
                const Icone = ICONES_VALOR[i]
                return (
                  <Revelar
                    key={v.titulo}
                    atraso={i * 100}
                    className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-menta hover:shadow-xl"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-petroleo">
                      <Icone className="h-6 w-6 text-menta" aria-hidden />
                    </span>
                    <h2 className="mt-5 text-lg font-bold text-petroleo">{v.titulo}</h2>
                    <p className="mt-3 leading-relaxed text-slate-600">{v.texto}</p>
                  </Revelar>
                )
              })}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="bg-petroleo py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-menta uppercase">
                Como funciona
              </span>
              <h2 className="mt-3 text-3xl font-black text-balance text-white uppercase md:text-4xl">
                Do primeiro contato ao primeiro pedido
              </h2>
            </Revelar>

            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PASSOS.map((p, i) => (
                <Revelar
                  key={p.titulo}
                  as="li"
                  atraso={i * 90}
                  className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm"
                >
                  <span className="text-3xl font-black text-menta">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{p.texto}</p>
                </Revelar>
              ))}
            </ol>
          </div>
        </section>

        {/* O que o comercial envia */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-black text-petroleo uppercase md:text-4xl">
                O que você recebe no primeiro contato
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Preço e logística não ficam publicados no site porque variam por canal e
                volume. O comercial envia o pacote fechado para o seu caso.
              </p>
            </Revelar>

            <div className="grid gap-6 md:grid-cols-3">
              {RECEBE.map((r, i) => (
                <Revelar
                  key={r.titulo}
                  atraso={i * 90}
                  className="rounded-3xl bg-offwhite p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-areia">
                    <r.icon className="h-5 w-5 text-petroleo" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-bold text-petroleo">{r.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.texto}</p>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="formulario" className="bg-areia/40 py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Revelar>
              <h2 className="text-3xl font-black text-petroleo uppercase md:text-4xl">
                Fale com o comercial
              </h2>
              <p className="mt-5 leading-relaxed text-slate-700">
                Preencha os campos ao lado e o WhatsApp abre com a sua mensagem já pronta,
                ou chame direto no número abaixo.
              </p>

              <a
                href={WA.distribuidor}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {CONTACT.phone}
              </a>

              <div className="mt-8 rounded-2xl bg-white p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong className="font-bold text-petroleo">Atendemos</strong> mercados
                  e supermercados, mercearias, food service, cozinhas profissionais,
                  distribuidores e atacado.
                </p>
              </div>
            </Revelar>

            <Revelar atraso={120} className="rounded-3xl bg-white p-8 shadow-lg">
              <ContatoForm variante="distribuidor" />
            </Revelar>
          </div>
        </section>

        {/* FAQ */}
        {FAQ_COMERCIAL.length > 0 && (
          <section className="py-20 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <Revelar>
                <h2 className="text-center text-3xl font-black text-petroleo uppercase md:text-4xl">
                  Dúvidas comerciais
                </h2>
              </Revelar>
              <Revelar atraso={80} className="mt-10">
                <FaqAccordion faqs={FAQ_COMERCIAL} />
              </Revelar>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
