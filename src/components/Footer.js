export function createFooter() {
  const footer = document.createElement('footer');

  footer.innerHTML = `
    <div class="container">
      <p><strong>As Aventuras de Mersinho</strong></p>
      <p class="muted">Boas histórias podem transformar realidades.</p>
      <p class="muted" style="margin-top: 1rem;"><a href="#inicio">Voltar ao topo</a></p>
    </div>
  `;

  return footer;
}
