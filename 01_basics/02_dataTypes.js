"use strict"; //Treat all JS Code as Newer Version.

// alert (3+3) => ReferenceError: alert is not defined, Since we are using NodeJs but Not JavaScript Browser Engine.
// instead we can use following JS Code snippet for Arithmetic [Addition/Subtraction/Multiplication/Division] Operations:
console.log(3+3) // Code Readability Should be at utmost priority.

console.log( // Very Bad Code Readability.
    1
    +
    2
)
// DataTypes:
let name = "Harry" // String DataType
let age = 18 // int(Number) DataType
let isLoggedIn = false // Boolean DataType
let state; // Undefined DataType since Value Not assigned to Variable.

// More DataTypes:

// number => 2 to power 53
// bigint => To Store very large integers like in Stock Market or Trading and all.
// string => "Elephant"
// boolean => true/false
// null => standalone value 
// => Like we have requested Temperature from server and due to some reason it couldn't provide Real Time Temperature that Time, then instead providing "0" at that moment, better it should provide "Null" as output, which implies Real Time Temperature is Not available at that moment.

// undefined => // When Value is not assigned to declared variable.
// symbol => unique // Used More in ReactJs to uniquely identify objects.

// Object => Will be discussed later on in Great Detail.

// Use of "typeof":

console.log(typeof "Harry")
console.log(typeof 18)
console.log(typeof false)
console.log(typeof state)

/* 
console.table (
    {
        typeof "Harry",
        typeof 18,
        typeof false,
        typeof state
    })
        WRONG way of structuring the object inside "console.table".
*/

/*
Why it doesn’t work
Inside an object literal { ... }, you need key-value pairs.

typeof "Harry" by itself is just a value, but it has no key.

Also, if state is not defined, you’ll get a ReferenceError before console.table even runs.
*/

/* Correct way
You can assign each typeof result to a property name:
*/

/*
console.table({
  stringType: typeof "Harry",
  numberType: typeof 18,
  booleanType: typeof false,
  stateType: typeof state   // only if 'state' is defined
})
*/

/*
Alternative: Array of objects
If you want each type on its own row with labels:
*/

/*
console.table([
  { variable: "Harry", type: typeof "Harry" },
  { variable: 18, type: typeof 18 },
  { variable: false, type: typeof false },
  { variable: "state", type: typeof state }
])
*/

// But we will study about these object literals in Great Detail in Next Lessons, so just relax and don't Stress about it.

