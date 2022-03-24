<template>
  <div>
    <div class="secHeading">
          <h3>Featured Project</h3>
          <hr>
    </div>
    <section id="featured">
      <div>
        <div>
          <img :src="`${project.logo}`" alt="Project Logo" id="logo">
          <div>
            <h2>{{ project.name }}</h2>
            <h3 class="thinner">{{ project.bio }}</h3>
            <h5>{{ project.tools }}</h5>
          </div>
        </div>
        <div>
          <p>{{project.description}}</p>
          <a target="_blank" :href="`${project.github}`" class="githubBtn"><span><img src="static/github_mint.svg" alt="Github Project Link icon" id="githubLogo"></span>View on Github</a>
        </div>
      </div>
      <img :src="`${project.mockup}`" alt="Project IPhone XR Mockup" id="mockup">
      
      
        
    </section>

    <section id="contact">
        <div class="secHeading">
            <h3>Let's Work Together</h3>
            <hr>
        </div>
        <h6>Send me an email!</h6>
        <p>I'm currently open to new work opportunities and freelance projects. Have an opening or a new idea you want to come to life? Just send me a message and I'll get back to as soon as I can!</p>
        <a target="_blank" href="mailto:vickgrah@gmail.com" class="button">Send Me an Email!</a>
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
h2,h3,h5{
  padding-bottom: 10px;
}
#featured{
  margin-bottom: 80px;
  #mockup{
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
}


@media screen and (min-width: 1200px) {
  #featured{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 160px;
    #mockup{
      padding-left: 30px;
      height: auto;
    }
  }
}
</style>