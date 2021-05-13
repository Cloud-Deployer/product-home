import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/about',
    name: '',
    component: () => import('../components/HomeHeader.vue'),
    children:[
      {
        path: 'about',
        name: 'About',
        component: () => import( '../views/Home.vue')
      },
      {
        path: 'team',
        name: 'Team',
        component: () => import( '../views/Team.vue')
      },
      {
        path: 'pricing',
        name: 'Pricing',
        component: () => import( '../views/Pricing.vue')
      }
    ]
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import( '../views/UnderConstruction.vue')
  }
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
  routes
})

export default router
