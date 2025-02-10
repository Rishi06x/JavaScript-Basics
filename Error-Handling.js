function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        console.log(`Result: ${a / b}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Execution completed");
    }
}


divideNumbers(10, 2);  // Output: Result: 5
divideNumbers(8, 0);   // Output: Error: Division by zero is not allowed