import { PRINCIPIOS_LISTA } from '../data/siteData.js';

export function createPrincipios() {
  const section = document.createElement('section');
  section.id = 'principios';
  section.className = 'bg-branco';

  const itensHtml = PRINCIPIOS_LISTA.map(
    (item) => `
      <li>
        <span class="${item.tipo}" aria-hidden="true">${item.simbolo}</span>
        <span>${item.texto}</span>
      </li>
    `
  ).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Princípios de parceria</span>
        <h2>Compromissos que orientam cada parceria</h2>
        <p class="lead">
          Para proteger a credibilidade do projeto e o bem-estar das crianças, algumas categorias não são aceitas.
        </p>
      </div>
      <ul class="principles reveal">
        ${itensHtml}
      </ul>
    </div>
  `;

  return section;
}
