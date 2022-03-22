<template>
  <div>
    <section id="landing">
      <h2 class="hidden">Landing Content</h2>
      <div>
        <h6 id="intro">Hi, my name is</h6>
        <h2>Graham Vickers.</h2>
        <h2 class="darker">Creating lasting impressions is what I do.</h2>
        <p>
          I'm a <span class="brighter">full-stack developer</span> who specializes in designing and developing full scale interactive web applications. Currently, I'm finishing my final year at <span class="brighter">Fanshawe College in the Interactive Media Specialist</span> program and now open to new work opportunities.   
        </p>
        <button>Checkout my work!</button>
      </div>
    </section>

    <section id="about" class="container">
      <div class="secHeading">
        <h3>About me</h3>
        <hr>
      </div>
      <div id="aboutCon">
        <div>
          <p>Hey there, so you want to learn more about me. My name is Graham Vickers and I am a full-stack developer based in London, Ontario. Growing up in a technological revolution era it has broadened my perspective from a young age on how technology can impact and improve both businesses and peoples lives.</p>
          <br>
          <p>Learning the importance of binary code in my grade 9 computer studies class set me on the path to further my education and knowledge in the design and development of web applications. During which time I have become proficient in adobe suite and developed a substantial amount of applications in various programming languages.</p>
          <br>
          <p>Here are some of the current technologies I've been working with: </p>
          <br>
          <ul id="technologiesCon">
            <li class="technology"><span><img src="/static/description.svg" alt="arrow"></span><h5>JavaScript (ES6+)</h5></li>
            <li class="technology"><span><img src="/static/description.svg" alt="arrow"></span><h5>Vue.js</h5></li>
            <li class="technology"><span><img src="/static/description.svg" alt="arrow"></span><h5>Node.js</h5></li>
            <li class="technology"><span><img src="/static/description.svg" alt="arrow"></span><h5>MongoDB</h5></li>
            <li class="technology"><span><img src="/static/description.svg" alt="arrow"></span><h5>Laravel</h5></li>
             <li class="technology"><span><img src="/static/description.svg" alt="arrow"></span><h5>Express</h5></li>
          </ul>
        </div>
        <img src="/static/headshotv1.png" alt="Graham Vickers head shot" id="headshot">
      </div>
        
    </section>

    <section id="education" class="container">
      <div class="secHeading">
        <h3>My Education</h3>
        <hr>
      </div>

      <div id="programCon">
        <div class="programDesc">
          <h4>Interactive Media Specialist</h4>
          <h4 class="brighter">Fanshawe College, CA</h4>
          <h5>September 2021 - April 2022</h5>
          <div class="edDescription">
            <span><img src="/static/description.svg" alt="arrow"></span>
            <p>During my time in the program I built upon my skills of web-development and furthered my knowledge and capabilities of branding, UI & UX, front-end & back-end programming, and data-structures. Notably being proficient in the MEVN & LEVN stacks.</p>
          </div>
        </div>

        <div class="programDesc">
          <h4>Business Essentials</h4>
          <h4 class="brighter">Fanshawe College, CA</h4>
          <h5>September 2020 - April 2021</h5>
          <div class="edDescription">
            <span><img src="/static/description.svg" alt="arrow"></span>
            <p>The Business Essentials program gave me the tools to start and manage a small business's finances and track the performance. This led to me starting my own business that summer and netting over $200,000 in revenue in a span of 5 months.</p>
          </div>
        </div>

        <div class="programDesc">
          <h4>Interactive Media Design</h4>
          <h4 class="brighter">Fanshawe College, CA</h4>
          <h5>September 2018 - April 2020</h5>
          <div class="edDescription">
            <span><img src="/static/description.svg" alt="arrow"></span>
            <p>Gained experience with a variety of modern media skill-sets and focused on writing modern, clean and maintainable code. Giving me the building blocks to build full scale web application from the design phase to deployment.</p>
          </div>
        </div>

      </div>
    </section>

    <section id="projects" class="container">
      <div class="secHeading">
          <h3>Some Cool Projects</h3>
          <hr>
      </div>

      <div id="projectCon">
        <div v-for="project in projects" v-bind:key="project.id" class="project">
          <img :src="`${project.logo}`" alt="Project Logo">
          <h4>{{project.name}}</h4>
          <h4 class="thinner">{{project.bio}}</h4>
          <h5>{{project.tools}}</h5>
          <div class="routerCon"><router-link :to="`/projects/${project._id}`" class="routerLink"> Read More</router-link></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ["projects"]
  }
</script>
