/**
 * Ponto de entrada principal (ES Modules) — As Aventuras de Mersinho
 * Monta todos os componentes da página em ordem e ativa as animações de rolagem.
 */
import { createHeader } from './components/Header.js';
import { createHero } from './components/Hero.js';
import { createProjeto } from './components/Projeto.js';
import { createImpacto } from './components/Impacto.js';
import { createParcerias } from './components/Parcerias.js';
import { createLicenciamento } from './components/Licenciamento.js';
import { createConteudo } from './components/Conteudo.js';
import { createPrincipios } from './components/Principios.js';
import { createEdicoes } from './components/Edicoes.js';
import { createPatrocinadores } from './components/Patrocinadores.js';
import { createContato } from './components/Contato.js';
import { createFooter } from './components/Footer.js';
import { initRevealObserver } from './utils/reveal.js';

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.textContent = '';

  const header = createHeader();
  const main = document.createElement('main');

  main.append(
    createHero(),
    createProjeto(),
    createImpacto(),
    createParcerias(),
    createLicenciamento(),
    createConteudo(),
    createPrincipios(),
    createEdicoes(),
    createPatrocinadores(),
    createContato()
  );

  const footer = createFooter();

  app.append(header, main, footer);

  // Inicializa o IntersectionObserver para revelar os cards suavemente ao rolar
  initRevealObserver(app);
}

document.addEventListener('DOMContentLoaded', initApp);
