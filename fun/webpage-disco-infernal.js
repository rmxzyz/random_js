
//bookmarklet (takes time to get chaotic)


javascript:const elements=document.querySelectorAll("*");function animateElements(){elements.forEach(o=>{o.style.transform=`translate(${Math.floor(21*Math.random())-10}px, ${Math.floor(21*Math.random())-10}px) rotate(${Math.floor(21*Math.random())-10}deg)`,.3>Math.random()&&(o.style.transform+=` scale(${.3*Math.random()+1.2})`,o.style.transition="transform 1s ease-in-out"),o.style.transition=`transform ${Math.random()+.5}s ease-in-out`});let o=Math.floor(360*Math.random());document.body.style.transition="background-color 2s ease-in-out",document.body.style.background=`linear-gradient(to right, hsl(${o}, 100%, 50%), hsl(${o}, 100%, 50%), hsl(${o}, 100%, 50%))`,document.body.style.filter=`contrast(${Math.random()+.5})`;let t=["Arial","Helvetica","Times New Roman","Courier New","Verdana","Georgia","Comic Sans MS","Impact","Lucida Sans Unicode"],e=t[Math.floor(Math.random()*t.length)],n=`hsl(${Math.floor(360*Math.random())}, 100%, 50%)`;document.body.style.fontFamily=e,document.body.style.color=n,.5>Math.random()?(document.body.style.transition="transform 2s ease-in-out",elements.forEach(o=>{o.style.transition="transform 2s ease-in-out"})):(document.body.style.transition="transform 0.5s ease-in-out",elements.forEach(o=>{o.style.transition="transform 0.5s ease-in-out"})),setTimeout(()=>{requestAnimationFrame(animateElements)},2*Math.random()+3+1.2*Math.floor(Math.random()))}animateElements();




















//main
// Get all the elements on the webpage
const elements = document.querySelectorAll('*');

// Define the animation function
function animateElements() {
  // Loop through all the elements
  elements.forEach(element => {
    // Generate a random number between -10 and 10 for the x and y coordinates
    const x = Math.floor(Math.random() * 21) - 10;
    const y = Math.floor(Math.random() * 21) - 10;
    
    // Generate a random angle between -10 and 10 degrees
    const angle = Math.floor(Math.random() * 21) - 10;

    // Apply the random x, y, and angle transforms to the element
    element.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // If the random number is less than 0.3, stretch the element
    if (randomNumber < 0.3) {
      // Generate a random scale value between 1.2 and 1.5
      const scale = Math.random() * 0.3 + 1.2;
      // Apply the random scale transform to the element
      element.style.transform += ` scale(${scale})`;
      // Set the transition property to 'transform' for smooth animations
      element.style.transition = 'transform 1s ease-in-out';
    }

    // Generate a random speed value between 0.5 and 1.5
    const speed = Math.random() + 0.5;

    // Set the transition property for speed changes
    element.style.transition = `transform ${speed}s ease-in-out`;
  });

  // Calculate a random hue value for the background color
  const hue = Math.floor(Math.random() * 360);

  // Set the background color of the webpage to a rainbow gradient that shows only one color at a time
  document.body.style.transition = 'background-color 2s ease-in-out';
  document.body.style.background = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${hue}, 100%, 50%), hsl(${hue}, 100%, 50%))`;

  // Generate a random contrast value between 0.5 and 1.5
  const contrast = Math.random() + 0.5;

  // Set the contrast of the webpage
  document.body.style.filter = `contrast(${contrast})`;

  // Generate a random font family and font color
  const fonts = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana", "Georgia", "Comic Sans MS", "Impact", "Lucida Sans Unicode"];
  const font = fonts[Math.floor(Math.random() * fonts.length)];
  const fontColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

  // Set the font family and font color of the webpage
  document.body.style.fontFamily = font;
  document.body.style.color = fontColor;

  // Generate a random number between 0 and 1 to determine whether to slow down or speed up
  const speedChange = Math.random();

  // If the random number is less than 0.5, slow down the animation
  if (speedChange < 0.5) {
    // Set the transition property to 'transform' for smooth animations
    document.body.style.transition = 'transform 2s ease-in-out';
    // Apply a slower animation to all the elements on the webpage
    elements.forEach(element => {
      element.style.transition = 'transform 2s ease-in-out';
    });
  } else {
    // Otherwise, speed up the animation
    // Set the transition property to 'transform' for smooth animations
    document.body.style.transition = 'transform 0.5s ease-in-out';
    // Apply a faster animation to all the elements on the webpage
    elements.forEach(element => {
      element.style.transition = 'transform 0.5s ease-in-out';
    });
  }

  // Call the animateElements function again after a random amount of time between 0.5 and 2 seconds
  setTimeout(() => {
    requestAnimationFrame(animateElements);
  }, Math.random() * 2 + 3 + Math.floor(Math.random()) * 1.2);
}

// Call the animateElements function to start the animation
animateElements();

