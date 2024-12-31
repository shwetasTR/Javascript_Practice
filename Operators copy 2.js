let name = "Alice";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);
// Single Quotes ('):
// Used for creating simple string literals
// Cannot span multiple lines without escape characters
// Don't allow for embedded expressions

// Backticks (`):
// Introduced in ES6 (ECMAScript 2015)
// Used for creating template literals
// Can span multiple lines without escape characters
// Allow for embedded expressions (string interpolation)

let isAdult = age >= 18 ? "Yes" : "No";
console.log(`Is adult? ${isAdult}`);
//spread operator 
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 };
console.log(obj2); // { x: 1, y: 2, z: 3 }

//default parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!

//object method and this
let person = {
    name: "Bob",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person.greet(); // Hi, I'm Bob

//array destructuring 
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]

//optional chaining Optional Chaining Operator (?.):Allows you to safely access nested object properties 
//without throwing an error if an intermediate property doesn't exist
// It checks if the property before ?. is null or undefined
// If it is, the expression short-circuits and returns undefined
// If it's not, it continues to access the next property

// It first checks if user exists and is not null/undefined
// If user exists, it then checks if user.address exists and is not null/undefined
// If user.address exists, it finally accesses user.address.street

let user = { 
    address: { 
        street: "123 JS St" 
    } 
};
console.log(user?.address?.street); // 123 JS St
console.log(user?.contact?.email); // undefined

//Nullish Coalescing Operator  It's designed to provide a default value for potentially null or undefined variables. Let's break it down:
// If the left expression (leftExpr) is neither null nor undefined, it returns that value.
// If the left expression is null or undefined, it returns the right expression (rightExpr).

//let input = null;
let defaultValue = "Default";
console.log(input ?? defaultValue); // Output: "Default"

input = 0;
console.log(input ?? defaultValue); // Output: 0

input = "";
console.log(input ?? defaultValue); // Output: ""

// The logical OR operator (||) returns the right-hand operand if the left is any falsy value.
// The nullish coalescing operator (??) only does this for null or undefined.
//use cases 
// Setting default values for variables or function parameters
// Handling potentially null or undefined API responses
// Providing fallback values in user interfaces

// Using ||
console.log(false || "default");  // "default"
console.log(0 || "default");      // "default"
console.log("" || "default");     // "default"


// Using ??
console.log(false ?? "default");  // false
console.log(0 ?? "default");      // 0
console.log("" ?? "default");     // ""

