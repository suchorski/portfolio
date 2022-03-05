export default {
  portfolio: {
    title: 'Meu Portfólio',
  },
  titles: {
    home: 'Início',
    works: 'Trabalhos',
    contact: 'Contato',
  },
  about: {
    me: 'Me chamo Thiago Bastos Suchorski, atualmente moro em Lagoa Santa - MG, nascido em 21 de Janeiro de 1987 e sempre gostrei de programar desde pequeno.',
    carrer: 'Sou bacharel em Ciência da Computação pela Universidade FUMEC e pós-graduado em Desenvolvimento de Aplicações Móveis para Android pela Universidade Unyleya.',
    technologies: 'Sempre gostei mais da parte do backend mas atualmente desenvolvo para backend utilizando Java Spring, para frontend Nuxt e para mobile NativeScript. Porém conheço outras linguagens como C/C++, TypeScript e um pouco de PHP.',
    more: 'Atualmente estou estudando um pouco sobre Inteligência Artificial utilizando Redes Neurais.',
  },
  contact: {
    message: 'Sinta-se livre para me contatar. Você pode estar enviando um email para <a href="mailto:thiago@suchorski.com">thiago@suchorski.com</a> que estarei respondendo assim que possível.',
    selling: 'Estou aberto para reclamações, sugestões, dúvidas ou solicitações de orçamento.',
  },
  works: [
    {
      title: 'Rommanel Ponto Descontos',
      subtitle: 'Java Spring & Nuxt',
      text: 'Site para revenda de produtos Rommanel.',
      mockup: 'rommanel',
      links: [
        { text: 'Link para o site', href: 'https://www.rommanelpontodescontos.com.br/' },
      ],
    },
    {
      title: 'Desafios da Wine',
      subtitle: 'Java Spring & Nuxt',
      text: 'Site para responder as questões da Wine automaticamente.',
      mockup: 'wine',
      links: [
        { text: 'Link para o site', href: 'https://wine.suchorski.com/' },
      ],
    },
    {
      title: 'Zero Pane',
      subtitle: 'Java Spring & Nuxt',
      text: 'Site de questões e provas para cursos internos da Força Aérea Brasileira.',
      mockup: 'zeropane',
      links: [
        { text: 'Link para o site', href: 'https://www.zeropane.com.br/' },
      ],
    },
    {
      title: 'Relógio de Xadrez',
      subtitle: 'NativeScript',
      text: 'Aplicativo de código aberto que simula um relógio de xadrez feito em NativeScript para iOS e Android.',
      mockup: 'chessclock',
      links: [
        { text: 'Link para Play Store', href: 'https://play.google.com/store/apps/details?id=com.suchorski.apps.chessclock' },
        { text: 'Código Fonte', href: 'https://github.com/suchorski/chessclock' },
      ],
    },
    {
      title: 'ZapBOT',
      subtitle: 'Java Spring & VueJS',
      text: 'Bot de código aberto para utilização em guildas do Discord repleto de recursos e funcionalidades.',
      mockup: 'zapbot',
      links: [
        { text: 'Link para o site', href: 'https://zapbot.page/' },
        { text: 'Código Fonte', href: 'https://github.com/suchorski/ZapBOT' },
      ],
    },
    {
      title: 'Redes Neurais',
      subtitle: 'Java',
      text: 'Conjunto de classes para implementação de Redes Neurais.',
      mockup: 'neuralnetworks',
      links: [
        { text: 'Código Fonte', href: 'https://github.com/suchorski/RedeNeuralSimples' },
        { text: 'Projeto utilizando a biblioteca', href: 'https://github.com/suchorski/JoguinhoLegal' },
      ],
    },
  ],
}