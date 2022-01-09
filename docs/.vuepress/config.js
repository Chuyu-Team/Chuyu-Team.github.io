module.exports = {
  locales: {
    '/en-US/': {
      lang: 'en-US',
      title: 'Chuyu Team',
      description: 'Chuyu Team'
    },
    '/zh-Hans/': {
      lang: 'zh-Hans',
      title: '初雨团队',
      description: '初雨团队'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/icons/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/mstile.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }]
  ],
  themeConfig: {
    logo: '/assets/image/logo.png',
    editLinks: true,
    search: false,
    smoothScroll: true,
    lastUpdated: true,
    
    editLinks: true,
    repo: 'MoespiritDevices/MoespiritDevices.github.io',
    docsDir: 'docs',
    docsBranch: 'main',
 
    locales: {
      '/en-US/': {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: { 
            message: "New content is available.", 
            buttonText: "Refresh" 
          }
        },
        lastUpdated: 'Last Updated',
        nav: [
          { text: "Home", link: '/en-US/'},
          { text: "Documents", link: '/en-US/docs/'}
        ]
      },
      '/zh-Hans/': {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用。",
            buttonText: "刷新"
          }
        },
        lastUpdated: '最后更新时间',
        nav: [
          { text: "首页", link: '/zh-Hans/'},
          { text: "文档", link: '/zh-Hans/docs/'},
        ]
      }     
    }
  },
  plugins: [
    ['@vuepress/back-to-top',true],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
  ],
  
}

