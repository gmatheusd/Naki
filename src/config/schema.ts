import { SITE_URL, SITE_NAME, SITE_NAME_LONGO, CONTACT, EMPRESA, GEO } from './siteConfig'
import type { Produto } from './produtos'

const LOGO = `${SITE_URL}/images/logo-naki-verde.png`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['Naki', SITE_NAME_LONGO],
  legalName: EMPRESA.razaoSocial,
  taxID: EMPRESA.cnpj,
  url: SITE_URL,
  logo: LOGO,
  email: CONTACT.email,
  telephone: '+5511994321975',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
}

/**
 * A Nakí fabrica e vende produto, não presta serviço, então o tipo correto
 * aqui é Organization com areaServed, e não ProfessionalService.
 */
export const brandSchema = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  '@id': `${SITE_URL}/#brand`,
  name: SITE_NAME,
  logo: LOGO,
  url: SITE_URL,
  slogan: 'A evolução da limpeza, higiene e conservação',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'pt-BR',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
})

/**
 * Product do Schema.org.
 *
 * Sem `offers`: a Nakí não pratica preço público e não vende pelo site, então
 * declarar preço ou disponibilidade aqui seria informação falsa, e o Google
 * penaliza dado estruturado que não bate com a página. `gtin13` só entra
 * quando o EAN for fornecido.
 */
export const produtoSchema = (p: Produto) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${SITE_URL}/produtos/${p.slug}/#product`,
  name: p.nome,
  description: p.metaDescription,
  url: `${SITE_URL}/produtos/${p.slug}/`,
  image: `${SITE_URL}${p.imagem}`,
  brand: { '@id': `${SITE_URL}/#brand` },
  manufacturer: { '@id': `${SITE_URL}/#organization` },
  category: 'Detergente lava louças',
  ...(p.comercial.ean ? { gtin13: p.comercial.ean } : {}),
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Volume', value: p.volume },
    { '@type': 'PropertyValue', name: 'pH', value: 'Neutro' },
    { '@type': 'PropertyValue', name: 'Certificações', value: p.selos.join(', ') },
  ],
})

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const webPageSchema = (opts: {
  name: string
  description: string
  path: string
  /** ISO (AAAA-MM-DD). Sinal de frescor, considerado por IA ao citar fonte. */
  dateModified?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: opts.name,
  description: opts.description,
  url: `${SITE_URL}${opts.path}`,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  inLanguage: 'pt-BR',
  ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
})
