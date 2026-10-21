/**
 * Conteúdos estáticos das seções — As Aventuras de Mersinho
 */
export const MENU_LINKS = [
  { href: '#projeto', label: 'O projeto' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#parcerias', label: 'Parcerias' },
  { href: '#licenciamento', label: 'Licenciamento' },
  { href: '#edicoes', label: 'Edições' },
  { href: '#patrocinadores', label: 'Patrocinadores' },
  { href: '#contato', label: 'Contato' }
];

export const HERO_DATA = {
  eyebrow: 'Educação · Histórias · Impacto social',
  titulo: 'Boas histórias podem transformar realidades.',
  descricao:
    'Mersinho é um garoto de 10 anos, inteligente, curioso e solidário, que vive na periferia e se conecta com crianças e comunidades por meio de histórias, educação e ações acessíveis.',
  tags: ['Comunidade', 'Educação', 'Saúde', 'Letramento digital'],
  imagem: './assets/img/heromersinho.png',
  imagemAlt:
    'Ilustração oficial de A Turma Mersinho: Mersinho, um menino, caminha de braços dados com um senhor idoso em um parque ensolarado, enquanto outras crianças imaginam ser médico, engenheiro, professor e profissional de tecnologia. Balão com a frase: posso ser o que eu quiser.',
  legenda: 'Mersinho, o personagem de As Aventuras de Mersinho.'
};

export const PROJETO_CARDS = [
  {
    icone: '💬',
    corIcone: 'i-azul',
    titulo: 'Comunicação com respeito',
    texto: 'Histórias que tratam o público com dignidade, linguagem inclusiva e sem estereótipos.'
  },
  {
    icone: '🤝',
    corIcone: 'i-verde',
    titulo: 'Ponte entre marcas e comunidades',
    texto: 'Um canal para que empresas e instituições dialoguem com as comunidades de forma legítima e transparente.'
  },
  {
    icone: '🌱',
    corIcone: 'i-amarelo',
    titulo: 'Propósito a longo prazo',
    texto: 'Um personagem que cresce junto com seu público, com conteúdos que podem acompanhar diferentes fases da infância.'
  }
];

export const IMPACTO_CARDS = [
  {
    icone: '🏘️',
    corIcone: 'i-azul',
    titulo: 'Responsabilidade comunitária',
    texto: 'Ações de proximidade que valorizam os bairros, seus moradores e suas iniciativas locais.'
  },
  {
    icone: '📚',
    corIcone: 'i-amarelo',
    titulo: 'Educação',
    texto: 'Incentivo à leitura, ao pensamento crítico, ao letramento digital e à educação financeira infantil.'
  },
  {
    icone: '💚',
    corIcone: 'i-pessego',
    titulo: 'Saúde',
    texto: 'Informação preventiva básica e incentivo a hábitos positivos, como alimentação saudável e higiene.'
  }
];

export const PARCERIAS_COTAS = [
  {
    badge: 'Exclusiva por setor',
    titulo: 'Cota Master',
    itens: [
      'Presença nas mídias do projeto',
      'Destaque na Caravana Oficial',
      'Possibilidade de três pílulas animadas exclusivas por ano'
    ],
    ctaTexto: 'Quero a Cota Master',
    ctaClasse: 'btn btn-primary'
  },
  {
    badge: 'Até três parceiros',
    titulo: 'Cota Apoio',
    itens: [
      'Presença em materiais impressos',
      'Créditos em conteúdos digitais',
      'Direitos de uso de imagem conforme negociação'
    ],
    ctaTexto: 'Quero a Cota Apoio',
    ctaClasse: 'btn btn-outline'
  },
  {
    badge: 'Segmentada por tema',
    titulo: 'Cota Setorial',
    itens: [
      'Ações temáticas específicas, como saúde ou educação financeira',
      'Participação segmentada por tema'
    ],
    ctaTexto: 'Quero a Cota Setorial',
    ctaClasse: 'btn btn-outline'
  }
];

export const LICENCIAMENTO_CATEGORIAS = [
  {
    icone: '🧪',
    corIcone: 'i-azul',
    titulo: 'Educação e tecnologia',
    itens: [
      'Materiais escolares com foco em STEM',
      'Kits de robótica popular',
      'Histórias em quadrinhos',
      'Materiais sobre letramento digital e educação financeira infantil'
    ]
  },
  {
    icone: '🥦',
    corIcone: 'i-verde',
    titulo: 'Saúde e bem-estar',
    itens: [
      'Produtos de higiene infantil',
      'Iniciativas de nutrição saudável',
      'Foco em acessibilidade e hábitos positivos'
    ]
  }
];

export const CONTEUDO_CARDS = [
  {
    icone: '🎬',
    corIcone: 'i-amarelo',
    titulo: 'Pílulas digitais',
    texto: 'Vídeos curtos e divertidos para TikTok e YouTube que explicam temas do cotidiano de forma leve e acessível.'
  },
  {
    icone: '🎭',
    corIcone: 'i-lilas',
    titulo: 'Caravana do Emersinho',
    texto: 'Uma proposta itinerante com teatro, ações preventivas básicas e oficinas de leitura nos bairros.'
  }
];

export const PRINCIPIOS_LISTA = [
  { tipo: 'x', simbolo: '✕', texto: 'Não aceitamos parcerias com jogos de azar e apostas.' },
  { tipo: 'x', simbolo: '✕', texto: 'Não aceitamos parcerias com alimentos ultraprocessados.' },
  { tipo: 'x', simbolo: '✕', texto: 'Não aceitamos propaganda partidária.' },
  { tipo: 'check', simbolo: '✓', texto: 'Neutralidade política e compromisso com o bem-estar infantil e comunitário.' }
];
