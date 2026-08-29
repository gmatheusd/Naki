import { WA_NUMBER, PERFIS } from '@/config/siteConfig'

export { PERFIS }

export type VarianteContato = 'geral' | 'distribuidor'

/**
 * Monta a mensagem a partir dos campos preenchidos.
 *
 * Só o nome é obrigatório na mensagem: o formulário rápido do fim das páginas
 * manda três campos e o completo manda tudo. Campo vazio some da mensagem em
 * vez de virar uma linha "Empresa:" pendurada.
 *
 * O telefone é opcional aqui porque o formulário rápido nem pergunta: a
 * mensagem chega pelo próprio WhatsApp, então o número da pessoa já vem junto.
 */
export function montarMensagem(dados: FormData, variante: VarianteContato) {
  const abertura =
    variante === 'distribuidor'
      ? `Olá! Meu nome é ${dados.get('nome')} e tenho interesse em distribuir a Nakí.`
      : `Olá! Meu nome é ${dados.get('nome')} e vim pelo site da Nakí.`

  const opcional = (rotulo: string, chave: string) => {
    const valor = dados.get(chave)
    return valor ? `${rotulo}: ${valor}` : null
  }

  return [
    abertura,
    opcional('Empresa', 'empresa'),
    opcional('Perfil', 'perfil'),
    opcional('Cidade', 'cidade'),
    opcional('E-mail', 'email'),
    opcional('WhatsApp', 'telefone'),
    opcional('Mensagem', 'mensagem'),
  ]
    .filter(Boolean)
    .join('\n')
}

/**
 * Abre o WhatsApp com o texto pronto, em vez de enviar para um serviço de
 * formulário terceiro.
 *
 * O site é `output: 'export'`: não existe servidor para receber POST. E o
 * WhatsApp é o canal que a Nakí de fato atende, o único número divulgado em
 * todos os materiais, então mandar para lá é mais honesto que deixar a
 * mensagem parada numa caixa de entrada que ninguém confere.
 */
export function abrirWhatsApp(texto: string) {
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`,
    '_blank',
    'noopener,noreferrer',
  )
}

/** Campo dentro de cartão branco (formulário completo). */
export const CAMPO =
  'w-full rounded-lg border-b-2 border-slate-200 bg-offwhite px-4 py-3 text-slate-800 transition-colors outline-none focus:border-petroleo'

/**
 * Campo sobre fundo claro, sem cartão por baixo (formulário rápido do CTA).
 * Precisa de fundo branco e borda inteira, senão some no fundo da seção.
 */
export const CAMPO_CLARO =
  'w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition-colors outline-none focus:border-petroleo focus:ring-2 focus:ring-menta/40'
