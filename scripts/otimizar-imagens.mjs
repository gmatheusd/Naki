/**
 * Gera os assets que o site consome (public/images) a partir dos originais
 * em assets-fonte/, que foram extraídos de dentro dos PDFs da marca.
 *
 * Os originais ficam fora de public/ de propósito: são pesados (a textura
 * sozinha tem 7,5 MB) e não devem ir para o bundle estático. Rodar de novo é
 * seguro, o script só lê de assets-fonte/ e sobrescreve public/images/.
 *
 *   node scripts/otimizar-imagens.mjs
 */
import sharp from 'sharp'

const ORIG = 'assets-fonte/'
const OUT = 'public/images/'

/* Galão: o arquivo da ficha traz uma sobra do frasco de 500 ml na borda
   direita (colunas 803+). Recorta antes de qualquer outra operação, porque
   o extract do sharp precisa vir sozinho na primeira passada. */
const galao = await sharp(ORIG + 'galao-5l-original.png')
  .extract({ left: 27, top: 0, width: 750, height: 1378 })
  .png()
  .toBuffer()

await sharp(galao)
  .trim({ threshold: 1 })
  .webp({ quality: 90, alphaQuality: 100 })
  .toFile(OUT + 'naki-lava-loucas-neutro-5-litros.webp')

await sharp(ORIG + 'frasco-500ml-original.png')
  .trim({ threshold: 1 })
  .webp({ quality: 90, alphaQuality: 100 })
  .toFile(OUT + 'naki-lava-loucas-neutro-500ml.webp')

/* Textura do hero: 7,5 MB em PNG é inviável, WebP resolve sem perda visível. */
await sharp(ORIG + 'textura-bolhas-original.png')
  .resize({ width: 2000 })
  .webp({ quality: 76 })
  .toFile(OUT + 'textura-bolhas-naki.webp')

/* Logotipo fica em PNG: é usado também como favicon e como fonte da imagem
   de Open Graph, onde WebP não ajuda em nada. */
for (const nome of ['logo-naki-branco', 'logo-naki-verde']) {
  await sharp(ORIG + nome + '.png').toFile(OUT + nome + '.png')
}

/* Imagem de Open Graph (1200x630), montada com os próprios assets da marca:
   textura de bolhas, véu verde-petróleo e o logotipo branco. */
const L = 1200
const A = 630

const fundo = await sharp(OUT + 'textura-bolhas-naki.webp')
  .resize({ width: L, height: A, fit: 'cover', position: 'centre' })
  .toBuffer()

const veu = await sharp({
  create: {
    width: L,
    height: A,
    channels: 4,
    background: { r: 0x20, g: 0x68, b: 0x70, alpha: 0.62 },
  },
})
  .png()
  .toBuffer()

const logoOg = await sharp(ORIG + 'logo-naki-branco.png').resize({ width: 420 }).toBuffer()

await sharp(fundo)
  .composite([
    { input: veu, blend: 'over' },
    { input: logoOg, gravity: 'centre' },
  ])
  .jpeg({ quality: 88 })
  .toFile(OUT + 'og-naki.jpg')

for (const f of [
  'naki-lava-loucas-neutro-5-litros.webp',
  'naki-lava-loucas-neutro-500ml.webp',
  'textura-bolhas-naki.webp',
  'og-naki.jpg',
]) {
  const m = await sharp(OUT + f).metadata()
  console.log(f.padEnd(42), m.width + 'x' + m.height)
}
