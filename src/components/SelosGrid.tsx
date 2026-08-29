import { ShieldCheck, Leaf, Recycle, HandHeart, Stamp } from 'lucide-react'

const ICONES = {
  shield: ShieldCheck,
  leaf: Leaf,
  recycle: Recycle,
  hand: HandHeart,
  stamp: Stamp,
} as const

export type Selo = {
  icone: keyof typeof ICONES
  titulo: string
  texto: string
}

type SelosGridProps = {
  selos: readonly Selo[]
  /** 'claro' para fundo branco, 'escuro' para fundo petróleo. */
  variante?: 'claro' | 'escuro'
}

export function SelosGrid({ selos, variante = 'claro' }: SelosGridProps) {
  const escuro = variante === 'escuro'

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {selos.map((s) => {
        const Icone = ICONES[s.icone]
        return (
          <div
            key={s.titulo}
            className={
              escuro
                ? 'flex items-start gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm'
                : 'flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm'
            }
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-areia">
              <Icone className="h-5 w-5 text-petroleo" aria-hidden />
            </span>
            <span>
              <span
                className={`block font-bold ${escuro ? 'text-white' : 'text-petroleo'}`}
              >
                {s.titulo}
              </span>
              <span
                className={`mt-1 block text-sm leading-relaxed ${escuro ? 'text-white/80' : 'text-slate-600'}`}
              >
                {s.texto}
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}
