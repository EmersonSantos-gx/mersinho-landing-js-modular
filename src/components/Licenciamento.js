import { LICENCIAMENTO_CATEGORIAS } from '../data/siteData.js';

export function createLicenciamento() {
  const section = document.createElement('section');
  section.id = 'licenciamento';
  section.className = 'bg-lilas';

  const cardsHtml = LICENCIAMENTO_CATEGORIAS.map((cat) => {
    const lis = cat.itens.map((item) => `<li>${item}</li>`).join('');
    return `
      <article class="card reveal">
        <div class="icon ${cat.corIcone}" aria-hidden="true">${cat.icone}</div>
        <h3>${cat.titulo}</h3>
        <ul>${lis}</ul>
      </article>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Licenciamento de produtos</span>
        <h2>Oportunidades de desenvolvimento para o universo Mersinho</h2>
        <p class="lead">
          As categorias abaixo são linhas de desenvolvimento possíveis. Os produtos ainda não estão disponíveis e serão construídos em parceria com empresas licenciadas.
        </p>
      </div>
      <div class="grid grid-2">
        ${cardsHtml}
      </div>
    </div>
  `;

  return section;
}
