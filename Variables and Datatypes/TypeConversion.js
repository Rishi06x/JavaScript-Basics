let str1 = "123";
let num1 = Number(str1);
console.log(num1); // Output: 123
console.log(typeof num1); // Output: number

let num2 = 123;
let str2 = String(num2);
console.log(str2); // Output: "123"
console.log(typeof str2); // Output: string

let str3 = "hello";
let bool1 = Boolean(str3);
console.log(bool1); // Output: true
console.log(typeof bool1); // Output: boolean

let num3 = 0; 
let bool2 = Boolean(num3);
console.log(bool2); // Output: false
console.log(typeof bool2); // Output: boolean

let str4 = "123.45";
let intNum = parseInt(str4);
console.log(intNum); // Output: 123
console.log(typeof intNum); // Output: number

let str5 = "123.45";
let floatNum = parseFloat(str5);
console.log(floatNum); // Output: 123.45
console.log(typeof floatNum); // Output: number
