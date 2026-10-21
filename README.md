# As Aventuras de Mersinho — Landing de Parceiros (JavaScript Modular)

Projeto da landing page **As Aventuras de Mersinho** estruturado em **JavaScript Puro (ES Modules)** com componentes e folhas de estilo separados, pronto para edição no **VS Code**.

## Estrutura de Pastas

```text
mersinho-landing-js-modular/
├── index.html                  # Documento principal que carrega os estilos e o src/main.js
├── package.json                # Script opcional com Vite (também funciona direto com Live Server)
├── assets/
│   └── img/                    # Imagens da página (Hero, Capa da Edição Nº 1 e Logo GXcodev)
└── src/
    ├── main.js                 # Ponto de entrada que monta todos os componentes na página
    ├── styles/
    │   ├── main.css            # Importa todos os módulos de estilo
    │   ├── variables.css       # Paleta de cores, fontes e variáveis CSS (:root)
    │   ├── base.css            # Reset, tipografia, containers e utilitários
    │   ├── components.css      # Estilos dos botões, header, hero, cards, galeria e rodapé
    │   └── responsive.css      # Media queries (mobile/tablet) e acessibilidade
    ├── data/
    │   ├── siteData.js         # Textos e listas das seções da landing page
    │   ├── edicoes.js          # Array EDICOES com dados das edições e roteiro do gibi
    │   └── patrocinadores.js   # Lista de patrocinadores e cotas
    ├── utils/
    │   ├── dom.js              # Função utilitária criarEl() para criação segura de nós DOM
    │   └── reveal.js           # IntersectionObserver para animação suave (.reveal)
    └── components/
        ├── Header.js           # Cabeçalho fixo e menu mobile responsivo
        ├── Hero.js             # Seção inicial com chamada principal e ilustração
        ├── Projeto.js          # Seção "O projeto"
        ├── Impacto.js          # Seção "Impacto social" + quadro ESG/ODS
        ├── Parcerias.js        # Seção "Formas de parceria" (Cotas Master, Apoio, Setorial)
        ├── Licenciamento.js    # Seção "Licenciamento de produtos"
        ├── Conteudo.js         # Seção "Conteúdo e ativações" (Pílulas e Caravana)
        ├── Principios.js       # Seção "Princípios de parceria"
        ├── Edicoes.js          # Galeria interativa de edições e painel de destaque
        ├── Patrocinadores.js   # Seção "Quem apoia o Mersinho"
        ├── Contato.js          # Chamada final de contato
        └── Footer.js           # Rodapé
```

## Como executar no VS Code

### Opção 1 — Com a extensão Live Server (sem precisar instalar pacotes)
1. Extraia o arquivo `.zip` e abra a pasta no **VS Code** (`File > Open Folder...`).
2. Clique com o botão direito sobre o arquivo `index.html` e selecione **"Open with Live Server"** (ou clique em **Go Live** na barra inferior do VS Code).

### Opção 2 — Com Node.js / Vite pelo Terminal do VS Code
1. Abra o terminal integrado do VS Code (`Ctrl + '` ou `Ctrl + Shift + '`).
2. Execute:
   ```bash
   npm install
   npm run dev
   ```
3. Acesse o link local exibido no terminal (ex.: `http://localhost:5173`).

## Como substituir as imagens oficiais
Coloque os arquivos de imagem originais (`.png`, `.jpg` ou `.webp`) dentro da pasta `assets/img/` e atualize os caminhos nos arquivos de dados:
- **Ilustração do Hero**: `src/data/siteData.js` (`HERO_DATA.imagem`)
- **Capa da Edição Nº 1**: `src/data/edicoes.js` (`EDICOES[0].capa`)
- **Logo GXcodev**: `src/data/patrocinadores.js` (`PATROCINADORES[0].logo`)
