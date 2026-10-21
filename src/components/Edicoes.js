import { EDICOES } from '../data/edicoes.js';
import { criarEl } from '../utils/dom.js';

export function createEdicoes() {
  const section = document.createElement('section');
  section.id = 'edicoes';
  section.className = 'bg-amarelo';

  section.innerHTML = `
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Edições</span>
        <h2>Galeria de edições</h2>
        <p class="lead">
          Conheça as edições do Mersinho. A edição atual aparece em destaque, e as próximas serão incluídas nesta galeria.
        </p>
      </div>
      <div id="galeria" class="galeria" aria-label="Galeria de edições"></div>
      <article id="painel-edicao" class="destaque-edicao visible" aria-live="polite"></article>
    </div>
  `;

  const galeriaEl = section.querySelector('#galeria');
  const painelEl = section.querySelector('#painel-edicao');

  const ordenadas = EDICOES.slice().sort((a, b) => b.numero - a.numero);
  const edAtual = EDICOES.find((e) => e.atual) || ordenadas[0];
  let selecionada = edAtual;

  function renderPainel(ed) {
    painelEl.textContent = '';
    if (!ed) {
      painelEl.hidden = true;
      return;
    }
    painelEl.hidden = false;

    const figure = criarEl('figure', 'destaque-capa');
    if (ed.capa) {
      const img = criarEl('img');
      img.src = ed.capa;
      img.alt = ed.capaAlt || `Capa da Edição Nº${ed.numero}`;
      img.loading = 'lazy';
      figure.appendChild(img);
    } else {
      figure.appendChild(criarEl('div', 'capa-placeholder', `Nº ${ed.numero}`));
    }
    figure.appendChild(criarEl('figcaption', 'muted', `Capa da Edição Nº${ed.numero}`));

    const info = criarEl('div', 'destaque-info');
    info.appendChild(criarEl('span', 'eyebrow', ed.atual ? 'Edição atual' : 'Edição anterior'));
    info.appendChild(criarEl('h3', '', `Mersinho, Edição Nº${ed.numero}`));

    const dl = criarEl('dl', 'ed-dados');
    [
      ['Número', `Nº ${ed.numero}`],
      ['Ano', ed.ano],
      ['Lançamento', ed.lancamento],
      ['Tema', ed.tema]
    ].forEach(([k, v]) => {
      if (!v) return;
      const div = criarEl('div');
      div.append(criarEl('dt', '', k), criarEl('dd', '', v));
      dl.appendChild(div);
    });
    info.appendChild(dl);

    if (ed.sobre) {
      info.appendChild(criarEl('h4', '', 'Sobre a edição'));
      info.appendChild(criarEl('p', '', ed.sobre));
    }

    if (ed.roteiro && ed.roteiro.length) {
      info.appendChild(criarEl('h4', '', 'Roteiro do gibi'));
      const ol = criarEl('ol');
      ed.roteiro.forEach((item) => {
        const li = criarEl('li');
        if (typeof item === 'string') {
          li.textContent = item;
        } else {
          if (item.titulo) li.appendChild(criarEl('strong', '', `${item.titulo}: `));
          li.appendChild(document.createTextNode(item.texto || ''));
        }
        ol.appendChild(li);
      });
      info.appendChild(ol);
    }

    if (ed.roteiroNota) {
      info.appendChild(criarEl('p', 'roteiro-nota', ed.roteiroNota));
    }

    painelEl.append(figure, info);
  }

  function renderGaleria() {
    galeriaEl.textContent = '';
    ordenadas.forEach((ed) => {
      const btn = criarEl('button', `galeria-item${ed === edAtual ? ' is-atual' : ''}`);
      btn.type = 'button';
      btn.setAttribute('aria-pressed', String(ed === selecionada));
      btn.setAttribute(
        'aria-label',
        `Edição Nº${ed.numero}${ed === edAtual ? ', edição atual' : ''}`
      );

      if (ed === edAtual) {
        btn.appendChild(criarEl('span', 'selo', 'Edição atual'));
      }

      if (ed.capa) {
        const img = criarEl('img');
        img.src = ed.capa;
        img.alt = '';
        img.loading = 'lazy';
        btn.appendChild(img);
      } else {
        btn.appendChild(criarEl('div', 'galeria-thumb', `Nº ${ed.numero}`));
      }

      btn.appendChild(criarEl('strong', '', `Nº ${ed.numero}`));
      btn.appendChild(criarEl('span', 'muted', ed.tema || ''));

      btn.addEventListener('click', () => {
        selecionada = ed;
        renderGaleria();
        renderPainel(ed);
      });

      galeriaEl.appendChild(btn);
    });

    const breve = criarEl('div', 'galeria-em-breve');
    breve.append(
      criarEl('strong', '', 'Próximas edições'),
      criarEl('span', 'muted', 'Em breve')
    );
    galeriaEl.appendChild(breve);
  }

  renderGaleria();
  renderPainel(selecionada);

  return section;
}
