export const options = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: {
      value: 25,
      density: { enable: true, area: 1200 },
      limit: 20
    },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      options: {},
    },
    opacity: { value: 0.6 },
    size: {
      value: { min: 1, max: 3 },
      //   animation: { enable: true, speed: 5, minimumValue: 1, sync: false },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      decay: 0.005,
    },
    collisions: {
      enable: true, // Must be enabled globally
      overlap: {
        enable: true, // Allows particles to overlap the absorber
        retinaValue: 10, // Based on the absorber's size.value
      },
    },
    rotate: {
      value: { min: 0, max: 360 }, // random start angle
      direction: "random", // clockwise / counter / random
      animation: {
        enable: true,
        speed: 30, // base rotation speed (higher = faster)
        sync: false, // false -> each particle varies
      },
    },
    links: {
      enable: false,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
  },
  absorbers: [
    {
      position: {
        x: 50,
        y: 43,
      },
      color: "#011125",
      size: {
        value: 15,
        density: 80,
      },
      speed: 3,

      // }
    },
  ],
  detectRetina: true,
};
