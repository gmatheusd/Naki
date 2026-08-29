/**
 * Confere que todo href interno do site exportado aponta para um arquivo real
 * em out/. Roda depois de `npm run build`.
 *
 * O risco concreto aqui é o menu e o rodapé linkarem rota que ninguém criou:
 * o Next não valida href em build, então isso só apareceria como 404 em produção.
 */
import fs from 'fs'
import path from 'path'

const OUT = 'out'

const htmls = []
const varrer = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) varrer(p)
    else if (e.name.endsWith('.html')) htmls.push(p)
  }
}
varrer(OUT)

const existe = (href) => {
  const limpo = href.split('#')[0].split('?')[0]
  if (limpo === '/' ) return fs.existsSync(path.join(OUT, 'index.html'))
  const semBarras = limpo.replace(/^\/|\/$/g, '')
  return (
    fs.existsSync(path.join(OUT, semBarras, 'index.html')) ||
    fs.existsSync(path.join(OUT, semBarras)) ||
    fs.existsSync(path.join(OUT, semBarras + '.html'))
  )
}

const quebrados = new Map()
let total = 0

for (const arquivo of htmls) {
  const html = fs.readFileSync(arquivo, 'utf8')
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const href = m[1]
    if (href.startsWith('/_next/')) continue
    total++
    if (!existe(href)) {
      const pagina = path.relative(OUT, arquivo).split(path.sep).join('/')
      if (!quebrados.has(href)) quebrados.set(href, new Set())
      quebrados.get(href).add(pagina)
    }
  }
}

console.log(`${htmls.length} páginas, ${total} referências internas conferidas.`)

if (quebrados.size === 0) {
  console.log('OK: nenhum link interno quebrado.')
} else {
  console.log(`\n${quebrados.size} destino(s) quebrado(s):`)
  for (const [href, paginas] of quebrados) {
    console.log(`  ${href}  <- ${[...paginas].join(', ')}`)
  }
  process.exitCode = 1
}
