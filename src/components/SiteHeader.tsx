'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ArrowRight, Mail, Phone } from 'lucide-react'
import { PRODUTOS } from '@/config/produtos'
import { CONTACT, WA } from '@/config/siteConfig'

const INSTITUCIONAL = [
  { href: '/sobre/', label: 'Sobre a Nakí' },
  { href: '/certificacoes/', label: 'Certificações' },
  { href: '/segmentos/', label: 'Segmentos' },
  { href: '/perguntas-frequentes/', label: 'Perguntas Frequentes' },
  { href: '/contato/', label: 'Contato' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [produtosOpen, setProdutosOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full">
        {/* Barra de contato */}
        <div className="hidden items-center justify-between bg-petroleo px-6 py-2 text-xs text-menta md:flex">
          <div className="flex gap-6">
            <a
              href={CONTACT.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3" aria-hidden />
              {CONTACT.email}
            </a>
            <a
              href={WA.header}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" aria-hidden />
              {CONTACT.phone}
            </a>
          </div>
          <p className="font-semibold tracking-wide">
            Vegano · Biodegradável · Certificação Kosher
          </p>
        </div>

        <header className="w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
            <Link href="/" className="group flex items-center" aria-label="Nakí, página inicial">
              <Image
                src="/images/logo-naki-verde.png"
                alt="Nakí"
                width={1085}
                height={416}
                priority
                className="h-9 w-auto transition-transform group-hover:scale-[1.02] md:h-11"
              />
            </Link>

            {/* Navegação desktop */}
            <nav className="hidden items-center gap-7 lg:flex">
              <div
                className="relative"
                onMouseEnter={() => setProdutosOpen(true)}
                onMouseLeave={() => setProdutosOpen(false)}
              >
                <Link
                  href="/produtos/"
                  className="flex items-center gap-1 text-sm font-bold text-slate-600 uppercase transition-colors hover:text-petroleo"
                >
                  Produtos
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </Link>
                {produtosOpen && (
                  <div className="absolute top-full left-1/2 w-72 -translate-x-1/2 pt-4">
                    <ul className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                      {PRODUTOS.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/produtos/${p.slug}/`}
                            className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-offwhite hover:text-petroleo"
                          >
                            {p.nomeCurto}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/certificacoes/"
                className="text-sm font-bold text-slate-600 uppercase transition-colors hover:text-petroleo"
              >
                Certificações
              </Link>
              <Link
                href="/sobre/"
                className="text-sm font-bold text-slate-600 uppercase transition-colors hover:text-petroleo"
              >
                Sobre
              </Link>
              <Link
                href="/contato/"
                className="text-sm font-bold text-slate-600 uppercase transition-colors hover:text-petroleo"
              >
                Contato
              </Link>
              <Link
                href="/seja-um-distribuidor/"
                className="flex items-center gap-2 rounded-full bg-petroleo px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:bg-petroleo-escuro"
              >
                Seja um distribuidor
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              className="rounded-lg p-2 text-petroleo transition-colors hover:bg-offwhite lg:hidden"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </header>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-60 overflow-y-auto bg-white px-6 pt-6 pb-16 lg:hidden">
          <div className="mb-8 flex items-center justify-between">
            <Image
              src="/images/logo-naki-verde.png"
              alt="Nakí"
              width={1085}
              height={416}
              className="h-9 w-auto"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="rounded-lg p-2 hover:bg-offwhite"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            <p className="mt-2 mb-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
              Produtos
            </p>
            {PRODUTOS.map((p) => (
              <Link
                key={p.slug}
                href={`/produtos/${p.slug}/`}
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-lg font-bold text-petroleo"
              >
                {p.nomeCurto}
              </Link>
            ))}

            <p className="mt-8 mb-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
              Institucional
            </p>
            {INSTITUCIONAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-lg font-bold text-petroleo"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/seja-um-distribuidor/"
              onClick={() => setMobileOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-petroleo px-8 py-4 font-bold text-white"
            >
              Seja um distribuidor
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>

            <div className="mt-10 space-y-1">
              <p className="text-xs tracking-wider text-slate-400 uppercase">
                Contato rápido
              </p>
              <a
                href={WA.header}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-bold text-petroleo"
              >
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="block text-base font-bold break-all text-petroleo"
              >
                {CONTACT.email}
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Espaçador para o header fixo */}
      <div className="h-[68px] md:h-[100px]" aria-hidden />
    </>
  )
}
