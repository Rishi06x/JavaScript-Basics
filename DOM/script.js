// 1. Selecting by ID
const heading = document.getElementById("heading");
console.log(heading); 

// 2. Selecting by Class Name (returns an HTMLCollection)
const paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph); 

// 3. Selecting by Tag Name (returns an HTMLCollection)
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); 

// 4. Selecting the first matching element using querySelector
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// 5. Selecting all matching elements using querySelectorAll (returns a NodeList)
const allButtons = document.querySelectorAll(".btn");
console.log(allButtons);

// 6. Traversing from a selected element
const parentDiv = heading.parentNode; // Selects the parent of #heading
console.log(parentDiv);

const childElements = parentDiv.children; // Selects all child elements
console.log(childElements);

const nextSibling = heading.nextElementSibling; // This will be the first <p> tag
console.log(nextSibling);

const previousSibling = secondButton.previousElementSibling; // This will be the first button
console.log("Previous Sibling of Second Button:", previousSibling);

const firstChild = container.firstElementChild; // Accessing the first child of the 'container'
console.log("First Child Element:", firstChild);

const lastChild = container.lastElementChild; // Accessing the last child of the 'container'
console.log("Last Child Element:", lastChild);
