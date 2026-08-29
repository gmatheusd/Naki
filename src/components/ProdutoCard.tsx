import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Produto } from '@/config/produtos'
import { RevelarLink } from '@/components/RevelarLink'

type ProdutoCardProps = {
  produto: Produto
  /** Atraso em ms, para escalonar itens de uma mesma grade. */
  atraso?: number
}

export function ProdutoCard({ produto: p, atraso = 0 }: ProdutoCardProps) {
  return (
    <RevelarLink
      href={`/produtos/${p.slug}/`}
      atraso={atraso}
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
        <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">{p.resumo}</p>

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
  )
}
