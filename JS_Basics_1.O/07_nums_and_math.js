// const score = 400
// console.log(score); // Output will be 400, which JS automatically detected that variable named "score" should have been stored some number => 400. 
// console.log(typeof score); // Output => number

// But to be absolute (100%) clear, we can explicitly define Number DataType => using NumberObject => using "new" keyword, as we have done with string => StrObj.
// Syntax => new Number() → creates a Number object.
// Remember => "N" in "new Number()" must always be CAPITAL LETTER while creating NumberObject.
// Eg:

const balance = new Number(100247) // Syntax => new Number() → creates a Number object.

/* 

console.log("The balance in number is =>",balance);
console.log("typeof balance in number is =>",typeof balance);

*/

// Since now our variable named "balance" is a NumberObject, therefore we can explore more properties attached to this NumberObject => under Prototype dropdown in web browser console.
// There are only few properties attached to this NumberObject under Prototype dropdown in web browser console. 
// One of them is to convert this NumberObject into StingObject, and Then we would be able to use almost all properties attached to StringObject given under Prototype dropdown in web browser console, which we have already studied before. Eg:

const balance_String = balance.toString() // NumObj called "balance" is converted into a StrObj and StrObj is stored in a new variable, just for convenience.

/*

console.log("Value of (balance_String) is =>",balance_String)
console.log("typeof (balance_String) is =>",typeof balance_String)
console.log("Now if (balance_String) is a StrObj, so we can access all StrObj properties with it; Example => Length of our (balance_String) can be accessed using (balance_String.length) and output will be =>",balance_String.length)

*/

// Other NumberObject Properties:Eg:

// While developing some E-Commerce web app, we have to do some GST Calculations and Multiplication and all;
// There sometimes we recieve larger precision values, then we can use NumberObject property [.toFixed()], to show user/client only relevant precision value, easy to understood.
// Remember while using [.toFixed()] property we have to give some integer number as argument, to ensure till who many decimal places we need to show precision value to the user/client. Eg:

/* IMP NOTE:

=> In JavaScript, [.toFixed()] is a method that only exists on Number objects.
=> Always ensure the variable is a number before using [.toFixed()].
=> JavaScript uses [.toFixed()] (with a capital F), not [.tofixed()].
=> JavaScript is case-sensitive, so [.tofixed()] is treated as an undefined function.
*/
// Eg:
// console.log("Precision value upto TWO Decimal places is =>",balance.toFixed(2));

// Other Properties which we can use in JavaScript on Numbers:
// Eg: Use of [.toPrecision()]
// Again we need to provide some integer number as argument, to ensure How many numbers of precision value we need to show to the user/client. Eg:

/*

const Number1 = 123.8966

console.log("Precision value of Number1 upto 5 numbers is =>",Number1.toPrecision(5)); 
// Output => 123.90 => RoundedOff

console.log("Precision value of Number1 upto 4 numbers is =>",Number1.toPrecision(4));
// Output => 123.9 => RoundedOff

console.log("Precision value of Number1 upto 3 numbers is =>",Number1.toPrecision(3));
// Output => 124 => RoundedOff

const Number2 = 123.8966

console.log("Precision value of Number2 upto 4 numbers is =>",Number2.toPrecision(4));
// Output => 123.9 => RoundedOff

const Number3 = 1123.8966

// Important example: Used to asked in Interviews and all.

console.log("Precision value of Number3 upto 3 numbers is =>",Number3.toPrecision(3));
// Output => 1.12e+3 => RoundedOff upto 3 numbers and rest value converted into exponential notation.
*/

// Eg: Use of [.toLocaleString()]
// => Used for Better Representation of Zeroes in International Number System
const hundreds = 1000000

// console.log(hundreds.toLocaleString());

// Eg: Use of [.toLocaleString('en-IN')]
// => Used for Better Representation of Zeroes in Indian Number System

// console.log(hundreds.toLocaleString('en-IN'));

// Also for Competitive Programming Stuff, we can explore MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER etc. of a Number dataType that could be possible in JavaScript.
/*
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)  // and etc.
*/
// That's it for our NUMBER discussion.
// Let's explore Math in JavaScript.

// +++++++++(Math Library in JavaScript)+++++++++++++
// Remember => Always use Capital "M" while using "Math" library in JavaScript.
// In JavaScript Math itself is a kind of an Object and lots of properties are attached to this Math Object as well. which can be further explored in Web Browser Console.

// Accessing few of properties attached to Math Library:

// console.log(Math.abs(-4)); // Provides Modulus Value of provided argument i.e. negative value converted to positive but positive value remains positive only.
// console.log(Math.round(4.6)); // Rounds-Off the provided Value.
// console.log(Math.ceil(4.2)); // Always compulsorily rounds off to the Highest Integer
// console.log(Math.floor(4.9)); // Always compulsorily rounds off to the Lowest Integer
// console.log(Math.min(4, 3, 6, 8)); // Fetches Minimum value out of Provided arguments
// console.log(Math.max(4, 3, 6, 8)); // Fetches Maximum value out of Provided arguments

// Important property attached to Math Library:

// console.log(Math.random());

// [Math.random()] always provides random values between 0 and 1, mostly decimal, every new time you run it.

// But sometimes in Problem Statement, we need Random Values between some specific range, like
// While developing some dice game we need Random Values between 1 and 6, in such cases, what we can do is:

// We can Multiply Random Value by 10 to shift one decimal place to the left. Eg:
// console.log((Math.random()*10)); 

// But even after Multiplying Random Value by 10, we can get Random value = 0 also, if [Math.random()] provides something like (0.0487...) or (0.0056...) .
// So to always gauranteed get Minimum Random Value = '1' but Not '0', we can Intentionally make Addition of '1' to every Random Value multiplied by 10.
// i.e. Addition of (1.0000...) to every Random Value multiplied by 10.
// With such approach, we will still receive random values but now the minimum value we receive will be gauranteed '1' but not '0'. Eg:
// console.log((Math.random()*10) + 1);
// So now we are gonna get Random Values between 1 and 10.

// But what if we require random values between some different range?? Then such kind of Logics i.e. Multiplying Every Random Variable with 10 and then addition of 1 to every multiplied value etc. will be too complex.
// So instead we can follow, following Method:

// Eg: If we need Random Values between 10 and 20, then we could follow following method: (Better you Remember this Formula):

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

// Here,
// => Math.floor() is used to Always compulsorily rounds off to the Lowest Integer.=> Totally depends on our wish.
// => max-min = Range we needed
// => +1 is added to max-min = to avoid zero value.
// => Extra Addition of (+min) at the end, to ensure we get our minimum value.

// +++++++++++(That's it for Today)+++++++++++++++++
// ++++++(Will meet you with Next Concept)++++++++++


