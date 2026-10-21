import { MENU_LINKS } from '../data/siteData.js';

export function createHeader() {
  const header = document.createElement('header');

  const linksHtml = MENU_LINKS.map(
    (item) => `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('');

  header.innerHTML = `
    <div class="container nav">
      <a href="#inicio" class="logo" aria-label="As Aventuras de Mersinho, início">
        <span class="logo-mark" aria-hidden="true">📖</span>
        <span class="logo-text">As Aventuras<br>de Mersinho</span>
      </a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu">☰</button>
      <nav aria-label="Principal">
        <ul class="menu" id="menu">
          ${linksHtml}
          <li><a href="#parcerias" class="btn btn-primary">Seja parceiro</a></li>
        </ul>
      </nav>
    </div>
  `;

  const toggle = header.querySelector('.menu-toggle');
  const menu = header.querySelector('#menu');

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.textContent = open ? '✕' : '☰';
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      toggle.textContent = '☰';
    });
  });

  return header;
}
