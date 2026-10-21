/**
 * Dados das Edições — As Aventuras de Mersinho
 * Para incluir uma nova edição, adicione um novo objeto ao array EDICOES.
 * Marque `atual: true` em apenas uma edição para destacá-la na galeria.
 */
export const EDICOES = [
  {
    numero: 1,
    ano: 'Ano 1',
    lancamento: 'Outubro de 2026',
    tema: 'Cuidados ao utilizar o celular',
    atual: true,
    // Substitua pelo caminho da imagem oficial (ex: './assets/img/capa-edicao-1.png')
    capa: './assets/img/capa-edicao-1.svg',
    capaAlt:
      'Capa da Edição Nº1 de Mersinho: o personagem sentado em um banco de praça, sorrindo enquanto usa o celular, com ícones sobre proteger os olhos, equilibrar o tempo, pensar antes de compartilhar e manter a privacidade.',
    sobre:
      'Nesta primeira edição, o Mersinho conversa com crianças e famílias sobre o uso consciente do celular. Sem proibir nem demonizar a tecnologia, a história mostra que o aparelho é uma ferramenta: pode ajudar a aprender e a se conectar, desde que haja moderação, atenção à saúde dos olhos, equilíbrio com estudos, amizades e descanso, e cuidado com a privacidade e com o que é compartilhado.',
    roteiro: [
      {
        titulo: 'Abertura',
        texto:
          'Mersinho aparece em um parque, sentado em um banco ao lado da mochila, usando o celular com alegria.'
      },
      {
        titulo: 'Os cuidados',
        texto:
          'quatro ideias ilustradas: proteger os olhos, equilibrar o tempo, pensar antes de compartilhar e manter a privacidade.'
      },
      {
        titulo: 'A ferramenta',
        texto:
          'o celular aparece como apoio aos estudos, às amizades e aos sonhos, sem substituí-los.'
      },
      {
        titulo: 'Fechamento',
        texto:
          'a mensagem de que a tecnologia é boa quando é usada com responsabilidade.'
      }
    ],
    roteiroNota:
      'Roteiro sugerido a partir da capa, ajustável conforme o fechamento final da edição.'
  }
];
