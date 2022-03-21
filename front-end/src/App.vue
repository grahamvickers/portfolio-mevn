<template>
    <main id="main">
        <h1 class="hidden">Graham Vickers Portfolio Website</h1>
               <header>
            <img src="/static/logo_v2.svg" alt="Graham Vickers Developments Logo" id="logo">
            <span id="hmbgrMenu" style="font-size:30px;cursor:pointer;color: #64ffda;" onclick="showNav()"><img src="/static/navBtn.svg"></span>
            <div id="navCon">
                <nav id="mainNav">
                    <h3 class="hidden">Main Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                    
                </nav>
            </div>
            <div id="navOverCon" class="overlay">
                <h3 class="hidden">Main Navigation</h3>
                <a href="javascript:void(0)" class="closebtn" onclick="hideNav()">&times;</a>
                <div class="overlay-con">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                </div>
            </div>
        </header>
        <router-view v-bind:projects="theProjects"/>
    </main>
</template>


<script>
    export default {
        data() {
            return {theProjects: []};
        },
        created: function() {
            var vm = this;
            fetch("http://localhost:"+process.env.VUE_APP_API_PORT+"/api/projects")
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                vm.theProjects = data;
            })
        }
    }
</script>

<style lang="scss">
</style>
