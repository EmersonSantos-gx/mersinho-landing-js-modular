import { PROJETO_CARDS } from '../data/siteData.js';

export function createProjeto() {
  const section = document.createElement('section');
  section.id = 'projeto';
  section.className = 'bg-branco';

  const cardsHtml = PROJETO_CARDS.map(
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
        <span class="eyebrow">O projeto</span>
        <h2>Mais que um mascote, uma forma humana de se comunicar</h2>
        <p class="lead">
          Mersinho é uma plataforma de comunicação humanizada que aproxima marcas e instituições das comunidades com respeito e legitimidade. Em vez de apenas aparecer, o projeto convida à escuta, ao aprendizado e à construção de confiança com crianças, famílias e educadores.
        </p>
      </div>
      <div class="grid grid-3">
        ${cardsHtml}
      </div>
    </div>
  `;

  return section;
}
