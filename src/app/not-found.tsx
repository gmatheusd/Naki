import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <p className="text-6xl font-black text-menta">404</p>
      <h1 className="mt-4 text-3xl font-black text-petroleo md:text-4xl">
        Esta página não existe
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        O endereço pode ter mudado. Volte para a home ou veja a linha de produtos.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-2xl bg-petroleo px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-petroleo-escuro"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden />
          Voltar para a home
        </Link>
        <Link
          href="/produtos/"
          className="flex items-center justify-center rounded-2xl border border-slate-200 px-8 py-4 font-bold text-petroleo transition-all hover:border-petroleo"
        >
          Ver produtos
        </Link>
      </div>
    </main>
  )
}
