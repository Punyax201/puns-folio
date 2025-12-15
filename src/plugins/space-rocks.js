const rockSrc = new URL("../assets/img/rock.png", import.meta.url).href;
export const particlesOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: {
      value: 30,
      density: { enable: true, area: 1200 },
    },
    color: { value: "#fff" },
    shape: {
      type: "image",
      options: {
        image: [
          { src: rockSrc, width: 32, height: 32 }, // resolved URL
        ],
      },
    },
    opacity: { value: 0.6 },
    size: {
      value: { min: 5, max: 15 },
      //   animation: { enable: true, speed: 5, minimumValue: 1, sync: false },
    },
    move: {
      enable: true,
      speed: 7,
      direction: "right",
      random: true,
      outModes: { default: "out" },
      straight: true,
    //   attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
    rotate: {
      value: { min: 0, max: 360 },        // random start angle
      direction: "random",                // clockwise / counter / random
      animation: {
        enable: true,
        speed: 30,                        // base rotation speed (higher = faster)
        sync: false                       // false -> each particle varies
      }
    },
    links: {
      enable: false,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    events: {
      //   onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
};
