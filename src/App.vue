<template>
  <v-app>
    <v-main>
      <!-- <router-view /> -->
      <main class="main">
        <!-- Particles -->
        <!-- <vue-particles id="tsparticles" :options="particlesOptions" style=" z-index: 9999;" /> -->

        <section id="outer" class="hero section dark-background d-flex align-items-end"
          style="height: 310vh; width: 100vw; padding: 0;">

          <v-parallax src="./assets/img/sky2.png" style="height: 100%;">
            <div class="overlay"></div>

            <div class="d-flex flex-column" style="height: 100%;">
              <!-- Black hole -->
              <div style="width: 100%; height: 100vh;" class="mb-auto">
                <BlackHole />
              </div>

              <!-- Resume Section -->
              <div id="resume" class="p-3 d-flex flex-column mt-auto"
                style="position: relative; z-index: 111; height: 200vh;">
                <Resume />
                <div class="section-title-up mb-4">
                  <h2>Professional Journey</h2>
                </div>
              </div>
              <hr style="position: relative; z-index: 111;">
              </hr>
            </div>
          </v-parallax>

        </section>
        <!-- Extension Section -->
        <section id="extension" class="hero section dark-background d-flex align-items-end"
          style="height: 310vh; width: 100vw; padding: 0;">

          <v-parallax src="./assets/img/sky1.png" style="height: 100%;">
            <div class="overlay"></div>
            <!-- Particles -->
            <!-- <vue-particles id="tsparticles" :options="particlesOptions" style="position: relative; z-index: 9999;" /> -->

            <!-- Secondary Skills -->
            <div id="secondary-skills" class="p-3 d-flex flex-column"
              style="height: 100vh; z-index: 999; width: 100vw; position: relative;">
              <div>
                <div class="section-title mb-4">
                  <h2>Secondary Skills</h2>
                </div>

              </div>

              <div class="skills-content d-flex flex-column" style="position: relative; flex: 1;">

                <v-item-group>
                  <v-container>
                    <v-row>
                      <v-col cols="12" lg="6" sm="12">
                        <v-card style="background-color: inherit;">
                          <v-card-text>
                            <v-img aspect-ratio="16/9" height="240" cover src="./assets/img/3d-print-1.jpg"></v-img>
                          </v-card-text>
                          <v-card-subtitle>
                            <h4>3D Printing</h4>
                            <p>FDM, SLA</p>
                          </v-card-subtitle>
                        </v-card>
                      </v-col>

                      <v-col cols="12" lg="6" sm="12">
                        <v-card style="background-color: inherit;">
                          <v-card-text>
                            <v-img aspect-ratio="16/9" height="240" cover src="./assets/img/pi.jpg"></v-img>
                          </v-card-text>
                          <v-card-subtitle>
                            <h4>Raspberry Pi</h4>
                            <p>Basic flight control program (BLDC motors and servos), Accelerometer & Gyro sensor</p>
                          </v-card-subtitle>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </div>
            </div>

            <!-- Skills -->
            <div id="skills" class="p-3 d-flex flex-column"
              style="height: 100vh; z-index: 999; width: 100vw; position: relative;">
              <div>
                <div class="section-title mb-4">
                  <h2>Skills</h2>
                </div>

              </div>

              <div class="skills-content d-flex flex-column" style="position: relative; flex: 1;">
                <p>
                  <strong>Frameworks & Libraries - </strong>
                  Angular, Vue, Wijmo Grids, AG Grids, jQuery, BootStrap, Charts.js,
                  PrimeNG, Vuetify, D3.js, FastAPI, Django REST Framework, Azure SDKs
                </p>
                <p class="mt-4">
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
                          <span class="mt-2"><v-progress-linear v-model="progressValue.genAI"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>FrontEnd Development (Angular, Vue)</span>
                          <span class="mt-2"><v-progress-linear v-model="progressValue.frontEnd"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>REST APIs and Websockets (Django, FastAPI)</span>
                          <span class="mt-2"><v-progress-linear v-model="progressValue.backend"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>Azure Cloud (App Services, Build Pipelines, Storage)</span>
                          <span class="mt-2"><v-progress-linear v-model="progressValue.azure"
                              chunk-count="10"></v-progress-linear></span>
                        </div>

                        <div class="d-flex flex-column w-100">
                          <span>E-commerce CMS (Wordpress)</span>
                          <span class="mt-2"><v-progress-linear v-model="progressValue.cms"
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
            <div id="about" class="p-3" style="height: 100vh; z-index: 999; width: 100vw; position: relative;">
              <div>
                <div class="section-title mb-4">
                  <h2>About</h2>
                </div>
                <p>Full-Stack Developer with expertise in modern JavaScript frameworks (Angular) and Python backends
                  (Django, FastAPI). Experienced in designing and delivering scalable, high-performance web applications
                  and dynamic CMS platforms. Skilled in building and managing automated build systems and CI/CD
                  pipelines
                  for seamless deployments.</p>

              </div>
              <hr style="background: #fff; border: none; height: 2px; display: block;">
              </hr>

              <div class="about-content" style="position: relative;">
                <v-card style="background-color: inherit;">
                  <v-card-text>
                    <div class="row">
                      <div class="col-lg-4 col-sm-12 d-flex justify-center">
                        <v-avatar :size="avatarSize">
                          <!-- <img id="default-image" src="./assets/img/clip.png" width="300"></img> -->
                          <video :width="avatarSize" id="look-around" autoplay muted loop playsinline preload="auto"
                            disablePictureInPicture controls="false" tabindex="-1"
                            src="./assets/clips/lappy.mp4"></video>
                        </v-avatar>
                      </div>

                      <div class="col-lg-8 col-sm-12 mt-4 content">
                        <h2>Software Engineer &amp; AI Generalist</h2>
                        <p class="fst-italic py-3">
                          Passionate about leveraging <strong>Generative AI</strong>, with
                          hands-on experience implementing RAG (Retrieval-Augmented
                          Generation) workflows and integrating AI-driven features into
                          real-world solutions. Focused on clean architecture,
                          performance, and continuous innovation.
                        </p>
                        <div class="row my-3">
                          <div class="col-lg-6">
                            <ul style="list-style-type: none;">
                              <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>D.O.B:</strong> <span>26th Aug 1998</span>
                              </li>
                              <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>Website:</strong> <span>www.example.com</span>
                              </li>
                              <!-- <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+123 456 7890</span>
                    </li> -->
                              <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>City:</strong>
                                <span>Ahmedabad, Gujarat - भारत (India)</span>
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-6">
                            <ul style="list-style-type: none;">
                              <!-- <li>
                                <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                                <span>27</span>
                              </li> -->
                              <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>Education:</strong>
                                <span>B.Tech - Information Technology</span>
                              </li>
                              <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>Email:</strong> <span>punyax201@gmail.com</span>
                              </li>
                              <!-- <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li> -->
                            </ul>
                          </div>
                        </div>
                        <!-- <p class="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p> -->
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
          <!-- Particles -->
          <div style="
              position: absolute;
              z-index: 999;
              width: 100vw;
              height: 100vh;
            ">
            <div id="particles-js"></div>
          </div>
          <div class="overlay"></div>
          <img src="./assets/img/hero.png" alt="" data-aos="fade-in" class="" id="default-image" />
          <video id="look-around" src="./assets/clips/start.mp4" alt="" data-aos="fade-in" class="" style="
              position: absolute;
              object-fit: cover;
              width: 100%;
              height: 100%;
              object-position: top;
            " autoplay muted playsinline></video>

          <div class="container d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100"
            style="height: 100%">
            <!-- Namaskaram -->
            <div class="namaskaram mt-auto">
              <span
                class="d-flex w-100 mt-auto justify-center animate__animated animate__pulse animate__infinite animate__slow">
                <h2 class="sura-regular mr-1" style="font-size: 40px">
                  नमस्कारम
                </h2>
                <img src="./assets/img/namaste.png" style="position: relative; width: 40px" />
              </span>
            </div>

            <div class="mt-auto mb-5">
              <h2>Punya Kotecha</h2>
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
        <div style="position: fixed; right: 1%; top: 10%; z-index: 999; animation-duration: 10s;"
          class="animate__animated animate__shakeY animate__infinite animate__slower">
          <img style="width: 50px; height: 50px;" src="./assets/scroll-up.png" @click="start"></img>
        </div>
      </main>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Typed from "typed.js";
import Lenis from "lenis";
import { shallowRef } from 'vue'

import { particlesOptions } from './plugins/particles-init'
import Resume from './components/Resume.vue'
import BlackHole from './components/BlackHole.vue'

const videoContainer = ref(null);
const heroImage = ref(null);
const aboutVideo = ref(null);
const progressValue = shallowRef({
  genAI: 60,
  frontEnd: 90,
  backend: 75,
  azure: 70,
  cms: 65
})
let lenis = null;
let rafId = null;
let avatarSize = 150;

onMounted(() => {
  window.scrollTo(0, document.documentElement.scrollHeight);
  new Typed(".typed", {
    strings: ["Human", "Software Developer and AI Generalist"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25,
  });

  lenis = new Lenis({
    duration: 1.2, // base duration (seconds)
    smooth: true,
    // optional easing: (t) => t
  });

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

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
    avatarSize = 200;
  }
  avatarVideo.play();
  // avatarVideo.autoplay = true;
});

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId);
  lenis = null;
});

function start() {
  videoContainer.value = document.querySelector("#hero video");
  heroImage.value = document.querySelector("#hero #default-image");
  // window.alert('s')
  heroImage.value.style.display = "none";
  videoContainer.value.style.opacity = "1";
  videoContainer.value.pause();

  setTimeout(() => {

    videoContainer.value.play();
    setTimeout(() => {
      // document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
      lenis.scrollTo(document.querySelector("#about"), { duration: 70 });

      setTimeout(() => {
        lenis.scrollTo(document.querySelector("#about"), { duration: 10 });
      }, 2500)
    }, 1000);
  }, 200);
}
</script>
