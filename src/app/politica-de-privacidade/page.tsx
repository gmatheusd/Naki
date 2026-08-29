import type { Metadata } from 'next'
import { CONTACT, EMPRESA, SITE_NAME, GA_ID, GTM_ID } from '@/config/siteConfig'
import { PageHero } from '@/components/PageHero'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/config/schema'

const TITLE = 'Política de Privacidade'
const DESCRIPTION =
  'Como o site da Nakí trata dados pessoais: o que é coletado, o que não é, e como falar com a empresa sobre seus dados.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/politica-de-privacidade/' },
  robots: { index: true, follow: true },
}

const CRUMBS = [
  { name: 'Início', path: '/' },
  { name: 'Política de Privacidade', path: '/politica-de-privacidade/' },
]

/**
 * Política redigida a partir do comportamento real do site, não de modelo
 * genérico: é um site estático, sem banco de dados e sem backend, e o
 * formulário abre o WhatsApp em vez de enviar para um servidor.
 *
 * O bloco de medição descreve as duas situações possíveis porque GA_ID e
 * GTM_ID hoje estão vazios (ver siteConfig.ts) e a tag não é injetada.
 */
const ATUALIZADO_EM = '2026-08-29'

const SECOES: { titulo: string; paragrafos: string[]; lista?: string[] }[] = [
  {
    titulo: '1. Quem somos',
    paragrafos: [
      `Este site é mantido pela ${EMPRESA.razaoSocial}, inscrita no CNPJ ${EMPRESA.cnpj}, responsável pela marca ${SITE_NAME} e pela comercialização dos produtos apresentados aqui.`,
      `Para qualquer assunto relacionado a esta política ou aos seus dados, o contato é ${CONTACT.email} ou o WhatsApp ${CONTACT.phone}.`,
    ],
  },
  {
    titulo: '2. Que dados este site coleta',
    paragrafos: [
      'Este site é estático e não possui banco de dados, área de login, carrinho de compras nem qualquer sistema que armazene informações de visitantes.',
      'Os formulários de contato e de distribuidor não enviam dados para um servidor nosso. Ao clicar em enviar, o site monta uma mensagem de texto com o que você preencheu e abre o WhatsApp no seu aparelho, com esse texto pronto. Nada é gravado neste site, e a mensagem só existe se você optar por enviá-la pelo WhatsApp.',
    ],
  },
  {
    titulo: '3. Dados que você nos envia por vontade própria',
    paragrafos: [
      'Quando você nos escreve por WhatsApp ou por e-mail, passamos a ter acesso às informações que você decidiu compartilhar, tais como:',
    ],
    lista: [
      'Nome e nome da empresa',
      'Telefone e e-mail',
      'Cidade, estado e perfil do negócio',
      'O conteúdo da mensagem que você escreveu',
    ],
  },
  {
    titulo: '4. Para que usamos esses dados',
    paragrafos: [
      'Usamos as informações apenas para responder ao seu contato, elaborar propostas comerciais, enviar documentação técnica e dar andamento a uma eventual relação de fornecimento.',
      'Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins de marketing. Não fazemos disparo de mensagens em massa a partir de contatos recebidos pelo site.',
    ],
  },
  {
    titulo: '5. Cookies e medição de audiência',
    paragrafos:
      GA_ID || GTM_ID
        ? [
            'Este site utiliza ferramentas de medição de audiência do Google (Google Analytics e Google Tag Manager) para entender de forma agregada como as páginas são acessadas. Essas ferramentas utilizam cookies e podem registrar dados como páginas visitadas, tempo de permanência, tipo de dispositivo e origem do acesso.',
            'Você pode bloquear cookies nas configurações do seu navegador sem prejuízo da navegação neste site.',
          ]
        : [
            'No momento, este site não utiliza cookies de publicidade, de rastreamento nem ferramentas de medição de audiência. Nenhum cookie é gravado no seu navegador por nossa conta.',
            'Caso passemos a utilizar ferramentas de medição, como Google Analytics, esta política será atualizada antes da ativação.',
          ],
  },
  {
    titulo: '6. Serviços de terceiros',
    paragrafos: [
      'Ao clicar nos botões de WhatsApp, você é levado para um serviço operado pela Meta, sujeito à política de privacidade e aos termos de uso dessa empresa, sobre os quais não temos controle.',
      'As fontes tipográficas do site são carregadas a partir do Google Fonts, o que implica uma requisição ao servidor do Google no carregamento da página.',
    ],
  },
  {
    titulo: '7. Por quanto tempo guardamos',
    paragrafos: [
      'As conversas de WhatsApp e os e-mails recebidos são mantidos pelo tempo necessário ao atendimento comercial e ao cumprimento de obrigações legais, fiscais e regulatórias aplicáveis à comercialização de produtos saneantes.',
    ],
  },
  {
    titulo: '8. Seus direitos',
    paragrafos: [
      'Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou desatualizados, a anonimização ou a eliminação de dados desnecessários, e a informação sobre compartilhamentos.',
      `Para exercer qualquer um desses direitos, escreva para ${CONTACT.email}. Responderemos no prazo previsto em lei.`,
    ],
  },
  {
    titulo: '9. Alterações desta política',
    paragrafos: [
      'Esta política pode ser atualizada a qualquer momento, especialmente se o site passar a utilizar novas ferramentas. A data da última atualização fica indicada no início desta página.',
    ],
  },
]

export default function PoliticaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(CRUMBS),
          webPageSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: '/politica-de-privacidade/',
            dateModified: ATUALIZADO_EM,
          }),
        ]}
      />

      <PageHero crumbs={CRUMBS} titulo={TITLE} />

      <main>
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-sm text-slate-500">
              Última atualização:{' '}
              {new Date(ATUALIZADO_EM).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
            </p>

            <div className="mt-10 space-y-10">
              {SECOES.map((s) => (
                <section key={s.titulo}>
                  <h2 className="text-xl font-bold text-petroleo">{s.titulo}</h2>
                  {s.paragrafos.map((p) => (
                    <p key={p} className="mt-4 leading-relaxed text-slate-600">
                      {p}
                    </p>
                  ))}
                  {s.lista && (
                    <ul className="mt-4 space-y-2">
                      {s.lista.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-600">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-menta"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
