// Declaring variables
let name = "Alice";//Use for variables that will be reassigned
//Helps prevent accidental reassignment when used instead of var
//Preferred over var in modern JavaScript


const age = 30;//Use for values that should not be reassigned

var isStudent = false;//Older syntax, less commonly used in modern JavaScript


// Performing operations with variables
let currentYear = 2023;
let birthYear = currentYear - age;

// Using string concatenation
let greeting = "Hello, " + name + "!";

// Using template literals (string interpolation)
let introduction = `${greeting} You were born in ${birthYear}.`;

// Conditional statement
if (isStudent) {
    console.log(introduction + " How's your studies going?");
} else {
    console.log(introduction + " What do you do for work?");
}

// Array declaration and manipulation
let hobbies = ["reading", "painting", "cycling"];
hobbies.push("cooking");

// Looping through the array
console.log("Your hobbies are:");
for (let i = 0; i < hobbies.length; i++) {
    console.log("- " + hobbies[i]);
}

// Function declaration and calling
function calculateArea(width, height) {
    return width * height;
}

let rectangleArea = calculateArea(5, 3);
console.log("The area of the rectangle is: " + rectangleArea);