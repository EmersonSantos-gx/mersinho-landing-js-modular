export function createContato() {
  const section = document.createElement('section');
  section.id = 'contato';
  section.className = 'bg-creme';

  section.innerHTML = `
    <div class="container">
      <div class="final reveal">
        <span class="eyebrow">Fale conosco</span>
        <h2>Vamos construir impacto juntos?</h2>
        <p class="lead">
          Empresas e instituições são convidadas a apresentar ideias de parceria, patrocínio, licenciamento ou ativações. Conte um pouco sobre sua organização e o que deseja realizar.
        </p>
        <div class="btn-group" style="justify-content: center;">
          <a href="#contato" class="btn btn-primary" id="btn-contato">Fale com a equipe</a>
        </div>
        <p class="note">Canal de contato a ser definido pela equipe do projeto.</p>
      </div>
    </div>
  `;

  return section;
}
