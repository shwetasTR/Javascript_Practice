//Nullish Coalescing Operator  It's designed to provide a default value for potentially null or undefined variables. Let's break it down:
// If the left expression (leftExpr) is neither null nor undefined, it returns that value.
// If the left expression is null or undefined, it returns the right expression (rightExpr).
let input = null;
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

