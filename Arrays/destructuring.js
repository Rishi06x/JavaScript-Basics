const numbers = [10, 20, 30];

// Extract first and second values
const [first, second] = numbers;

console.log(first); // 10
console.log(second); // 20

const [, , third] = numbers;
console.log(third); // 30

const [one, ...rest] = numbers;
console.log(rest); // [20, 30]
