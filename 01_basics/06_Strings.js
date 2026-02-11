// String Concatenation: Eg:

// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value"); // Messy Concatenation => Outdated Approach

// String interpolation using BackTicks (` `):

// String interpolation means inserting variables or expressions directly into a string without messy concatenation. Eg:
/*
let name = "Harry";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
*/
// Here Backticks (`) are used to create template literals in JavaScript. Unlike single (') or double (") quotes, template literals give you more flexibility.

// Here, ${name} and ${age} are placeholders that get replaced with variable values.
// By using this approach we can do many things "on the go" as well. Like (name.toUpperCase) and all. Eg:

// console.log(`My name is ${name.toUpperCase()} and I am ${age} years old.`);

/* IMP Note:

// JavaScript is case-sensitive.

// In JavaScript, the correct method is toUpperCase() (with a capital C at the end).

// toUppercase (wrong spelling) → not a valid function → returns undefined.

// toUpperCase() (correct spelling) → built-in string method that converts text to uppercase.

// Also please Note:

// name.toUpperCase → refers to the function object.

// This references the function itself, not its result. 
// So JavaScript will print the function definition =>(function toUpperCase() { [native code] }). but NOT its Result.

// name.toUpperCase() → Using these paranthesis "()" at the end, Actually executes the function and returns the uppercase string.
*/

// Conversion of String into an StringObject.
// Use of Syntax => new String()
/*
// We can convert Strings into an Object as well using Syntax => new String() → creates a String object.
// Remember => "S" in "new String()" must always be CAPITAL LETTER while creating StringObject.
// Eg:
const gameNameinString = String('hitesh-hc-com')
console.log("typeof gameNameinString was originally a",typeof gameNameinString)
// Output will be : string

const gameNameasObject = new String('hitesh-hc-com')
console.log("typeof gameNameasObject is now an",typeof gameNameasObject)
// Output will be : object
*/
/* IMP Note:
// In JavaScript with const, you cannot redeclare the "same variable name" in the "same scope".
// If you use let, you still cannot redeclare in the same block, but you can reassign: Eg:

let gameName = String('hitesh-hc-com');
console.log(typeof gameName); // string

// Reassigning the value to already declared gameName Variable:

gameName = new String('hitesh-hc-com'); 
console.log(typeof gameName); // object ✅ works

*/

/* How to Print Both Outputs for Comparison??

// You can absolutely compare both outputs — you just need to avoid redeclaring the same constant twice. In JavaScript, const means the variable name cannot be reassigned or redeclared in the same scope. 
// Instead of using the same variable name twice, use different names:
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
/*
let strObj = new String("Hello");
strObj.language = "English"; // custom properties attached
console.log(strObj);
console.log("typeof strObj is now an",typeof strObj);
console.log(strObj.language); // English
*/
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
/*
let str1 = "hello";              // primitive
let str2 = new String("hello");  // object

console.log(str1 === str2); // false (different types)
console.log(str1 == str2);  // true (value coerced)
*/
// Best Practice: Use string literals ("text") or String("text") for simplicity. Reserve new String() for very specific cases.

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(StrObj in Browser Console)++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++

// If we declare a String into a StringObject in Browser Console (Go to www.google.com => right click on screen and go to inspect element => then go to Browser Console),
// => then we can see more properties attached to this StringObject, under Prototype DropDown icon.
// => and these prototype properties are only available for String Object but NOT to string literals like simple ("text") or String("text"). Eg: 

// const gameName = new String('hitesh-hc-com')

// console.log(gameName.__proto__); // These are basically two underscores got concatenated without space inbetween [ _ (+) _ ], which appears to be one(__).
// This (.__proto__) is used to fetch all the properties attached to this StringObject, under Prototype DropDown icon in Browser Console.
// But we don't really need to type this (.__proto__) to use any property attached to this StringObject, instead we can simply use all those properties using syntax => (StrObjName.property ). Eg:

const gameName = new String('hitesh-hc-com') 

// StrObj named => "gameName" Declared
// Accessing properties attached to this StrObj:

/*
console.log(gameName[0]);  
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); 
// .charAt(2) => It tells character present at index  provided in argument.
console.log(gameName.indexOf('t')); 
// .indexOf('t') => It tells index of Character provided as argument.
console.log(gameName.split('-')); // We can split the StrObj with anything like WhiteSpaces or "-" in this example.
// After splitting, Output Gives kind of an Array => 
// => [ 'hitesh', 'hc', 'com' ]
*/
/*
const newString = gameName.substring(0, 4) 
// Last index=4 excluded 
console.log("The substring is =>",newString);
*/
// substring(start, end)
// If start > end, JavaScript swaps them automatically.i.e. it will make indexes start always less than end i.e. (start<end) Always.
// ❌ Does NOT support negative indexes.
// Any negative value is treated as 0.
// Any invalid inputs like (4,4) or (-4, -1) will give an Empty String.
/*
const anotherString = gameName.slice(2, 6)
console.log("After slicing it becomes =>",anotherString);
*/
// slice(start, end)
// cuts/slices the part of string between given indexes and returns as output. 
// If start > end, JavaScript does NOT swap them. =>
// => Instead, it returns an empty string.
// ✅ Supports negative indexes.
// Negative values count from the end of the string.

// NOTE:
// Use slice() when you want to work with negative indexes (e.g., extracting from the end of a string).
// Use substring() when you want automatic swapping of indices but don’t need negative index support.

/*
// More properties we can play with Strings in JavaScript:

const newStringOne = "   hitesh    "
console.log("Originally with Extra WhiteSpaces it was =>", newStringOne, ".");
console.log("After trimming it becomes =>", newStringOne.trim()); // No argument needed to be provided.

// Well, in JavaScript we can customise this trimming too, using => trimStart() or trimEnd().Eg:

console.log("After trimStart it becomes =>", newStringOne.trimStart());

console.log("After trimEnd it becomes =>", newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log("%20, replaced with '-' =>", url.replace('%20', '-')) 
// "%20" is added by Browser in url as default, if someone name web page with Whitespace inbetween like =>
// => "hitesh choudhary" and we can replace this "%20" with anything we want like "-" in this example. 

console.log("if provided url includes 'sundar' ??", url.includes('sundar')) // we can ask if url includes this or not?? and output will be Boolean.
*/

// And rest we can explore all the properties attached to this StringObject, under Prototype DropDown icon in Browser Console.
