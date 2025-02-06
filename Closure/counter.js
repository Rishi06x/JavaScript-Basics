function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
    function reset(){
        count=0;
        console.log(count);
    }

    return {increment, decrement, reset}; //returning functions as an object to return more than one function. To keep private variables.
}

const counter =  createCounter();

console.log("Increments:");
for(let i=0; i<10; i++){
    counter.increment();
}

console.log("Decrements:");
for(let i=0; i<4; i++){
    counter.decrement();
}

console.log("Reset:");
counter.reset();


/*
Output:
    Increments:
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    Decrements:
    9
    8
    7
    6
    Reset:
    0
    */