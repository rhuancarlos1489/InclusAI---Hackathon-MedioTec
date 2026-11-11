# InclusAI

Site de um assistente de inclusão escolar. A ideia do InclusAI é ajudar professores a adaptar provas, textos, slides e atividades para que cada aluno consiga acompanhar do jeito que funciona para ele, como alunos com dislexia, TDAH, cegueira e baixa visão, entre outras necessidades.

O próprio site também é acessível: quem usa pode ajustar o tamanho do texto, o espaçamento, as cores e o movimento, e a escolha vale para todas as páginas.

## Páginas

| Página | Arquivo | O que tem |
| --- | --- | --- |
| Início | `Home/index.html` | Apresentação do projeto, exemplo de conversa, exemplo de adaptação e recursos de acessibilidade |
| Acessibilidade | `Acessibilidade/acessibilidade.html` | Painel para ajustar o site, com prévia ao vivo e leitura em voz alta |
| Para quem foi feito | `Para quem foi feito/paraquem.html` | Público do projeto e as necessidades que o InclusAI considera |
| Assistente | `Chat com Assistente - exemplo/chat.html` | Exemplo de interface de conversa com o assistente |
| Login | `Login InclusAI/login.html` | Tela de entrada |

## Acessibilidade

Os ajustes ficam na página **Acessibilidade** e são salvos no navegador (`localStorage`). Ao abrir qualquer outra página, eles são aplicados automaticamente.

| Ajuste | Opções | O que faz |
| --- | --- | --- |
| Tamanho do texto | Padrão, Maior, Grande, Muito grande | Muda o tamanho da letra de 100% até 160% |
| Espaçamento | Normal, Amplo | Aumenta o espaço entre linhas, letras e palavras |
| Cores | Padrão, Escuro, Alto contraste | Troca o tema do site |
| Movimento | Menos movimento | Desliga transições e animações |
| Teclado | Destacar onde estou ao apertar Tab | Deixa a marcação do foco mais forte |
| Texto | Linguagem simples | Mostra a versão com frases curtas na prévia da página de Acessibilidade |
| Leitura | Ouvir este texto | Lê o texto de exemplo em voz alta, em português do Brasil |

O site também respeita a preferência de animação reduzida do dispositivo.

### Como os ajustes funcionam

1. A página de Acessibilidade salva cada escolha no `localStorage`, com as chaves `tamanho`, `espacamento`, `cores`, `movimento`, `teclado` e `simples`.
2. O arquivo `ajustes-globais.js` roda em todas as páginas, lê essas chaves e aplica o resultado:
   - o tamanho do texto vai no `font-size` do `<html>`, em porcentagem;
   - o resto vira classes no `<body>`: `amplo`, `escuro`, `contraste`, `sem-movimento` e `foco-forte`.
3. O arquivo `ajustes.css` e o `style.css` de cada página trazem as regras visuais dessas classes.

## Tecnologias

- HTML5
- CSS3, com Flexbox, Grid e media queries
- JavaScript puro, sem bibliotecas
- `localStorage` para guardar as preferências
- Web Speech API (`speechSynthesis`) para a leitura em voz alta
- Fontes do Google Fonts: Atkinson Hyperlegible Next e Poppins

## Estrutura de pastas

```
/
├── ajustes.css              estilos compartilhados (temas e ajustes)
├── ajustes-globais.js       aplica os ajustes salvos em todas as páginas
├── README.md
├── icone/
│   └── inclusai-icon.png
├── Home/
│   ├── index.html
│   ├── script.js
│   ├── css/style.css
│   └── img/                 ícones SVG dos cards de acessibilidade
├── Acessibilidade/
│   ├── acessibilidade.html
│   ├── style.css
│   └── script.js
├── Chat com Assistente - exemplo/
│   ├── chat.html
│   ├── style.css
│   └── script.js
├── Para quem foi feito/
│   ├── paraquem.html
│   ├── script.js
│   └── css/style.css
└── Login InclusAI/
    ├── login.html
    ├── style.css
    └── script.js
```

## Como executar

Não precisa instalar nada.

1. Baixe ou clone o projeto.
2. Abra a pasta no VS Code e use a extensão **Live Server** (clique direito em `Home/index.html` e depois em *Open with Live Server*).
3. Navegue pelo menu do site.

Abrir os arquivos com duplo clique também mostra o site, mas alguns navegadores guardam o `localStorage` separado para cada arquivo. Nesse caso, os ajustes não passam de uma página para a outra. Com o Live Server isso não acontece.

## Responsividade

O CSS é feito primeiro para celular, com dois pontos de quebra:

| Tela | Largura |
| --- | --- |
| Celular | até 767px (CSS base) |
| Tablet | a partir de 768px |
| PC | a partir de 1024px |

As fontes usam `rem`, para que o ajuste de tamanho do texto funcione.

## Como criar uma nova página

1. Linke o CSS da página e, **depois dele**, o `ajustes.css`:
   ```html
   <link rel="stylesheet" href="style.css" />
   <link rel="stylesheet" href="../ajustes.css" />
   ```
2. No final do `<body>`, carregue o `ajustes-globais.js` antes do script da página:
   ```html
   <script src="../ajustes-globais.js"></script>
   <script src="script.js"></script>
   ```
3. Use `rem` nos tamanhos de fonte.
4. Se a página tiver elementos com cor própria, como fundos brancos fixos, crie regras para `.escuro` e `.contraste` no CSS dela, senão esses elementos não acompanham o tema.

## Estado atual

- O assistente do chat é um **exemplo de interface**. Ainda não há integração com um modelo de IA.
- A tela de login é apenas visual, sem autenticação real.
- A opção **Linguagem simples** muda o texto de exemplo só na página de Acessibilidade.

## Equipe

Projeto desenvolvido no SENAC, turma MedioTec 1°B.
