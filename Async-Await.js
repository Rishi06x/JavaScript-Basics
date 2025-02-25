function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Math.random() < 0.6){
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 1000);
    });
}

// Using async/await
async function getData() {
    console.log("Fetching data...");
    const result = await fetchData(); // Await the promise to resolve
    return result;
}

getData().then((data) => {console.log(data);}).catch((err) => {console.log(err);});
console.log("This will run before data is fetched.");

/*
Output:
    Fetching data...
    This will run before data is fetched.
    Data fetched successfully! (After 1sec)
*/