# Nakí — Fotos e arquivos a providenciar

Levantamento feito em 28/08/2026, depois da home pronta.
Todo caminho abaixo é relativo à raiz do projeto. **Basta salvar o arquivo com o nome exato
indicado** que o código já aponta para ele (ou vai apontar quando a página for construída).

Formato preferido: **WebP** para foto e **SVG** para logo/selo. Se você só tiver JPG/PNG grande,
salve em `assets-fonte/` e rode `node scripts/otimizar-imagens.mjs` — o script converte para
`public/images/`. As medidas são o **mínimo**; maior é sempre melhor.

---

## ✅ Já resolvido (extraído de dentro dos PDFs)

Não precisa providenciar nada disto agora. Só vale substituir se você tiver original melhor.

| Arquivo em `public/images/` | O que é | Resolução atual |
|---|---|---|
| `naki-lava-loucas-neutro-500ml.webp` | Packshot do frasco, fundo transparente | 339×1194 |
| `naki-lava-loucas-neutro-5-litros.webp` | Packshot do galão, fundo transparente | 740×1247 |
| `textura-bolhas-naki.webp` | Macro de bolhas do hero | 2000×1319 |
| `logo-naki-verde.png` / `logo-naki-branco.png` | Logotipo, fundo transparente | 1085×416 |
| `og-naki.jpg` | Imagem de compartilhamento (WhatsApp, redes) | 1200×630 |

---

## 🔴 Prioridade 1 — trava a qualidade do que já está no ar

### 1. Logotipo vetorial
- **Arquivo:** `assets-fonte/logo-naki.svg` (ou `.ai` / `.eps` / `.pdf` vetorial)
- **Onde aparece:** cabeçalho, rodapé, favicon, imagem de compartilhamento — todas as páginas
- **Por quê:** o logo atual foi **reconstruído** a partir de uma página de PDF, recortando o fundo
  por cor. Funciona no tamanho em que está sendo usado, mas não é o arquivo original: as bordas
  são aproximadas e não dá para ampliar. Com o vetor, o logo fica nítido em qualquer tamanho e o
  favicon melhora.

### 2. Packshots profissionais em alta
- **Arquivos:** `assets-fonte/packshot-500ml-frente.png` · `assets-fonte/packshot-5l-frente.png`
- **Medida:** mínimo 2000 px na maior dimensão, **fundo transparente ou branco puro**
- **Onde aparece:** hero da home, cards de produto, páginas `/produtos/[slug]/`
- **Por quê:** os atuais vieram de dentro da ficha técnica e têm 339 px e 740 px de largura.
  Bastam para os cards, mas ficam no limite na página de produto, onde a imagem aparece maior.

### 3. Rótulo legível, frente e verso, dos dois SKUs
- **Arquivos:** `assets-fonte/rotulo-500ml-frente.jpg` · `assets-fonte/rotulo-500ml-verso.jpg`
  · `assets-fonte/rotulo-5l-frente.jpg` · `assets-fonte/rotulo-5l-verso.jpg`
- **Medida:** foto reta, bem iluminada, texto legível ao ampliar
- **Onde aparece:** `/produtos/[slug]/`, bloco de composição e informações regulatórias
- **Por quê:** no arquivo que temos, a letra miúda do rótulo (composição, SAC, EAN) está abaixo
  do limite de leitura. É esse texto que precisa bater com o que o site publica.

### 4. Selo Kosher oficial da certificadora
- **Arquivo:** `public/images/selo-kosher.svg` (ou PNG com fundo transparente, mínimo 600 px)
- **Onde aparece:** home (seção Kosher), `/certificacoes/`, páginas de produto
- **Por quê:** a certificação Kosher é **o principal diferencial** para mercearias e mercados
  judaicos, e esse público confere o selo antes de comprar. Hoje o site usa um ícone genérico.
  Junto com o arquivo, preciso saber **qual é a certificadora (hechsher)** e a validade do
  certificado — ver a lista de dados no fim deste documento.

### 5. Selo Vegano oficial
- **Arquivo:** `public/images/selo-vegano.svg`
- **Onde aparece:** mesmos lugares do selo Kosher
- **Por quê:** mesma razão. Se o selo for de uma certificadora específica (Sociedade Vegetariana
  Brasileira, Vegan Society, etc.), o arquivo oficial dela dá muito mais credibilidade que um ícone.

---

## 🟡 Prioridade 2 — necessárias para as próximas páginas

### 6. Produto na gôndola do mercado
- **Arquivo:** `public/images/naki-gondola-mercado.webp`
- **Medida:** 1600×1067 (paisagem)
- **Onde vai:** `/segmentos/` e `/seja-um-distribuidor/`
- **O que mostrar:** os frascos de 500 ml enfileirados na prateleira de um mercado real, com o
  rótulo legível. Vale foto de celular boa, com luz do próprio corredor.

### 7. Produto em mercearia kosher
- **Arquivo:** `public/images/naki-mercearia-kosher.webp`
- **Medida:** 1600×1067
- **Onde vai:** `/certificacoes/` e home (pode substituir o packshot da seção Kosher)
- **O que mostrar:** o produto no ponto de venda que atende à comunidade judaica. É a foto que
  mais comunica "este produto é aceito aqui" para o comprador desse canal. Se algum cliente atual
  autorizar fotografar a loja, é a imagem de maior retorno da lista.

### 8. Galão 5 L em cozinha profissional
- **Arquivo:** `public/images/naki-cozinha-profissional.webp`
- **Medida:** 1600×1067
- **Onde vai:** `/segmentos/`, `/produtos/detergente-lava-loucas-neutro-5-litros/`
- **O que mostrar:** o galão ao lado da pia industrial, de preferência em uso. Evitar rosto
  identificável de funcionário sem autorização por escrito.

### 9. Detalhe de lavagem: espuma e enxágue
- **Arquivo:** `public/images/naki-lavagem-detalhe.webp`
- **Medida:** 1600×1067
- **Onde vai:** páginas de produto, bloco "Nossa tecnologia"
- **O que mostrar:** close das mãos lavando um prato engordurado, com espuma abundante. É a prova
  visual dos claims de espumação e enxágue rápido.

### 10. Caixa master e palete
- **Arquivo:** `public/images/naki-caixa-master.webp` · `public/images/naki-palete.webp`
- **Medida:** 1200×900
- **Onde vai:** `/seja-um-distribuidor/`, bloco de logística
- **O que mostrar:** a caixa fechada com a arte, e um palete montado. Distribuidor decide compra
  olhando cubagem; a foto ancora os números da tabela logística.

---

## 🟢 Prioridade 3 — melhoram, mas não travam

### 11. Bastidores: produção, envase ou laboratório
- **Arquivo:** `public/images/naki-producao.webp` — 1600×1067
- **Onde vai:** `/sobre/`, seção "A ciência por trás da eficiência"
- **Por quê:** hoje esse bloco é só texto sobre fundo verde. Uma foto real de processo sustenta o
  discurso de rigor técnico melhor que qualquer imagem de banco.

### 12. Retrato da liderança
- **Arquivo:** `public/images/naki-fundador.webp` — 1200×1200 (quadrada)
- **Onde vai:** `/sobre/`, opcional
- **Por quê:** marca de saneante vendendo para varejo ganha confiança com rosto e nome. Opcional.

---

## 📋 Dados e documentos (não são fotos, mas travam páginas)

| # | O que preciso | Trava o quê |
|---|---|---|
| 1 | **Domínio e e-mail definitivos** | `SITE_URL` e `CONTACT.email` estão com placeholder `naki.com.br`. Afeta canonical, sitemap, schema e compartilhamento. Nos PDFs o e-mail saiu como `comercial@nakí.com`, com acento — quase certamente erro. |
| 2 | **Certificadora Kosher (hechsher) + validade** | Seção Kosher da home e página `/certificacoes/` inteira. |
| 3 | **Certificadora do selo vegano** | `/certificacoes/` |
| 4 | **EAN-13 dos dois SKUs** | Campo `gtin13` do schema de produto, que ajuda o Google a associar o item ao varejo. Está visível no rótulo do galão mas ilegível no arquivo que temos. |
| 5 | **Caixa master, peso bruto, dimensões, paletização** | Página `/seja-um-distribuidor/` e ficha logística de cada produto. Hoje estão como `null` em `src/config/produtos.ts` de propósito: preencher com estimativa seria publicar dado falso num site de saneante. |
| 6 | **Rendimento e diluição** (se houver) | Argumento de "alto rendimento" hoje é qualitativo. Um número torna a comparação com o detergente tradicional defensável. |
| 7 | **Ficha técnica atualizada** cobrindo o galão 5 L, em PT-BR | A atual só menciona "frascos de 500 ml" e está redigida em português de Portugal ("humedecida", "contacto", "vómito", "equipa"). |
| 8 | **FISPQ** | Download em `/produtos/` — comprador profissional e distribuidor pedem. |
| 9 | **Metodologia dos testes** da página 2 da ficha (pratos lavados, placa, espuma) | Esses gráficos **não entraram no site**. O gráfico "Pratos Lavados" tem eixo cortado (começa em 2) e nenhuma fonte de ensaio. Publicar comparação com "detergentes tradicionais" sem laboratório, norma e data é risco de publicidade comparativa. Com o laudo, entra. |
| 10 | **Endereço completo da empresa** | Schema `LocalBusiness` e página `/contato/`. Hoje só consta "São Paulo, SP". |
| 11 | **Perfis de redes sociais** | `sameAs` do schema e rodapé. |
| 12 | **IDs do Google Analytics e Tag Manager** | Medição. O código já está pronto e desligado enquanto `GA_ID`/`GTM_ID` estiverem vazios em `src/config/siteConfig.ts`. |

---

## Como me entregar

Joga tudo numa pasta e me avisa, ou salva direto em `assets-fonte/` com os nomes acima.
Foto de celular bem iluminada resolve os itens 6 a 10 — não precisa de estúdio. O que realmente
pede arquivo original são o **logo vetorial** e os **selos das certificadoras**.
