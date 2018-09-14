import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login:() => import('../view/login/login'),
  layout:() => import('@/view/layout/layout'),
  index:() => import('@/view/index/index'),
  users:() => import('../view/users/index')
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
        }
      ]
    }
  ]
})
