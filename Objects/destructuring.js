const user = { name: "Rishi", age: 18, country: "India" };

const { name, age } = user; //Extracting values

console.log(name); // Rishi
console.log(age); // 18

const { name: userName, age: userAge } = user; // Renaming variables
console.log(userName); // Rishi

const { gender = "Not specified" } = user; //Using default values
console.log(gender); // "Not specified" (if 'gender' is not in the object)