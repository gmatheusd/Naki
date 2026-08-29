import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/siteConfig'
import { PRODUTOS } from '@/config/produtos'

export const dynamic = 'force-static'

type Entry = MetadataRoute.Sitemap[number]

const url = (
  path: string,
  priority = 0.7,
  changeFrequency: Entry['changeFrequency'] = 'monthly',
): Entry => ({
  url: `${SITE_URL}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    url('/', 1.0, 'weekly'),

    /* Produtos: o que o site tem de mais buscável. */
    url('/produtos/', 0.95, 'weekly'),
    ...PRODUTOS.map((p) => url(`/produtos/${p.slug}/`, 0.9, 'weekly')),

    /* Conversão B2B */
    url('/seja-um-distribuidor/', 0.9, 'monthly'),

    /* Diferenciais, cada um com intenção de busca própria. */
    url('/certificacoes/', 0.85),
    url('/segmentos/', 0.75),

    /* Institucional */
    url('/sobre/', 0.7),
    url('/contato/', 0.7),
    url('/perguntas-frequentes/', 0.7),
    url('/mapa-do-site/', 0.3),
    url('/politica-de-privacidade/', 0.2, 'yearly'),
  ]
}
