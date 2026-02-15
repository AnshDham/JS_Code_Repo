"use strict"; //Treat all JS Code as Newer Version.

// alert (3+3) => ReferenceError: alert is not defined, Since we are using NodeJs but Not JavaScript Browser Engine.
// instead we can use following JS Code snippet for Arithmetic [Addition/Subtraction/Multiplication/Division] Operations:

// Very Bad Code Readability.
console.log( 
    1
    +
    2
) // Output will be => 3.
// Code Readability Should be at utmost priority.
console.log(3+3) // Addition => Output will be 6.
console.log(3-3) // Subtraction => Output will be 0.
console.log(3*3) // Multiplication => Output will be 9.
console.log(5/2) // Division => Output will be 2.5.
console.log(5%2) // Floor Division (Provides only Remainder)=> Output will be 1.
console.log(3**3) // Raised to the Power => Output will be 3x3x3 = 27.

// There are Two types of DataTypes.
// 01. Primitive DataTypes:
// Eg=> 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.
// 02. Reference or (Non primitive) DataTypes:
// Eg: Arrays, Objects, and Functions etc.

// Primitive DataTypes: Uses STACK Memory allocation

// STACK Memory means => Call by (Value assigned to a variable) and copy of value is provided to new variable but not (reference to memory address) is provided. Therefore any change made to the copy will not affect original value assigned to a original variable.
//  7 types of Primitive dataTypes: String, Number, Boolean, null, undefined, Symbol, BigInt
// Declaring Primitive dataTypes: 
let name = "Harry" // 01. String DataType
let age = 18 // 02. Number DataType
const score = 100 // 02. Number DataType
const scoreValue = 100.3 // Again 02. Number DataType but not Float and all.
const bigNumber = 3456543576654356754n // Here "n" is used at the last of value assigned to variable called "bigNumber", making this value as 03. "BigInt" DataType.
let isLoggedIn = false // 04. Boolean DataType
let state; // 05. Undefined DataType since Value Not assigned to Variable.
let town = undefined // We can declare a variable => 05. undefined as well.
const outsideTemp = null
// 06. null => standalone value => Completely EMPTY.
// NOTE: null actually means something Completely EMPTY. null doesn't mean "0" or "NaN" or Empty String ("").
// Full Form of "NaN" is => "Not a Number".
// => Like we have requested Temperature from server and due to some reason it couldn't provide Real-Time Temperature that Time, then instead providing "0" at that moment(Since "0" can also be considered as Temperature), better it should provide "Null" as output, which implies Real-Time Temperature is NOT AVAILABLE at that moment.

// 07. symbol => unique => Used More in ReactJs to uniquely identify objects. Eg:

const id = Symbol('123')
const anotherId = Symbol('123')

// In above Example, Although both Variables "id" and "anotherId" have same values assigned to them, but since we used "Symbol dataType" to uniquely identify them, they both will be having Different Output but Not the same, and that we can check as following: 

console.log(id === anotherId); // This will Prove FALSE, since both will be having different output but not the same, although both L.H.S and R.H.S have same "Symbol DataType".
// These Three Equals Signs (===) are called "Strict Equality Check" which Prevents auto conversion of DataTypes from one to another, like number to string and all. And while checking Equality these Three Equals Signs (===) Check Whether both L.H.S and R.H.S have Same DataType or Not.
// While using Two Equal Signs (==) for Equality Check auto conversion of DataTypes from one dataType to another happens, like number to string and all. Eg:
console.log("2" == 2) // This will proved TRUE, although L.H.S => "2" is STRING DataType, while R.H.S => 2 is NUMBER DataType. Because Auto-Conversion happens.
console.log("2" === 2) // This will proved FALSE, since These Three Equals Signs (===) are called "Strict Equality Check" which Prevents auto conversion of DataTypes from one to another.

// Reference or (Non primitive) DataTypes => 
// => Uses HEAP Memory allocation
// // HEAP Memory means => Call by Reference (Direct Reference or Memory address of Value assigned to a variable) and (Reference or Memory address) of value is provided to the new variable. Therefore any change made to the new variable will straightly affect original value assigned to a variable.

// Eg: Arrays, Objects, and Functions etc.

// Arrays are made using "[]" brackets and can possess only same dataTypes. Eg:
const heros = ["shaktiman", "naagraj", "doga"];
// IMP Note: typeof an Array will also be an "Object" only.

// Object => Will be discussed later on in Great Detail.
// But As of Now => Objects are made using "{}" brackets and possess "Key-Value Pairs" and can have different dataTypes in "Key-Value Pairs" as well.Eg:
let myObj = {
    name: "hitesh",
    age: 22,
}
// IMP Note: typeof an OBJECT will obviously be an "Object" only.

// Functions => we all know some collection of commands to perform some specific task, for which it has been made.Eg:
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// Link to the documentation for more detail understanding => https://262.ecma-international.org/5.1/#sec-11.4.3

// Use of "typeof":

console.log(typeof "Harry") // typeof "Harry" will be STRING.
console.log(typeof 18) // typeof 18 will be Number.
console.log(typeof false) // typeof false will be Boolean.
console.log(typeof state) // typeof state will be Undefined.
console.log(typeof undefined); 
// IMP NOTE: typeof "undefined" will be => undefined.
console.log(typeof null); 
// IMP NOTE: typeof "null" will be => object.
// => NOTE: Here typeof "null" is NOT "0" or "NaN" or Empty String (""). It is => "Object".

/* +++++++++++++++( WRONG Way )+++++++++++++++++++
console.table (
    {
        typeof "Harry",
        typeof 18,
        typeof false,
        typeof state
    })
        WRONG way of structuring the object inside "console.table".
*/

/* +++++++++++( Why it doesn’t work ?? )+++++++++++++++
Inside an object literal { ... }, you need key-value pairs.

typeof "Harry" by itself is just a value, but it has no key.

Also, if state is not defined, you’ll get a ReferenceError before console.table even runs.
*/

/* +++++++++++++++( Correct way )++++++++++++++++++++
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

/*+++++++( Alternative: Array of objects: )+++++++
If you want each type on its own row with labels:
*/


console.table([
  { variable: "Harry", type: typeof "Harry" },
  { variable: 18, type: typeof 18 },
  { variable: false, type: typeof false },
  { variable: "state", type: typeof state },
  { variable: "undefined", type: typeof undefined },
  { variable: "null", type: typeof null },
  { variable: "name", type: typeof name },
  { variable: "age", type: typeof age },
  { variable: "score", type: typeof score },
  { variable: "scoreValue", type: typeof scoreValue },
  { variable: "bigNumber", type: typeof bigNumber },
  { variable: "isLoggedIn", type: typeof isLoggedIn },
  { variable: "state", type: typeof state },
  { variable: "town", type: typeof town },
  { variable: "outsideTemp", type: typeof outsideTemp },
  { variable: "heros", type: typeof heros },
  { variable: "myObj", type: typeof myObj },
])


// But we will study about these object literals in Great Detail in Next Lessons, so just relax and don't Stress about it.

