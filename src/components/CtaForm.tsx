import { Check, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/config/siteConfig'
import type { VarianteContato } from '@/lib/whatsapp'
import { FormRapido } from '@/components/FormRapido'
import { Revelar } from '@/components/Revelar'

type CtaFormProps = {
  titulo: string
  descricao: string
  /** Link de WhatsApp do contexto da página, para quem prefere ir direto. */
  waLink: string
  /** Etiqueta curta acima do título. */
  etiqueta?: string
  /** O que a pessoa recebe ao entrar em contato. Três itens curtos. */
  bullets?: string[]
  variante?: VarianteContato
  rotuloBotao?: string
}

const PADRAO_BULLETS = ['Tabela de preços', 'Dados logísticos', 'Ficha técnica e FISPQ']

/**
 * Bloco de conversão do fim das páginas.
 *
 * Duas correções em relação às versões anteriores. A primeira foi de cor: o
 * CTA original era uma faixa verde em degradê logo acima do rodapé, também
 * verde, e os dois blocos escuros colados viravam uma mancha só; por isso o
 * fundo aqui é claro. A segunda foi de peso: a versão em duas colunas com o
 * formulário completo ficou alta e lenta para um fim de página, então o texto
 * subiu para o topo, centralizado, e a captação virou uma linha só.
 */
export function CtaForm({
  titulo,
  descricao,
  waLink,
  etiqueta = 'Fale com o comercial',
  bullets = PADRAO_BULLETS,
  variante = 'geral',
  rotuloBotao,
}: CtaFormProps) {
  return (
    <section className="relative overflow-hidden bg-offwhite py-16 md:py-20">
      {/* Halos, só para o bloco claro não ficar chapado. */}
      <div
        className="pointer-events-none absolute -top-28 -right-28 h-[360px] w-[360px] rounded-full bg-menta/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-28 h-[320px] w-[320px] rounded-full bg-areia/50 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <Revelar className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-petroleo px-4 py-1.5 text-xs font-bold tracking-wide text-menta uppercase">
            {etiqueta}
          </span>

          <h2 className="mt-5 text-3xl leading-tight font-black text-balance text-petroleo uppercase md:text-4xl">
            {titulo}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {descricao}
          </p>

          {/* Bullets em linha: mantêm o argumento sem alongar o bloco. */}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-menta">
                  <Check className="h-2.5 w-2.5 text-petroleo" aria-hidden strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Revelar>

        <Revelar atraso={100} className="mt-9">
          <FormRapido variante={variante} rotuloBotao={rotuloBotao} />
        </Revelar>

        <Revelar atraso={160} className="mt-7 text-center">
          <p className="text-sm text-slate-500">
            Prefere falar agora?{' '}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-petroleo underline decoration-menta decoration-2 underline-offset-4 transition-colors hover:text-petroleo-escuro"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chamar no WhatsApp
            </a>{' '}
            ou ligue para{' '}
            <a href={CONTACT.phoneHref} className="font-bold text-petroleo">
              {CONTACT.phone}
            </a>
          </p>
        </Revelar>
      </div>
    </section>
  )
}
