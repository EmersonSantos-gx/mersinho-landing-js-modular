/**
 * Utilitário auxiliar para criação de elementos DOM com segurança (sem innerHTML)
 */
export function criarEl(tag, className = '', textContent) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent !== undefined) el.textContent = textContent;
  return el;
}
