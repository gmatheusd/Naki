export type Faq = { q: string; a: string }

/**
 * FAQ geral, exibido resumido na home e completo em /perguntas-frequentes/.
 *
 * As respostas precisam fazer sentido fora do contexto da página: é este bloco
 * que mecanismos de resposta com IA tendem a extrair e citar. Toda resposta
 * aqui se apoia no material da marca; onde o dado ainda não existe, a resposta
 * direciona ao comercial em vez de arriscar um número.
 */
export const FAQ_GERAL: Faq[] = [
  {
    q: 'O detergente Nakí é Kosher?',
    a: 'Sim. A linha Nakí Lava Louças Neutro é produzida com certificação Kosher, o que permite a comercialização em mercearias e mercados que atendem à comunidade judaica. O produto também é vegano e biodegradável.',
  },
  {
    q: 'Qual a diferença entre o frasco de 500 ml e o galão de 5 litros?',
    a: 'É o mesmo produto em duas apresentações. O frasco de 500 ml foi pensado para o varejo, pelo alto giro em gôndola e pela praticidade no manuseio diário. O galão de 5 litros atende operações profissionais que lavam em volume, com custo por lavagem menor e abastecimento de dispensers.',
  },
  {
    q: 'O que significa ser livre de LAS e amidas?',
    a: 'LAS são os ácidos sulfônicos usados como tensoativo barato na maior parte dos detergentes tradicionais, e as amidas são espessantes derivados de gordura. A fórmula da Nakí não usa nenhum dos dois, o que mantém o poder desengordurante com baixíssima irritabilidade dérmica para quem lava louça o dia inteiro.',
  },
  {
    q: 'O produto é registrado na ANVISA?',
    a: 'Sim. É um produto saneante notificado na ANVISA sob o número 25351216099202577, comercializado pela Antebi’s Comércio de Produtos de Hig., Limp. e Conservação Ltda, CNPJ 62.729.032/0001-80.',
  },
  {
    q: 'Como faço para revender ou distribuir a Nakí?',
    a: 'Fale com o comercial pelo WhatsApp (11) 99432-1975. A Nakí trabalha com mercados, mercearias, food service e distribuidores, e o time envia condições comerciais, tabela de preços e informações logísticas conforme o perfil e o volume da operação.',
  },
  {
    q: 'Qual é a validade do produto?',
    a: 'A validade é de 24 meses. O produto deve ser mantido na embalagem original, ao abrigo da luz e do calor, e fora do alcance de crianças e animais domésticos.',
  },
  {
    q: 'O detergente é seguro para as mãos da equipe?',
    a: 'A formulação é neutra e foi desenvolvida para uso profissional contínuo, sem ácidos sulfônicos nem amidas, o que resulta em baixíssima irritabilidade dérmica. Ainda assim, como todo saneante, deve-se evitar contato prolongado com a pele sem enxaguamento.',
  },
  {
    q: 'A Nakí tem outros produtos além do lava louças?',
    a: 'A linha disponível hoje é a de Lava Louças Neutro, nas apresentações de 500 ml e 5 litros. A marca também atua no desenvolvimento de conservação têxtil, limpeza pesada e industrial, e tem formulações de higiene pessoal em desenvolvimento.',
  },
]
