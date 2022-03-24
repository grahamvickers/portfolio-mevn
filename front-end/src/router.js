import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import ProjectList from "./views/project-list.vue";
import Project from "./views/project.vue";
import ClientRegister from "./views/client-register.vue";
import ClientPortal from "./views/client-portal.vue";
import ClientLogin from "./views/client-login.vue";
import ClientLanding from "./views/client-landing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: "/",
      component:  ProjectList
    },
    {
      path: "/projects/:id", 
      component: Project
    },
    {
      path: "/register", 
      component: ClientRegister
    },
    {
      path: "/portal", 
      component: ClientPortal
    },
    {
      path: "/login", 
      component: ClientLogin
    },
    {
      path: "/welcome", 
      component: ClientLanding
    }
  ]
});
