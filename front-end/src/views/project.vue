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
    //we can grab id from url, then use it to make a call to the API to grab planet information
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

//use to get id from route this.$route.params.id
</script>

<style scoped>

</style>
