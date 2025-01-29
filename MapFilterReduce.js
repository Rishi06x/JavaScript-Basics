const numbers = [1, 2, 3, 4, 5, 6];

// Square each number using map()

const squared = numbers.map(num => num * num);
console.log(squared);

// Output: [1, 4, 9, 16, 25, 36]

// Filter numbers greater than 10

const filtered = squared.filter(num => num > 10);
console.log(filtered);

// Output: [16, 25, 36]

// Sum of filtered numbers using reduce()

const sum = filtered.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Output: 77