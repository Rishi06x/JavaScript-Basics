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