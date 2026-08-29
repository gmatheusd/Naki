'use client'

import type { ElementType, ReactNode } from 'react'
import { useRevelar } from './useRevelar'

type RevelarProps = {
  children: ReactNode
  /** Atraso em ms, para escalonar itens de uma mesma grade. */
  atraso?: number
  /** Tag renderizada. Use 'li' dentro de listas para não quebrar a semântica.
      Para o cartão inteiro virar link, use RevelarLink em vez desta prop. */
  as?: ElementType
  className?: string
}

/**
 * Revela o conteúdo quando ele entra na viewport.
 * O movimento vive no CSS (.revelar / .revelado), aqui só decidimos quando.
 */
export function Revelar({
  children,
  atraso = 0,
  as: Tag = 'div',
  className = '',
}: RevelarProps) {
  const { ref, visivel } = useRevelar<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`revelar ${visivel ? 'revelado' : ''} ${className}`.trim()}
      style={atraso ? ({ '--atraso': `${atraso}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
