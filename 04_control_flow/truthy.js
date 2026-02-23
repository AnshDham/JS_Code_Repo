const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// +++++++++++++++++++++++++++++++++++++++++++++++
// falsy values
// +++++++++++++++++++++++++++++++++++++++++++++++

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// +++++++++++++++++++++++++++++++++++++++++++++++
//truthy values
// +++++++++++++++++++++++++++++++++++++++++++++++

// "0", 'false', " ", [], {}, "Empty Function" => function(){} 
// Anything inside double quotes counts truthy values.

// +++++++++++++++++++++++++++++++++++++++++++++++

// How to check if we received an Empty Array ??
// If you're sure that "userEmail" is an Array, then call its length property and compare it with Zero.

// +++++++++++++++++++++++++++++++++++++++++++++++

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// +++++++++++++++++++++++++++++++++++++++++++++++

// How to check if we received an Empty Object ?? 

// +++++++++++++++++++++++++++++++++++++++++++++++

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// +++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??): Works for just two => null and undefined.

// +++++++++++++++++++++++++++++++++++++++++++++++

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// +++++++++++++++++++++++++++++++++++++++++++++++

// Terniary Operator: Single Question Mark (?)

// +++++++++++++++++++++++++++++++++++++++++++++++

// Syntax:
// condition ? true : false

// +++++++++++++++++++++++++++++++++++++++++++++++

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++
// +++++(We will meet soon with Next Concept)+++++
// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++