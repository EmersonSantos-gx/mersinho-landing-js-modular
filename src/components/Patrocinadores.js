import { PATROCINADORES } from '../data/patrocinadores.js';

export function createPatrocinadores() {
  const section = document.createElement('section');
  section.id = 'patrocinadores';
  section.className = 'bg-branco';

  const cardsHtml = PATROCINADORES.map((p) => {
    const topoHtml = p.logo
      ? `<div class="patro-logo"><img src="${p.logo}" alt="${p.logoAlt || p.nome}" loading="lazy"></div>`
      : `<div class="logo-fake" aria-hidden="true">${p.sigla || ''}</div>`;

    const rodapeHtml = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener" class="btn btn-outline">${p.linkTexto || 'Visitar página'}</a>`
      : `<p>${p.descricao || ''}</p>`;

    return `
      <article class="card reveal">
        ${topoHtml}
        <span class="badge">${p.cota}</span>
        <h3>${p.nome}</h3>
        <p class="muted">Setor: ${p.setor}</p>
        ${rodapeHtml}
      </article>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Patrocinadores</span>
        <h2>Quem apoia o Mersinho</h2>
        <p class="lead">
          Empresas e instituições que acreditam em boas histórias e impacto social.
        </p>
      </div>
      <div class="grid grid-3">
        ${cardsHtml}
      </div>
      <p class="patro-nota">
        Os demais cards são exemplos fictícios para ilustrar o layout. Substituir pelos logotipos e nomes de patrocinadores confirmados.
      </p>
    </div>
  `;

  return section;
}
