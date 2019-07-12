module.exports = {
  title: 'Programming - From Base to Ace',
  description: 'CSharp Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',
  themeConfig: {
    nav: [
      {text: 'Introduction to Programming', link: '/introduction/'},
      {text: 'Object Oriented Programming', link: '/oop/'}
    ],
    displayAllHeaders: true,
    sidebar: 'auto',
    repo: 'BioBoost/programming_from_base_to_ace',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
}