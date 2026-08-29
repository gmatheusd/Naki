'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  montarMensagem,
  abrirWhatsApp,
  PERFIS,
  CAMPO_CLARO,
  type VarianteContato,
} from '@/lib/whatsapp'

type FormRapidoProps = {
  variante?: VarianteContato
  rotuloBotao?: string
}

/**
 * Captação em uma linha, para o bloco de fim de página.
 *
 * Pede nome, empresa e perfil. Não pergunta telefone de propósito: a mensagem
 * chega pelo próprio WhatsApp, então o número já vem junto, e usar o espaço
 * para saber qual mercado ou mercearia está perguntando qualifica muito mais.
 * Qualquer campo além desses é atrito num ponto em que a pessoa está de saída.
 * O formulário completo (ContatoForm) continua em /contato/ e
 * /seja-um-distribuidor/, onde ela chegou decidida.
 *
 * Os rótulos existem para leitor de tela, mas ficam visualmente ocultos: o
 * placeholder carrega a informação e a linha fica curta.
 */
export function FormRapido({ variante = 'geral', rotuloBotao }: FormRapidoProps) {
  const [status, setStatus] = useState<'idle' | 'enviado'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    abrirWhatsApp(montarMensagem(new FormData(form), variante))
    form.reset()
    setStatus('enviado')
  }

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_auto]">
        <div>
          <label htmlFor="rapido-nome" className="sr-only">
            Seu nome
          </label>
          <input
            id="rapido-nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className={CAMPO_CLARO}
          />
        </div>

        <div>
          <label htmlFor="rapido-empresa" className="sr-only">
            Empresa
          </label>
          <input
            id="rapido-empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            placeholder="Empresa"
            className={CAMPO_CLARO}
          />
        </div>

        <div>
          <label htmlFor="rapido-perfil" className="sr-only">
            Perfil do negócio
          </label>
          <select id="rapido-perfil" name="perfil" defaultValue="" className={CAMPO_CLARO}>
            <option value="">Perfil do negócio</option>
            {PERFIS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-petroleo px-7 py-3 font-bold whitespace-nowrap text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-petroleo-escuro"
        >
          {rotuloBotao ?? 'Enviar'}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </button>
      </div>

      <p aria-live="polite" className="mt-4 text-center text-xs text-slate-500">
        {status === 'enviado' ? (
          <span className="font-bold text-petroleo">
            Abrimos o WhatsApp com a sua mensagem pronta. É só enviar por lá.
          </span>
        ) : (
          'Ao enviar, abrimos o WhatsApp com a sua mensagem já escrita. Nada é armazenado neste site.'
        )}
      </p>
    </form>
  )
}
