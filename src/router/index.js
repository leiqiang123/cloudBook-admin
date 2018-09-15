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
  categoryedit:() => import('../view/categorylist/categoryedit')
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
        }
      ]
    }
  ]
})
