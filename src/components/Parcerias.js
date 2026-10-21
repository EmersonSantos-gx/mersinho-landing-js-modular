import { PARCERIAS_COTAS } from '../data/siteData.js';

export function createParcerias() {
  const section = document.createElement('section');
  section.id = 'parcerias';
  section.className = 'bg-azul';

  const cardsHtml = PARCERIAS_COTAS.map((cota) => {
    const lis = cota.itens.map((item) => `<li>${item}</li>`).join('');
    return `
      <article class="card reveal">
        <span class="badge">${cota.badge}</span>
        <h3>${cota.titulo}</h3>
        <ul>${lis}</ul>
        <a href="#contato" class="${cota.ctaClasse}">${cota.ctaTexto}</a>
      </article>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Formas de parceria</span>
        <h2>Escolha a modalidade que faz sentido para sua marca</h2>
        <p class="lead">
          Três formatos de participação, pensados para diferentes portes e objetivos. Os valores e condições são definidos caso a caso.
        </p>
      </div>
      <div class="grid grid-3">
        ${cardsHtml}
      </div>
      <div class="reveal" style="text-align: center; margin-top: 2.5rem;">
        <p class="lead" style="margin: 0 auto;">
          Quer entender qual modalidade combina com a sua empresa? Conversamos sobre disponibilidade, escopo e condições.
        </p>
        <div class="btn-group" style="justify-content: center;">
          <a href="#contato" class="btn btn-primary">Converse sobre parceria</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
