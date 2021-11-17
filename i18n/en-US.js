export default {
  portfolio: {
    title: 'My Portfolio'
  },
  titles: {
    home: 'Home',
    works: 'Showcase',
    contact: 'Contact',
    blog: 'Articles',
  },
  about: {
    me: 'My name is Thiago Bastos Suchorski, I currently live in Lagoa Santa - MG, born on January 21, 1987 and I\'ve always liked programming since I was little.',
    carrer: 'I have a bachelor\'s degree in Computer Science from FUMEC University and a postgraduate degree in Mobile Application Development for Android from Unyleya University.',
    technologies: 'I\'ve always liked the backend part better but currently I develop for backend using Java Spring, for Nuxt frontend and for mobile NativeScript. But I know other languages ​​like C/C++, TypeScript and some PHP.',
    more: 'I\'m currently studying a little about Artificial Intelligence using Neural Networks.',
  },
  contact: {
    message: 'Feel free to contact me. You may be sending an email to <a href="mailto:thiago@suchorski.com">thiago@suchorski.com</a> which I will be replying to as soon as possible.',
    selling: 'I am open to complaints, suggestions, questions or budget requests.',
  },
  blog: {
    none: 'No articles found',
    read: 'Read article',
    at: {
      created: 'Created {month}, {ordinalDay} {year}',
      updated: ' and updated {month}, {ordinalDay} {year}',
    },
  },
  works: [
    {
      title: 'Zero Pane',
      subtitle: 'Java Spring & Nuxt',
      text: 'Questions and tests website for internal courses of the Brazilian Air Force.',
      mockup: 'zeropane',
      links: [
        { text: 'Link to website', href: 'https://www.zeropane.com.br/' },
      ],
    },
    {
      title: 'Wine Challenge',
      subtitle: 'Java Spring & Nuxt',
      text: 'Website containing Wine\'s challenge questions for consultation.',
      mockup: 'wine',
      links: [
        { text: 'Link to website', href: 'https://wine.suchorski.com/' },
        { text: 'Source code (Backend)', href: 'https://github.com/suchorski/Wine-Backend/' },
        { text: 'Source code (Frontend)', href: 'https://github.com/suchorski/Wine-Frontend/' },
      ],
    },
    {
      title: 'Chess Clock',
      subtitle: 'NativeScript',
      text: 'Open source app that simulates a chess clock made in NativeScript for iOS and Android.',
      mockup: 'chessclock',
      links: [
        { text: 'Link to Play Store', href: 'https://play.google.com/store/apps/details?id=com.suchorski.apps.chessclock' },
        { text: 'Source code', href: 'https://github.com/suchorski/chessclock' },
      ],
    },
    {
      title: 'ZapBOT',
      subtitle: 'Java Spring & VueJS',
      text: 'Open source bot for use in Discord guilds full of features and functionality.',
      mockup: 'zapbot',
      links: [
        { text: 'Link to website', href: 'https://zapbot.page/' },
        { text: 'Source code', href: 'https://github.com/suchorski/ZapBOT' },
      ],
    },
    {
      title: 'Neural Networks',
      subtitle: 'Java',
      text: 'Set of classes for implementing Neural Networks.',
      mockup: 'neuralnetworks',
      links: [
        { text: 'Source code', href: 'https://github.com/suchorski/RedeNeuralSimples' },
        { text: 'Project using this library', href: 'https://github.com/suchorski/JoguinhoLegal' },
      ],
    },
  ],
}