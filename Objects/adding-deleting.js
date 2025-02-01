let repo = { title: "JavaScript Basics" };

// Adding a property
repo.author = "Rishi";
console.log(repo); 

// Deleting a property
delete repo.author;
console.log(repo); 

/*
Output:
    {title: "Javascript Basics", author: "Rishi"}
    {title: "Javascript Basics"}
*/