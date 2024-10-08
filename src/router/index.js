import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillsMe from "../views/SkillsMe.vue";
import AdminHome from "../views/admin/AdminHome.vue";
import AdminLogin from "../views/admin/AdminLogin.vue";
import Skills from "../views/admin/AddSkills.vue";
import Projects from "../views/ProjectsView.vue";
import Contact from "../views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/home",
    name: "AdminHome",
    component: AdminHome,
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/admin/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/skills",
    name: "SkillsMe",
    component: SkillsMe,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
