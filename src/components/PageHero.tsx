import Image from 'next/image'
import { Breadcrumbs, type Crumb } from '@/components/Breadcrumbs'

type PageHeroProps = {
  titulo: string
  subtitulo?: string
  crumbs: Crumb[]
  /**
   * Faixa de bolhas ao fundo. As três variantes são recortes de regiões
   * diferentes da mesma macrofotografia da marca (ver scripts/otimizar-imagens.mjs),
   * o que dá uma imagem própria a cada página sem foto nova.
   */
  faixa?: 'ampla' | 'densa' | 'suave'
  /** Etiqueta curta acima do título. */
  etiqueta?: string
}

export function PageHero({ titulo, subtitulo, crumbs, faixa, etiqueta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-petroleo">
      {faixa && (
        <>
          <Image
            src={`/images/faixa-bolhas-${faixa}.webp`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-petroleo via-petroleo/90 to-petroleo/55"
            aria-hidden
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
        {/* O Breadcrumbs padrão é escuro sobre claro; aqui vai sobre o petróleo. */}
        <div className="[&_a]:text-menta [&_a:hover]:text-white [&_li]:text-menta/70 [&_span[aria-current]]:text-white">
          <Breadcrumbs items={crumbs} />
        </div>

        {etiqueta && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-menta uppercase backdrop-blur-md">
            {etiqueta}
          </span>
        )}

        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] font-black tracking-tight text-balance text-white uppercase md:text-5xl lg:text-6xl">
          {titulo}
        </h1>

        {subtitulo && (
          <p className="mt-6 max-w-2xl border-l-4 border-menta pl-6 text-lg leading-relaxed text-white/85">
            {subtitulo}
          </p>
        )}
      </div>
    </section>
  )
}
