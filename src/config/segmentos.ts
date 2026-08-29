/**
 * Áreas de atuação, "Onde a Evolução Acontece". [INST p.4]
 *
 * `status` existe porque só o primeiro segmento tem produto lançado. O
 * institucional anuncia os quatro, mas o site precisa deixar claro o que dá
 * para comprar hoje: anunciar têxtil ou higiene pessoal como catálogo geraria
 * pedido de algo que não existe.
 */

export type Segmento = {
  slug: string
  titulo: string
  descricao: string
  icone: 'sparkles' | 'shirt' | 'hand' | 'factory'
  status: 'disponivel' | 'desenvolvimento'
  /** Só para o segmento disponível. */
  href?: string
}

export const SEGMENTOS: Segmento[] = [
  {
    slug: 'limpeza-e-saneantes-premium',
    titulo: 'Limpeza e Saneantes Premium',
    descricao:
      'Soluções super concentradas que combinam poder extremo com espumação pronunciada de altíssima qualidade. É onde está a linha Lava Louças Neutro, disponível hoje nas apresentações de 500 ml e 5 litros.',
    icone: 'sparkles',
    status: 'disponivel',
    href: '/produtos/',
  },
  {
    slug: 'conservacao-textil',
    titulo: 'Conservação Têxtil',
    descricao:
      'Proteção e limpeza avançada de fibras, garantindo a longevidade dos tecidos e estofados.',
    icone: 'shirt',
    status: 'desenvolvimento',
  },
  {
    slug: 'higiene-pessoal-e-cuidados',
    titulo: 'Higiene Pessoal e Cuidados',
    descricao:
      'Formulações que unem assepsia profunda e respeito absoluto à pele.',
    icone: 'hand',
    status: 'desenvolvimento',
  },
  {
    slug: 'limpeza-pesada-e-industrial',
    titulo: 'Limpeza Pesada e Industrial',
    descricao:
      'Soluções de alta performance projetadas para remover sujidades extremas, mantendo a integridade das superfícies.',
    icone: 'factory',
    status: 'desenvolvimento',
  },
]

/** Canais que a Nakí atende hoje. Reflete o público real confirmado. */
export const CANAIS = [
  {
    icone: 'store',
    titulo: 'Mercados e mercearias',
    texto:
      'O frasco de 500 ml tem alto giro em gôndola e o apelo premium dos selos Vegano, Biodegradável e Kosher atende a um público exigente. A certificação Kosher abre especificamente o canal das mercearias e mercados que atendem à comunidade judaica.',
  },
  {
    icone: 'utensils',
    titulo: 'Food service e cozinhas profissionais',
    texto:
      'O galão de 5 litros foi desenhado para operações que lavam em volume, com custo por lavagem menor, abastecimento de dispensers e formulação de baixa irritabilidade para quem passa o dia na pia.',
  },
  {
    icone: 'truck',
    titulo: 'Distribuidores e atacado',
    texto:
      'A super concentração entrega custo-benefício na ponta do lápis, com margens saudáveis, padronização rigorosa de lote a lote e conformidade regulatória em cada entrega.',
  },
] as const
