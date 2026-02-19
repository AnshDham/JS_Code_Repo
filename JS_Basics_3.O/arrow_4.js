// +++++++++++++++++++++++++++++++++++++++++
// Use of "this" keyword with current context:
// +++++++++++++++++++++++++++++++++++++++++
// Whenever you want to fetch something => defined within some particular scope, 
// => its always recommended to use "this" keyword to fetch it from Current context, Eg:=> ${this.username} (Recommended)
// except just by injecting variable name under BackTicks. Eg:=> ${username}

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this); // This "this" describes "Current context" of the "user" Object.
//     }

// }

// user.welcomeMessage() //=> Accessing "welcomeMessage" from "user" Object.
// Output :=> hitesh , welcome to website
// Output :=> console.log(this); :=> "Current context" of the "user" Object. :=>

/*
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// +++++++++++++++++++++++++++++++++++++++++
// IMP NOTE: 
// +++++++++++++++++++++++++++++++++++++++++

// You can add always add, update, or delete properties of a JS Object (like "user" in this Example) at any time.

// +++++++++++++++++++++++++++++++++++++++++

// => In JavaScript, objects are dynamic.
// => That means you don’t have to define all keys when you first create the object.
// => You can add, update, or delete properties at any time.

// +++++++++++++++++++++++++++++++++++++++++
// Eg: Updating the Current Context => by updating value of variable "username" => from "hitesh" to "sam".
// +++++++++++++++++++++++++++++++++++++++++

// user.username = "sam"

// +++++++++++++++++++++++++++++++++++++++++
// Using "this" keyword to fetch updated value of variable "username" from Current context
// +++++++++++++++++++++++++++++++++++++++++

// user.welcomeMessage()
// Output :=> sam , welcome to website
// Output :=> console.log(this); :=> "Current context" of the "user" Object. :=>

/* 
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// +++++++++++++++++++++++++++++++++++++++++
// NOTE: Interview Important Question
// +++++++++++++++++++++++++++++++++++++++++
// What will be the output of "console.log(this);" in Global Context outside the scope of "user" object ??
// In node environment and in Browser engine console ??
// +++++++++++++++++++++++++++++++++++++++++

// output of "console.log(this);" in Global Context outside the scope of "user" object:
// (In node environment)

// +++++++++++++++++++++++++++++++++++++++++

// console.log(this);

// Output :=> {} :=> "Empty Object" [Important Note]

// +++++++++++++++++++++++++++++++++++++++++

// output of "console.log(this);" in Global Context outside the scope of "user" object:
// (In Browser Console)

// +++++++++++++++++++++++++++++++++++++++++

// console.log(this); 

// [Important Note]

// Output :=> Window {0: Window, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// +++++++++++++++++++++++++++++++++++++++++
// [Important Note]: From Interview Perspective
// +++++++++++++++++++++++++++++++++++++++++

// (In Browser Console), output of "console.log(this);" in Global Context outside the scope of "user" object is => "Window" Object which includes lots and lots of properties in Key-Value Pairs,
// Whereas,
// (In Browser Console), output of "console.log(this);" in Global Context outside the scope of "user" object is => an "Empty Object" => "{}".

// +++++++++++++++++++++++++++++++++++++++++
// Important Note: In a Function, "this" Keyword don't really work to fetch the value of some variable declared in current context of scope of that function.
// But NOTE: In "node environment", In a Function => "console.log(this)" => "standalone" possess many properties in current context of scope of that function. Eg:
// +++++++++++++++++++++++++++++++++++++++++

// function chai(){
//     let username = "hitesh";
//     console.log(this);
//     console.log(this.username);
// }
// +++++++++++++++++++++++++++++++++++++++++

// chai() // Calling and Executing Function

// +++++++++++++++++++++++++++++++++++++++++

// Output for => "console.log(this);" => executed inside function "chai()":
// Output:=>

//   Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }

// +++++++++++++++++++++++++++++++++++++++++

// Output for => "console.log(this.username);" => executed inside function "chai()":
// Output:=> undefined 
//=> It implies here in a function "chai()", "this" keyword couldn't fetch the value of "username" from the current context.

// +++++++++++++++++++++++++++++++++++++++++

// Important Note: Even if we put a function into a Variable i.e. (Declaration of an EXPRESSION), then also, "this" Keyword don't really work to fetch the value of some variable declared in current context of scope of that function.
// But again In "node environment", In a Function (here Expression) => "console.log(this)" => "standalone" possess many properties in current context of scope of that function (here Expression). Eg:

// +++++++++++++++++++++++++++++++++++++++++

// Declaration of an EXPRESSION => (Function holded into some variable)

// +++++++++++++++++++++++++++++++++++++++++

// Syntax of declaring an Expression:

// +++++++++++++++++++++++++++++++++++++++++

/*

const variableName = function (parameter) {
                        / >   
                        function body;
                        < /

};

*/

// +++++++++++++++++++++++++++++++++++++++++

// Calling and Executing of an Expression: => Syntax: variableName (argument to the Function's parameter)

// +++++++++++++++++++++++++++++++++++++++++

// Note: An EXPRESSION (Function holded into some variable), can't be called and Executed before its declaration.

// +++++++++++++++++++++++++++++++++++++++++

const chai = function () {
    let username = "hitesh"
    console.log(this); // Lots and lots of properties.
    console.log("Fetching 'username' inside Function", this.username); // Output => Undefined.
    //=> It implies here in a function (Expression) => "chai()", "this" keyword couldn't fetch the value of "username" from the current context.

}

// +++++++++++++++++++++++++++++++++++++++++

chai () // Calling and Executing Function

// +++++++++++++++++++++++++++++++++++++++++

console.log(this); // Outside the Scope of Function (Expression)
// Output:=> {} => Empty Object.

// +++++++++++++++++++++++++++++++++++++++++

// Output for => "console.log(this);" => executed inside function (Expression) => "chai()":
// Output:=>

/*  

Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}

*/

// +++++++++++++++++++++++++++++++++++++++++

// Concept of ()=> "ARROW FUNCTION" <=(). 

// +++++++++++++++++++++++++++++++++++++++++







// +++++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++++++++++








// +++++++++++++++++++++++++++++++++++++++++








// +++++++++++++++++++++++++++++++++++++++++








// +++++++++++++++++++++++++++++++++++++++++









// +++++++++++++++++++++++++++++++++++++++++








// +++++++++++++++++++++++++++++++++++++++++









// +++++++++++++++++++++++++++++++++++++++++








// +++++++++++++++++++++++++++++++++++++++++








// +++++++++++++++++++++++++++++++++++++++++












// +++++++++++++++++++++++++++++++++++++++++















// +++++++++++++++++++++++++++++++++++++++++














// +++++++++++++++++++++++++++++++++++++++++

