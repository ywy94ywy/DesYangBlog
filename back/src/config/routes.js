export default [
  {
    path: '/articles',
    name: '文章管理',
    children: [
      {
        path: '/articles/list',
        name: '文章列表',
        component: './ArticleList',
      },
      {
        path: '/articles/edit',
        name: '文章编辑',
        component: './ArticleEdit',
      },
    ],
  },
  {
    path: '/tags',
    name: '标签管理',
    component: './Tags',
  },
  {
    path: '/dictionary',
    name: '字典管理',
    component: './Dictionary',
  },
]
