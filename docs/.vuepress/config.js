const path = require('path');
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'PixelUI',
    description: '一个基于Vue3的UI组件库',
    base:"/pixel-ui/",
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: './images/logo.png',
      home:"/",
      navbar:[
          {
              text:"指南",
              link:"/guide/Summary"
          },
          {
            text:"组件",
            link:"/components/Button"
        }
      ],
      sidebar:{
        '/guide/':[
            {
                text:"指南",
                children:['/guide/Summary.md','/guide/Read.md']
            }
          ],
          '/components/':[
            {
                text:"组件",
                children:[
                    {text:"Button",link:"/components/Button"},
                    {text:"DisplayBox",link:"/components/DisplayBox"},
                    {text:"Tab",link:"/components/Tab"},
                    {text:"Table",link:"/components/Table"},
                    {text:'Sticker',link:"/components/Sticker"}
                ]
            }
          ]
      }
    },
    plugins: [
        [
          '@vuepress/register-components',
          {
            components: {
              "pixel-btn": path.resolve(__dirname, './components/pixel-btn.vue'),
              'pixel-displaybox':path.resolve(__dirname, './components/pixel-displaybox.vue'),
              'pixel-tab': path.resolve(__dirname, './components/pixel-tab.vue'),
              'pixel-table-col':path.resolve(__dirname, './components/pixel-table-col.vue'),
              'pixel-sticker':path.resolve(__dirname, './components/pixel-sticker.vue'),
              'pixel-table':path.resolve(__dirname, './components/pixel-table.vue'),
              'TableDemo':path.resolve(__dirname, './components/TableDemo.vue')
            },
          },
        ],
        [
            '@vuepress/plugin-search',
            {
              locales: {
                '/': {
                  placeholder: '搜索',
                },
                '/zh/': {
                  placeholder: '搜索',
                },
              },
            },
          ]
    ]
  }