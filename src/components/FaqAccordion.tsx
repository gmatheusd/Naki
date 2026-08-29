import type { Faq } from '@/config/faq'

/**
 * Lista de perguntas em <details>, que abre e fecha sem JavaScript.
 *
 * Importante para SEO: o Google exige que a resposta declarada no FAQPage
 * esteja visível na página. <details> conta como visível, porque o conteúdo
 * está no HTML e o usuário consegue expandir.
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-menta hover:shadow-lg"
        >
          <summary className="cursor-pointer list-none font-bold text-petroleo marker:content-none">
            <span className="flex items-start justify-between gap-4">
              {f.q}
              <span
                className="mt-1 shrink-0 text-menta transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
