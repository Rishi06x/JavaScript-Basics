let array = ['a', 'b', 'c','d', 'e', 'f', 'g'];

const newArr = array.slice(1,5); //Extract the elements between the given indices.

newArr.forEach(element => console.log(element));

/*
Output:
    b
    c
    d
    e
*/