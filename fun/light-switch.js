javascript:!function(){var e=document.createElement("button"),o=document.createTextNode("Light Switch");e.appendChild(o),e.style.position="fixed",e.style.top="10px",e.style.right="10px",e.style.zIndex="9999",e.style.border="none",e.style.borderRadius="5px",e.style.padding="10px",e.style.backgroundColor="#fff",e.style.boxShadow="0px 0px 5px rgba(0,0,0,0.5)",e.style.cursor="pointer";var t=!0;e.onclick=function(){if(t){document.head.insertAdjacentHTML("beforeend",`<style>
    canvas, img {
      filter: invert(0.07) hue-rotate(4deg) !important;
    }
  </style>`);for(var e=document.querySelectorAll("div","img","canvas"),o=0;o<e.length;o++)e[o].style.backgroundColor="#ffffe6",e[o].style.transition="background-color 1s";document.body.style.backgroundColor="#ffffe6",document.body.style.transition="background-color 1s",t=!1}else{document.head.insertAdjacentHTML("beforeend",`<style>
    canvas, img {
      filter: invert(0) hue-rotate(4deg) !important;
    }
    
  </style>`);for(var e=document.querySelectorAll("img","canvas"),o=0;o<e.length;o++)e[o].style.transition="invert 1s";for(var e=document.querySelectorAll("div","img","canvas","body"),o=0;o<e.length;o++)e[o].style.backgroundColor="#1a1a1a",e[o].style.transition="background-color 1s";document.body.style.backgroundColor="#1a1a1a",document.body.style.transition="background-color 1s",t=!0}},document.body.appendChild(e)}();document.head.innerHTML=document.head.innerHTML+"<style> @keyframes on { to {background-color: white;} } @keyframes off {to {background color: black;} } </style>";



//has to be run in a developer console.
