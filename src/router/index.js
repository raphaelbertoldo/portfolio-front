import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsMe from '../views/SkillsMe.vue'
import AdminHome from '../views/admin/AdminHome.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
import Skills from '../views/admin/AddSkills.vue'
import Projects from '../views/ProjectsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin/home',
    name: 'AdminHome',
    component: AdminHome
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/skills',
    name: 'Skills',
    component: Skills 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/habilidades',
    name: 'SkillsMe',
    component: SkillsMe
  },
   {
    path: '/projetos',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
