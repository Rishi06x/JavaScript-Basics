let person = {
    name: 'Rishi',
    age:18,
    greet: function(){
        return "Hello, " + this.name + ". You are " + this.age + " years old.";
    }
}

console.log(person.greet());

/*
Output:
    Hello, Rishi. You are 18 years old.
*/