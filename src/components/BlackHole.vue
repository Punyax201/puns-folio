<template>
  <div class="text-overline font-weight-light text-center" style="top: 2rem; left: 0; right: 0; width: 100%;; position: absolute;">
    <span>
      <p>Inner peace, external chaos</p>
    </span>
  </div>

  <!-- Key highlights -->
  <div class="font-weight-thin text-start p-3" style="bottom: 1.5rem; left: 0; width: 100%;; position: absolute; font-size: 0.5rem;">
    <span class="w-50" >
      <p class="font-weight-light mb-1">Key Highlights</p>
      <ul class="p-0" style="list-style-type: none;">
        <li>WAN 2.2 and Flux 8 (LoRa)</li>
        <li>Vue 3 Framework</li>
        <li>WebGL for Graphics rendering</li>
      </ul>
    </span>
  </div>
  <div style="position: absolute; width: 100%; inset:0; height: 70%; z-index: 199;">
    <!-- Particles -->
    <vue-particles v-if="canvasOptions" id="bhparticles" :options="canvasOptions"
      style=" z-index: 150; height: 100vh; position: absolute; inset: 0;" />
  </div>
  <canvas id="glcanvas" style="position: relative; z-index: 222; overflow: hidden; width: auto;"></canvas>

  <!-- Copyright -->
  <div class="font-weight-thin text-center" style="bottom: 1.5rem; left: 0; right: 0; width: 100%;; position: absolute; font-size: 0.5rem;">
    <span>
      <!-- Write footer copyright text -->
       <p>Copyright © Punya Kotecha (2026) </p>
    </span>
  </div>
</template>

<style scoped>
canvas {
  display: block;
  width: 100%;
  /* width: 100vw;
  height: 100vh; */
}
</style>
<script setup>
import { onMounted, ref } from "vue";
import { options } from './../plugins/blackhole-particles'
import { pcOptions } from './../plugins/blackhole-particles-pc'

const canvasOptions = ref(null);
let canvasRef = null;
let particlesCanvasRef = null;

onMounted(() => {
  // calculate window width to determine pc or mobile
  const isMobile = window.innerWidth <= 780;
  canvasOptions.value = isMobile ? options : pcOptions;

  const canvas = document.getElementById("glcanvas");
  canvasRef = canvas;
  particlesCanvasRef = document.querySelector("#bhparticles canvas");

  const gl = canvas.getContext("webgl");
  if (!gl) {
    alert("WebGL not supported");
    return;
  }

  // Vertex shader: simple pass-through of positions.
  const vsSource = `
        attribute vec2 a_position;
        void main() {
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `;

  // Fragment shader: computes a background image layer and an animated layer,
  // then blends them (animation on top at 50% opacity), with brightness boosting.
  const fsSource = `
        precision mediump float;
        uniform float t;
        uniform vec2 r;  // resolution
        
        // Custom tanh function for vec2 since built-in tanh is unavailable in WebGL GLSL.
        vec2 myTanh(vec2 x) {
          vec2 ex = exp(x);
          vec2 emx = exp(-x);
          return (ex - emx) / (ex + emx);
        }
        
        void main() {
          vec4 o_bg = vec4(0.0);
          vec4 o_anim = vec4(0.0);

          // ---------------------------
          // Background (Image) Layer
          // ---------------------------
          {
            // Use gl_FragCoord.xy (pixel coordinates).
            vec2 p_img = (gl_FragCoord.xy * 2.0 - r) / r.y * mat2(3.0, -3.0, 3.0, 3.0);
            vec2 l_val = myTanh(p_img * 5.0 + 2.0);
            l_val = min(l_val, l_val * 3.0);
            vec2 clamped = clamp(l_val, -2.0, 0.0);
            float diff_y = clamped.y - l_val.y;
            // Avoid division by zero with a small epsilon:
            float safe_px = abs(p_img.x) < 0.001 ? 0.001 : p_img.x;
            float term = (0.1 - max(0.01 - dot(p_img, p_img) / 200.0, 0.0) * (diff_y / safe_px))
                         / abs(length(p_img) - 0.7);
            o_bg += vec4(term);
            // Ensure non-negative values:
            o_bg *= max(o_bg, vec4(0.0));
          }

          // ---------------------------
          // Foreground (Animation) Layer
          // ---------------------------
          {
            vec2 p_anim = (gl_FragCoord.xy * 2.0 - r) / r.y / 0.3;
            vec2 d = vec2(-1.0, 1.0);
            float denom = 0.1 + 5.0 / dot(5.0 * p_anim - d, 5.0 * p_anim - d);
            vec2 c = p_anim * mat2(0.8, 0.8, d.x / denom, d.y / denom);
            vec2 v = c;
            // Apply a time-varying transformation:
            v *= mat2(cos(log(length(v)) + t * 0.2 + vec4(0.0, 33.0, 11.0, 0.0))) * 5.0;
            vec4 animAccum = vec4(0.0);
            for (int i = 1; i <= 9; i++) {
              float fi = float(i);
              animAccum += sin(vec4(v.x, v.y, v.y, v.x)) + vec4(1.0);
              v += 0.7 * sin(vec2(v.y, v.x) * fi + t) / fi + 0.5;
            }
            vec4 animTerm = 1.0 - exp(-exp(c.x * vec4(0.6, -0.4, -1.0, 0.0))
                              / animAccum
                              / (0.1 + 0.1 * pow(length(sin(v / 0.3) * 0.2 + c * vec2(1.0, 2.0)) - 1.0, 2.0))
                              / (1.0 + 7.0 * exp(0.3 * c.y - dot(c, c)))
                              / (0.03 + abs(length(p_anim) - 0.7)) * 0.2);
            o_anim += animTerm;
          }

          // ---------------------------
          // Blend Layers: animation at 50% opacity over image.
          // Boost brightness so output isn't pitch black.
          // ---------------------------
          vec4 finalColor = mix(o_bg, o_anim, 0.5) * 1.5;
          finalColor = clamp(finalColor, 0.0, 1.0);
          gl_FragColor = finalColor;
        }
      `;

  // Shader compilation utility.
  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(
        "Shader compile failed with: " + gl.getShaderInfoLog(shader)
      );
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  // Program creation utility.
  function createProgram(gl, vsSource, fsSource) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program failed to link: " + gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  const program = createProgram(gl, vsSource, fsSource);
  gl.useProgram(program);

  // Get attribute and uniform locations.
  const positionLocation = gl.getAttribLocation(program, "a_position");
  const timeLocation = gl.getUniformLocation(program, "t");
  const resolutionLocation = gl.getUniformLocation(program, "r");

  // Set up a full-screen quad.
  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  // Resize canvas.
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
  window.addEventListener("resize", resize);
  resize();

  let startTime = performance.now();
  // Render loop.
  function render() {
    let currentTime = performance.now();
    let delta = (currentTime - startTime) / 1000;
    gl.uniform1f(timeLocation, delta);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  window.addEventListener("resize", resizeCanvas);
  window.visualViewport?.addEventListener("resize", resizeCanvas);
});

function resizeCanvas() {
  const gl = canvasRef.getContext("webgl");
  const dpr = window.devicePixelRatio || 1;

  const width = window.visualViewport
    ? window.visualViewport.width
    : window.innerWidth;

  const height = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;

  canvasRef.width = Math.round(width * dpr);
  canvasRef.height = Math.round(height * dpr);

  canvasRef.style.width = `${width}px`;
  canvasRef.style.height = `${height}px`;

  gl.viewport(0, 0, canvasRef.width, canvasRef.height);
}
</script>
