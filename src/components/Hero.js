import { HERO_DATA } from '../data/siteData.js';

export function createHero() {
  const section = document.createElement('section');
  section.className = 'hero bg-creme';
  section.id = 'inicio';

  const tagsHtml = HERO_DATA.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join('');

  section.innerHTML = `
    <div class="blob blob-1" aria-hidden="true"></div>
    <div class="blob blob-2" aria-hidden="true"></div>
    <div class="blob blob-3" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div>
        <span class="eyebrow">${HERO_DATA.eyebrow}</span>
        <h1>${HERO_DATA.titulo}</h1>
        <p class="lead" style="margin-top: 1.2rem;">${HERO_DATA.descricao}</p>
        <div class="btn-group">
          <a href="#projeto" class="btn btn-primary">Conheça o projeto</a>
          <a href="#parcerias" class="btn btn-outline">Converse sobre parceria</a>
        </div>
        <div class="tags" aria-label="Temas do projeto">
          ${tagsHtml}
        </div>
      </div>
      <figure class="reveal hero-figure">
        <img
          class="hero-art"
          src="${HERO_DATA.imagem}"
          alt="${HERO_DATA.imagemAlt}"
          loading="eager"
        >
        <figcaption class="muted" style="text-align: center; margin-top: 0.8rem;">
          ${HERO_DATA.legenda}
        </figcaption>
      </figure>
    </div>
  `;

  return section;
}
