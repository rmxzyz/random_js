//basic (no effects)
// Create a canvas element and set its dimensions
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the canvas position to the bottom of the page
canvas.style.position = 'fixed';
canvas.style.bottom = 0;
canvas.style.left = 0;

// Append the canvas to the body
document.body.appendChild(canvas);

// Get the canvas context
const ctx = canvas.getContext('2d');

// Define the lava animation
let y = canvas.height;
let direction = -1;
let lavaColor = createLavaGradient();
function animate() {
  requestAnimationFrame(animate);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the lava animation
  ctx.fillStyle = lavaColor;
  ctx.beginPath();
  ctx.moveTo(0, y);
  for (let x = 0; x <= canvas.width; x += 10) {
    const yOffset = Math.sin((x / canvas.width) * Math.PI * 2 + Date.now() / 1000) * 20;
    ctx.lineTo(x, y + yOffset);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  // Update the lava position
  y += direction * Math.sin(Date.now() / 1000) * 0.5;
  if (y < canvas.height - 50) {
    direction = 1;
  } else if (y > canvas.height) {
    direction = -1;
    y = canvas.height;
    lavaColor = createLavaGradient();
  }
}

// Start the animation
animate();

// Helper function to create a lava gradient
function createLavaGradient() {
  const gradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
  gradient.addColorStop(0.1, '#FFC300'); //FF5733
  gradient.addColorStop(0, '#FFC300');//0.5

  return gradient;
}
//kinda basic
