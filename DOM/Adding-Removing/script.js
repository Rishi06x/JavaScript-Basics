//Adding and removing classes

const para = document.querySelector('p');

para.classList.add("paragraph"); //Adds a class

para.classList.remove("paragraph"); //Removes a class

para.classList.toggle("paragraph"); //Toggles a class

//Adding and removing elements

const h1 = document.createElement("h1"); 
h1.innerText = "Welcome";
document.body.prepend(h1);  //Adds an element

h1.remove(); //Removes an element

