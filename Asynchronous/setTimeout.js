console.log("Start");

const timeout = setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000); // Executes after 2000ms (2 seconds)

// clearTimeout(timeout); " Will cancel the scheduled function "

console.log("End");

/*
Output:
    Start
    End
    Hello after 2 seconds
*/











































