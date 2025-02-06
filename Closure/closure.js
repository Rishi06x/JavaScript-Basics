function create () {
    let msg = 'hello world';

    function display(){
        console.log(msg); //inner function can access msg in outer function
    }

    display();
}

create();

/*
Output:
    hello world
*/