import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export type Crumb = { name: string; path: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Você está aqui" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-semibold text-petroleo">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition-colors hover:text-petroleo">
                    {item.name}
                  </Link>
                  <ChevronRight className="h-3 w-3 text-slate-300" aria-hidden />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
