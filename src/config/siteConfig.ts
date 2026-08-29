/**
 * Constantes globais do site.
 *
 * Grafia canônica da marca: "Nakí", com acento, como no institucional e no
 * catálogo. Os rótulos das embalagens grafam "naki" sem acento, então "naki"
 * entra como variação nas keywords: é assim que o público digita na busca.
 */

/**
 * ⚠ DOMÍNIO PROVISÓRIO.
 *
 * Os PDFs trazem `comercial@nakí.com`, com acento agudo no domínio. Domínio
 * acentuado (IDN) é quase certamente erro de autocorreção, e nenhum outro
 * material confirma o endereço real. Trocar aqui atualiza canonical, sitemap,
 * robots, Open Graph e todo o JSON-LD de uma vez, sem tocar em página nenhuma.
 */
export const SITE_URL = 'https://naki.com.br'
export const SITE_NAME = 'Nakí'
export const SITE_NAME_LONGO = 'Nakí Produtos de Limpeza'

/** ⚠ Preencher quando as contas forem criadas. Vazio = tag não é injetada. */
export const GA_ID = ''
export const GTM_ID = ''

export const WA_NUMBER = '5511994321975'

const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

export const WA = {
  header: wa('Olá! Vim pelo site da Nakí e gostaria de falar com o comercial.'),
  hero: wa('Olá! Quero conhecer a linha Nakí e receber a tabela de preços.'),
  distribuidor: wa('Olá! Tenho interesse em ser distribuidor da Nakí.'),
  mercado: wa('Olá! Tenho um mercado e quero levar a linha Nakí para as minhas gôndolas.'),
  kosher: wa('Olá! Gostaria de informações sobre a certificação Kosher da linha Nakí.'),
  produto500: wa('Olá! Quero informações sobre o Nakí Lava Louças Neutro 500 ml.'),
  produto5l: wa('Olá! Quero informações sobre o Nakí Lava Louças Neutro galão 5 litros.'),
  fichaTecnica: wa('Olá! Gostaria de receber a ficha técnica e a FISPQ da linha Nakí.'),
  footer: wa('Olá! Vim pelo site da Nakí e gostaria de mais informações.'),
} as const

export const CONTACT = {
  phone: '(11) 99432-1975',
  phoneHref: 'tel:+5511994321975',
  whatsapp: WA.footer,
  /** ⚠ Provisório: depende da definição do domínio. Ver nota em SITE_URL. */
  email: 'comercial@naki.com.br',
  emailHref: 'mailto:comercial@naki.com.br',
  address: 'São Paulo, SP, Brasil',
} as const

/** Dados regulatórios e societários, todos vindos da ficha técnica. */
export const EMPRESA = {
  razaoSocial:
    "Antebi's Comércio de Produtos de Hig., Limp. e Conservação Ltda",
  cnpj: '62.729.032/0001-80',
  anvisa: '25351216099202577',
  ceatox: '0800 148 110',
  ceatoxHref: 'tel:0800148110',
} as const

export const GEO = {
  region: 'BR-SP',
  placename: 'São Paulo',
  latitude: '-23.55052',
  longitude: '-46.633308',
} as const

/** Paleta da marca, amostrada das páginas dos PDFs. */
export const BRAND = {
  petroleo: '#206870',
  menta: '#88d8b8',
  areia: '#f0e8b0',
  offwhite: '#f8f8f8',
} as const
