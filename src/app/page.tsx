import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Droplets,
  Leaf,
  Recycle,
  HandHeart,
  ShieldCheck,
  FlaskConical,
  Gauge,
  Store,
  UtensilsCrossed,
  Truck,
  Sparkles,
} from 'lucide-react'
import { PRODUTOS } from '@/config/produtos'
import { FAQ_GERAL } from '@/config/faq'
import { WA, EMPRESA } from '@/config/siteConfig'
import { CtaSection } from '@/components/CtaSection'
import { Revelar } from '@/components/Revelar'
import { RevelarLink } from '@/components/RevelarLink'
import { JsonLd } from '@/components/JsonLd'
import { faqSchema, produtoSchema } from '@/config/schema'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

/* Selos da linha. Fonte: PROD p.2–3 e INST p.3. */
const SELOS = [
  {
    icon: ShieldCheck,
    titulo: 'Certificação Kosher',
    texto: 'Aprovado para comercialização em mercearias e mercados kosher.',
  },
  {
    icon: Leaf,
    titulo: 'Vegano',
    texto: 'Sem ingredientes de origem animal e sem testes em animais.',
  },
  {
    icon: Recycle,
    titulo: 'Biodegradável',
    texto: 'Formulação rapidamente biodegradável, de baixo impacto ambiental.',
  },
  {
    icon: HandHeart,
    titulo: 'Baixa irritabilidade',
    texto: 'Livre de ácidos sulfônicos (LAS) e amidas, seguro para uso contínuo.',
  },
]

/* Tecnologia do produto. Fonte: PROD p.4. */
const TECNOLOGIA = [
  {
    icon: Droplets,
    titulo: 'Enxágue rápido',
    texto:
      'A espuma enxagua rapidamente sob a água. Reduz o tempo de torneira aberta e acelera o processo na pia, gerando redução direta de custos operacionais.',
  },
  {
    icon: Sparkles,
    titulo: 'Limpeza profunda',
    texto:
      'Atua com eficiência na remoção de gorduras e resíduos, inclusive em utensílios plásticos, reduzindo a necessidade de retrabalho.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Segurança e sustentabilidade',
    texto:
      'Composição vegana e biodegradável, livre de tensoativos agressivos. Preserva a integridade dermatológica da equipe e o meio ambiente.',
  },
  {
    icon: Gauge,
    titulo: 'Alto rendimento',
    texto:
      'A alta viscosidade proporciona melhor controle na aplicação, reduzindo desperdícios e aumentando o rendimento durante o uso.',
  },
]

/* Para quem a Nakí vende. Reflete o público real: varejo e mercearias. */
const PARA_QUEM = [
  {
    icon: Store,
    titulo: 'Mercados e mercearias',
    texto:
      'O frasco de 500 ml tem alto giro em gôndola e o apelo premium dos selos Vegano, Biodegradável e Kosher atende a um público exigente.',
  },
  {
    icon: UtensilsCrossed,
    titulo: 'Food service e cozinhas',
    texto:
      'O galão de 5 litros foi desenhado para operações que lavam em volume, com custo por lavagem menor e abastecimento de dispensers.',
  },
  {
    icon: Truck,
    titulo: 'Distribuidores',
    texto:
      'A super concentração entrega custo-benefício na ponta do lápis, com margens saudáveis e padronização rigorosa de lote a lote.',
  },
]

/* Pilares institucionais. Fonte: INST p.3 e p.5. */
const PILARES = [
  {
    titulo: 'Tecnologia de alta performance',
    texto:
      'Não acreditamos em limpeza baseada em esforço, mas em inteligência química. Desenvolvemos formulações que entregam eficiência superior, garantindo rendimento máximo.',
  },
  {
    titulo: 'Sustentabilidade inteligente',
    texto:
      'Nossas soluções são rapidamente biodegradáveis, minimizando o impacto ambiental e alinhando nossa produção às mais rigorosas exigências do mercado atual.',
  },
  {
    titulo: 'Essência vegana e ética',
    texto:
      'A excelência não precisa custar a natureza. Nossos produtos possuem selo vegano, refletindo nosso compromisso inegociável com a ética e o respeito aos animais.',
  },
  {
    titulo: 'Cuidado integrado',
    texto:
      'Nossa química atua de forma poderosa contra a sujidade, mas é gentil onde importa. Priorizamos formulações com baixa irritabilidade dérmica e segurança total.',
  },
]

export default function Home() {
  return (
    <>
      <JsonLd data={[faqSchema(FAQ_GERAL), ...PRODUTOS.map(produtoSchema)]} />

      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="relative overflow-hidden bg-petroleo">
          <Image
            src="/images/textura-bolhas-naki.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          {/* Véu para o texto ter contraste sobre a macrofotografia. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-petroleo via-petroleo/85 to-petroleo/40"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div>
              <span className="animate-surgir inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-menta uppercase backdrop-blur-md">
                <span className="animate-pulsar-lento h-2 w-2 rounded-full bg-menta" />
                Vegano · Biodegradável · Kosher
              </span>

              <h1
                className="animate-surgir mt-7 text-4xl leading-[1.05] font-black tracking-tight text-balance text-white uppercase sm:text-5xl lg:text-6xl"
                style={{ animationDelay: '120ms' }}
              >
                A evolução da limpeza, higiene &amp; conservação
              </h1>

              <p
                className="animate-surgir mt-7 max-w-xl border-l-4 border-menta pl-6 text-lg leading-relaxed text-white/90"
                style={{ animationDelay: '240ms' }}
              >
                Detergente lava louças neutro de{' '}
                <strong className="font-bold text-menta">alta performance</strong>, livre
                de ácidos sulfônicos e amidas. Alto poder desengordurante com baixíssima
                irritabilidade dérmica, para a gôndola e para a cozinha profissional.
              </p>

              <div
                className="animate-surgir mt-9 flex flex-col gap-4 sm:flex-row"
                style={{ animationDelay: '360ms' }}
              >
                <Link
                  href="/produtos/"
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-petroleo shadow-xl transition-all hover:-translate-y-0.5 hover:bg-areia"
                >
                  Conhecer a linha
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <a
                  href={WA.hero}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/40 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
                >
                  Falar com o comercial
                </a>
              </div>

              <p
                className="animate-surgir mt-8 text-xs text-white/70"
                style={{ animationDelay: '480ms' }}
              >
                Produto saneante notificado na ANVISA nº {EMPRESA.anvisa}
              </p>
            </div>

            {/* Packshots: os dois SKUs reais, recortados dos materiais da marca. */}
            <div
              className="animate-surgir relative flex items-end justify-center gap-2 sm:gap-6"
              style={{ animationDelay: '300ms' }}
            >
              <div
                className="animate-pulsar-lento absolute bottom-10 h-64 w-64 rounded-full bg-menta/30 blur-3xl"
                aria-hidden
              />
              <Image
                src="/images/naki-lava-loucas-neutro-500ml.webp"
                alt="Frasco de 500 ml do detergente lava louças neutro Nakí"
                width={339}
                height={1194}
                priority
                sizes="(max-width: 640px) 35vw, 200px"
                className="animate-flutuar relative h-[280px] w-auto drop-shadow-2xl sm:h-[380px] lg:h-[440px]"
              />
              <Image
                src="/images/naki-lava-loucas-neutro-5-litros.webp"
                alt="Galão de 5 litros do detergente lava louças neutro Nakí"
                width={740}
                height={1247}
                priority
                sizes="(max-width: 640px) 50vw, 300px"
                className="animate-flutuar-lento relative h-[240px] w-auto drop-shadow-2xl sm:h-[330px] lg:h-[380px]"
              />
            </div>
          </div>
        </section>

        {/* ─────────────────────── Selos ─────────────────────── */}
        <section className="border-b border-slate-100 bg-offwhite py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SELOS.map((s, i) => (
                <Revelar
                  key={s.titulo}
                  atraso={i * 80}
                  className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-areia">
                    <s.icon className="h-5 w-5 text-petroleo" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-bold text-petroleo">{s.titulo}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      {s.texto}
                    </span>
                  </span>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────── Produtos ─────────────────────── */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 text-center">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Linha Lava Louças Neutro
              </span>
              <h2 className="mt-3 text-4xl font-black text-balance text-petroleo uppercase md:text-5xl">
                Duas apresentações,{' '}
                <span className="texto-gradiente">a mesma fórmula</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
                Alto poder desengordurante, rendimento superior e máxima eficiência. Do
                frasco de gôndola ao galão da cozinha profissional.
              </p>
            </Revelar>

            <div className="grid gap-8 md:grid-cols-2">
              {PRODUTOS.map((p, i) => (
                <RevelarLink
                  key={p.slug}
                  href={`/produtos/${p.slug}/`}
                  atraso={i * 110}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-menta hover:shadow-2xl"
                >
                  <div className="relative flex h-72 items-center justify-center bg-gradient-to-b from-offwhite to-menta/25 p-8">
                    <Image
                      src={p.imagem}
                      alt={p.imagemAlt}
                      width={p.largura}
                      height={p.altura}
                      sizes="(max-width: 768px) 60vw, 300px"
                      className="h-full w-auto object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-5 right-5 rounded-full bg-petroleo px-4 py-1.5 text-xs font-bold text-white">
                      {p.volume}
                    </span>
                  </div>

                  <div className="flex flex-grow flex-col p-8">
                    <h3 className="text-xl font-bold text-petroleo">{p.nome}</h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
                      {p.resumo}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.selos.map((selo) => (
                        <li
                          key={selo}
                          className="rounded-full bg-menta/25 px-3 py-1 text-xs font-semibold text-petroleo"
                        >
                          {selo}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-petroleo">
                      Ver detalhes do produto
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </RevelarLink>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────── Tecnologia ─────────────────────── */}
        <section className="gradiente-marca py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-menta uppercase">
                Nossa tecnologia
              </span>
              <h2 className="mt-3 text-4xl font-black text-balance text-white uppercase md:text-5xl">
                Limpeza por inteligência química, não por esforço
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                Substituímos formulações convencionais e agressivas por soluções
                desenvolvidas a partir da engenharia química de precisão.
              </p>
            </Revelar>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TECNOLOGIA.map((t, i) => (
                <Revelar
                  key={t.titulo}
                  atraso={i * 90}
                  className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-areia">
                    <t.icon className="h-6 w-6 text-petroleo" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{t.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{t.texto}</p>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────── Para quem ─────────────────────── */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 text-center">
              <h2 className="text-4xl font-black text-balance text-petroleo uppercase md:text-5xl">
                Para quem a Nakí <span className="texto-gradiente">foi feita</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
                Da gôndola do mercado de bairro à cozinha que não pode parar.
              </p>
            </Revelar>

            <div className="grid gap-7 md:grid-cols-3">
              {PARA_QUEM.map((p, i) => (
                <Revelar
                  key={p.titulo}
                  atraso={i * 100}
                  className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-menta hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-petroleo">
                    <p.icon className="h-6 w-6 text-menta" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-petroleo">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.texto}</p>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── Kosher, o diferencial de venda ───────────────── */}
        <section className="bg-areia/40 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <Revelar>
              <span className="inline-flex items-center gap-2 rounded-full bg-petroleo px-4 py-1.5 text-xs font-bold tracking-wide text-menta uppercase">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Certificação Kosher
              </span>
              <h2 className="mt-6 text-4xl leading-tight font-black text-petroleo uppercase md:text-5xl">
                Um detergente que entra onde os outros não entram
              </h2>
              <p className="mt-6 leading-relaxed text-slate-700">
                A certificação Kosher abre a porta de mercearias e mercados que atendem à
                comunidade judaica, um público que confere o selo antes de colocar
                qualquer item no carrinho. Somada aos selos Vegano e Biodegradável, ela
                transforma o produto em argumento de gôndola, e não apenas em mais um
                detergente na prateleira.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Certificação Kosher nas duas apresentações, 500 ml e 5 litros.',
                  'Composição vegana, sem qualquer ingrediente de origem animal.',
                  'Rapidamente biodegradável, alinhado à demanda por consumo consciente.',
                  'pH neutro e fórmula livre de LAS e amidas.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-petroleo">
                      <ShieldCheck className="h-3 w-3 text-white" aria-hidden />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/certificacoes/"
                className="group mt-9 inline-flex items-center gap-2 font-bold text-petroleo"
              >
                Ver todas as certificações
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Revelar>

            <Revelar atraso={120} className="flex justify-center">
              <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-[3rem] bg-white p-10 shadow-2xl">
                <span
                  className="absolute inset-x-10 bottom-10 h-40 rounded-full bg-menta/30 blur-3xl"
                  aria-hidden
                />
                <Image
                  src="/images/naki-lava-loucas-neutro-5-litros.webp"
                  alt="Galão de 5 litros do detergente lava louças neutro Nakí, com selos Vegano, Biodegradável e Kosher"
                  width={740}
                  height={1247}
                  sizes="(max-width: 1024px) 70vw, 380px"
                  className="animate-flutuar relative h-full w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </Revelar>
          </div>
        </section>

        {/* ─────────────────────── Pilares ─────────────────────── */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Revelar className="mb-14 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                O DNA da excelência
              </span>
              <h2 className="mt-3 text-4xl font-black text-balance text-petroleo uppercase md:text-5xl">
                Nossos pilares
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                O que sustenta a nossa operação e garante a qualidade máxima das nossas
                entregas.
              </p>
            </Revelar>

            <div className="grid gap-6 md:grid-cols-2">
              {PILARES.map((p, i) => (
                <Revelar
                  key={p.titulo}
                  atraso={i * 90}
                  className="group rounded-3xl border border-slate-100 bg-offwhite p-8 transition-colors hover:bg-menta/15"
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

            <Revelar atraso={200} className="mt-10 text-center">
              <Link
                href="/sobre/"
                className="group inline-flex items-center gap-2 font-bold text-petroleo"
              >
                Conhecer a Nakí
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Revelar>
          </div>
        </section>

        {/* ─────────────────── Ficha técnica resumida ─────────────────── */}
        <section className="bg-petroleo py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <Revelar>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-menta">
                  <FlaskConical className="h-6 w-6 text-petroleo" aria-hidden />
                </span>
                <h2 className="mt-6 text-4xl font-black text-balance text-white uppercase md:text-5xl">
                  A ciência por trás da eficiência
                </h2>
                <p className="mt-6 leading-relaxed text-white/85">
                  O rigor da Nakí começa na seleção implacável de nossas matérias-primas e
                  parceiros. A formulação é totalmente livre de ácidos sulfônicos (LAS) e
                  amidas, o que garante excelente poder desengordurante aliado a
                  baixíssima irritabilidade dérmica para quem lava louça o dia inteiro.
                </p>
                <a
                  href={WA.fichaTecnica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 font-bold text-menta"
                >
                  Solicitar ficha técnica completa
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </Revelar>

              <Revelar atraso={120}>
                <dl className="grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2">
                  {[
                    ['pH', 'Neutro'],
                    ['Estado físico', 'Líquido viscoso'],
                    ['Aparência', 'Transparente / incolor'],
                    ['Validade', '24 meses'],
                    ['Livre de', 'LAS e amidas'],
                    ['Composição', 'Tensoativo aniônico, espessante, conservante e veículo'],
                  ].map(([termo, valor]) => (
                    <div key={termo} className="bg-petroleo p-6">
                      <dt className="text-xs font-bold tracking-widest text-menta uppercase">
                        {termo}
                      </dt>
                      <dd className="mt-2 font-semibold text-white">{valor}</dd>
                    </div>
                  ))}
                </dl>
              </Revelar>
            </div>
          </div>
        </section>

        {/* ─────────────────────── FAQ ─────────────────────── */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Revelar>
              <h2 className="text-center text-3xl font-black text-petroleo uppercase md:text-4xl">
                Perguntas frequentes
              </h2>
            </Revelar>
            <div className="mt-10 space-y-3">
              {FAQ_GERAL.slice(0, 5).map((f, i) => (
                <Revelar
                  key={f.q}
                  as="details"
                  atraso={i * 70}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-menta hover:shadow-lg"
                >
                  <summary className="cursor-pointer list-none font-bold text-petroleo marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {f.q}
                      <span className="mt-1 shrink-0 text-menta transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{f.a}</p>
                </Revelar>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/perguntas-frequentes/" className="font-bold text-petroleo">
                Ver todas as perguntas frequentes
              </Link>
            </div>
          </div>
        </section>

        <CtaSection
          title="Leve a Nakí para a sua operação"
          description="Fale com o comercial para receber condições, tabela de preços e informações logísticas conforme o perfil do seu negócio."
          waLink={WA.hero}
        />
      </main>
    </>
  )
}
