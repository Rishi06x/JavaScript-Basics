let array = ['a', 'b', 'c'];

array.unshift('x'); //adds to the beginning of the array

array.forEach(element => console.log(element));

/*
Output:
    x
    a
    b
    c
*/