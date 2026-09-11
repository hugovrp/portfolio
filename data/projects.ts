export interface ProjectProps {
  gallery: string[];
  name: string;
  description: string;
  modalDescription: string;
  topics: string[];
  link: string;
  highlights: string[];
}

export const projects = [
  {
    gallery: [
      '/projects/hub-cultural/home.png',
      '/projects/hub-cultural/home-port.png', 
      '/projects/hub-cultural/about.png', 
      '/projects/hub-cultural/about2.png', 
      '/projects/hub-cultural/nucleus.png', 
      '/projects/hub-cultural/nucleo-page.png', 
      '/projects/hub-cultural/form-cont.png'
    ],
    name: 'Hub Cultural',
    description:
      'Site institucional desenvolvido com Next.js para apresentar projetos, iniciativas e conteúdos de uma organização cultural.',
    modalDescription:
      'Site institucional desenvolvido com Next.js e Sanity para uma organização fictícia voltada à cultura e ao desenvolvimento comunitário. O projeto possui uma interface moderna e responsiva, com páginas institucionais, projetos, núcleos e biblioteca de materiais gerenciados pelo Sanity CMS.',
    topics: ['Next.js', 'Sanity', 'Typescript'],
    link: 'https://hub-cultural.netlify.app/',
    highlights: [
      'Layout responsivo e moderno', 
      'Integração com o Sanitt CMS',
      'Seções dinâmicas de projetos, núcleos e biblioteca',
      'Formulário sem backend dedicado com antispam.'
    ],
  },
];