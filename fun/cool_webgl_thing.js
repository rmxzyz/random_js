var html = `
<div id ="menu">
<p id="controls">Close Controls</p>
<div id="showhide">
<hr>
<p><input type="checkbox" id="colorplan" checked> Fuzzy Connections</p>
<p><input type="range" min = 1 max = 20 value = 3 id="order"> order</p>
<p><input type="range" min = 1 max = 10 value = 2 step="1" id="frequency"> Frequency</p>
<p><input type="range" min = 0 max = 4 step="any" value = 1 id="speed"> Speed</p>
<p><input type="checkbox" id="interact">Mouse Interaction</p>
</div> <!-- showhide -->
</div> <!-- menu -->

`
var style = document.createElement('style')
style.innerHTML=`
body {
  font-family: Arial, Helvetica, "Liberation Sans", FreeSans, sans-serif;
  background-color: #000;
  margin: 0;
  overflow: hidden;
  background-repeat: no-repeat;
  caret-color: transparent;
}
canvas {
  position : absolute;
}
#menu {
  font-size: 80%;
  margin: 0;
  padding: 5px;
  position: absolute;
  left: 5px;
  top: 5px;
  border-radius: 10px;
  background-color: rgba(255, 255, 128, 0.9);
  color: black;
  z-index: 10
}

#menu.hidden #showhide{
  display: none;
}

#controls {
  margin-top: 4px;
  margin-bottom: 4px;
}
#menu button {
  margin-right: 5px;
  margin-left: 5px;
}

/*
#menu input[type=range] {
  width : 15em;
}
*/
#huesample {
  display: inline-block;
  margin-left: 1em;
  width: 3em;
  height:1em;
  background-color: #f00;
  border: 1px solid black;
}

`
document.head.appendChild(style)
var div = document.createElement('div')
document.body.appendChild(div)
div.outerHTML = html

//JS
"use strict";

/* based on complex 07a */

let canv, gl;
let animState;
let maxx, maxy;
let midx, midy;

let order;
let speed;
let frequency, colorPlan;

let widthHandle, heightHandle;
let frequencyHandle, freq;
let pHandle, orderHandle, f;
let colorPlanHandle;

let p =[];
let st; // smooth transition

 let ui, uiv; // unser interface elements and values
const MAXORDER = 20;
// timing for mouse interaction
const CATCHTIME = 3000;
const RELEASETIME = 5000;

//let timeHandle;

let mousePos = {};

const mrandom =  Math.random;
const mfloor = Math.floor;
const mround = Math.round;
const mceil = Math.ceil;
const mabs = Math.abs;
const mmin = Math.min;
const mmax = Math.max;

const mPI = Math.PI;
const mPIS2 = Math.PI / 2;
const m2PI = Math.PI * 2;
const msin = Math.sin;
const mcos = Math.cos;
const matan2 = Math.atan2;

const mhypot = Math.hypot;
const msqrt = Math.sqrt;

//-----------------------------------------------------------------------------
// miscellaneous functions
//-----------------------------------------------------------------------------

  function alea (min, max) {
// random number [min..max[ . If no max is provided, [0..min[

    if (typeof max == 'undefined') return min * mrandom();
    return min + (max - min) * mrandom();
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  function intAlea (min, max) {
// random integer number [min..max[ . If no max is provided, [0..min[

    if (typeof max == 'undefined') {
      max = min; min = 0;
    }
    return mfloor(min + (max - min) * mrandom());
  } // intAlea

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function distance (p0, p1) {

/* distance between points */

    return mhypot (p0[0] - p1[0], p0[1] - p1[1]);

  } // function distance
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 1].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [r,g,b];
} // function hslToRgb

/*	============================================================================
	This is based upon Johannes Baagoe's carefully designed and efficient hash
	function for use with JavaScript.  It has a proven "avalanche" effect such
	that every bit of the input affects every bit of the output 50% of the time,
	which is good.	See: http://baagoe.com/en/RandomMusings/hash/avalanche.xhtml
	============================================================================
*/
/* This function returns a hash function depending on a seed.

if no seed is provided (or a falsy value), Math.random() is used.
The returned function always returns the same number in the range [0..1[ for the
same value of the argument. This argument may be a String or a Number or anything else
which can be 'toStringed'
Two returned functions obtained with two equal seeds are equivalent.
*/

function hashFunction(seed) {
  let n0 = 0xefc8249d;
  let n = n0;
  mash((seed || Math.random())); // pre-compute n for seed
  n0 = n; //

	function mash(data) {
    data = data.toString() + 'U';
    n = n0;
    for (let i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    } // for
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  } // mash
  return mash;
} // hashFunction(seed)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function Noise1D (period, min = 0, max = 1, hash) {
/* returns a 1D noise function.
   the (mandatory) hash function must return a value between 0 and 1. The hash function
   will be called with an integer number for a parameter.
  the returned function takes one parameter, and will always return the same value if called with the same parameter
  period should be > 1. The bigger period is, the smoother the output noise is

suggestion : the hash parameter could be a function returned from a call to hashFunction above

*/

  let currx, y0, y1;  // cached valued, to reduce number of calls to 'hash'
  let phase = hash(0); // to shift the phase of different generators between each other;

  return function(x) {
    let xx = x / period + phase;
    let intx = mfloor(xx);

    if (intx - 1 === currx) { // next integer interval
      ++currx;
      y0 = y1;
      y1 = min + (max - min) * hash(currx + 1);
    } else if (intx !== currx) { // unrelated interval
      currx = intx;
      y0 = min + (max - min) * hash(currx);
      y1 = min + (max - min) * hash(currx + 1);
    }
    let frac = xx - currx;
    let z = (3 - 2 * frac) * frac * frac;
    return z * y1 + (1 - z) * y0;
  }
} // Noise1D

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//************** Shader sources **************
let vertexSource = `
attribute vec2 position;


void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

let fragmentSource = `

  precision mediump float;

  uniform float width;
  uniform float height;
  uniform int order;
  uniform int colorPlan;
  uniform float frequency;

  uniform vec2 p[${MAXORDER}];

  vec2 iResolution;
  vec2 z, zr, zg, zb, znumr, zdenr, znumg, zdeng, znumb, zdenb;
  vec3 rgb;

vec2 mult(vec2 z1, vec2 z2) {
  return vec2(z1.x * z2.x - z1.y * z2.y, z1.x * z2.y + z1.y * z2.x);
} // dmult

vec2 div( vec2 z1, vec2 z2) {
  return vec2(z1.x * z2.x + z1.y * z2.y, z1.y * z2.x - z1.x * z2.y) / (z2.x * z2.x + z2.y * z2.y);
} // div

void main(){

  iResolution = vec2(width, height);
  float r,g,b;

// z = -1...+1 on shortest dimension

  z = (gl_FragCoord.xy - 0.5 * iResolution ) / min(width, height) * 2.0 ;
  zdenr = vec2(1.0, 0);
  znumr = vec2(1.0, 0);
  zdeng = vec2(1.0, 0);
  znumg = vec2(1.0, 0);
  zdenb = vec2(1.0, 0);
  znumb = vec2(1.0, 0);

  for (int k = 0; k < ${MAXORDER}; k += 3) {
    if (k >= order) break;
    znumr = mult(znumr, z - p[k]);
    zdenb = mult(zdenb, z - p[k]);
    if (k + 1 < order) {
      znumg = mult(znumg, z - p[k + 1]);
      zdenr = mult(zdenr, z - p[k + 1]);
      if (k + 2 < order) {
        znumb = mult(znumb, z - p[k + 2]);
        zdeng = mult(zdeng, z - p[k + 2]);
      }
    }
  }

  zr = div(znumr, zdenr);
  zg = div(znumg, zdeng);
  zb = div(znumb, zdenb);
  rgb = vec3(atan(zr.x + length(zr), zr.y),
             atan(zg.x + length(zg), zg.y),
             atan(zb.x + length(zb), zb.y));
  rgb = mod(rgb * frequency / 3.14159265, 1.0);

  if (colorPlan != 0) {
    rgb =  min(2.0 * rgb, 2.0 - 2.0 * rgb);
    rgb = rgb * rgb;
  }

  gl_FragColor = vec4 (rgb, 1.0);
}
`;

//************** Utility functions **************

//Compile shader and combine with source
function compileShader(shaderSource, shaderType){
  let shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
  	throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
  }
  return shader;
}

//From https://codepen.io/jlfwong/pen/GqmroZ
//Utility to complain loudly if we fail to find the attribute/uniform
function getAttribLocation(program, name) {
  let attributeLocation = gl.getAttribLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find attribute ' + name + '.';
  }
  return attributeLocation;
}

function getUniformLocation(program, name) {
  let attributeLocation = gl.getUniformLocation(program, name);
  if (attributeLocation === null) {
  	throw 'Cannot find uniform ' + name + '.';
  }
  return attributeLocation;
}


//--------------------------------------------------------------------
// used to switch softly beetween free and controle positions
// 0 for free
function SmoothTransition(startValue = 0, defaultDuration = 2000) {
  this.startValue = this.targetValue = this.currentValue = startValue ;
  this.startTime = performance.now();
  this.defaultDuration = defaultDuration;
  this.duration = 1;
} // SmoothTransition


SmoothTransition.prototype.setValue = function(value, duration = this.defaultDuration) {
// duration MUST be > 0
  this.startValue = this.currentValue;
  this.targetValue = value;
  this.duration = duration;
  this.startTime = performance.now();
}

SmoothTransition.prototype.getValue = function() {
  let alpha = mmin(1, mmax(0, (performance.now() - this.startTime) / this.duration)); // 0..1
  alpha = (2 - alpha) * alpha;  // ease function - starts fast, ends slowly
  return (this.currentValue =  this.targetValue * alpha + this.startValue * (1 - alpha));
}

//--------------------------------------------------------------------
function relativeCoord (element, clientX, clientY) {

  let style = element.currentStyle || window.getComputedStyle(element, null),
      paddingLeftWidth = parseInt(style.paddingLeft, 10),
      paddingTopWidth = parseInt(style.paddingTop, 10),
      borderLeftWidth = parseInt(style.borderLeftWidth, 10),
      borderTopWidth = parseInt(style.borderTopWidth, 10),
      rect = element.getBoundingClientRect(),
      x = clientX - paddingLeftWidth - borderLeftWidth - rect.left,
      y = clientY - paddingTopWidth - borderTopWidth - rect.top;

  return [x, y];
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function mouseMove (event) {

  let clx, cly;

    [clx, cly] = relativeCoord(canv, event.clientX, event.clientY);
    mousePos.x = clx;
    mousePos.y = cly;

    if (uiv.interact && st.targetValue != 1) st.setValue(1, CATCHTIME);
    if (! uiv.interact && st.targetValue != 0) st.setValue(0, RELEASETIME);
} // mouseMove

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function touchMove (event) {

  if (event.touches.length != 1) return; // ignore but single touch
  mouseMove(event.touches[0]); // suppose index 0 - not really guaranteed

} // touchMove
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function touchStop (event) {

    if (st.targetValue != 0) st.setValue(0, RELEASETIME);

} // touchStop

//------------------------------------------------------------------------
function toggleMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove ("hidden");
    this.innerHTML ="close controls";
  } else {
    menu.classList.add ("hidden");
    this.innerHTML ="controls";
  }
} // toggleMenu
//------------------------------------------------------------------------
function prepareUI() {
  ui = {};
  uiv = {};
  ['order','colorplan','frequency','speed','interact'].forEach(ctrlName => ui[ctrlName] = document.getElementById(ctrlName));

  registerControl("colorplan", readUICheck, "change", changeColorPlan);
  registerControl("order", readUIInt, "input", changeOrder);
  registerControl("frequency",readUIFloat,"input", changeFrequency);
  registerControl("speed",readUIFloat,"input", changeSpeed);
  registerControl("interact",readUICheck,"input", changeInteract);

} // prepareUI

//------------------------------------------------------------------------
function readUI() {

  if (ui.registered) {
    for (const ctrl in ui.registered) ui.registered[ctrl].readF();
  }
  changeColorPlan();
  changeOrder();
  changeFrequency();
  changeSpeed();
  changeInteract();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function registerControl (controlName, readFunction, changeEvent, changedFunction) {
/* provides simple way to associate controls with their read / update / changeEvent / changed functions
since many (but not all) controls work almost the same way */
/* changeEvent and changedEvent are optional */

  const ctrl = ui[controlName];
  ui.registered = ui.registered || [];
  ui.registered.push(ctrl); // NEVER register a control twice !!!
  ctrl.readF = readFunction;
  if (changeEvent) {
    ctrl.addEventListener(changeEvent, (event) => {
      readFunction.call(ctrl);
      if (changedFunction) changedFunction.call(ctrl,event);
    });
  }
} // registerControl
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function readUIFloat() {
  uiv[this.id] = parseFloat(this.value);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function readUIInt(ctrl, event) {
  uiv[this.id] = parseInt(this.value);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function readUICheck(ctrl, event) {
  uiv[this.id] = this.checked;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function changeColorPlan() {
  colorPlan = uiv.colorplan;
  gl.uniform1i(colorPlanHandle, colorPlan ? 1 : 0);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function changeOrder() {
  order = uiv.order;
  gl.uniform1i(orderHandle, order);

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function changeFrequency() {
  frequency = uiv.frequency;
  gl.uniform1f(frequencyHandle, frequency);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function changeSpeed() {
  speed = Math.sign(uiv.speed) * Math.pow(mabs(uiv.speed), 1.5); // better than linear
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function changeInteract() {
    if (! uiv.interact && (st.targetValue != 0)) st.setValue(0, RELEASETIME);

}
//---------------------------------------------------------
function resize() {
  maxx = window.innerWidth;
  maxy = window.innerHeight;
  canv.width = maxx;
  canv.height = maxy;

  canv.style.left = (window.innerWidth - maxx) / 2 + 'px';
  canv.style.top = (window.innerHeight - maxy) / 2 + 'px';

  midx = window.innerWidth / 2; // reference for x mouse position
  midy = window.innerHeight / 2; // reference for x mouse position

  if (mousePos.x === undefined) {
    mousePos.x = midx;
    mousePos.y = midy;
  }

	gl.viewport(0, 0, maxx, maxy);

  gl.uniform1f(widthHandle, maxx);
  gl.uniform1f(heightHandle, maxy);

}

//---------------------------------------------------------

let animate;
{ // scope for animate

let prevTime = 0;
let modifiedTime = 0;
animate = function(tStamp) {

  let dt;
  let px, py, stVal;

  if (animState == 0 && startOver()) {
    ++animState;
    prevTime = tStamp;
  }

  switch (animState) {

    case 1 :
    // functions for the points
      const cx = maxx / mmin(maxx, maxy);
      const cy = maxy / mmin(maxx, maxy);
      modifiedTime += (tStamp - prevTime) * speed;
      prevTime = tStamp;
    	//Send uniforms to program
      stVal = st.getValue();
      for (let k = 0; k < MAXORDER; ++k) {
        let px = f[k][0](modifiedTime);
        let py = f[k][1](modifiedTime);
        if (k == 0) {
          px = ((mousePos.x / maxx) - 0.5) * 2 * stVal + px * (1 - stVal); // -1 + 1
          py = (0.5 - (mousePos.y / maxy)) * 2 * stVal + py * (1 - stVal); // -1 + 1
        } else if (k == 1) {
          px = ((0.5 - mousePos.x / maxx)) * 2 * stVal + px * (1 - stVal); // -1 + 1
          py = ((mousePos.y / maxy - 0.5)) * 2 * stVal + py * (1 - stVal); // -1 + 1
        }

        p[2 * k] = px * cx;
        p[2 * k + 1] = py * cy;
      }
      gl.uniform2fv(pHandle,p);

      //Draw a triangle strip connecting vertices 0-4
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      break;
  } // switch

  requestAnimationFrame(animate);

} // animate
} // scope for animate;

//---------------------------------------------------------

function startOver() {

  readUI();

  resize();
  gl.uniform1i(colorPlanHandle, colorPlan);
  gl.uniform1i(orderHandle, order);
  gl.uniform1f(frequencyHandle, frequency);

  f = [];
  for (let k = 0 ; k < MAXORDER; ++k) {
    f[k] = noise2D();
  }


  return true;

  function noise2D() {
    return [Noise1D(alea(12000, 20000),-1,1,hashFunction()),
            Noise1D(alea(12000, 20000),-1,1,hashFunction())];
  }

} // startOver

//---------------------------------------------------------
function initShadersStuff() {

  //************** Create shaders **************

  //Create vertex and fragment shaders
  let vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
  let fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

  //Create shader programs
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.useProgram(program);

  //Set up rectangle covering entire canvas
  let vertexData = new Float32Array([
    -1.0,  1.0, 	// top left
    -1.0, -1.0, 	// bottom left
     1.0,  1.0, 	// top right
     1.0, -1.0, 	// bottom right
  ]);

  // Create vertex buffer
  let vertexDataBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
  // Layout of our data in the vertex buffer
  let positionHandle = getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(positionHandle);
  gl.vertexAttribPointer(positionHandle,
    2, 				// position is a vec2 (2 values per component)
    gl.FLOAT, // each component is a float
    false, 		// don't normalize values
    2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
    0 				// how many bytes inside the buffer to start from
    );

  //Get uniform handles

  widthHandle = getUniformLocation(program, 'width');
  heightHandle = getUniformLocation(program, 'height');
  pHandle = getUniformLocation(program, 'p');
  orderHandle = getUniformLocation(program, 'order');
  frequencyHandle = getUniformLocation(program, 'frequency');
  colorPlanHandle = getUniformLocation(program, 'colorPlan');
}


//---------------------------------------------------------
// beginning of execution

  {
    canv = document.createElement('canvas');
    canv.style.position="absolute";
    document.body.appendChild(canv);
    gl = canv.getContext('webgl');
//    canv.style.cursor = 'move';
  } // canvas creation

  canv.addEventListener('mousemove', mouseMove);
  canv.addEventListener('touchstart', touchMove);
  canv.addEventListener('touchmove', touchMove);
  canv.addEventListener('touchend', touchStop);
  canv.addEventListener('touchcancel', touchStop);

  window.addEventListener('resize', resize);
/* controls toggle */

  document.querySelector("#controls").addEventListener("click", toggleMenu);

  initShadersStuff();

  prepareUI();
  st = new SmoothTransition(0, 2000);
  animState = 0; // to startOver
  requestAnimationFrame(animate);
