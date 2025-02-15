const btn = document.querySelector('button');
const input = document.querySelector('input');
const p = document.querySelector('p');
btn.addEventListener("click", function(){  // Gives alert message when the button is clicked
    window.alert("You clicked the button");
});

btn.addEventListener("mouseover", () => btn.style.backgroundColor = "red"); // Gives alert message when mouseover the button
btn.addEventListener("mouseout", () => btn.style.backgroundColor = "blue"); // Gives alert message when mouseout the button


input.addEventListener("keypress", (event) => { // Get the keys pressed
    console.log(event.key);
})

window.addEventListener("load", () => {alert("Page loaded!");}); //Gives alert message when the page loads

//Double click
button.addEventListener("dblclick", function () {
    alert("Button double-clicked!");
});

// Right Click Event
button.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Prevents default right-click menu
    alert("Right-click detected on the button!");
});

// Focus Event
input.addEventListener("focus", function () {
    this.style.backgroundColor = "yellow"; // Highlight input when focused
});

// Blur Event
input.addEventListener("blur", function () {
    this.style.backgroundColor = "white"; // Restore background when blurred
});

// Scroll Event
window.addEventListener("scroll", function () {
    console.log("Scrolling detected!");
});
   