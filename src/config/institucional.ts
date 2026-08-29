/**
 * Conteúdo institucional da marca, transcrito dos PDFs.
 * Fonte única: home, /sobre/ e /seja-um-distribuidor/ consomem daqui.
 *
 * Referências no formato usado no CLAUDE.md: [INST p.N] = Naki Institucional PDF.
 */

/** [INST p.1] */
export const TAGLINE = 'A evolução da limpeza, higiene & conservação'

/** [INST p.2], versão longa. */
export const QUEM_SOMOS = [
  'A Nakí é uma marca inteiramente focada no desenvolvimento de produtos premium de limpeza, higiene e conservação. Representamos a evolução do cuidado, entregando eficiência através de uma composição vegana, ética e sustentável.',
  'Projetada para quem exige rendimento superior, nossa tecnologia garante uma assepsia profunda que preserva o que é valioso. É a união entre a eficácia máxima e o respeito à natureza: a solução definitiva para quem busca excelência, consciência e resultados impecáveis em cada gota.',
]

/** [PROD p.4], versão curta, usada onde o espaço é menor. */
export const QUEM_SOMOS_CURTO =
  'A Nakí nasceu com o propósito de redefinir os padrões do mercado de higienização profissional. Substituímos formulações convencionais e agressivas por soluções desenvolvidas a partir da engenharia química de precisão, entregando inovação e confiabilidade em cada produto.'

/** Os 4 pilares, "O DNA da Excelência". [INST p.3] */
export const PILARES = [
  {
    titulo: 'Tecnologia de alta performance',
    texto:
      'Não acreditamos em limpeza baseada em esforço, mas em inteligência química. Desenvolvemos formulações que entregam eficiência superior, garantindo rendimento máximo e resultados impecáveis.',
  },
  {
    titulo: 'Sustentabilidade inteligente',
    texto:
      'Nossas soluções são rapidamente biodegradáveis, minimizando o impacto ambiental e alinhando nossa produção às mais rigorosas exigências de sustentabilidade do mercado atual.',
  },
  {
    titulo: 'Essência vegana e ética',
    texto:
      'A excelência não precisa custar a natureza. Nossos produtos possuem selo vegano, refletindo nosso compromisso inegociável com a ética e o respeito aos animais.',
  },
  {
    titulo: 'Cuidado integrado',
    texto:
      'Nossa química atua de forma poderosa contra a sujidade, mas é gentil onde importa. Priorizamos formulações com baixa irritabilidade dérmica e segurança total.',
  },
]

/** Capacidade técnica, "A Ciência por Trás da Eficiência". [INST p.5] */
export const CAPACIDADE_TECNICA = {
  intro:
    'O rigor da Nakí começa na seleção implacável de nossas matérias-primas e parceiros. Utilizamos bases de última geração para garantir estabilidade absoluta.',
  itens: [
    {
      titulo: 'Estabilidade e rendimento constante',
      texto:
        'Nossas formulações líquidas apresentam alta viscosidade e estabilidade superior. O produto mantém sua eficácia máxima e qualidade inalteradas da primeira à última gota.',
    },
    {
      titulo: 'Processos otimizados e seguros',
      texto:
        'Trabalhamos com processos inteligentes e aplicação a frio. Utilizamos componentes seguros para o transporte, para o operador e para o usuário final.',
    },
    {
      titulo: 'Eficiência comprovada',
      texto:
        'Através de inteligência química avançada, asseguramos um poder de limpeza e desengorduramento extremo, utilizando bases seguras e totalmente livres de componentes agressivos.',
    },
  ],
}

/** Proposta de valor ao distribuidor. [INST p.6–7] */
export const VALOR_DISTRIBUIDOR = [
  {
    titulo: 'Alto rendimento que gera economia',
    texto:
      'A super concentração dos nossos produtos entrega um custo-benefício insuperável na ponta do lápis, gerando margens saudáveis para distribuidores e muita economia para o consumidor.',
  },
  {
    titulo: 'Diferenciação e demanda de mercado',
    texto:
      'O apelo premium, somado aos selos Vegano, Biodegradável e Kosher, atende imediatamente à demanda de um público cada vez mais exigente e consciente.',
  },
  {
    titulo: 'Qualidade e consistência',
    texto:
      'Mantemos rigorosa padronização de lote a lote e total conformidade com as regulamentações vigentes, garantindo qualidade, segurança e confiança em cada entrega.',
  },
]

/** Benefícios do produto, "Nossa Tecnologia". [PROD p.4] */
export const TECNOLOGIA = [
  {
    icone: 'droplets',
    titulo: 'Enxágue rápido',
    texto:
      'A espuma enxagua rapidamente sob a água. Reduz o tempo de torneira aberta e acelera o processo na pia, gerando redução direta de custos operacionais.',
  },
  {
    icone: 'sparkles',
    titulo: 'Limpeza profunda',
    texto:
      'Atua com eficiência na remoção de gorduras e resíduos, inclusive em utensílios plásticos, reduzindo a necessidade de retrabalho.',
  },
  {
    icone: 'shield',
    titulo: 'Segurança e sustentabilidade',
    texto:
      'Composição vegana e biodegradável, livre de tensoativos agressivos. Preserva a integridade dermatológica da equipe e o meio ambiente.',
  },
  {
    icone: 'gauge',
    titulo: 'Alto rendimento',
    texto:
      'A alta viscosidade proporciona melhor controle na aplicação, reduzindo desperdícios e aumentando o rendimento durante o uso.',
  },
] as const

/**
 * Precauções e primeiros socorros. [FICHA p.1]
 * Convertido para PT-BR: a ficha original está em português de Portugal
 * ("humedecida", "contacto", "vómito", "equipa").
 */
export const SEGURANCA = {
  conservacao:
    'Conserve fora do alcance das crianças e dos animais domésticos. Mantenha o produto na sua embalagem original, ao abrigo da luz e do calor.',
  prevencao:
    'Não ingerir. Evite a inalação ou aspiração e o contato prolongado com os olhos e a pele sem enxaguamento.',
  primeirosSocorros:
    'Em caso de contato com os olhos e a pele, lave imediatamente com água em abundância. Em caso de ingestão, não provoque o vômito e consulte imediatamente o Centro de Intoxicações ou um médico, levando o rótulo do produto.',
}
