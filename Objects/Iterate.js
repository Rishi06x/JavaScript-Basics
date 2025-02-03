let laptop = {brand: "Lenovo", ram: "16GB", storage:"512GB"};

console.log(Object.keys(laptop));
console.log(Object.values(laptop));
console.log(Object.entries(laptop));

/*
Output:
    [ 'brand', 'ram', 'storage' ]
    [ 'Lenovo', '16GB', '512GB' ]
    [ [ 'brand', 'Lenovo' ], [ 'ram', '16GB' ], [ 'storage', '512GB' ] ]
*/