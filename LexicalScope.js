// Lexical scope, also known as static scope, refers to how variable access is determined by the physical structure 
//of the code in the source file. In JavaScript, lexical scope means that a variable defined outside 
//a function can be accessible inside another function defined after the variable declaration. However, the opposite is not true.


// Inner functions have access to variables in their outer scopes.
// This access is determined by where the function is defined, not where it's called.
// Outer scopes do not have access to variables in inner scopes.
// Scope is determined at the time of function definition (lexical time), not at runtime.

let globalVar = "I'm a global variable";

function outerFunction() {
  let outerVar = "I'm in the outer function";

  function innerFunction() {
    let innerVar = "I'm in the inner function";
    console.log(innerVar);  // Accessible
    console.log(outerVar);  // Accessible
    console.log(globalVar); // Accessible
  }

  console.log(outerVar);    // Accessible
  console.log(globalVar);   // Accessible
  // console.log(innerVar); // Not accessible, would throw ReferenceError

  innerFunction();
}

outerFunction();
// console.log(outerVar); // Not accessible, would throw ReferenceError