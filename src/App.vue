<template>
  <v-app>
    <v-main>
      <!-- <router-view /> -->
      <main class="main">
        <!-- Outer Section -->
        <section v-if="initialize" id="outer" class="hero section dark-background d-flex align-items-end"
          style="height: auto; width: 100vw; padding: 0;">

          <v-parallax src="./assets/img/sky2.png" style="height: 100%;">
            <!-- <div class="overlay"></div> -->

            <div class="d-flex flex-column" style="height: 100%;">
              <!-- Black hole -->
              <div style="width: 100%; height: 100svh; position: relative;">
                <BlackHoleAsync v-if="isVisible" />
              </div>

              <!-- services -->
              <div ref="container" id="services" :class="isMobile ? 'p-4' : 'p-5'" class="d-flex flex-column"
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
                                <h6 class="text-h6 font-weight-semibold" :innerHTML="service.title">Web Development</h6>
                                <p class="text-body-2" :innerHTML="service.description"></p>
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
                style="position: relative; z-index: 111; height: 350svh;">
                <ResumeAsync v-if="isVisible1" :isMobile="isMobile" />

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
        <section v-if="initialize" id="extension" class="hero section dark-background d-flex align-items-end"
          style="height: 310svh; width: 100vw; padding: 0;">

          <v-parallax src="./assets/img/sky1.png" style="height: 100%;">
            <div class="overlay"></div>

            <!-- Secondary Skills -->
            <div ref="container1" id="secondary-skills" :class="isMobile ? 'p-4' : 'p-5'" class="d-flex flex-column"
              style="height: 100svh; z-index: 999; width: 100vw; position: relative;">
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
                          <v-img aspect-ratio="16/9" :height="isMobile ? 150 : 300" cover
                            src="./assets/img/3d-print-1.jpg"></v-img>
                        </v-card-text>
                        <v-card-subtitle class="text-body-1">
                          <h4>3D Printing</h4>
                          <p class="text-subtitle-2">FDM, SLA</p>
                        </v-card-subtitle>
                      </v-card>
                    </v-col>

                    <v-col cols="12" lg="6" sm="12">
                      <v-card style="background-color: inherit;" data-aos="fade-up" data-aos-delay="300">
                        <v-card-text>
                          <v-img aspect-ratio="16/9" :height="isMobile ? 150 : 300" cover
                            src="./assets/img/pi.jpg"></v-img>
                        </v-card-text>
                        <v-card-subtitle class="text-body-1">
                          <h4>Raspberry Pi</h4>
                          <p class="text-subtitle-2" style="text-wrap: auto;">Basic flight control program (BLDC motors
                            and servos), Gyro
                            sensor</p>

                        </v-card-subtitle>
                      </v-card>
                    </v-col>
                  </v-row>
                  <!-- </v-container> -->
                </v-item-group>
              </div>
            </div>

            <!-- Skills -->
            <div id="skills" :class="isMobile ? 'p-4' : 'p-5'" class="d-flex flex-column"
              style="height: 100svh; z-index: 999; width: 100vw; position: relative;">
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

                <div class="px-3 mt-auto mb-3">
                  <div class="row">
                    <div class="col-lg-6 col-sm-12 d-flex justify-start flex-column px-0"
                      :class="isMobile ? 'gap-3' : 'gap-4'">
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
                </div>

              </div>
            </div>

            <!-- About -->
            <div id="about" :class="isMobile ? 'p-4' : 'p-5'" class=""
              style="height: 100svh; z-index: 999; width: 100vw; position: relative;">
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
                </div>
              </div>
              <div class="about-content" style="position: relative;">
                <div class="p-3">
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
                                <div class="font-weight-light text-overline">B.Tech (Information Technology)</div>
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div id="contact-details" class="flex p-0 flex-row mt-0">
                          <ul style="list-style-type: none; list-style: none; flex-wrap: wrap;" class="d-flex p-0"
                            :class="isMobile ? 'gap-3' : 'gap-4'">
                            <li>
                              <span class="d-flex flex-column">
                                <div class="d-flex justify-center align-center"
                                  style="width: 48px; height: 48px; border-radius: 50%;">
                                  <v-btn @click="navigateToUrl('https://www.linkedin.com/in/punya-kotecha-0208a3131/')"
                                    variant="outlined" density="default" icon="bi bi-linkedin"></v-btn>
                                </div>

                              </span>
                            </li>
                            <li>
                              <span class="d-flex flex-column">
                                <div class="d-flex justify-center align-center"
                                  style="width: 48px; height: 48px; border-radius: 50%;">
                                  <v-btn @click="navigateToUrl('mailto:punyax201@gmail.com')" variant="outlined"
                                    density="default" icon="bi bi-envelope">
                                    <v-icon>
                                      bi bi-envelope
                                    </v-icon>
                                    <v-tooltip activator="parent" location="end">punyax201@gmail.com</v-tooltip>
                                  </v-btn>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div class="mt-auto" :class="isMobile ? 'w-100 mb-1' : 'w-75 mb-5'">
                          <div class="section-title mb-5">
                            <h2></h2>
                            <span
                              class="text-body-1 font-weight-light position-absolute section-title-dash-text">SOMETHING
                              <span style="color: #00E4FF;">ABOUT ME</span></span>
                          </div>
                          <h2><em>I am a <em>Software Engineer</em> &amp; <em>AI Generalist</em></em></h2>
                          <p class=" py-3 text-body-1 font-weight-light">
                            Passionate about leveraging <strong>Generative AI</strong>, with
                            hands-on experience implementing RAG (Retrieval-Augmented
                            Generation) workflows and integrating AI-driven features into
                            real-world solutions. Focused on clean architecture,
                            performance, and continuous innovation.
                          </p>
                        </div>
                      </div>

                    </div>

                    <div v-if="!isMobile" class="col-lg-4 col-sm-12 d-flex justify-center">
                      <v-avatar :size="avatarSize">
                        <!-- <img id="default-image" src="./assets/img/clip.png" width="300"></img> -->
                        <video :width="avatarSize" autoplay muted loop playsinline preload="auto"
                          disablePictureInPicture controls="false" tabindex="-1" src="./assets/clips/lappy.mp4"></video>
                        <div class="video-overlay" aria-hidden="true"></div>
                      </v-avatar>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Mobile avatar -->
              <div v-if="isMobile" class="d-flex justify-center" style="position: absolute; right: 1.5rem; top: 1.5rem;">
                <v-avatar :size="avatarSize">
                  <!-- <img id="default-image" src="./assets/img/clip.png" width="300"></img> -->
                  <video :width="avatarSize" autoplay muted loop playsinline preload="auto" disablePictureInPicture
                    controls="false" tabindex="-1" src="./assets/clips/lappy.mp4"></video>
                  <div class="video-overlay" aria-hidden="true"></div>
                </v-avatar>
              </div>
            </div>
          </v-parallax>
        </section>

        <!-- Hero section -->
        <section id="hero" class="hero section dark-background" style="height: 100svh">
          <div style="
              position: absolute;
              z-index: 999;
              width: 100vw;
              height: 100svh;
            ">
          </div>
          <div class="overlay"></div>
          <img src="./assets/img/hero.png" alt="" class="" id="default-image" />
          <video id="look-around" src="./assets/clips/start.mp4" alt="" class="" style="
              position: absolute;
              object-fit: cover;
              width: 100%;
              height: 100%;
              object-position: top;
            " muted playsinline></video>

          <div class="container d-flex flex-column justify-content-center" style="height: 100%">
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
        <Navigator @submit="enableScroll()" />

      </main>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref, defineAsyncComponent } from "vue";
import Typed from "typed.js";
import { shallowRef } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

import Navigator from './components/Navigator.vue'

const BlackHoleAsync = defineAsyncComponent(() =>
  import("./components/BlackHole.vue")
);
const ResumeAsync = defineAsyncComponent(() =>
  import("./components/Resume.vue")
);

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
const initialize = ref(false);

const container = ref(null);
const container1 = ref(null);
const isVisible = ref(false);
const isVisible1 = ref(false);

let observer;
let observer1;
let scrollBlocked = false;

function preventDefault(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
}

function preventKeys(e) {
  // space/page/home/end/arrows
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
  if (keys.includes(e.keyCode)) e.preventDefault();
}

onMounted(async () => {
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

  // await waitForResources();
  isMobile = window.innerWidth <= 780;

  window.onload = function () {
    initialize.value = true;
    initAllSections();
    document.querySelector('#hero').scrollIntoView({ behavior: 'instant' });

    // scroll to bottom of page
    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(function () {
      requestAnimationFrame(() => {
        // window.scrollTo(0, document.body.scrollHeight);
        document.querySelector('#hero').scrollIntoView({ behavior: 'instant' });
        const splash = document.querySelector("#app-splash");
        if (splash) {
          splash.style.display = "none";
        }
        disableScroll();
      });
    }, 5000);
  };
});

function initAllSections() {

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
    // avatarVideo.play().catch(() => { });
  }

  if (w < 600) {
    avatarSize = 120;
  } else {
    avatarSize = 450;
  }

  setTimeout(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = entry.isIntersecting;
          // observer.disconnect(); // 🔑 load once only
        }
      },
      {
        root: null,
        threshold: 0.05, // 20% visible
      }
    );

    observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible1.value = entry.isIntersecting;
          // observer.disconnect(); // 🔑 load once only
        }
      },
      {
        root: null,
        threshold: 0.05, // 20% visible
      }
    );

    observer.observe(container.value);
    observer1.observe(container1.value);
  }, 8000)
}

function navigateToUrl(url) {
  window.open(url, "_blank");
}

function disableScroll() {
  if (scrollBlocked) return;
  scrollBlocked = true;

  // CSS fallback to hide scrollbars
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  // block wheel/touchmove and keyboard navigation
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
  window.addEventListener('keydown', preventKeys, { passive: false });
}

function enableScroll() {
  if (!scrollBlocked) return;
  scrollBlocked = false;

  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';

  window.removeEventListener('wheel', preventDefault, { passive: false });
  window.removeEventListener('touchmove', preventDefault, { passive: false });
  window.removeEventListener('keydown', preventKeys, { passive: false });
}
</script>
