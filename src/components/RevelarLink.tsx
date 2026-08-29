'use client'

import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { useRevelar } from './useRevelar'

type RevelarLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode
  /** Atraso em ms, para escalonar itens de uma mesma grade. */
  atraso?: number
  className?: string
}

/**
 * Como Revelar, mas renderiza um next/link.
 *
 * Existe como componente à parte porque page.tsx é Server Component: passar
 * o próprio Link como valor de prop (`as={Link}`) tenta serializar uma função
 * pela fronteira servidor/cliente e o Next recusa o build. Aqui o Link é
 * importado dentro do próprio arquivo cliente, então nunca atravessa a
 * fronteira como prop.
 */
export function RevelarLink({
  children,
  atraso = 0,
  className = '',
  ...linkProps
}: RevelarLinkProps) {
  const { ref, visivel } = useRevelar<HTMLAnchorElement>()

  return (
    <Link
      ref={ref}
      className={`revelar ${visivel ? 'revelado' : ''} ${className}`.trim()}
      style={atraso ? ({ '--atraso': `${atraso}ms` } as React.CSSProperties) : undefined}
      {...linkProps}
    >
      {children}
    </Link>
  )
}
