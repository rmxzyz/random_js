//fake error with cool effects. You have to scroll all the way down to see it because positions. 
let cursorUrl = 'data:image/png;base64,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'

let css = `@import 'https://fonts.googleapis.com/css?family=Inconsolata';
html {
  min-height: 100%;
}

body {
  box-sizing: border-box;
  height: 100%;
  background-color: #000000;
  background-image: radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Inconsolata", Helvetica, sans-serif;
  font-size: 1.5rem;
  color: rgba(128, 255, 128, 0.8);
  text-shadow: 0 0 1ex #33ff33, 0 0 2px rgba(255, 255, 255, 0.8);
}

.noise {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 0.02;
}

.overlay {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
  background-size: auto 4px;
  z-index: 1;
}

.overlay::before {
  content: "";
  cursor: `+`url(${cursorUrl}), auto`+`;
  pointer-events: none;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, transparent 0%, rgba(32, 128, 32, 0.2) 2%, rgba(32, 128, 32, 0.8) 3%, rgba(32, 128, 32, 0.2) 3%, transparent 100%);
  background-repeat: no-repeat;
  -webkit-animation: scan 7.5s linear 0s infinite;
          animation: scan 7.5s linear 0s infinite;
}

@-webkit-keyframes scan {
  0% {
    background-position: 0 -100vh;
  }
  35%, 100% {
    background-position: 0 100vh;
  }
}

@keyframes scan {
  0% {
    background-position: 0 -100vh;
  }
  35%, 100% {
    background-position: 0 100vh;
  }
}
.terminal {
  box-sizing: inherit;
  position: absolute;
  height: 100%;
  width: 1000px;
  max-width: 100%;
  padding: 4rem;
  cursor: `+`url(${cursorUrl}), auto`+`;
  text-transform: uppercase;
}

.output {
  color: rgba(128, 255, 128, 0.8);
  text-shadow: 0 0 1px rgba(51, 255, 51, 0.4), 0 0 2px rgba(255, 255, 255, 0.8);
}

.output::before {
  content: "> ";
}

/*
.input {
  color: rgba(192, 255, 192, 0.8);
  text-shadow:
      0 0 1px rgba(51, 255, 51, 0.4),
      0 0 2px rgba(255, 255, 255, 0.8);
}

.input::before {
  content: "$ ";
}
*/
a {
  color: #fff;
  text-decoration: none;
}

a::before {
  content: "[";
}

a::after {
  content: "]";
  
}

.errorcode {
  color: white;
  cursor: `+`url(${cursorUrl}), auto`+`;

}

#overlay {
    z-index: 9999
    cursor: `+`url(${cursorUrl}), auto`+`;
}

#back {
    cursor: `+`url(${cursorUrl}), auto`+`;

}
`
let html = `<div class="noise"></div>
<div position = "fixed" class="overlay"></div>
<div class="terminal">
  <h1>Error <span class="errorcode">404</span></h1>
  <p class="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
  <p class="output">Please try to <a class = 'back'     cursor = `+`url(${cursorUrl}), auto`+`  href="javascript:history.back()">go back</a> or <a href="chrome://newtab">return to the homepage</a>.</p>
  <p class="output">Good luck.</p>
</div>`
let c = document.createElement('style')
c.innerHTML = css
document.head.appendChild(c)
let h = document.createElement('div')
document.body.appendChild(h)
h.outerHTML = html
h.style.position = 'absolute'
h.style.top = '0';
h.style.left = '0';
h.style.width = '100%';
h.style.height = '100%';
h.style.cursor = 'text'//`url(${cursorUrl}), auto`;
