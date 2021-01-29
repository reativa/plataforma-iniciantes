// https://reativa.dev/images/logo-light.png
// https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/83652091_136284957845200_8237786461009608704_n.png?_nc_cat=109&_nc_ohc=BC9ilU71jTAAX_V9Elf&_nc_ht=scontent.fsjk1-1.fna&oh=c145d921258900ee4f26d0a56fe2ecdb&oe=5EB8C623

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://iniciantes.reativa.dev',
    gaTrackingId: 'UA-155080700-2'
  },
  header: {
    logo:
      'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/83652091_136284957845200_8237786461009608704_n.png?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=W7FbSLzVnZIAX_OScKr&_nc_ht=scontent.fsjk1-1.fna&oh=ad4cc3d442884bdfc928a819155a7f8a&oe=6038095D',
    logoLink: 'https://iniciantes.reativa.dev',
    title: 'Maratona Programação | Reativa',
    githubUrl: 'https://github.com/reativa',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/comece-aqui',
      '/lives',
      '/git',
      '/quero-contribuir'
    ],
    collapsedNav: [],
    links: [{ text: 'Reativa Instagram', link: 'http://bit.ly/reativa-insta' }],
    frontline: true,
    ignoreIndex: true
  },
  siteMetadata: {
    title: 'Maratona FreeCodeCamp | Reativa',
    description:
      'Reativa Tecnologia - Plataforma Online para desenvolvedores http://iniciantes.reativa.dev ',
    ogImage: null,
    docsLocation: '',
    favicon:
      'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/83652091_136284957845200_8237786461009608704_n.png?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=W7FbSLzVnZIAX_OScKr&_nc_ht=scontent.fsjk1-1.fna&oh=ad4cc3d442884bdfc928a819155a7f8a&oe=6038095D'
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Reativa Tecnologia',
      short_name: 'PlataformaReativa',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
}

module.exports = config
