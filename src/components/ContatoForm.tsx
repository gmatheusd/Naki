'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { WA_NUMBER } from '@/config/siteConfig'

type Status = 'idle' | 'enviado'

type ContatoFormProps = {
  /** Muda o texto de abertura e o rótulo do botão. */
  variante?: 'geral' | 'distribuidor'
}

const PERFIS = [
  'Mercado ou supermercado',
  'Mercearia',
  'Restaurante ou food service',
  'Distribuidor ou atacado',
  'Indústria',
  'Consumidor final',
  'Outro',
]

/**
 * Monta a mensagem a partir dos campos e abre o WhatsApp com o texto pronto,
 * em vez de enviar para um serviço de formulário terceiro.
 *
 * O site é `output: 'export'`: não existe servidor para receber POST. E o
 * WhatsApp é o canal que a Nakí de fato atende, o único número divulgado em
 * todos os materiais, então mandar para lá é mais honesto que deixar a
 * mensagem parada numa caixa de entrada que ninguém confere.
 */
function montarMensagem(dados: FormData, variante: 'geral' | 'distribuidor') {
  const abertura =
    variante === 'distribuidor'
      ? `Olá! Meu nome é ${dados.get('nome')} e tenho interesse em distribuir a Nakí.`
      : `Olá! Meu nome é ${dados.get('nome')} e vim pelo site da Nakí.`

  const linhas = [
    abertura,
    dados.get('empresa') ? `Empresa: ${dados.get('empresa')}` : null,
    dados.get('perfil') ? `Perfil: ${dados.get('perfil')}` : null,
    dados.get('cidade') ? `Cidade: ${dados.get('cidade')}` : null,
    `E-mail: ${dados.get('email')}`,
    `WhatsApp: ${dados.get('telefone')}`,
    dados.get('mensagem') ? `Mensagem: ${dados.get('mensagem')}` : null,
  ].filter(Boolean)

  return linhas.join('\n')
}

const campo =
  'w-full rounded-lg border-b-2 border-slate-200 bg-offwhite px-4 py-3 text-slate-800 transition-colors outline-none focus:border-petroleo'
const rotulo = 'mb-2 block text-sm font-bold text-slate-700'

export function ContatoForm({ variante = 'geral' }: ContatoFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const texto = montarMensagem(new FormData(form), variante)

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener,noreferrer',
    )

    form.reset()
    setStatus('enviado')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className={rotulo}>
          Seu nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Nome completo"
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="empresa" className={rotulo}>
          Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          autoComplete="organization"
          placeholder="Nome do estabelecimento"
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="perfil" className={rotulo}>
          Perfil do negócio
        </label>
        <select id="perfil" name="perfil" defaultValue="" className={campo}>
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
          <label htmlFor="email" className={rotulo}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="voce@empresa.com.br"
            className={campo}
          />
        </div>
        <div>
          <label htmlFor="telefone" className={rotulo}>
            WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            className={campo}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cidade" className={rotulo}>
          Cidade e estado
        </label>
        <input
          id="cidade"
          name="cidade"
          type="text"
          placeholder="São Paulo, SP"
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="mensagem" className={rotulo}>
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
          className={`${campo} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-petroleo py-4 font-bold text-white shadow-lg transition-all hover:bg-petroleo-escuro"
      >
        {variante === 'distribuidor' ? 'Quero ser distribuidor' : 'Enviar mensagem'}
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
