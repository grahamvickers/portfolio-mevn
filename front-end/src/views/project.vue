<template>
  <div>
    
    <router-link to="/">Back to home</router-link>
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
