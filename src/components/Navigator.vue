<template>
    <!-- Scroller -->
    <div style="position: fixed; right: 1%; top: 10%; z-index: 1999; animation-duration: 10s;"
        class="animate__animated animate__shakeY animate__infinite animate__slower">
        <img style="width: 50px; height: 50px;" src="./../assets/scroll-up.png" @click="up()"></img>
    </div>

    <div style="position: fixed; right: 1%; bottom: 10%; z-index: 1999; animation-duration: 10s; transform: rotateZ(180deg);"
        class="down-btn animate__animated animate__shakeY animate__infinite animate__slower">
        <img style="width: 50px; height: 50px;" src="./../assets/scroll-up.png" @click="down()"></img>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Lenis from "lenis";

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

function up() {
    if (currentStep >= 6) return;
    currentStep++;

    switch (currentStep) {
        case 1:
            videoContainer.value = document.querySelector("#hero video");
            heroImage.value = document.querySelector("#hero #default-image");
            // window.alert('s')
            heroImage.value.style.display = "none";
            videoContainer.value.style.opacity = "1";
            videoContainer.value.pause();

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
            videoContainer.value.play();

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

function down() {
    currentStep--;

    switch (currentStep) {
        case 0:
            scrollToElement = document.querySelector("#hero");
            break;
        case 1:
            videoContainer.value = document.querySelector("#hero video");
            heroImage.value = document.querySelector("#hero #default-image");
            // window.alert('s')
            heroImage.value.style.display = "none";
            videoContainer.value.style.opacity = "1";
            videoContainer.value.pause();

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