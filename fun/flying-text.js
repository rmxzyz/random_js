javascript:!function(){const t={text:prompt("Text:","Hello!"),size:150,weight:800,speed:50};let e=[];for(let n=0;n<50;n++){let n=document.createElement("div");n.style=`width: 100%; margin: auto; pointer-events: none; user-select: none; font-weight: ${t.weight}; font-size: ${t.size}px; position: absolute; z-index: 2147483647; transition: all 10s linear; transform-origin: center center; text-align: center;`,n.textContent=t.text,document.body.appendChild(n),e.push(n)}function n(t,e){return Math.floor(Math.random()*(e-t)+t)}setInterval((()=>{const t=e[Math.floor(Math.random()*e.length)];t.style.color=function(){const t=[[150,256],[0,190],[0,30]],e=function(){const e=t.splice(Math.floor(Math.random()*t.length),1)[0];return Math.floor(Math.random()*(e[1]-e[0]))+e[0]};return"rgb("+e()+","+e()+","+e()+")"}(),t.style.opacity=Math.random()+.1,t.style.transform=`rotate(${n(0,360)}deg) translate(${n(-1e3,1e3)}px, ${n(-500,500)}px) translate3d(${n(0,200)}px,${n(0,200)}px,${n(0,200)}px) rotateX(${n(0,360)}deg) rotateY(${n(0,360)}deg) rotateZ(${n(0,360)}deg)`}),t.speed)}();
