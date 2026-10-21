import { CONTEUDO_CARDS } from '../data/siteData.js';

export function createConteudo() {
  const section = document.createElement('section');
  section.id = 'conteudo';
  section.className = 'bg-creme';

  const cardsHtml = CONTEUDO_CARDS.map(
    (c) => `
      <article class="card reveal">
        <div class="icon ${c.corIcone}" aria-hidden="true">${c.icone}</div>
        <h3>${c.titulo}</h3>
        <p>${c.texto}</p>
      </article>
    `
  ).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Conteúdo e ativações</span>
        <h2>Histórias que circulam onde as crianças estão</h2>
        <p class="lead">
          Formatos curtos para o digital e uma proposta itinerante para os bairros.
        </p>
      </div>
      <div class="grid grid-2">
        ${cardsHtml}
      </div>
    </div>
  `;

  return section;
}
