import { FICHA_TECNICA } from '@/config/produtos'

type FichaTecnicaTabelaProps = {
  /** 'claro' para fundo branco, 'escuro' para fundo petróleo. */
  variante?: 'claro' | 'escuro'
  /** Apresentação do SKU, quando a tabela está numa página de produto. */
  apresentacao?: string
}

/**
 * Dados físico-químicos da linha. [FICHA p.1]
 *
 * Renderiza como <dl> em vez de <table> de propósito: são pares termo/valor,
 * não uma matriz, e o <dl> lê melhor em leitor de tela e no mobile.
 */
export function FichaTecnicaTabela({
  variante = 'claro',
  apresentacao,
}: FichaTecnicaTabelaProps) {
  const escuro = variante === 'escuro'

  const linhas: [string, string][] = [
    ['Nome comercial', FICHA_TECNICA.nomeComercial],
    ...(apresentacao ? ([['Apresentação', apresentacao]] as [string, string][]) : []),
    ['Indicação de uso', FICHA_TECNICA.indicacao],
    ['pH', FICHA_TECNICA.ph],
    ['Estado físico', FICHA_TECNICA.estadoFisico],
    ['Aparência / coloração', FICHA_TECNICA.aparencia],
    ['Composição', FICHA_TECNICA.composicao],
    ['Livre de', FICHA_TECNICA.livreDe],
    ['Validade', FICHA_TECNICA.validade],
  ]

  return (
    <dl
      className={`grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 ${
        escuro ? 'bg-white/15' : 'bg-slate-100'
      }`}
    >
      {linhas.map(([termo, valor], i) => (
        <div
          key={termo}
          className={`${escuro ? 'bg-petroleo' : 'bg-white'} p-6 ${
            /* Com número ímpar de itens sobraria uma célula vazia na última
               linha, que aparece como um bloco cinza solto. O último item
               ocupa as duas colunas nesse caso. */
            i === linhas.length - 1 && linhas.length % 2 === 1 ? 'sm:col-span-2' : ''
          }`}
        >
          <dt
            className={`text-xs font-bold tracking-widest uppercase ${
              escuro ? 'text-menta' : 'text-slate-400'
            }`}
          >
            {termo}
          </dt>
          <dd
            className={`mt-2 font-semibold ${escuro ? 'text-white' : 'text-petroleo'}`}
          >
            {valor}
          </dd>
        </div>
      ))}
    </dl>
  )
}
