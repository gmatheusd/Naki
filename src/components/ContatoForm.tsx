'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  montarMensagem,
  abrirWhatsApp,
  PERFIS,
  CAMPO,
  type VarianteContato,
} from '@/lib/whatsapp'

type ContatoFormProps = {
  /** Muda o texto de abertura e o rótulo do botão. */
  variante?: VarianteContato
  /** Rótulo do botão, quando o padrão da variante não serve. */
  rotuloBotao?: string
}

const ROTULO = 'mb-2 block text-sm font-bold text-slate-700'

/**
 * Formulário completo, das páginas /contato/ e /seja-um-distribuidor/, onde a
 * pessoa chegou decidida e responder mais campos não é atrito.
 *
 * No fim das outras páginas quem aparece é o FormRapido, com três campos.
 * A montagem da mensagem e a abertura do WhatsApp são compartilhadas pelos
 * dois, em src/lib/whatsapp.ts.
 */
export function ContatoForm({ variante = 'geral', rotuloBotao }: ContatoFormProps) {
  const [status, setStatus] = useState<'idle' | 'enviado'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    abrirWhatsApp(montarMensagem(new FormData(form), variante))
    form.reset()
    setStatus('enviado')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className={ROTULO}>
          Seu nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Nome completo"
          className={CAMPO}
        />
      </div>

      <div>
        <label htmlFor="empresa" className={ROTULO}>
          Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          autoComplete="organization"
          placeholder="Nome do estabelecimento"
          className={CAMPO}
        />
      </div>

      <div>
        <label htmlFor="perfil" className={ROTULO}>
          Perfil do negócio
        </label>
        <select id="perfil" name="perfil" defaultValue="" className={CAMPO}>
          <option value="">Selecione uma opção</option>
          {PERFIS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={ROTULO}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="voce@empresa.com.br"
            className={CAMPO}
          />
        </div>
        <div>
          <label htmlFor="telefone" className={ROTULO}>
            WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            className={CAMPO}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cidade" className={ROTULO}>
          Cidade e estado
        </label>
        <input
          id="cidade"
          name="cidade"
          type="text"
          placeholder="São Paulo, SP"
          className={CAMPO}
        />
      </div>

      <div>
        <label htmlFor="mensagem" className={ROTULO}>
          {variante === 'distribuidor'
            ? 'Conte sobre a sua operação'
            : 'Como podemos ajudar?'}
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder={
            variante === 'distribuidor'
              ? 'Região atendida, volume estimado e canais em que você já trabalha.'
              : 'Escreva a sua dúvida ou o que você precisa.'
          }
          className={`${CAMPO} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-petroleo py-4 font-bold text-white shadow-lg transition-all hover:bg-petroleo-escuro"
      >
        {rotuloBotao ??
          (variante === 'distribuidor' ? 'Quero ser distribuidor' : 'Enviar mensagem')}
        <ArrowRight className="h-5 w-5" aria-hidden />
      </button>

      <p className="text-xs text-slate-500">
        Ao enviar, abrimos o WhatsApp com a sua mensagem já escrita. Nada é armazenado
        neste site.
      </p>

      <p aria-live="polite" className="min-h-6">
        {status === 'enviado' && (
          <span className="block rounded-lg bg-menta/30 p-3 text-center text-sm font-bold text-petroleo">
            Abrimos o WhatsApp com a sua mensagem pronta. É só enviar por lá.
          </span>
        )}
      </p>
    </form>
  )
}
