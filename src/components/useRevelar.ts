'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Decide quando um elemento entrou na viewport, para a animação de revelar.
 * O movimento em si vive no CSS (.revelar / .revelado); aqui só o "quando".
 * Compartilhado por Revelar (tag genérica) e RevelarLink (Next Link).
 */
export function useRevelar<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Sem IntersectionObserver, mostra direto em vez de esconder para sempre.
    if (typeof IntersectionObserver === 'undefined') {
      setVisivel(true)
      return
    }

    let vivo = false

    const observador = new IntersectionObserver(
      ([entrada]) => {
        vivo = true
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observador.observe(el)

    /* Rede de segurança: se nenhum callback chegou, o observer não está
       funcionando neste contexto (aba sem composição, bot, ambiente exótico).
       Melhor perder a animação do que deixar o conteúdo invisível. */
    const rede = setTimeout(() => {
      if (!vivo) setVisivel(true)
    }, 1200)

    return () => {
      clearTimeout(rede)
      observador.disconnect()
    }
  }, [])

  return { ref, visivel }
}
