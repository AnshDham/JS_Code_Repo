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
// JS by default treats keys (which you defined) => as Strings. Eg: "name", "age", "location", "email", etc.
// You don't need to put keys explicitly in Inverted Commas [ " " ].

// +++++++++++++++++++++++++++++++++++++++++

// How to access JS object elements ??

// +++++++++++++++++++++++++++++++++++++++++

// In JS we can access Object elements using => either keys or directly values.

// To Access "JS Object keys" we can access them using Dot Method or using Square Brackets.

// When we access keys using Dot Methid, we don't need to put explicitly Inverted Commas [ " " ] with the name of a key we are trying to access using Dot Method.

// If we try to access JS Object Key => explicitly using Inverted Commas [ " " ] with the name of a key we are trying to access using Dot Method, Then this is INVALID APPROACH.


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
