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
  {
    gallery: [
      '/projects/cao-q-late/home.jpg',
      '/projects/cao-q-late/dashboard.jpg',
      '/projects/cao-q-late/home-services.jpg',
      '/projects/cao-q-late/home-provision_services.jpg',
      '/projects/cao-q-late/report.jpg',
    ],
    name: 'Cão Q-Late',
    description:
      'Sistema web desenvolvido em Java para gerenciar clientes, pets, serviços, agendamentos e o controle financeiro de petshops.',
    modalDescription:
      'Sistema de gerenciamento para petshops desenvolvido em Java, com funcionalidades para cadastro de clientes e pets, controle de serviços, agendamentos e gestão financeira. O projeto conta com validação de disponibilidade, aplicação automática de descontos e relatórios de atendimentos, oferecendo uma solução completa para a administração do negócio.',
    topics: ['Java', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/hugovrp/cao-q-late',
    highlights: [
      'Gestão de clientes, pets, serviços e agendamentos.',
      'Aplicação automática de descontos e regras de negócio.',
      'Relatórios financeiros e histórico completo de atendimentos.',
      'Arquitetura MVC com Java, PostgreSQL e Apache Tomcat.'
    ],
  },
  {
    gallery: [
      '/projects/weather-forecast/weather1.png',
      '/projects/weather-forecast/weather2.png'
    ],
    name: 'Weather Forecast',
    description:
      'Aplicação web moderna e responsiva para consulta de previsão do tempo em tempo real, utilizando a API do OpenWeatherMap.',
    modalDescription:
      'Projeto desenvolvido para fornecer informações meteorológicas detalhadas de qualquer cidade do mundo. Com uma interface intuitiva e design responsivo, o usuário pode consultar temperatura, umidade, velocidade do vento, nascer e pôr do sol, além de outras informações relevantes.',
    topics: ['JavaScript', 'HTML / CSS', 'Bootstrap'],
    link: 'https://github.com/hugovrp/weather-forecast',
    highlights: [
      'Histórico de busca de cidades com armazenamento local.', 
      'Integração com a API do OpenWeatherMap.',
      'Tema dinâmico baseado na condição climática.',
      'Design responsivo e moderno.'
    ],
  },
  {
    gallery: ['/projects/tsi-rpc/interface.png'],
    name: 'TSI-RPC',
    description:
      'Sistema distribuído desenvolvido em Python para execução remota de operações matemáticas, utilizando múltiplos servidores, cache inteligente e integração com IA.',
    modalDescription:
      'Sistema distribuído desenvolvido em Python com arquitetura multi-servidor para processamento remoto de operações matemáticas. O projeto utiliza um Name Server para descoberta automática de serviços, cache multinível para otimização de desempenho e uma interface gráfica inspirada em calculadoras reais. Também integra o Google Gemini para resolução de problemas matemáticos em linguagem natural.',
    topics: ['Python', 'RPC', 'TCP / UDP'],
    link: 'https://github.com/hugovrp/tsi-rpc',
    highlights: [
      'Arquitetura RPC distribuída com múltiplos servidores.',
      'Processamento paralelo utilizando multiprocessing.',
      'Cache em memória e disco com tolerância a falhas.',
      'Integração com IA e web scraping em tempo real.'
    ],
  },
];