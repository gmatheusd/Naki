# Nakí — o que ainda falta

Atualizado em 29/08/2026, com **o site inteiro já construído**.

O site está completo e navegável usando só o que existe hoje: dois packshots e uma macro de bolhas
recuperados de dentro dos PDFs, mais o logotipo. **Nenhuma página tem buraco em forma de foto** e
nenhuma tabela ficou vazia. Onde falta dado, a página leva a pessoa para o comercial, que é quem
tem a informação.

Este documento agora tem duas listas: o que **trava** publicação e o que **melhora** o site.

---

## 🔴 Trava a publicação

### 1. Domínio e e-mail definitivos
- **Onde muda:** uma constante em [`src/config/siteConfig.ts`](src/config/siteConfig.ts)
- Hoje o site usa `https://naki.com.br` como placeholder e `comercial@naki.com.br` como e-mail.
- Nos PDFs o e-mail aparece como `comercial@nakí.com`, **com acento no domínio** — quase certamente
  erro de autocorreção, já que domínio acentuado praticamente não se usa.
- Sem isso, o endereço canônico, o sitemap, o Open Graph e todo o JSON-LD apontam para um domínio
  que talvez não seja o de vocês. É a única pendência que impede colocar no ar.

### 2. Revisão jurídica da Política de Privacidade
- **Onde está:** [`/politica-de-privacidade/`](src/app/politica-de-privacidade/page.tsx)
- Escrevi a política descrevendo **o comportamento real do site**: estático, sem banco de dados, o
  formulário abre o WhatsApp em vez de gravar dados, e hoje sem cookie nenhum. Não é modelo genérico.
- Ainda assim, é texto com efeito legal e precisa passar pelo contador ou advogado de vocês antes de
  publicar.

---

## 🟡 Melhora bastante (o site funciona sem, mas rende mais com)

### 3. Certificadora Kosher (hechsher)
- **Onde entra:** [`/certificacoes/`](src/app/certificacoes/page.tsx) e a seção Kosher da home
- A página já existe e trata a certificação como o **principal diferencial de venda**, porque é o que
  abre a porta das mercearias judaicas. O texto afirma a certificação exatamente como o catálogo de
  vocês afirma, mas **não nomeia rabinato nenhum**, porque nenhum material informa qual é.
- Para esse público, saber qual é a certificadora costuma pesar mais que o preço. Com o nome e o
  arquivo do selo, essa página fica bem mais forte.

### 4. Selo Vegano oficial
- Mesmo caso: hoje o site usa um ícone. Se o selo for de uma certificadora (SVB, Vegan Society), o
  arquivo oficial dela vale mais que qualquer ícone desenhado.

### 5. EAN-13 dos dois SKUs
- **Onde entra:** campo `gtin13` do schema de produto, já preparado em
  [`src/config/produtos.ts`](src/config/produtos.ts) (hoje `null`)
- O EAN está impresso no rótulo do galão, mas o arquivo que extraí do PDF tem resolução baixa demais
  para ler os dígitos com segurança, e chutar um código de barras seria pior que não ter.
- Com ele, o Google consegue associar o produto às listagens de varejo.

### 6. Dados logísticos: caixa master, peso, dimensões, paletização
- **Onde entram:** [`src/config/produtos.ts`](src/config/produtos.ts), campos hoje em `null`
- **Como o site trata isso hoje:** as páginas de produto e de distribuidor mostram um card
  "Informações logísticas" explicando que o comercial envia conforme o volume, com botão de WhatsApp.
  Vira caminho de conversa em vez de tabela vazia.
- Quando os dados chegarem, é só preencher e a tabela aparece sozinha nas duas páginas de SKU.

### 7. FISPQ e ficha técnica atualizada
- **Como o site trata hoje:** conforme combinado, o PDF **não** fica para download. Os dados técnicos
  estão em HTML nas páginas (que indexa melhor no Google que um PDF) e há botão de WhatsApp para
  solicitar a documentação.
- A ficha atual, quando for enviada a clientes, ainda merece: cobrir o galão de 5 L (ela só menciona
  500 ml) e sair do português de Portugal — "humedecida", "contacto", "vómito", "equipa". No site,
  esse texto já foi convertido para PT-BR.

### 8. Endereço completo e redes sociais
- Hoje o site diz só "São Paulo, SP", e não incluí mapa: apontar para o centro da cidade seria
  informação falsa. Com o endereço, entra no schema e na página de contato.
- Não há perfil de rede social em nenhum material, então o campo `sameAs` do JSON-LD ficou de fora.

### 9. Google Analytics e Tag Manager
- O código já está pronto e **desligado** enquanto `GA_ID` e `GTM_ID` estiverem vazios em
  `siteConfig.ts`. Basta colar os IDs.

---

## 🟢 Fotos (opcionais, o site não depende delas)

Você disse que não teria fotos melhores que as atuais, e o site foi construído assumindo isso. As
faixas de topo de cada página são recortes de regiões diferentes da própria macro de bolhas da marca,
o que dá imagem própria a cada página sem foto nova.

Se em algum momento aparecer oportunidade, estas são as que mais mudariam o site, em ordem:

| Foto | Onde entraria | Por quê |
|---|---|---|
| Produto em **mercearia kosher** | `/certificacoes/` e home | É a imagem que prova o argumento central do site para o público-alvo |
| Produto na **gôndola** de mercado | `/segmentos/`, `/seja-um-distribuidor/` | Mostra o produto no ponto de venda real |
| **Galão em cozinha profissional** | `/produtos/…-5-litros/`, `/segmentos/` | Sustenta o discurso de uso profissional contínuo |
| **Caixa master e palete** | `/seja-um-distribuidor/` | Distribuidor decide compra olhando cubagem |
| **Logotipo vetorial** (SVG/AI) | site inteiro | O atual foi reconstruído de um PDF; funciona no tamanho usado, mas não amplia |

Salve em `assets-fonte/` e rode `node scripts/otimizar-imagens.mjs`, que o script converte e otimiza
para `public/images/`.

---

## Decisões que ficaram registradas

- **Ficha técnica em PDF não vai para download.** Os dados vivem em HTML e o arquivo sai por WhatsApp.
- **Os testes comparativos da página 2 da ficha não entraram no site.** O gráfico "Pratos Lavados"
  tem o eixo cortado em 2, o que amplia visualmente a diferença, e nenhum laboratório, norma ou data
  é citado. Comparação direta com "detergentes tradicionais" nesse formato é exposição desnecessária.
  Com o laudo em mãos, viram uma seção de provas de eficiência.
- **Os 4 segmentos aparecem**, com os 3 não lançados marcados como "em desenvolvimento" e uma nota de
  transparência dizendo que não estão disponíveis para compra.
- **Sem mapa na página de contato**, porque só existe "São Paulo, SP".
