let person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe

//Here, let is used to declare the variable person.
// This variable is assigned an object literal. Using let means that person can be reassigned later if needed, but it cannot be redeclared in the same scope.

let fruits = ['apple', 'banana', 'orange', 'mango'];

// ...

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
let longFruits = fruits.filter(fruit => fruit.length > 5);
let foundFruit = fruits.find(fruit => fruit.startsWith('b'));

console.log(upperFruits)
console.log(longFruits)
console.log(foundFruit)

//No Hoisting: Unlike var, let declarations are not hoisted. They are not accessible before they are declared in the code.

