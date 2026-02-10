// String Concatenation:

// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value"); // Outdated Approach

// String interpolation using BackTicks (` `):

// String interpolation means inserting variables or expressions directly into a string without messy concatenation. Eg:

let name = "Harry";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);

// Here Backticks (`) are used to create template literals in JavaScript. Unlike single (') or double (") quotes, template literals give you more flexibility.

// Here, ${name} and ${age} are placeholders that get replaced with variable values.
// By using this approach we can do many things "on the go" as well. Like (name.toUpperCase) and all. Eg:

console.log(`My name is ${name.toUpperCase()} and I am ${age} years old.`);

/* IMP Note:

// JavaScript is case-sensitive.

// toUppercase (wrong spelling) → not a valid function → returns undefined.

// toUpperCase() (correct spelling) → built-in string method that converts text to uppercase.
// In JavaScript, the correct method is toUpperCase() (with a capital C at the end).

// name.toUpperCase → refers to the function object.

// This references the function itself, not its result. 
// So JavaScript will print the function definition =>(function toUpperCase() { [native code] }). but NOT its Result.

// name.toUpperCase() → Using these paranthesis "()" at the end, Actually executes the function and returns the uppercase string.
*/

// Use of Syntax => new String()
// Conversion of String into an StringObject.

// We can convert Strings into an Object as well using Syntax => new String() → creates a String object.Eg:
const gameNameinString = String('hitesh-hc-com')
console.log("typeof gameNameinString was originally a",typeof gameNameinString)
// Output will be : string

const gameNameasObject = new String('hitesh-hc-com')
console.log("typeof gameNameasObject is now an",typeof gameNameasObject)
// Output will be : object

/* IMP Note:
// In JavaScript With const, you cannot redeclare the same variable name in the same scope.
// If you use let, you still cannot redeclare in the same block, but you can reassign: Eg:

let gameName = String('hitesh-hc-com');
console.log(typeof gameName); // string

// Reassigning the value to already declared gameName Variable:

gameName = new String('hitesh-hc-com'); 
console.log(typeof gameName); // object ✅ works

*/

/* How to Print Both Outputs for Comparison??

// You can absolutely compare both outputs — you just need to avoid redeclaring the same constant twice. In JavaScript, const means the variable name cannot be reassigned or redeclared in the same scope. 
//Instead of using the same variable name twice, use different names:
// Eg:

const gameNamePrimitive = String('hitesh-hc-com');
console.log("typeof gameNamePrimitive is", typeof gameNamePrimitive); 
// Output will be : string

const gameNameObject = new String('hitesh-hc-com');
console.log("typeof gameNameObject is", typeof gameNameObject); 
// Output will be: object

*/

/* IMP NOTE:
// Converting a string into an String object is ONLY useful if you need to attach extra properties or treat it like a full object. But for everyday coding, primitive strings are faster, simpler, and safer.

// Converting a string into a String object in JavaScript (new String("text")) is possible, but it’s not something developers use often. Let’s break down the benefits and trade-offs so you can see when (and why) it might matter:

// Benefits of String Objects:

// 1. Possess Object Features

// => A String object behaves like any other JavaScript object.

// => You can attach custom properties to it:
// Eg:
*/
let strObj = new String("Hello");
strObj.language = "English"; // custom properties attached
console.log(strObj);
console.log("typeof strObj is now an",typeof strObj);
console.log(strObj.language); // English

/*
// 2. Wrapper for Methods

// => Well JavaScript automatically wraps primitive strings in "temporary String objects" when you call methods like .toUpperCase() and all.

// => Using new String() makes this wrapper explicit, so you can treat the string as a full object.

// 3. Consistency with Other Objects

// => Sometimes, in frameworks or libraries, treating everything as an object (instead of mixing primitives and objects) can simplify logic.

// Drawbacks (Why It’s Rarely Used):

// a) Performance Overhead: String objects are heavier than primitive strings.

// b) Unexpected Behavior: Comparisons can be tricky:
// Can be confusing (=== vs ==)
// Eg:
*/

let str1 = "hello";              // primitive
let str2 = new String("hello");  // object

console.log(str1 === str2); // false (different types)
console.log(str1 == str2);  // true (value coerced)

// Best Practice: Use string literals ("text") or String("text") for simplicity. Reserve new String() for very specific cases.
