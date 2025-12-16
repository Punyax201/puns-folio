<template>
    <!-- Up button -->
    <div style="position: fixed; right: 3%; top: 10%; z-index: 1999; animation-duration: 10s;"
        class="animate__animated animate__shakeY animate__infinite animate__slower">
        <!-- <img style="width: 50px; height: 50px;" src="./../assets/scroll-up.png" @click="up(-1)"></img> -->
        <v-btn size="large" base-color="transparent" icon="fa:fas fas fa-chevron-circle-up" @click="up(-1)">
            <v-icon style="width: 100%;">
                fa:fas fas fa-chevron-circle-up
            </v-icon>
        </v-btn>
    </div>

    <!-- Speed dial -->
    <div v-if="showSpeedDial"
        style="position: fixed; right: 3%; top: 50%; transform: translateY(-40%); z-index: 1999; animation-duration: 10s;">

        <v-speed-dial location="left top" transition="fade-transition">
            <template v-slot:activator="{ props: activatorProps }">
                <v-fab base-color="transparent" v-bind="activatorProps" size="large"
                    icon="fa:fas fas fa-rocket"></v-fab>
            </template>

            <v-btn key="1" @click="up(6)" icon="fa:fas fas fa-radiation">
                <v-icon>
                    fa:fas fas fa-radiation
                </v-icon>
                <v-tooltip activator="parent" location="end">Singularity</v-tooltip>
            </v-btn>
            <v-btn key="1" @click="up(5)" icon="fa:fas fas fa-handshake">
                <v-icon>
                    fa:fas fas fa-handshake
                </v-icon>
                <v-tooltip activator="parent" location="end">Services</v-tooltip>
            </v-btn>
            <v-btn key="1" @click="up(4)" icon="fa:fas fas fa-file">
                <v-icon>
                    fa:fas fas fa-file
                </v-icon>
                <v-tooltip activator="parent" location="end">Resume</v-tooltip>
            </v-btn>
            <v-btn key="2" @click="up(3)" icon="fa:fas fas fa-layer-page">
                <v-icon>
                    fa:fas fas fa-layer-group
                </v-icon>
                <v-tooltip activator="parent" location="end">Secondary Skills</v-tooltip>
            </v-btn>
            <v-btn key="3" @click="up(2)" icon="fa:fas fas fa-desktop" text="Skills">
                <v-icon>
                    fa:fas fas fa-desktop
                </v-icon>
                <v-tooltip activator="parent" location="end">Skills</v-tooltip>
            </v-btn>
            <v-btn key="4" @click="up(1)" icon="fa:fas fas fa-circle-info" text="About">
                <v-icon>
                    fa:fas fas fa-circle-info
                </v-icon>
                <v-tooltip activator="parent" location="end">About</v-tooltip>
            </v-btn>
        </v-speed-dial>
    </div>

    <!-- Down button -->
    <div v-if="showSpeedDial" style="position: fixed; right: 3%; bottom: 10%; z-index: 1999; animation-duration: 10s; transform: rotateZ(180deg); border-radius: 50%;"
        class="down-btn animate__animated animate__shakeY animate__infinite animate__slower">
        <!-- <img style="width: 50px; height: 50px;" src="./../assets/scroll-up.png" @click="down()"></img> -->
        <v-btn size="large" base-color="transparent" icon="fa:fas fas fa-chevron-circle-down" @click="down()">
            <v-icon style="width: 100%;">
                fa:fas fas fa-chevron-circle-down
            </v-icon>
        </v-btn>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Lenis from "lenis";

let showSpeedDial = ref(false);

const videoContainer = ref(null);
const heroImage = ref(null);

let lenis = null;
let rafId = null;

let currentStep = 0;
let scrollToElement = null;

onMounted(() => {
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
});

onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId);
    lenis = null;
});

function up(step = -1) {
    if (step !== -1) {
        currentStep = step;
    } else {
        currentStep++;
    }

    if (currentStep > 6) return;

    switch (currentStep) {
        case 1:
            videoContainer.value = document.querySelector("#hero video");
            heroImage.value = document.querySelector("#hero #default-image");
            // window.alert('s')
            heroImage.value.style.display = "none";
            videoContainer.value.style.opacity = "1";
            videoContainer.value.pause();

            setTimeout(() => {
                heroImage.value.style.display = "block";
                videoContainer.value.style.opacity = "0";
                showSpeedDial.value = true;
            }, 8500);

            scrollToElement = document.querySelector("#about");
            break;
        case 2:
            scrollToElement = document.querySelector("#skills");
            break;
        case 3:
            scrollToElement = document.querySelector("#secondary-skills");
            break;
        case 4:
            scrollToElement = document.querySelector("#resume");
            break;
        case 5:
            scrollToElement = document.querySelector("#services");
            break;
        case 6:
            scrollToElement = document.querySelector("#outer");
            break;

        default:
            break;
    }

    setTimeout(() => {
        if (currentStep === 1) {
            videoContainer.value.play()

            setTimeout(() => {
                // document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
                lenis.scrollTo(scrollToElement, { duration: 70 });

                setTimeout(() => {
                    lenis.scrollTo(scrollToElement, { duration: 4 });
                }, 2500)
            }, 1000);
        } else {
            if (currentStep === 4) {
                scrollToElementBottom(scrollToElement);
                return;
            }
            setTimeout(() => {
                lenis.scrollTo(scrollToElement, { duration: 4 });
            }, 100)
        }

    }, 200);
}

function down(step = -1) {
    currentStep--;

    if (step !== -1) {
        currentStep = step;
    }

    switch (currentStep) {
        case 0:
            scrollToElement = document.querySelector("#hero");
            break;
        case 1:
            videoContainer.value = document.querySelector("#hero video");
            heroImage.value = document.querySelector("#hero #default-image");
            scrollToElement = document.querySelector("#about");
            // setTimeout(() => {
            //     heroImage.value.style.display = "block";
            //     videoContainer.value.style.opacity = "0";
            // }, 8500);
            break;
        case 2:
            scrollToElement = document.querySelector("#skills");
            break;
        case 3:
            scrollToElement = document.querySelector("#secondary-skills");
            break;
        case 4:
            scrollToElement = document.querySelector("#resume");
            break;
        case 5:
            scrollToElement = document.querySelector("#services");
            break;
        case 6:
            scrollToElement = document.querySelector("#outer");
            break;

        default:
            break;
    }

    setTimeout(() => {
        if (currentStep === 4) {
            scrollToElementBottom(scrollToElement);
            return;
        }
        setTimeout(() => {
            lenis.scrollTo(scrollToElement, { duration: 5 });
        }, 100)

    }, 200);
}

function scrollToElementBottom(el, duration = 1.2) {
    if (!el || !lenis) return;
    const rect = el.getBoundingClientRect();
    const docHeight = document.documentElement.scrollHeight;
    const winH = window.innerHeight;
    // desired y so element bottom sits at viewport bottom
    let y = window.scrollY + rect.top + el.offsetHeight - winH;
    // clamp to valid scroll range
    y = Math.max(0, Math.min(y, docHeight - winH));
    setTimeout(() => {
        lenis.scrollTo(y, { duration: 4 });
    }, 100);
}
</script>