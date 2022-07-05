export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c44095abadbf0b0eb59b27',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uxncrjg2',
                  apiId: 'ec24c914-f17a-4336-904c-3be00eb4a83f'
                },
                {
                  buildHookId: '62c44096bf92010e38a4cb7a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8tncax4j',
                  apiId: '3718e3a6-4059-40ff-a6f3-c48d84a30515'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/newtswys/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8tncax4j.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
