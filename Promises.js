let myPromise = new Promise((resolve, reject) => {
    let success = true; 

    setTimeout(() => {
        if (success) {
            resolve("Operation resolved!");
        } else {
            reject("Operation rejected");
        }
    }, 2000); 
});

myPromise
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error))   
    .finally(() => console.log("Operation completed."));

/*Output:
    Success: Operation resolved
    Operation completed */