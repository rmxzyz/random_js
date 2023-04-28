var style = document.createElement('style');
style.innerHTML = "body, html, #app {\n margin: 0;\n width: 100%;\n height: 100%;\n }\n #app {\n overflow: hidden;\n touch-action: pan-up;\n color: #ffffff;\n font-family: 'Montserrat', sans-serif;\n text-align: center;\n text-shadow: 0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000; \n } \n #app h1 {\n --fontSize: 60px;\n--lineHeight: 80px;\n width: auto;\n height: calc(2 * var(--lineHeight));\n line-height: var(--lineHeight);\n  margin: calc(50vh - var(--lineHeight)) auto 0;\n font-size: var(--fontSize);\n text-transform: uppercase;\n } \n #app a {\n margin-top: 10px; \n  display: inline-block \n  text-decoration: none; \n color: #fff; \n }\n #app canvas {\n  display: block;\n  position: fixed;\n z-index: -1;\n top: 0;\n}\n";
document.head.appendChild(style);
var app = document.createElement('div');
app.id = "app";
app.style.position = 'fixed';
app.style.zIndex = -1;
document.body.appendChild(app)
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})
