module.exports = {
  title: 'Programming - From Base to Ace',
  description: 'CSharp Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',
  themeConfig: {
    nav: [
      {text: 'Introduction to Programming', link: '/introduction/'},
      {text: 'Object Oriented Programming', link: '/oop/'}
    ],
    sidebar: {
      '/introduction/': [
        '',
        '01_introduction_to_computer_programming/',
        '02_basic_building_blocks/'
      ],

      '/oop/': [
        '',
      ],

      // fallback
      '/': [
        '',
        '/introduction/',
        '/oop/'
      ]
    },
    sidebarDepth: 2,
    repo: 'BioBoost/programming_from_base_to_ace',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
}