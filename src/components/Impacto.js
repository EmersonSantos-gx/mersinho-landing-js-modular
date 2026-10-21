import { IMPACTO_CARDS } from '../data/siteData.js';

export function createImpacto() {
  const section = document.createElement('section');
  section.id = 'impacto';
  section.className = 'bg-verde';

  const cardsHtml = IMPACTO_CARDS.map(
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
        <span class="eyebrow">Impacto social</span>
        <h2>Três frentes de responsabilidade comunitária</h2>
        <p class="lead">
          O projeto se organiza em torno de educação, saúde e cidadania, em ações pensadas para o dia a dia das comunidades.
        </p>
      </div>
      <div class="grid grid-3">
        ${cardsHtml}
      </div>
      <div class="esg-box reveal">
        <h3>Alinhamento com ESG e os ODS da ONU</h3>
        <p>
          As frentes do projeto dialogam com o pilar Social (S) da agenda ESG e com Objetivos de Desenvolvimento Sustentável da ONU, como <strong>Educação de Qualidade</strong> e <strong>Saúde e Bem-Estar</strong>. Trata-se de alinhamento temático: o projeto não possui certificações nem resultados de impacto que sejam apresentados aqui como comprovados.
        </p>
      </div>
    </div>
  `;

  return section;
}
