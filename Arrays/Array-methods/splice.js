let array = ['a', 'b', 'c'];

array.splice(1,2,'x','y'); // [start, count of delete, element1, element2]

array.forEach(elements => console.log(elements));

/*
Output:
    a
    x
    y
*/