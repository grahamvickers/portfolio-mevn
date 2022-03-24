import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import ProjectList from "./views/project-list.vue";
import Project from "./views/project.vue";
import Register from "./views/register.vue";

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
      component: Register
    }
  ]
});
