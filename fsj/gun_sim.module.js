//SCRIPT TYPE: MODULE

document.write('<!DOCTYPE HTML> \n <html> \n <head> \n </head> \n <body> \n </body> \n </html>')
// Style, And the canvas.
var canva = document.createElement('canvas');
canva.id = `game`;
canva.setAttribute('id', 'game');
document.body.appendChild(canva);
var style = document.createElement('style');
style.innerHTML = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p {
  position: absolute;
  z-index: 10;
  color: white;
  bottom: 0;
}

canvas {
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  cursor: none;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/guns-game-98c10.appspot.com/o/wall%2FWall.jpg?alt=media&token=79c89ffe-c757-4d0c-8c8a-87977ec66c21");
  background-size: 32px;
  /*   image-rendering: pixelated; */
}

`;
document.head.appendChild(style);
/////////////////////////////////////////
// Canvas Elements
let canvas;
let ctx;
let gun;
//let script = `
export class Gun {
  #ctx;
  #width;
  #height;
  #interval;
  #then;
  #now;
  #elapsed;
  #frame;

  constructor(props) {
    //Canvas
    this.#ctx = props.ctx;
    this.#width = props.width;
    this.#height = props.height;

    //Positions
    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.pointPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.gunPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.gunDist = {
      x: 0,
      y: 0
    };
    this.zoom = 2.5;

    //Gun Data
    this.gunImage = new Image();
    this.gunImage.src = props.image;
    this.weight = props.weight * 2;
    this.rateOfFire = props.rateOfFire;

    //Movement
    this.isMoving = {
      x: "none",
      y: "none"
    };
    this.movingRotation = 0;

    //Recoil
    this.recoil = props.recoil;

    //Shoot
    this.rateOfFire = 60000 / props.rateOfFire;
    this.hasShoot = false;
    this.barrelCoordenate = props.barrelCoordenate;

    this.bulletImage = new Image();
    this.bulletImage.src = "https://images2.imgbox.com/32/05/6a4DbfYF_o.png";

    this.fireImages = [new Image(), new Image()];
    this.fireImages[0].src =
      "https://firebasestorage.googleapis.com/v0/b/guns-game-98c10.appspot.com/o/fireShoot%2FFireShoot1.png?alt=media&token=74151fdc-d452-458d-9420-c9980c36af4a";
    this.fireImages[1].src =
      "https://firebasestorage.googleapis.com/v0/b/guns-game-98c10.appspot.com/o/fireShoot%2FFireShoot2.png?alt=media&token=2be1138f-2e9b-4e19-87d0-69810b9ef200";

    //Mouse Events
    window.addEventListener(
      "mousemove",
      function (e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
      }.bind(this)
    );
    let interval;
    window.addEventListener(
      "mousedown",
      function (e) {
        this.#Shoot();
        interval = window.setInterval(() => {
          this.#Shoot();
        }, this.rateOfFire);
      }.bind(this)
    );
    window.addEventListener(
      "mouseup",
      function (e) {
        clearInterval(interval);
      }.bind(this)
    );

    // Frame Helpers
    this.#interval = 1000 / 60;
    this.#then = Date.now();
    this.#now = 0;
    this.#elapsed = 0;
  }

  ////////////////
  //   Cursor   //
  ////////////////
  #createCircle() {
    //Move Config
    const action = 0.1;
    const vel = 100;
    //Get distance
    let distX = this.mouse.x - this.pointPos.x;
    let distY = this.mouse.y - this.pointPos.y;
    //
    this.velX = Math.abs(distX / vel);
    this.velY = Math.abs(distY / vel);
    this.pointPos.x += distX / (25 * action);
    this.pointPos.y += distY / (25 * action);

    this.#ctx.beginPath();
    this.#ctx.fillStyle = "#5DDE88";
    this.#ctx.arc(
      this.pointPos.x,
      this.pointPos.y,
      10 + Math.max(this.velX, this.velY),
      0,
      2 * Math.PI
    );
    this.#ctx.fill();
  }

  ///////////////////
  //   Calculate   //
  ///////////////////
  #calculateDist() {
    this.gunDist.x = this.mouse.x - this.gunPos.x;
    this.gunDist.y = this.mouse.y - this.gunPos.y;
  }

  #calculateRotation() {
    const maxH = 5;
    const maxV = 20;
    const d = 300;

    //X Moving
    this.mouse.x > this.pointPos.x + 2
      ? (this.isMoving.x = "right")
      : (this.isMoving.x = "none");
    this.mouse.x < this.pointPos.x - 5 && (this.isMoving.x = "left");
    //Y Moving
    this.mouse.y > this.pointPos.y + 2
      ? (this.isMoving.y = "down")
      : (this.isMoving.y = "none");
    this.mouse.y < this.pointPos.y - 5 && (this.isMoving.y = "up");

    switch (this.isMoving.x) {
      case "right":
        this.isMoving.y === "up" &&
          this.movingRotation < maxH &&
          (this.movingRotation += this.gunDist.x / d);
        this.isMoving.y === "down" &&
          this.movingRotation > -maxH &&
          (this.movingRotation -= this.gunDist.x / d);
        break;
      case "left":
        this.isMoving.y === "up" &&
          this.movingRotation > -maxH &&
          (this.movingRotation += this.gunDist.x / d);

        this.isMoving.y === "down" &&
          this.movingRotation < maxH &&
          (this.movingRotation -= this.gunDist.x / d);
        break;
      case "none":
        if (this.isMoving.y === "none") {
          this.movingRotation < 0 && (this.movingRotation += 0.2);
          this.movingRotation > 0 && (this.movingRotation -= 0.2);
        }
        break;
      default:
        break;
    }
  }

  ///////////
  // Shoot //
  ///////////

  #calculateRecoil() {
    this.gunPos.x -= this.recoil;
    this.movingRotation -= this.recoil / 30;
  }

  #shootFire() {
    this.#ctx.save();
    this.#ctx.translate(this.gunPos.x + this.recoil, this.gunPos.y);
    this.#ctx.rotate((this.movingRotation * Math.PI) / 180);

    let random = Math.floor(Math.random() * (100 - 1) + 1);
    let selected = random > 50 ? 1 : 0;
    this.#ctx.beginPath();
    this.#ctx.shadowColor = "yellow";
    this.#ctx.shadowBlur = 100;
    this.#ctx.drawImage(
      this.fireImages[selected],
      this.barrelCoordenate.x,
      this.barrelCoordenate.y - (this.fireImages[selected].width * 4) / 2.5,
      this.fireImages[selected].width * 4,
      this.fireImages[selected].height * 4
    );
    this.#ctx.fill();
    this.#ctx.restore();
  }

  #Shoot() {
    let getShootSound = new Audio(shootSound);
    getShootSound.volume = 0.5;
    getShootSound.play();
    this.#calculateRecoil();
    this.#shootFire();
    this.#createBullet();
  }

  /////////////
  // Helpers //
  /////////////
  // Functions to see gun points

  #barrelHelper() {
    this.#ctx.save();
    this.#ctx.translate(this.gunPos.x, this.gunPos.y);
    this.#ctx.rotate((this.movingRotation * Math.PI) / 180);

    this.#ctx.beginPath();
    this.#ctx.fillStyle = "#5DDE88";
    this.#ctx.arc(
      this.barrelCoordenate.x,
      this.barrelCoordenate.y,
      10,
      0,
      2 * Math.PI
    );
    this.#ctx.fill();
    this.#ctx.restore();
  }

  /////////////
  bullets = [];

  #createBullet() {
    this.bullets.push({
      weaponPos: {
        x: this.gunPos.x,
        y: this.gunPos.y
      },
      barrelPos: {
        x: this.barrelCoordenate.x,
        y: this.barrelCoordenate.y
      },
      rotation: this.movingRotation,
      x: 0,
      y: 0,
      velocity: Math.random() * (100 - 50) + 50,
      // velocity: 10,
      randomRot: Math.random() * (4 - -4) + -4
    });
  }

  #renderBullets() {
    this.bullets.map((e, i) => {
      this.#ctx.save();
      this.#ctx.translate(this.gunPos.x + this.recoil, this.gunPos.y);
      this.#ctx.rotate(((e.rotation + e.randomRot) * Math.PI) / 180);
      this.#ctx.beginPath();
      // this.#ctx.fillStyle = 'yellow'
      // this.#ctx.arc(e.barrelPos.x + e.x, e.barrelPos.y + e.y, 4, 0, 2 * Math.PI)
      this.#ctx.shadowColor = "yellow";
      this.#ctx.shadowBlur = 20;
      this.#ctx.shadowOffsetX = 0;
      this.#ctx.shadowOffsetY = 0;
      this.#ctx.drawImage(
        this.bulletImage,
        this.barrelCoordenate.x + e.x,
        this.barrelCoordenate.y + e.y,
        this.bulletImage.width * this.zoom,
        this.bulletImage.height * this.zoom
      );
      this.#ctx.fill();
      this.#ctx.restore();

      this.bullets[i] = {
        ...e,
        x: e.x + e.velocity,
        y: e.y
      };
    });
  }

  ////////////////
  // Create Gun //
  ////////////////
  #createGun() {
    this.#calculateRotation();
    //Calculate Movement
    this.gunPos.x += this.gunDist.x / this.weight;
    this.gunPos.y += this.gunDist.y / this.weight;

    this.#ctx.save();
    this.#ctx.translate(this.gunPos.x, this.gunPos.y);
    this.#ctx.rotate((this.movingRotation * Math.PI) / 180);
    this.#ctx.shadowColor = "rgba(0,0,0, 0.1)";
    this.#ctx.shadowOffsetX = 20;
    this.#ctx.shadowOffsetY = 20;
    this.#ctx.drawImage(
      this.gunImage,
      -61 * this.zoom,
      -20 * this.zoom,
      this.gunImage.width * this.zoom,
      this.gunImage.height * this.zoom
    );
    this.#ctx.restore();
  }

  /////////////
  //   Run   //
  /////////////
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.#now = Date.now();
    this.#elapsed = this.#now - this.#then;

    if (this.#elapsed > this.#interval) {
      this.#then = this.#now - (this.#elapsed % this.#interval);
      this.#ctx.clearRect(0, 0, this.#width, this.#height);
      this.#calculateDist();
      this.#createGun();
      this.#createCircle();
      this.#renderBullets();
      this.#frame += 1;
    }
  }
}

// ////////////////////////////////
// Canvas Init
window.onload = function () {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  // Settings
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.imageSmoothingEnabled = false;

  // Gun Props
  let properties = {
    ctx: ctx,
    width: window.innerWidth,
    height: window.innerHeight,
    image: "https://images2.imgbox.com/c2/91/ibBtxOym_o.png",
    weight: 3.4,
    rateOfFire: 600,
    recoil: 40,
    barrelCoordenate: {
      x: 235,
      y: -20
    }
  };

  gun = new Gun(properties);

  //Frames helpers
  let lastTime = 0;
  let interval = 1000 / 60;
  let timer = 0;

  gun.animate();
};//`
