<template>
    <section>
        
    </section>
</template>

<script>
export default {
    data() {
        return {
            project: {}
        };
    },
    created() {
        let vm = this;
        let id = this.$route.params.id;

        fetch(`http://localhost:${process.env.VUE_APP_API_PORT}/api/project/${id}`)
        .then(function(response){
            return response.json() 
        })
        .then(function(data){
            vm.project = data;
        })
    }
}
</script>


<style scoped>

</style>
