//bookmarklet

const canvas=document.createElement("canvas");canvas.style.position="absolute",canvas.style.top="0",canvas.style.pointerEvents="none",canvas.style.right="0",canvas.style.bottom="0",canvas.style.left="0",canvas.width=window.innerWidth,canvas.height=window.innerHeight,document.body.style.background="black",document.body.appendChild(canvas);const ctx=canvas.getContext("2d");let drops=[],elements=document.querySelectorAll("*");function createDrops(t){for(let e=0;e<t;e++){let n=Math.random()*canvas.width,a=Math.random()*canvas.height,s=20*Math.random()+5,o=20*Math.random()-10;drops.push({x:n,y:a,speed:s,distortion:o})}}function updateDrops(){for(let t=0;t<drops.length;t++){let e=drops[t],n=2*Math.random()-1;e.x+=n*e.speed/2,e.y+=e.speed,e.y>canvas.height&&(e.y=-(Math.random()*canvas.height),e.x=Math.random()*canvas.width,e.distortion=20*Math.random()-10);for(let a=0;a<elements.length;a++){let s=elements[a],o=s.getBoundingClientRect();if(e.x>o.left&&e.x<o.right&&e.y>o.top&&e.y<o.bottom){let l=20*Math.random()-10,r=10*Math.random()-5,d=10*Math.random()-5;s.style.transform=`rotate(${l/17}deg) translate(${r}px, ${d}px)`;let i=(parseInt(s.dataset.damage)||0)+1;s.dataset.damage=i;let c=Math.max(0,Math.min(1,i/13));s.style.opacity=c,i>=10&&(s.style.filter="blur(5px)",s.style.pointerEvents="none");let p=Math.max(0,Math.min(1,i/100));s.style.filter=`hue-rotate(${180*p}deg)`}}}}function renderDrops(){ctx.fillStyle="rgba(0, 255, 0, 0.05)",ctx.fillRect(0,0,canvas.width,canvas.height),ctx.fillStyle="rgba(0, 255, 0, 0.5)",ctx.font="20px Arial",ctx.textAlign="center";for(let t=0;t<drops.length;t++){let e=drops[t];ctx.fillText("|",e.x+e.distortion,e.y)}}function playSound(){let t=new Audio("https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/zapsplat_nature_wind_very_strong_hurricane_gusts_designed_85310.mp3");new Audio("https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/zapsplat_nature_wind_designed_canyon_strong_howling_wind_running_through_valley_003_91659.mp3").play(),t.play()}function loop(){ctx.clearRect(0,0,canvas.width,canvas.height),updateDrops(),renderDrops(),requestAnimationFrame(loop)}createDrops(200),loop(),setInterval(playSound,1e3);


// it's kinda laggy, it's really chaotic lol


//normal
const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.pointerEvents = 'none';
canvas.style.right = '0';
canvas.style.bottom = '0';
canvas.style.left = '0';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.background = 'black';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
let drops = [];
let elements = document.querySelectorAll('*');

function createDrops(numDrops) {
  for (let i = 0; i < numDrops; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speed = Math.random() * 20 + 5;
    let distortion = Math.random() * 20 - 10;
    drops.push({ x, y, speed, distortion });
  }
}

function updateDrops() {
  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    
    let wind = Math.random() * 2 - 1;
    drop.x += wind * drop.speed / 2;
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = Math.random() * -canvas.height;
      drop.x = Math.random() * canvas.width;
      drop.distortion = Math.random() * 20 - 10;
    }
    for (let j = 0; j < elements.length; j++) {
      let element = elements[j];
      let rect = element.getBoundingClientRect();
      if (drop.x > rect.left && drop.x < rect.right && drop.y > rect.top && drop.y < rect.bottom) {
        let angle = Math.random() * 20 - 10;
        let translationX = Math.random() * 10 - 5;
        let translationY = Math.random() * 10 - 5;
        element.style.transform = `rotate(${angle/17}deg) translate(${translationX}px, ${translationY}px)`;
        let damage = (parseInt(element.dataset.damage) || 0) + 1;
        element.dataset.damage = damage;
        let opacity = Math.max(0, Math.min(1, damage / 13)); //17
        element.style.opacity = opacity;
        if (damage >= 10) {
          element.style.filter = 'blur(5px)';
          element.style.pointerEvents = 'none';
        }
        // Apply acid effect to the element
        let acidEffect = Math.max(0, Math.min(1, damage / 100)); // / 50
        element.style.filter = `hue-rotate(${acidEffect * 180}deg)`; //* 180
      }
    }
  }
}

function renderDrops() {
  ctx.fillStyle = 'rgba(0, 255, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    ctx.fillText('|', drop.x + drop.distortion, drop.y);
  }
}

function playSound() {
  let audio2 = new Audio('https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/zapsplat_nature_wind_very_strong_hurricane_gusts_designed_85310.mp3');
let audio = new Audio('https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/zapsplat_nature_wind_designed_canyon_strong_howling_wind_running_through_valley_003_91659.mp3');
  audio.play();
  audio2.play();
}
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateDrops();
  renderDrops();
  requestAnimationFrame(loop);
}


createDrops(200);
loop();
setInterval(playSound, 1000);
