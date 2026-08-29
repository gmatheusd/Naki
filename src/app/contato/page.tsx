import type { Metadata } from 'next'
import { MessageCircle, Mail, MapPin, ShieldAlert, Clock } from 'lucide-react'
import { CONTACT, WA, EMPRESA } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { ContatoForm } from '@/components/ContatoForm'
import { Revelar } from '@/components/Revelar'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/config/schema'

const TITLE = 'Contato'
const DESCRIPTION =
  'Fale com o comercial da Nakí pelo WhatsApp (11) 99432-1975 ou por e-mail. Atendemos mercados, mercearias, food service e distribuidores em todo o Brasil.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contato/' },
  openGraph: {
    title: `${TITLE} | Nakí`,
    description: DESCRIPTION,
    url: '/contato/',
  },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Contato', path: '/contato/' },
]

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: '/contato/' }),
        ]}
      />

      <PageHero
        crumbs={CRUMBS}
        etiqueta="Fale com a gente"
        titulo="Contato"
        subtitulo="O WhatsApp é o canal mais rápido. É por ele que o comercial envia tabela de preços, condições e documentação técnica."
        faixa="suave"
      />

      <main>
        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Canais */}
            <Revelar>
              <h2 className="text-3xl font-black text-petroleo uppercase md:text-4xl">
                Canais de atendimento
              </h2>

              <div className="mt-8 space-y-4">
                <a
                  href={WA.contato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-px hover:border-menta hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                    <MessageCircle className="h-5 w-5 text-white" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-bold text-petroleo">
                      WhatsApp comercial
                    </span>
                    <span className="mt-1 block text-slate-600">{CONTACT.phone}</span>
                    <span className="mt-1 block text-sm text-slate-500">
                      Tabela de preços, condições e ficha técnica
                    </span>
                  </span>
                </a>

                <a
                  href={CONTACT.emailHref}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-px hover:border-menta hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-areia">
                    <Mail className="h-5 w-5 text-petroleo" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-bold text-petroleo">E-mail</span>
                    <span className="mt-1 block break-all text-slate-600">
                      {CONTACT.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-areia">
                    <MapPin className="h-5 w-5 text-petroleo" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-bold text-petroleo">Localização</span>
                    <span className="mt-1 block text-slate-600">{CONTACT.address}</span>
                    <span className="mt-1 block text-sm text-slate-500">
                      Atendimento comercial para todo o Brasil
                    </span>
                  </span>
                </div>

                {/* Emergência é informação obrigatória em saneante, não decoração. */}
                <div className="flex items-start gap-4 rounded-2xl border-2 border-areia bg-areia/30 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petroleo">
                    <ShieldAlert className="h-5 w-5 text-areia" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-bold text-petroleo">
                      Emergência toxicológica
                    </span>
                    <a
                      href={EMPRESA.ceatoxHref}
                      className="mt-1 block font-semibold text-petroleo underline"
                    >
                      CEATOX {EMPRESA.ceatox}
                    </a>
                    <span className="mt-1 block text-sm text-slate-600">
                      Em caso de ingestão ou contato, ligue e leve o rótulo do produto.
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 text-sm text-slate-500">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <p>
                  Mensagens enviadas fora do horário comercial são respondidas no próximo
                  dia útil.
                </p>
              </div>
            </Revelar>

            {/* Formulário */}
            <Revelar atraso={120} className="rounded-3xl bg-offwhite p-8 shadow-sm">
              <h2 className="text-2xl font-black text-petroleo uppercase">
                Envie uma mensagem
              </h2>
              <p className="mt-3 mb-8 text-sm text-slate-600">
                Preencha e o WhatsApp abre com o texto já montado.
              </p>
              <ContatoForm variante="geral" />
            </Revelar>
          </div>
        </section>

        {/* Sem faixa regulatória aqui: o rodapé já traz razão social, CNPJ,
            ANVISA e CEATOX em todas as páginas, e as duas ficariam coladas. */}
      </main>
    </>
  )
}
