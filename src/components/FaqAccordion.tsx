import type { Faq } from '@/config/faq'

/**
 * Lista de perguntas em <details>, que abre e fecha sem JavaScript.
 *
 * Importante para SEO: o Google exige que a resposta declarada no FAQPage
 * esteja visível na página. <details> conta como visível, porque o conteúdo
 * está no HTML e o usuário consegue expandir.
 *
 * O espaçamento vive no <summary>, e não no <details>: quem recebe o clique é
 * o summary, então padding no elemento de fora criaria uma faixa morta em
 * volta da pergunta, onde o cursor vira ponteiro mas o clique não abre nada.
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:border-menta hover:shadow-lg"
        >
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-bold text-petroleo select-none marker:content-none focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-petroleo [&::-webkit-details-marker]:hidden"
          >
            {f.q}
            {/* "+" simples, sem círculo: fica mais leve ao lado da pergunta.
                É um flex item, então o rotate pega sem precisar de inline-block. */}
            <span
              className="shrink-0 text-menta transition-transform duration-300 group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>

          <p className="px-6 pb-6 leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
