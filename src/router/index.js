import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login:() => import('../view/login/login'),
  layout:() => import('@/view/layout/layout'),
  index:() => import('@/view/index/index'),
  users:() => import('../view/users/index'),
  categorylist:() => import('../view/categorylist/categorylist'),
  bookslist:() => import('../view/booksmanage/bookslist'),
  bookedit:() => import('../view/booksmanage/bookedit'),
  categoryedit:() => import('../view/categorylist/categoryedit'),
  addbooks:() => import('../view/booksmanage/addbooks'),
  addusers:() => import('../view/users/addusers'),
  changeusers:() => import('../view/users/changeusers'),
  addcategory:() => import('../view/categorylist/addcategory'),
  changepassword:() => import('../view/users/changepassword'),
  carousel:() => import('../view/carousel/carousel'),
  addcarousel:() => import('../view/carousel/addcarousel')
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      component: components.login
    },
    {
      path:'/layout',
      redirect:'/layout/index',
      meta:{
        title:'首页'
      },
      component:components.layout,
      children:[
        {
          path:'index',
          component:components.index
        },
        {
          path:'users',
          meta:{
            title:'用户管理'
          },
          component:components.users
        },
        {
          path:'categorylist',
          meta:{
            title:'分类列表'
          },
          component:components.categorylist
        },
        {
          path:'bookslist',
          meta:{
            title:'图书列表'
          },
          component:components.bookslist
        },
        {
          path:'bookedit',
          meta:{
            title:'图书编辑'
          },
          component:components.bookedit
        },
        {
          path:'categoryedit',
          meta:{
            title:'分类编辑'
          },
          component:components.categoryedit
        },
        {
          path:'addbooks',
          meta:{
            title:'添加图书'
          },
          component:components.addbooks
        },
        {
          path:'addusers',
          meta:{
            title:'添加用户管理员'
          },
          component:components.addusers
        },
        {
          path:'changeusers',
          meta:{
            title:'修改个人信息'
          },
          component:components.changeusers
        },
        {
          path:'addcategory',
          meta:{
            title:'添加分类'
          },
          component:components.addcategory
        },
        {
          path:'changepassword',
          meta:{
            title:'修改密码'
          },
          component:components.changepassword
        },
        {
          path:'carousel',
          meta:{
            title:'轮播图管理'
          },
          component:components.carousel
        },
        {
          path:'addcarousel',
          meta:{
            title:'添加轮播图'
          },
          component:components.addcarousel
        }
      ]
    }
  ]
})
