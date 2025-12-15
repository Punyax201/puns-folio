<template>
  <v-app>
    <v-main>
      <!-- <router-view /> -->
      <main class="main">
        <!-- Outer Section -->
        <section id="outer" class="hero section dark-background d-flex align-items-end"
          style="height: auto; width: 100vw; padding: 0;">

          <v-parallax src="./assets/img/sky2.png" style="height: 100%;">
            <!-- <div class="overlay"></div> -->

            <div class="d-flex flex-column" style="height: 100%;">
              <!-- Black hole -->
              <div style="width: 100%; height: 100vh;">
                <BlackHole />
              </div>

              <!-- services -->
              <div id="services" :class="isMobile ? 'p-4' : 'p-5'" class="d-flex flex-column"
                style=" position: relative; z-index: 111;">
                <v-item-group class="mb-4 mt-auto">
                  <v-row class="">
                    <v-col v-for="service, index in services" :key="service" cols="12" sm="12" lg="4" class="">
                      <v-item class="h-100">
                        <v-card style="background-color: inherit;" class="elevation-10 w-100 h-100">
                          <v-card-title>
                            <div class="w-100 d-flex justify-center">
                              <div class="d-flex justify-center align-center"
                                style="width: 64px; height: 64px; border-radius: 50%; border: 1px solid white;">
                                <i :class="service.icon"></i>
                              </div>
                            </div>
                          </v-card-title>
                          <v-card-text>
                            <div class="d-flex w-100 p-2 align-center gap-2">
                              <div>
                                <h4 :innerHTML="service.title">Web Development</h4>
                                <p :innerHTML="service.description"></p>
                              </div>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>

                <div class="section-title-up mb-4">
                  <h2>Services</h2>
                </div>
                <hr>
                </hr>
              </div>

              <!-- Resume Section -->
              <div id="resume" :class="isMobile ? 'p-4' : 'p-5'" class="d-flex flex-column justify-space-between"
                style="position: relative; z-index: 111; height: 350vh;">
                <Resume :isMobile="isMobile" />
                
                <div class="section-title-up mb-4">
                  <h2>Professional Journey</h2>
                </div>
              </div>

              <!-- <hr style="position: relative; z-index: 111;">
              </hr> -->
            </div>
          </v-parallax>

        </section>
        <!-- Extension Section -->
        <section id="extension" class="hero section dark-background d-flex align-items-end"
          style="height: 310vh; width: 100vw; padding: 0;">

          <v-parallax src="./assets/img/sky1.png" style="height: 100%;">
            <div class="overlay"></div>

            <!-- Secondary Skills -->
            <div id="secondary-skills" :class="isMobile ? 'p-4' : 'p-5'" class="d-flex flex-column"
              style="height: 100vh; z-index: 999; width: 100vw; position: relative;">
              <div>
                <div class="section-title mb-4">
                  <h2>Secondary Skills</h2>
                </div>

              </div>

              <div class="skills-content d-flex flex-column" style="position: relative; flex: 1;">

                <v-item-group>
                  <!-- <v-container> -->
                  <v-row>
                    <v-col cols="12" lg="6" sm="12">
                      <v-card style="background-color: inherit;" data-aos="fade-up" data-aos-delay="300">
                        <v-card-text>
                          <v-img aspect-ratio="16/9" :height="isMobile ? 200 : 300" cover src="./assets/img/3d-print-1.jpg"></v-img>
                        </v-card-text>
                        <v-card-subtitle class="text-body-1">
                          <h4>3D Printing</h4>
                        </v-card-subtitle>
                        <v-card-item>
                          <p class="text-subtitle-1">FDM, SLA</p>
                        </v-card-item>
                      </v-card>
                    </v-col>

                    <v-col cols="12" lg="6" sm="12">
                      <v-card style="background-color: inherit;">
                        <v-card-text>
                          <v-img aspect-ratio="16/9" :height="isMobile ? 200 : 300" cover src="./assets/img/pi.jpg"></v-img>
                        </v-card-text>
                        <v-card-subtitle class="text-body-1">
                          <h4>Raspberry Pi</h4>

                        </v-card-subtitle>
                        <v-card-item>
                          <p class="text-subtitle-1">Basic flight control program (BLDC motors and servos), Gyro
                            sensor</p>
                        </v-card-item>
                      </v-card>
                    </v-col>
                  </v-row>
                  <!-- </v-container> -->
                </v-item-group>
              </div>
            </div>

            <!-- Skills -->
            <div id="skills" :class="isMobile ? 'p-4' : 'p-5'" class="d-flex flex-column"
              style="height: 100vh; z-index: 999; width: 100vw; position: relative;">
              <div>
                <div class="section-title mb-4">
                  <h2>Skills</h2>
                </div>

              </div>

              <div class="skills-content d-flex flex-column" style="position: relative; flex: 1;">
                <p class="text-body-1">
                  <strong>Frameworks & Libraries - </strong>
                  Angular, Vue, Wijmo Grids, AG Grids, jQuery, BootStrap, Charts.js,
                  PrimeNG, Vuetify, D3.js, FastAPI, Django REST Framework, Azure SDKs
                </p>
                <p class="text-body-1 mt-4">
                  <strong>Generative AI - </strong>
                  Video Generation (Comfy UI - WAN 2.2), Image Generation (Stable
                  Diffusion, DALL·E), Text Generation (GPT-4), RAG
                </p>
                <v-card style="background-color: inherit;" class="mt-auto mb-auto">
                  <v-card-text>
                    <div class="row">
                      <div class="col-lg-6 col-sm-12 d-flex justify-start flex-column gap-5 px-0">
                        <div class="d-flex flex-column w-100">
                          <span>Generative AI</span>
                          <span class="mt-2"><v-progress-linear color="#00e4ff" v-model="progressValue.genAI"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>FrontEnd Development (Angular, Vue)</span>
                          <span class="mt-2"><v-progress-linear color="#00e4ff" v-model="progressValue.frontEnd"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>REST APIs and Websockets (Django, FastAPI)</span>
                          <span class="mt-2"><v-progress-linear color="#00e4ff" v-model="progressValue.backend"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>Azure Cloud (App Services, Build Pipelines, Storage)</span>
                          <span class="mt-2"><v-progress-linear color="#00e4ff" v-model="progressValue.azure"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>E-commerce CMS (Wordpress)</span>
                          <span class="mt-2"><v-progress-linear color="#00e4ff" v-model="progressValue.cms"
                              chunk-count="10"></v-progress-linear></span>
                        </div>
                      </div>

                      <!-- <div class="col-lg-8 col-sm-12 mt-4 content">

                      </div> -->
                    </div>
                  </v-card-text>
                </v-card>

              </div>
            </div>

            <!-- About -->
            <div id="about" :class="isMobile ? 'p-4' : 'p-5'" class=""
              style="height: 100vh; z-index: 999; width: 100vw; position: relative;">
              <div>
                <div class="section-title mb-4">
                  <h2>
                    <span style="display: block; color: #00E4FF;">
                      PUNYA
                    </span>
                    <span>
                      KOTECHA
                    </span>
                  </h2>
                  <!-- <h2>KOTECHA</h2> -->
                </div>
                <!-- <p>Full-Stack Developer with expertise in modern JavaScript frameworks (Angular) and Python backends
                  (Django, FastAPI). Experienced in designing and delivering scalable, high-performance web applications
                  and dynamic CMS platforms. Skilled in building and managing automated build systems and CI/CD
                  pipelines
                  for seamless deployments.</p> -->

              </div>
              <!-- <hr style="background: #fff; border: none; height: 2px; display: block;">
              </hr> -->

              <div class="about-content" style="position: relative;">
                <v-card style="background-color: inherit;" class="elevation-0">
                  <v-card-text>
                    <div class="row p-0">
                      <div class="col-lg-8 col-sm-12 content p-0" :class="isMobile ? 'mt-0' : 'mt-4'">

                        <div class="d-flex flex-column h-100 justify-start">
                          <div id="details" class="flex p-0 flex-row mt-0">
                            <ul style="list-style-type: none; list-style: none; flex-wrap: wrap;" class="d-flex p-0"
                              :class="isMobile ? 'gap-0' : 'gap-4'">
                              <li>
                                <span class="d-flex flex-column">
                                  <div class="font-weight-bold">DOB</div>
                                  <div class="font-weight-light text-overline">26 <sup>th</sup> Aug, 1998</div>
                                </span>
                              </li>

                              <li>
                                <span class="d-flex flex-column">
                                  <div class="font-weight-bold">City</div>
                                  <div class="font-weight-light text-overline">Ahmedabad, Gujarat - भारत (India)</div>
                                </span>
                              </li>

                              <li>
                                <span class="d-flex flex-column">
                                  <div class="font-weight-bold">Education</div>
                                  <div class="font-weight-light text-overline">B.Tech (Information Texhnology)</div>
                                </span>
                              </li>
                              <li>
                                <span class="d-flex flex-column">
                                  <div class="font-weight-bold">Email</div>
                                  <div class="font-weight-light text-overline">punyax201@gmail.com</div>
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div class="mt-auto mb-5" :class="isMobile ? 'w-100' : 'w-75'">
                            <div class="section-title mb-5">
                              <h2></h2>
                              <span class="font-weight-light position-absolute section-title-dash-text">SOMETHING
                                <span style="color: #00E4FF;">ABOUT ME</span></span>
                            </div>
                            <h2>I am a <strong>Software Engineer</strong> &amp; <strong>AI Generalist</strong></h2>
                            <p class="fst-italic py-3 text-body-1">
                              Passionate about leveraging <strong>Generative AI</strong>, with
                              hands-on experience implementing RAG (Retrieval-Augmented
                              Generation) workflows and integrating AI-driven features into
                              real-world solutions. Focused on clean architecture,
                              performance, and continuous innovation.
                            </p>
                          </div>
                        </div>

                      </div>

                      <div class="col-lg-4 col-sm-12 d-flex justify-center">
                        <v-avatar :size="avatarSize">
                          <!-- <img id="default-image" src="./assets/img/clip.png" width="300"></img> -->
                          <video :width="avatarSize" id="look-around" autoplay muted loop playsinline preload="auto"
                            disablePictureInPicture controls="false" tabindex="-1"
                            src="./assets/clips/lappy.mp4"></video>
                        </v-avatar>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>

              </div>
            </div>
          </v-parallax>
        </section>

        <!-- Hero section -->
        <section id="hero" class="hero section dark-background" style="height: 100vh">
          <div style="
              position: absolute;
              z-index: 999;
              width: 100vw;
              height: 100vh;
            ">
          </div>
          <div class="overlay"></div>
          <img src="./assets/img/hero.png" alt="" data-aos="fade-in" class="" id="default-image" />
          <video id="look-around" src="./assets/clips/start.mp4" alt="" data-aos="fade-in" class="" style="
              position: absolute;
              object-fit: cover;
              width: 100%;
              height: 100%;
              object-position: top;
            " muted playsinline></video>

          <div class="container d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100"
            style="height: 100%">
            <!-- Namaskaram -->
            <div class="namaskaram mt-auto">

            </div>

            <div class="mt-auto mb-5">
              <span class="d-flex w-100 mt-auto justify-start">
                <h2 class="sura-regular mr-1" style="font-size: 40px">
                  नमस्कारम
                </h2>
                <img src="./assets/img/namaste.png"
                  class="animate__animated animate__pulse animate__infinite animate__slow"
                  style="position: relative; width: 40px" />
              </span>
              <p>
                I'm a
                <span class="typed" data-typed-items="Human, Software Developer and AI Generalist">Developer</span><span
                  class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span
                  class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
              </p>
            </div>
          </div>
        </section>

        <!-- Scroller -->
        <Navigator />

      </main>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js";
import { shallowRef } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

import Resume from './components/Resume.vue'
import BlackHole from './components/BlackHole.vue'
import Navigator from './components/Navigator.vue'


const aboutVideo = ref(null);
const progressValue = shallowRef({
  genAI: 60,
  frontEnd: 90,
  backend: 75,
  azure: 70,
  cms: 65
})

let avatarSize = 350;

let services = [];

let isMobile = false;

onMounted(async () => {
  // await waitForResources();
  window.onload = function () {
    setTimeout(function () {
      requestAnimationFrame(() => {
        document.getElementById("app-splash")?.classList.add("hide");
        document.body?.classList.add("black-bg");
      });
    }, 1000);
  };
  isMobile = window.innerWidth <= 780;
  window.scrollTo(0, document.documentElement.scrollHeight);

  new Typed(".typed", {
    strings: ["Human", "Software Developer and AI Generalist"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25,
  });

  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false, // whether animation should happen only once
  })

  services = [
    {
      title: 'Web Application Development',
      description: 'Building fast, scalable, and maintainable web applications using modern frameworks like <strong   >Angular, Python (Django / FastAPI), and Vue.js.</strong > I specialize in modular architecture, API-driven workflows, and clean UI implementations that perform as well as they look.',
      icon: 'bi bi-globe'
    },
    {
      title: 'AI Integration & Automation',
      description: 'Bridging real-world software with intelligent systems. I integrate Generative AI, LLMs, and machine learning APIs into products to automate workflows, analyze data, or enhance user experience.',
      icon: 'bi bi-card-checklist'
    },
    {
      title: 'Creative AI Tools & Experiences',
      description: 'Merging engineering and imagination — I design interactive AI experiences for web, marketing, and portfolios. <p> <strong>Example projects:</strong> Image & video generation utilities, AI-driven mini games / web experiences, Visual storytelling tools </p>',
      icon: 'bi bi-brush'
    }
  ]

  aboutVideo.value = document.querySelector(".bout-content v-avatar");
  const w = window.innerWidth;
  const avatarVideo = document.querySelector(".about-content video");
  if (avatarVideo) {
    avatarVideo.muted = true;
    avatarVideo.setAttribute("muted", "");
    avatarVideo.play().catch(() => { });
  }

  if (w < 600) {
    avatarSize = 150;
  } else {
    avatarSize = 450;
  }
  avatarVideo.play();
  // avatarVideo.autoplay = true;
});

function waitForResources() {
  const fontsReady = document.fonts?.ready ?? Promise.resolve();

  const imagesReady = Promise.all(
    Array.from(document.images)
      .filter(img => !img.complete)
      .map(
        img =>
          new Promise(resolve => {
            img.onload = img.onerror = resolve;
          })
      )
  );

  return Promise.all([
    fontsReady,
    imagesReady,
  ]);
}
</script>
