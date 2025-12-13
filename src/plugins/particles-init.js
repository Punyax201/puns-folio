export const particlesOptions = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 40,
      density: { enable: true, area: 1200 },
    },
    color: { value: "#fff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: {
      value: { min: 1, max: 3 },
      animation: { enable: true, speed: 5, minimumValue: 1, sync: false },
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: "none",
      outModes: { default: "out" },
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
