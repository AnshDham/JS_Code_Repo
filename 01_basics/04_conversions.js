// let score = "33"
// let score = "33abc"
// let score = "" // Empty String
// let score = null
// let score = undefined
// let score = true // Boolean dataType
// let score = false // Boolean dataType

// const {score} = req.body // => => => =>
 
// => =>  Here we have received value of variable called "score" from FrontEnd, and we are not here sure about the typeof dataType we received from FrontEnd to this variable "score", whether we received "string" or "number" or some other dataType.

// And therefore we need to very sure about the typeof dataType received from FrontEnd, to perform further actions from backend. So we can do this in two ways as following:

// console.log (typeof score);
// console.log (typeof (score));

// ++++++++++++++++++(CONVERSION)+++++++++++++++++++++
// Suppose we received string value to variable "score" and we have to perform some arithmetic operations to that value, then we have to convert this string value to Number dataType first. and that could be done as Follows: 
// But remember while performing conversion to some dataType we should always start name of that dataType with Capital Letters.Eg: 

// // Conversion of different dataTypes input into Number dataType:

// let scoreInNumber = Number (score) // Conversion from String => Number happens.
// console.log (typeof (scoreInNumber));
// console.log (scoreInNumber); 
// NaN (Not a Number) in case of let score = "33abc".
// "0" in case of let score = null.

// What if user provided some random input like "33abc" which is Neither a Number nor a String.
// In that case also, in JavaScript conversion happens. but value assigned to new variable will be some different like "NaN" or "0" or "Something Else". Eg: let score = "33abc"/ let score = null etc.

// Therefore don't immediately judge the dataType of input received from FrontEnd in a JS, Means Don't judge if you received 33 then its a "Number", it could be "string" or "NaN" or "something else". TypeScript helps you resolve this issue. But its Ohk.

// What if we receive "null" value to the variable score?? Eg: let score = null
// Here this "null" dataType value is converted to "0".
// But we can't predict, it could be converted into anything.

// so we have seen 

// Conversion of a string "33" to a Number 33 successfully.

//  (for Random String "33abc")
// Conversion of some Random String "33abc" into "NaN" (Not a Number) Value, assigned to new variable scoreInNumber; although typeof this Random String "33abc" has been converted to a Number dataType.i.e.

// Value received "33abc" converted to => NaN (Not a Number), whereas
// DataType String "33abc" has been successfully converted to Number.

// (for null value)
// Conversion of null value into "0" Value, assigned to new variable scoreInNumber; although typeof this null has been converted to a Number dataType.i.e.

// Value received null converted to => 0, whereas
// DataType null has been successfully converted to Number.

// (for let score = undefined )
// Similarly for let score = undefined 
// DataType undefined has been successfully converted to Number.
// But Value received undefined has been converted to => NaN,

// (for let score = true)
// Similarly for let score = true // Boolean dataType
// DataType Boolean has been successfully converted to Number.
// But Value received undefined has been converted to => 1.

// (for let score = false)
// Similarly for let score = false // Boolean dataType
// DataType Boolean has been successfully converted to Number.
// But Value received false has been converted to => 0.

// SUMMARY of above Conversions:
// "33" => 33
// "33abc" => NaN
// Empty String ("") => 0
//  true => 1; false => 0
// undefined => NaN
// null => 0 etc.

// And very similarly we can convert all these dataTypes into String or Boolean or any other dataType as per our Need and Demand. Eg: Let's try to convert different dataTypes input into Boolean dataType

// Conversion of different dataTypes input into Boolean dataType:
// let userLogIn = 1 // Number
// let userLogIn = 0 // Number
// let userLogIn = 5 // Number
// let userLogIn = -5 // Number
// let userLogIn = true // Boolean
// let userLogIn = false // Boolean
// let userLogIn = "" // Empty String
// let userLogIn = "Hello World" // Filled String

// console.log (typeof userLogIn);
// console.log (typeof (userLogIn));

// let boolean_userLogIn = Boolean(userLogIn) // => => Conversion happens here.
// console.log(typeof (boolean_userLogIn));
// console.log(boolean_userLogIn);

// SUMMARY of above Conversions:
/*
Number 1 => true
Number 0 => false
Number 5 => true
Number -5 => true
Boolean true => true
Boolean false => false
Empty String ("") => false
Filled String  ("Hello World") => true
*/

// Conversion of different dataTypes input into String dataType:

// let someNumber = 33
// console.log(someNumber);
// console.log(typeof (someNumber));
// let stringNumber = String(someNumber) //=> => Conversion happens here.
// console.log(stringNumber);
// console.log(typeof stringNumber);

// And similarly we can try more conversions.
// Well Many times Browser provides us String dataTypes and we need to convert it into different dataTypes like Number or Boolean or something else as per our need or demand.


