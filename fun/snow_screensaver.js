var canvas = document.createElement('canvas');
canvas.id = 'canvas2'
//<canvas></canvas><button>Start Screensaver</button>;
var button = document.createElement('button');
button.innerHTML = 'Start Screensaver';
document.body.appendChild(button);
button.outerHTML = '<button class="screensaverButton" >Start Screensaver</button>'
document.body.appendChild(canvas);
var style = document.createElement('style');
style.innerHTML = `
* {
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
  }
  canvas {
    position: fixed;
    top: 0;
    z-index: 10000; 
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #1c1717;
  }
  button {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 200000;
    transform: translate(-50%, -50%);
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
  }
`;
document.head.appendChild(style);
const CANVAS = document.querySelector('canvas');
const CONTEXT = CANVAS.getContext('2d');
let RUN = false;
let PARTICLES;

const DRAW = () => {
  if (RUN) {
    CONTEXT.clearRect(0, 0, window.innerWidth, window.innerHeight);
    PARTICLES.forEach(p => {
      CONTEXT.fillStyle = `hsla(0, 0%, 100%, ${p.o})`;
      p.x += Math.cos(p.a) + p.s;
      p.y += Math.sin(p.a) + p.s;
      if (p.x > window.innerWidth) p.x = 0;
      if (p.x < 0) p.x = window.innerWidth;
      if (p.y > window.innerHeight) p.y = 0;
      if (p.y < 0) p.y = window.innerHeight;
      CONTEXT.fillRect(p.x, p.y, p.d, p.d);
    });
    requestAnimationFrame(DRAW);
  }
};

const BUTTON = document.getElementsByClassName('screensaverButton')[0];
BUTTON.style.cursor = 'cell';
BUTTON.addEventListener('click', () => CANVAS.requestFullscreen());

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement || document.webkitIsFullScreen) {
    setTimeout(() => {
     CANVAS.style.cursor = 'none';
      CANVAS.width = CONTEXT.width = window.innerWidth;
      CANVAS.height = CONTEXT.height = window.innerHeight;
      PARTICLES = new Array(150).fill().map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        a: Math.random() * (Math.PI * 2),
        s: Math.random() * 10,
        d: Math.random() * 5,
        o: Math.random() }));

      document.addEventListener('pointermove', document.exitFullscreen);
      RUN = true;
      DRAW();
    }, 1000);
  } else {
    CANVAS.style.cursor = 'default'
    document.removeEventListener('pointermove', document.exitFullscreen);
    
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.width);
    RUN = false;
  }
});
