const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

const newArr = arr1.concat(arr2);

newArr.forEach(element => console.log(element));

/*
Output:
    1
    2
    3
    4
    5
    a
    b
    c
    d
    e
*/