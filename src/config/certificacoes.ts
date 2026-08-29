/**
 * Selos e conformidade da linha Nakí.
 *
 * Regra: cada item só afirma o que o material da marca afirma. A certificação
 * Kosher aparece no catálogo [PROD p.2–3]; o selo vegano e o biodegradável
 * aparecem no institucional [INST p.3] e no rótulo; a notificação ANVISA e a
 * ausência de LAS e amidas vêm da ficha técnica [FICHA p.1].
 *
 * Nenhum texto aqui nomeia certificadora, porque nenhum PDF informa qual é.
 * Ver ASSETS-NECESSARIOS.md: obter o hechsher e o selo vegano oficial.
 */

export type Certificacao = {
  slug: string
  titulo: string
  chamada: string
  /** Parágrafos da página /certificacoes/. */
  texto: string[]
  icone: 'shield' | 'leaf' | 'recycle' | 'stamp' | 'hand'
  /** Aparece como etiqueta no card. */
  etiqueta: string
  destaque?: boolean
}

export const CERTIFICACOES: Certificacao[] = [
  {
    slug: 'kosher',
    titulo: 'Certificação Kosher',
    chamada: 'O selo que abre a porta do varejo kosher.',
    texto: [
      'A linha Nakí Lava Louças Neutro é produzida com certificação Kosher, nas duas apresentações: frasco de 500 ml e galão de 5 litros.',
      'Na prática, isso significa que o produto pode ser comercializado em mercearias e mercados que atendem à comunidade judaica, um canal em que o comprador confere a certificação antes de colocar qualquer item na prateleira. Para o lojista, é a diferença entre poder e não poder trabalhar com a marca.',
      'Somada aos selos Vegano e Biodegradável, a certificação transforma o detergente em argumento de gôndola, e não apenas em mais um item de commodity na prateleira.',
    ],
    icone: 'shield',
    etiqueta: 'Diferencial de canal',
    destaque: true,
  },
  {
    slug: 'vegano',
    titulo: 'Selo Vegano',
    chamada: 'Sem ingrediente de origem animal, sem teste em animais.',
    texto: [
      'A excelência não precisa custar a natureza. Os produtos Nakí possuem selo vegano, refletindo um compromisso inegociável com a ética e o respeito aos animais.',
      'A formulação dispensa amidas, que são espessantes tradicionalmente derivados de gordura, e usa tensoativo aniônico com espessante de origem não animal.',
    ],
    icone: 'leaf',
    etiqueta: 'Composição',
  },
  {
    slug: 'biodegradavel',
    titulo: 'Biodegradável',
    chamada: 'Rapidamente biodegradável, de baixo impacto ambiental.',
    texto: [
      'As soluções Nakí são rapidamente biodegradáveis, minimizando o impacto ambiental e alinhando a produção às mais rigorosas exigências de sustentabilidade do mercado atual.',
      'A escolha se soma ao processo de aplicação a frio e ao uso de componentes seguros para o transporte, para o operador e para o usuário final.',
    ],
    icone: 'recycle',
    etiqueta: 'Sustentabilidade',
  },
  {
    slug: 'livre-de-las-e-amidas',
    titulo: 'Livre de LAS e amidas',
    chamada: 'Poder desengordurante sem o tensoativo agressivo do mercado.',
    texto: [
      'LAS são os ácidos sulfônicos usados como tensoativo barato na maior parte dos detergentes tradicionais. As amidas são espessantes derivados de gordura. A fórmula da Nakí não usa nenhum dos dois.',
      'O resultado é excelente poder desengordurante aliado a baixíssima irritabilidade dérmica, o que importa diretamente para quem lava louça o dia inteiro em cozinha profissional.',
    ],
    icone: 'hand',
    etiqueta: 'Formulação',
  },
  {
    slug: 'anvisa',
    titulo: 'Notificação ANVISA',
    chamada: 'Produto saneante notificado e regularizado.',
    texto: [
      'O Nakí Detergente Lava Louças é um produto saneante notificado na ANVISA sob o número 25351216099202577.',
      'A comercialização é feita pela Antebi’s Comércio de Produtos de Hig., Limp. e Conservação Ltda, CNPJ 62.729.032/0001-80, com padronização rigorosa de lote a lote e conformidade com as regulamentações vigentes.',
    ],
    icone: 'stamp',
    etiqueta: 'Regulatório',
  },
]

/** Versão curta, para grades de selo em outras páginas. */
export const SELOS_RESUMO = [
  {
    icone: 'shield' as const,
    titulo: 'Certificação Kosher',
    texto: 'Aprovado para comercialização em mercearias e mercados kosher.',
  },
  {
    icone: 'leaf' as const,
    titulo: 'Vegano',
    texto: 'Sem ingredientes de origem animal e sem testes em animais.',
  },
  {
    icone: 'recycle' as const,
    titulo: 'Biodegradável',
    texto: 'Formulação rapidamente biodegradável, de baixo impacto ambiental.',
  },
  {
    icone: 'hand' as const,
    titulo: 'Baixa irritabilidade',
    texto: 'Livre de ácidos sulfônicos (LAS) e amidas, seguro para uso contínuo.',
  },
]
