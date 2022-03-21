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

        <section id="about">
            <div class="secHeading">
                <h2>About me</h2>
                <hr>
            </div>
            <div>
                <div>
                    <p>Hey there, so you want to learn more about me. My name is Graham Vickers and I am a full-stack developer based in London, Ontario. Growing up in a technological revolution era it has broadened my perspective from a young age on how technology can impact and improve both businesses and peoples lives.</p>
                    <br>
                    <p>Learning the importance of binary code in my grade 9 computer studies class set me on the path to further my education and knowledge in the design and development of web applications. During which time I have become proficient in adobe suite and developed a substantial amount of applications in various programming languages.</p>
                    <br>
                    <p>Here are some of the current technologies I've been working with: </p>
                    <br>
                    <ul>

                    </ul>
                </div>
                <img src="static/headshot.svg" alt="Graham Vickers head shot">
            </div>
            
        </section>

        <section id="education">
            <div class="secHeading">
                <h2>My Education</h2>
                <hr>
            </div>
            
        </section>

        <section id="projects">
            <div class="secHeading">
                <h2>Some Cool Projects</h2>
                <hr>
            </div>
            
        </section>

        <section id="contact">
            <div class="secHeading">
                <h2>Let's Work Together</h2>
                <hr>
            </div>
            <h6>Send me an email!</h6>
            <p>I'm currently open to new work opportunities and freelance projects. Have an opening or a new idea you want to come to life? Just send me a message and I'll get back to as soon as I can!</p>
            <button>Send Me an Email!</button>
        </section>

    
    </div>
</template>

<script>
    export default {
        props: ["projects"]
    }
</script>
