<template>
    <main >
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

        <section id="contact">
            <div class="secHeading">
                <h3>Let's Work Together</h3>
                <hr>
            </div>
            <h6>Send me an email!</h6>
            <p>I'm currently open to new work opportunities and freelance projects. Have an opening or a new idea you want to come to life? Just send me a message and I'll get back to as soon as I can!</p>
            <button>Send Me an Email!</button>
        </section>
    </main>
</template>


<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {theProjects: []};
  },
  created: function() {
    var vm = this;
    axios.get("http://localhost:"+process.env.VUE_APP_API_PORT+"/api/projects").then(function(response) {
      console.log(response);
      vm.theProjects = response.data;
    });
  }
};
</script>

