import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, MapPin, Phone, Mail, ShieldAlert } from 'lucide-react'
import { PRODUTOS } from '@/config/produtos'
import { CONTACT, WA, EMPRESA, SITE_NAME } from '@/config/siteConfig'

const year = new Date().getFullYear()

const INSTITUCIONAL = [
  { href: '/sobre/', label: 'Sobre a Nakí' },
  { href: '/certificacoes/', label: 'Certificações' },
  { href: '/segmentos/', label: 'Segmentos de atuação' },
  { href: '/seja-um-distribuidor/', label: 'Seja um distribuidor' },
  { href: '/perguntas-frequentes/', label: 'Perguntas frequentes' },
  { href: '/mapa-do-site/', label: 'Mapa do site' },
]

export function SiteFooter() {
  return (
    <footer className="bg-petroleo pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="space-y-6">
            <Image
              src="/images/logo-naki-branco.png"
              alt="Nakí"
              width={1085}
              height={416}
              className="h-11 w-auto"
            />
            <p className="text-sm leading-relaxed text-menta">
              Produtos premium de limpeza, higiene e conservação. Composição vegana,
              biodegradável e com certificação Kosher, desenvolvida para quem exige
              rendimento superior.
            </p>
            <a
              href={WA.footer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Falar no WhatsApp
            </a>
          </div>

          {/* Produtos */}
          <div>
            <h2 className="mb-6 border-l-4 border-menta pl-3 text-lg font-bold">
              Produtos
            </h2>
            <ul className="space-y-3 text-sm text-menta">
              {PRODUTOS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/produtos/${p.slug}/`}
                    className="transition-colors hover:text-white"
                  >
                    {p.nomeCurto}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/produtos/" className="transition-colors hover:text-white">
                  Ver catálogo completo
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h2 className="mb-6 border-l-4 border-areia pl-3 text-lg font-bold">
              Institucional
            </h2>
            <ul className="space-y-3 text-sm text-menta">
              {INSTITUCIONAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h2 className="mb-6 text-lg font-bold">Fale com o comercial</h2>
            <ul className="mb-8 space-y-4 text-sm text-menta">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-areia" aria-hidden />
                {CONTACT.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-areia" aria-hidden />
                <a
                  href={WA.footer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-areia" aria-hidden />
                <a
                  href={CONTACT.emailHref}
                  className="break-all transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <Link
              href="/seja-um-distribuidor/"
              className="block w-full rounded-lg border border-white/25 bg-white/10 py-3 text-center font-bold transition-all hover:border-areia hover:bg-areia hover:text-petroleo"
            >
              Quero ser distribuidor
            </Link>
          </div>
        </div>

        {/* Faixa regulatória: exigida em site de saneante e reforça confiança. */}
        <div className="mb-8 grid gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 text-xs text-menta sm:grid-cols-2 lg:grid-cols-4">
          <p>
            <span className="block font-bold text-white">Comercializado por</span>
            {EMPRESA.razaoSocial}
          </p>
          <p>
            <span className="block font-bold text-white">CNPJ</span>
            {EMPRESA.cnpj}
          </p>
          <p>
            <span className="block font-bold text-white">Notificação ANVISA</span>
            Saneante notificado nº {EMPRESA.anvisa}
          </p>
          <p className="flex flex-col">
            <span className="flex items-center gap-1.5 font-bold text-white">
              <ShieldAlert className="h-3.5 w-3.5 text-areia" aria-hidden />
              Emergência (CEATOX)
            </span>
            <a href={EMPRESA.ceatoxHref} className="transition-colors hover:text-white">
              {EMPRESA.ceatox}
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-menta md:flex-row">
          <p>
            {year} © {SITE_NAME}. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade/"
            className="transition-colors hover:text-white"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
