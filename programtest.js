function getUserPreference(scenario) {
    switch(scenario) {
        case 'zero': return 0;
        case 'empty': return '';
        case 'null': return null;
        case 'undefined': return undefined;
        default: return 10;
    }
}

// Let's create an example where the left-side operand of the Nullish Coalescing Operator (??) is returned. 
//This happens when the left-side value is neither null nor undefined. Here's an example:



const defaultVolume = 50;

console.log("Zero:", getUserPreference('zero') ?? defaultVolume);          // Output: Zero: 0
console.log("Empty string:", getUserPreference('empty') ?? defaultVolume); // Output: Empty string: 
console.log("Null:", getUserPreference('null') ?? defaultVolume);          // Output: Null: 50
console.log("Undefined:", getUserPreference('undefined') ?? defaultVolume);// Output: Undefined: 50
console.log("Default:", getUserPreference() ?? defaultVolume);             // Output: Default: 10
