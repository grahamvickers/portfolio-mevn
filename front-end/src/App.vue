<template>
<div>
    <h1 class="hidden">Graham Vickers Portfolio Website</h1>
    <header>
        <img src="/static/logo_v2.svg" alt="Graham Vickers Developments Logo" id="logo">
        <span id="hmbgrMenu" style="font-size:30px;cursor:pointer;color: #64ffda;" onclick="showNav()"><img src="/static/navBtn.svg"></span>
        <div id="navCon">
            <nav id="mainNav">
                <h3 class="hidden">Main Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a target="_blank" href="/uploads/graham_vickers_resume.pdf" class="button">Resume</a></li>
                </ul>
                
            </nav>
        </div>
        <div id="navOverCon" class="overlay">
            <h3 class="hidden">Main Navigation</h3>
            <a href="javascript:void(0)" class="closebtn" onclick="hideNav()">&times;</a>
            <div class="overlay-con">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a target="_blank" href="/uploads/graham_vickers_resume.pdf" >Resume</a></li>
                </ul>
            </div>
        </div>
    </header>

    <div id="barsCon">
        <div id="socialBar">
            <div>
                <a target="_blank" href="https://www.linkedin.com/in/grahamvickers/"><img src="/static/linkedin.svg" alt="LinkedIn social link button"></a>
                <a target="_blank" href="https://github.com/grahamvickers"><img src="/static/github.svg" alt="Github social link button"></a>
            </div>
            <hr>
        </div>

        <div id="emailBar">
            <div>
                <a target="_blank" href="mailto:vickgrah@gmail.com">vickgrah@gmail.com</a>
            </div>
            <hr>
        </div>
    </div>
    <main >
        
        <router-view v-slot="{ Component }" v-bind:projects="theProjects" >
            <transition name="route" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

        <section id="contact">
            <div class="secHeading">
                <h3>Let's Work Together</h3>
                <hr>
            </div>
            <h6>Send me an email!</h6>
            <p>I'm currently open to new work opportunities and freelance projects. Have an opening or a new idea you want to come to life? Just send me a message and I'll get back to as soon as I can!</p>
            <a target="_blank" href="mailto:vickgrah@gmail.com" class="button">Send Me an Email!</a>
        </section>
    </main>

    <footer>
        <p>Designed and Developed by Graham Vickers &copy;</p>
        <div id="socialIconsCon">
            <a target="_blank" href="https://www.linkedin.com/in/grahamvickers/"><img src="/static/linkedin.svg" alt="LinkedIn social link button"></a>
            <a target="_blank" href="https://github.com/grahamvickers"><img src="/static/github.svg" alt="Github social link button"></a>
        </div>
    </footer>
    
</div>
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

<style lang="css">

    #socialIconsCon img{
        padding: 20px;
    }

    .route-enter-from,
    .route-leave-to {
        opacity: 0;
        transform: translateX(500px);
    }

    .route-enter-active,
    .route-leave-active {
        transition: opacity 3s ease-out;
    }
    footer{
        padding: 20px !important;
        text-align: center;
    }

    @media screen and (min-width: 1200px) {
        #socialIconsCon{
            display: none;
        }
        footer{
            padding: 60px !important;
            text-align: center;
        }
    }
</style>

