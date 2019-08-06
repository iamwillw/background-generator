var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomColors = document.getElementById("random");

// Display the value of the background gradient in <h3> - this works when the page loads and everytime it's updated.
function displayBackgroundGradientProperties() {
    css.innerHTML = getComputedStyle(body).backgroundImage;
}
// Make sure we're grabbing the right elements
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

// Event listeners for changes to the colors (replaced with function and event listeners below!)
// color1.addEventListener("input", function(){
// 	// console.log(color1.value);
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// color2.addEventListener("input", function(){
// 	//console.log(color2.value);
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// Update the body color(s)
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";	
	// Update the new background colors in the <h3>
	css.textContent = body.style.background + ";";
}

// Generate random colors
function generateRandomColors() {
  var RGBvalues = [];
  for (var i = 0; i < 3; i++) {
    RGBvalues.push(Math.floor(Math.random() * 256));
  }

  const [r1, r2, r3] = RGBvalues;
  const hex = `#${r1.toString(16)}${r2.toString(16)}${r3.toString(16)}`;

  return hex;

}

// Set the random colors
function setRandomColors() {
  const r1 = generateRandomColors();
  const r2 = generateRandomColors();
  const r3 = "linear-gradient(to right, " + r1 + ", " + r2 + ")";
  body.style.background = r3;
  css.textContent = body.style.background;
  color1.value = r1;
  color2.value = r2;
}

// When page loads, show the gradient values in <h3>, setGradient() will update them if there are changes
window.onload = setGradient;

// Event listeners for changes to the colors (refactored w/function)
/** Comment these out if using the inline "oninput" on the input tag **/
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColors);