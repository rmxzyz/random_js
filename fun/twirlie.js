javascript:if("twirl"!=t&&"shake"!=t){var t=document.createElement("style");t.type="text/css",t.appendChild(document.createTextNode("@keyframes shake{0%{transform:translate(-5px,-5px);}25%{transform:translate(5px,-5px);}50%{transform:translate(5px,5px);}75%{transform:translate(-5px,5px);}100%{transform:translate(-5px,-5px);}}@keyframes twirl{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}#TWIRLIE{background:#333;color:white;display:block;position:fixed;bottom:0;left:0;margin:5px;padding:5px 10px;border-radius:5px;-webkit-user-select:none;font-size:12px;}#TWIRLIE:hover{background:#424242;}#TWIRLIE:active{background:#212121;}#TWIRLIECLOSE{background:#f44336;border:none;color:white;font-family:inherit;font-size:inherit;display:inline-block;}#TWIRLIECLOSE:hover{background:#ef5350;}#TWIRLIECLOSE:active{background:#e53935;}")),document.head.appendChild(t),(t=document.createElement("div")).id="TWIRLIE",t.innerHTML='Toggle twirl/shake <strong>twirl</strong> <button id="TWIRLIECLOSE">Close</button>',document.body.appendChild(t),t="twirl";var e=function(r){return"TWIRLIE"==r.target.id?(t="twirl"==t?"shake":"twirl",r.target.querySelector("strong").innerHTML=t):"TWIRLIECLOSE"==r.target.id?(document.body.removeEventListener("click",e),document.body.removeChild(document.querySelector("#TWIRLIE"))):"shake"==t?"shake .1s linear infinite"==r.target.style.animation?r.target.style.animation="":r.target.style.animation="shake .1s linear infinite":"twirl 1s linear infinite"==r.target.style.animation?r.target.style.animation="":r.target.style.animation="twirl 1s linear infinite","inline"==(r.target.currentStyle?r.target.currentStyle:getComputedStyle(r.target,null)).display&&(r.target.style.display="inline-block"),r.stopImmediatePropagation(),r.preventDefault(),!1};document.body.addEventListener("click",e)}

//thanks to sheeptester.github.io/javascripts