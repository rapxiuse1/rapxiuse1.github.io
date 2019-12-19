module.exports = {
  title:'marshall',
  description:'个人博客',
  head:[
    ['link',{rel:'icon',href:'/happy.png'}]
  ],
  themeConfig:{
    //顶部导航栏
    nav: [
      {text: '首页', link: '/'},
      {
        text: '分类',
        ariaLabel: '分类',
        items:[
          {text: '文章', link:'/pages/folder1/test1.md'},
          {text: '琐碎', link:'/pages/folder2/test4.md'},
        ]
      },
      {text:'功能演示', link:'/pages/folder1/test3.md'},
      {text:'Github',link:'https://github.com/dwanda'},
    ],
    //侧边导航栏:根据当前文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar:{
      '/pages/folder1/':[
        {
          title:'测试菜单1',
          collapsable:false,
          sidebarDepth:1,
          children:[
            ['test1.md','子菜单1'],
            ['test3.md','子菜单2']
          ]
        },
        {
          title:'测试菜单2',
          collapsable:false,
          children:[
            ['test2.md','子菜单1']  
          ]
        }
      ],
    }
  }
}