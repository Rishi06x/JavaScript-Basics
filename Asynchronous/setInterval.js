let count = 0;
let interval = setInterval(() => {count++;
    console.log(`Printing ${count} after 2 seconds.`);
    if(count === 5){
        clearInterval(interval); //Stops after 5 times
    }
},2000);

/*
Output:
    Printing 1 after 2 seconds.
    Printing 2 after 2 seconds.
    Printing 3 after 2 seconds.
    Printing 4 after 2 seconds.
    Printing 5 after 2 seconds.
*/