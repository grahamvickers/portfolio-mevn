import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import ProjectList from "./views/project-list.vue";
import Project from "./views/project.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component:  ProjectList
    },
    {
      path: "/projects/:id", 
      component: Project
    }
  ]
});