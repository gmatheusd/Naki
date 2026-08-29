/**
 * Fonte única de verdade do catálogo.
 * Alimenta menu, footer, home, páginas de produto, sitemap e JSON-LD.
 *
 * Regra deste arquivo: nada aqui é inventado. Todo campo vem dos PDFs em
 * pdfs/ (ver CLAUDE.md). Dado comercial que a Nakí ainda não forneceu
 * (EAN, caixa master, peso, dimensão, paletização) fica como `null` de
 * propósito, e o componente simplesmente não renderiza a linha. Preencher
 * com estimativa seria publicar informação falsa num site de saneante.
 */

export type Produto = {
  slug: string
  nome: string
  nomeCurto: string
  apresentacao: string
  volume: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** Frase de venda principal, do catálogo. */
  resumo: string
  /** Texto longo da apresentação, do catálogo. */
  descricao: string
  imagem: string
  imagemAlt: string
  /** Proporção do arquivo, para o Next reservar o espaço e não causar layout shift. */
  largura: number
  altura: number
  selos: string[]
  destaques: { titulo: string; texto: string }[]
  vantagens: string
  publico: string[]
  waLink: keyof typeof import('./siteConfig').WA
  /** Dados logísticos ainda não fornecidos pela Nakí. */
  comercial: {
    ean: string | null
    caixaMaster: string | null
    pesoBruto: string | null
    dimensoes: string | null
    paletizacao: string | null
  }
}

/** Ficha técnica, comum aos dois SKUs. Fonte: FICHA p.1. */
export const FICHA_TECNICA = {
  nomeComercial: 'NAKÍ DETERGENTE LAVA LOUÇAS',
  indicacao:
    'Remoção de gorduras e sujeiras de louças e utensílios de cozinha em geral.',
  validade: '24 meses',
  estadoFisico: 'Líquido viscoso',
  aparencia: 'Transparente / incolor',
  ph: 'Neutro',
  composicao: 'Tensoativo aniônico, espessante, conservante e veículo.',
  livreDe: 'Ácidos sulfônicos (LAS) e amidas',
  modoDeUso:
    'Aplique uma pequena quantidade do produto numa esponja umedecida e esfregue sobre a superfície ou utensílio a ser limpo. Enxágue em seguida.',
} as const

export const PRODUTOS: Produto[] = [
  {
    slug: 'detergente-lava-loucas-neutro-500ml',
    nome: 'Nakí Lava Louças Neutro 500 ml',
    nomeCurto: 'Lava Louças Neutro 500 ml',
    apresentacao: 'Frasco 500 ml',
    volume: '500 ml',
    metaTitle: 'Detergente Lava Louças Neutro 500 ml',
    metaDescription:
      'Detergente lava louças neutro Nakí 500 ml: vegano, biodegradável e com certificação Kosher. Alto poder desengordurante, enxágue rápido e baixa irritabilidade dérmica.',
    keywords: [
      'detergente lava louças neutro 500ml',
      'detergente kosher',
      'detergente vegano',
      'detergente biodegradável',
      'naki detergente',
      'detergente neutro para revenda',
    ],
    resumo:
      'O frasco de alto giro em gôndola, com a mesma engenharia química da linha profissional.',
    descricao:
      'O formato de 500 ml foi desenvolvido estrategicamente para oferecer praticidade no manuseio diário. É a escolha ideal para o varejo pelo alto giro em gôndola e para operações que buscam maior controle no consumo e eficiência durante a lavagem.',
    imagem: '/images/naki-lava-loucas-neutro-500ml.webp',
    imagemAlt:
      'Frasco de 500 ml do detergente lava louças neutro Nakí, embalagem transparente com rótulo verde e bege',
    largura: 339,
    altura: 1194,
    selos: ['Pronto Uso', 'Vegano', 'Biodegradável', 'Certificação Kosher'],
    destaques: [
      {
        titulo: 'Ergonomia e praticidade',
        texto:
          'Formato desenvolvido para proporcionar maior conforto no manuseio e melhor controle durante a aplicação do produto.',
      },
      {
        titulo: 'Controle de desperdício',
        texto: 'Dosagem fácil, gerando economia real para o estabelecimento.',
      },
      {
        titulo: 'Vegano e Kosher',
        texto:
          'Certificações que agregam valor ao produto e ampliam as oportunidades de comercialização em diferentes mercados.',
      },
    ],
    vantagens:
      'Fórmula de alta performance com ação rápida contra gorduras e sujidades pesadas. Entrega espumação abundante e facilidade no enxágue, garantindo louças limpas com menos esforço e total segurança para as mãos.',
    publico: ['Supermercados e mercados de bairro', 'Mercearias', 'Varejo em geral'],
    waLink: 'produto500',
    comercial: {
      ean: null,
      caixaMaster: null,
      pesoBruto: null,
      dimensoes: null,
      paletizacao: null,
    },
  },
  {
    slug: 'detergente-lava-loucas-neutro-5-litros',
    nome: 'Nakí Lava Louças Neutro Galão 5 Litros',
    nomeCurto: 'Lava Louças Neutro 5 L',
    apresentacao: 'Galão 5 litros',
    volume: '5 litros',
    metaTitle: 'Detergente Lava Louças Neutro Galão 5 Litros',
    metaDescription:
      'Galão de 5 litros do detergente lava louças neutro Nakí para uso profissional: vegano, biodegradável e Kosher. Alto rendimento e custo por lavagem menor.',
    keywords: [
      'detergente lava louças 5 litros',
      'detergente galão 5l',
      'detergente lava louças profissional',
      'detergente kosher galão',
      'detergente para food service',
      'detergente lava louças atacado',
    ],
    resumo:
      'O galão para quem lava em volume: mesmo produto, custo por lavagem menor.',
    descricao:
      'A apresentação de 5 litros foi desenvolvida para operações que exigem alto rendimento, controle de custos e eficiência no consumo. Ideal para uso profissional, alia produtividade, praticidade e a mesma qualidade premium da linha Nakí.',
    imagem: '/images/naki-lava-loucas-neutro-5-litros.webp',
    imagemAlt:
      'Galão de 5 litros do detergente lava louças neutro Nakí, embalagem branca com alça e rótulo verde',
    largura: 740,
    altura: 1247,
    selos: [
      'Pronto Uso',
      'Vegano',
      'Biodegradável',
      'Certificação Kosher',
      'Rende Mais',
    ],
    destaques: [
      {
        titulo: 'Máxima economia',
        texto: 'Excelente relação custo-benefício para demandas intensas.',
      },
      {
        titulo: 'Versatilidade',
        texto:
          'Perfeito para abastecimento de dispensers e rotinas de lavagem pesada.',
      },
      {
        titulo: 'Segurança logística',
        texto: 'Embalagem resistente para armazenamento seguro e otimizado.',
      },
    ],
    vantagens:
      'A mesma qualidade premium da versão 500 ml, escalada para o uso profissional. Produto de alta viscosidade que mantém seu rendimento inalterado, aliado aos selos Vegano e Kosher que valorizam a sua operação.',
    publico: ['Restaurantes e food service', 'Cozinhas profissionais', 'Distribuidores'],
    waLink: 'produto5l',
    comercial: {
      ean: null,
      caixaMaster: null,
      pesoBruto: null,
      dimensoes: null,
      paletizacao: null,
    },
  },
]

export const findProduto = (slug: string) => PRODUTOS.find((p) => p.slug === slug)
