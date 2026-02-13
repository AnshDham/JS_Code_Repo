// In JS, Objects are declared using "Curly Braces" or "Braces". => "{}".
// +++++++++++++++++++++++++++++++++++++++++
// There are two methods to declare Objects in JS.
// 1. Using Literals => const obj = { } => That's it.
// 2. Using Constructor => Using => Object.create 
// Object.create => Creates Singleton type of Objects. 
// Singleton Objects are Unique of their type.
// +++++++++++++++++++++++++++++++++++++++++
// Declaring Objects Using Constructor (Singleton Objects) will be discussed in some other file. 
// Here we will focus on Declaring objects using Literals. 
// +++++++++++++++++++++++++++++++++++++++++

// object literals:

// +++++++++++++++++++++++++++++++++++++++++

// "JS Objects", possess Key-Value Pairs.
// Unlike Arrays in JS, we can define ✅ Keys of an Object => like indexes [0,1,2,3,...] or some Strings.
// JS => by default => treats keys (which you defined) => as Strings. Eg: "name", "age", "location", "email", etc.
// You don't need to put keys explicitly in Inverted Commas [ " " ].

// +++++++++++++++++++++++++++++++++++++++++

// How to access JS object elements ??

// +++++++++++++++++++++++++++++++++++++++++

// In JS we can access Object elements using => either keys or directly values.

// To Access "JS Object keys" we can access them using either Dot Method or using Square Bracket Method.

// +++++++++++++++++++++++++++++++++++++++++

// When we access keys using Dot Method, we don't need to put explicitly => Inverted Commas [ " " ] with the name of a key => we are trying to access using Dot Method.Eg:

// JsUser.email ,etc.

// If we try to access JS Object Key => explicitly using Inverted Commas [ " " ], => with the name of a key => we are trying to access => using Dot Method, Then this is INVALID APPROACH. Eg:

// ❌ JsUser."email" ❌ // => INVALID APPROACH

// With Dot Method you cannot ❌ name JS Key under Inverted Commas [ " " ].

// +++++++++++++++++++++++++++++++++++++++++

// Else 
 
//if we intentionally want to access JS Object Key => explicitly using Inverted Commas [ " " ], => with the name of a key => we are trying to access => Then we have to use Square Bracket Method. Eg:

// console.log(JsUser["email"]) ✅ //=> Correct Approach

// +++++++++++++++++++++++++++++++++++++++++
// But if we have intentionally explicitly defined Key of a JS Object within Inverted Commas [ " " ], 
// Eg: => "full name": "Hitesh Choudhary",

// Example:

/*
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
}
*/

// then to access that key defined in Inverted Commas 
// [ Eg: "full name" ] => Its our compulsion to use "Square Bracket Method" to access that key => because DOT Method is NOT gonna work there. Eg:

// // ❌ JsUser."full name" ❌ // => INVALID APPROACH
// JsUser["full name"] ✅ //=> Correct Approach
// +++++++++++++++++++++++++++++++++++++++++

// If we define a variable as some => SYMBOL dataType, and want to use that "Symbol => as a Key" => in our JS Object, 
// then it is compulsory to put that Variable name under Square Brackets [VariableName] while defining JS Object Key, in order to access that key as a Symbol dataType object only.
// if we don't put that Variable Name under Square Brackets then that => Symbol dataType will No Longer remains intact and that key will also get treated as String. Eg:

/*
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
}
*/

// +++++++++++++++++++++++++++++++++++++++++

// JS Object can accept any dataType as a Value for a Key =>
// Values for a Key could be => string, number, boolean, array, some another object, fuctions anything etc.

// +++++++++++++++++++++++++++++++++++++++++
// Example:
// +++++++++++++++++++++++++++++++++++++++++

const mySym = Symbol("key1") // Symbol Declared

const JsUser = {
    name: "Hitesh", // Value dataType => String
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", 
    // Symbol defined as key and string value passed to it.
    age: 18, // Value dataType => Number
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false, // Value dataType => Boolean
    lastLoginDays: ["Monday", "Saturday"] 
    // Value dataType => Array
}

// +++++++++++++++++++++++++++++++++++++++++

// console.log(JsUser.email) //=> Correct Approach ✅

// // ❌ JsUser."email" ❌ // => INVALID APPROACH
// With DOT Method we can't name a key under Inverted commas.

// +++++++++++++++++++++++++++++++++++++++++

// Instead if we intentionally want to access a JS object key in the same form as JS treats it by default i.e. under inverted commas, then we have to access that key using Square Bracket Method.

// console.log(JsUser["email"]) //=> Correct Approach ✅

// +++++++++++++++++++++++++++++++++++++++++
// IMP NOTE: 
// +++++++++++++++++++++++++++++++++++++++++
// => When key was intentionally defined under inverted commas in an Object:
// +++++++++++++++++++++++++++++++++++++++++

// console.log(JsUser["full name"]) //=> Correct Approach ✅

// // ❌ JsUser."full name" ❌ // => INVALID APPROACH

// INVALID APPROACH => Since key was intentionally defined under inverted commas in an Object and thus can only be accessed using Square Bracket Method.

// +++++++++++++++++++++++++++++++++++++++++

// console.log(JsUser[mySym]) // Output => myKey1

// +++++++++++++++++++++++++++++++++++++++++

// console.log(typeof JsUser[mySym]) // Output => string 

// Output => STRING, =>

// => Because JsUser[mySym] accesses the value of a key => and type of value we defined in a key [mySym] => which is actually a "Symbol" => "defined as a key" in a JS Object => is a String.

// +++++++++++++++++++++++++++++++++++++++++

// console.log(typeof JsUser.mySym) 
// Output => undefined 
// => Since NO such "key" => "mysym" [String by default] exists.

// +++++++++++++++++++++++++++++++++++++++++

// We can also change the value of a key defined in a JS Object: 
// Eg:

// +++++++++++++++++++++++++++++++++++++++++

// JsUser.email = "hitesh@chatgpt.com"
// Originally it was defined => "hitesh@google.com"

// console.log(JsUser.email) 
// Output => hitesh@chatgpt.com // => Email got Updated ✅

// +++++++++++++++++++++++++++++++++++++++++

// We can also Freeze/prevent changing the value of a key defined in a JS Object: 

// +++++++++++++++++++++++++++++++++++++++++

// Example:

// +++++++++++++++++++++++++++++++++++++++++

// Object.freeze(JsUser) 

// Object.freeze(JsUser) => Freezes/prevents changing the value of a key defined in a JS Object:

// If we now try to update(change) => let's say value of email key in our JS object, then that change will not actually reflect/happen, since we have freezed our object "JsUser" to prevent any change of its value. Eg:

// +++++++++++++++++++++++++++++++++++++++++

// JsUser.email = "hitesh@microsoft.com" // => Attempt to Change
// Originally it was defined => "hitesh@google.com"

// console.log(JsUser.email) 
// Output => hitesh@google.com // => NO Change ❌
// => Same Email as it was originally.

// +++++++++++++++++++++++++++++++++++++++++
// IMP NOTE: 
// +++++++++++++++++++++++++++++++++++++++++

// You can add always add, update, or delete properties of a JS Object at any time.

// +++++++++++++++++++++++++++++++++++++++++

// => In JavaScript, objects are dynamic.
// => That means you don’t have to define all keys when you first create the object.
// => You can add, update, or delete properties at any time.

// +++++++++++++++++++++++++++++++++++++++++

// Example: You’re simply creating a new property called greeting on the JS object named "JsUser" and assigning a function to it. Even though greeting wasn’t part of the original object definition, JavaScript allows this because objects are mutable.

// +++++++++++++++++++++++++++++++++++++++++

/*

JsUser.greeting = function(){
    console.log("Hello JS user"); // Printing Simple String
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);

    // Using String interpolation and placeholders to access variable => "name" => defined as a Key in JS Object => "JsUser".
    // IMP NOTE:
    // Inside an object method, "this. " refers to the object itself (JsUser in this case).
    // To access properties defined for some JS Object you can always use => "this. " => it will list all the properties defined for this JS Object on which you are currently working.
}

*/

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// +++++++++++++++++++++++++++++++++++++++++
// IMP NOTE: 
// +++++++++++++++++++++++++++++++++++++++++

// console.log(JsUser.greeting()); prints undefined

// +++++++++++++++++++++++++++++++++++++++++

// Notice that inside your functions, you’re using console.log but not returning anything. In JavaScript, if a function doesn’t explicitly return a value, it returns undefined. i.e.

// => First, JsUser.greeting() runs and prints "Hello JS user".

// => Then, because the function doesn’t return anything, the result is undefined.

// => That undefined is what console.log prints after the greeting output.

// +++++++++++++++++++++++++++++++++++++++++

// If you want only the greeting message without the extra undefined, you could either:

// +++++++++++++++++++++++++++++++++++++++++

// Call the function directly without wrapping in console.log:

// +++++++++++++++++++++++++++++++++++++++++
// Eg:
// +++++++++++++++++++++++++++++++++++++++++

// JsUser.greeting(); => Calling the function directly

// +++++++++++++++++++++++++++++++++++++++++

// Or make the function return a string instead of logging:

// +++++++++++++++++++++++++++++++++++++++++
// Eg:
// +++++++++++++++++++++++++++++++++++++++++

/*

JsUser.greeting = function(){
    return "Hello JS user";
}
console.log(JsUser.greeting());

*/

// +++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++
// +++++(We will meet soon with Next Concept)+++++
// +++++++++++++++++++++++++++++++++++++++++++++++





