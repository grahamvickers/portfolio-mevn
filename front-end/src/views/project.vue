<template>
  <div>
    <div class="secHeading">
          <h3>Featured Project</h3>
          <hr>
    </div>
    <section>
      <div>
        <div>
          <img :src="`${project.logo}`" alt="Project Logo" id="logo">
          <div>
            <h2>{{project.name}}</h2>
            <h3 class="thinner">{{project.bio}}</h3>
            <h5>{{project.tools}}</h5>
          </div>
        </div>
        <div>
          <p>{{project.description}}</p>
          <a target="_blank" :href="`${project.github}`" class="button"><span><img src="static/github_mint.svg" alt="Github Project Link icon">View on Github</span></a>
        </div>
      </div>
      <img :src="`${project.mockup}`" alt="Project IPhone XR Mockup">
      
      
        
    </section>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      project: {}
    };
  },
  created() {
    var vm = this;
    let id = this.$route.params.id;
    axios
      .get(`http://localhost:${process.env.VUE_APP_API_PORT}/api/project/${id}`)
      .then(function(response) {
        vm.project = response.data;
        console.log(vm.project);
      });
  }
};

</script>

<style lang="scss" scoped>
#logo{
  max-width: 260px;
  margin-bottom: 30px;
}
h2,h3{
  padding-bottom: 10px;
}
section{
  margin-bottom: 80px;
}

@media screen and (min-width: 1200px) {
  section{
    display: flex;
    flex-direction: row;
    padding-bottom: 160px;
  }
}
</style>