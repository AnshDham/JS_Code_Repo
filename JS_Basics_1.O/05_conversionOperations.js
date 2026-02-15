// Converting a value into Negative Value: Eg:

let value = 3
let negValue = -value
console.log(negValue);


// Simple Basic Arithmetic Operations:

console.log(2+2); // Addition
console.log(2-2); // Subtraction
console.log(2*2); // Multiplication
console.log(2**3); // Raised to the power
console.log(5/2); // Simple Division
console.log(5%2); // Modulous Function => Provides only remainder received after division.


// String Concatenation [Simply Writing two words side by side to each other]:

let str1 = "hello"
let str2 = " hitesh" // Extra space intentionally added to kept words separated.

let str3 = str1 + str2
console.log(str3); // Output will be => hello hitesh


//+++++++++Confusing Conversion Operations:+++++++ Eg: 


// Unpredictable Results: No idea what conversion actually happening (String => Number) or (Number => String).

console.log("1" + 2); // Unpredictable Results
console.log(1 + "2"); // Unpredictable Results
console.log("1" + 2 + 2); // Unpredictable Results
console.log(1 + 2 + "2"); // Unpredictable Results

// Although if 1st operand is string then next all will be converted into string only and then concatenated.Eg:
console.log("1" + 2 + 2); // Output will be => 122.
// and 
// if 1st operand is a Number then all the numbers present before some different dataType arrives (Let's say a String), will be done with Arithmetic Operations and then concatenated with other strings.Eg:
console.log(1 + 2 + "2"); // Output will be => 32.

console.log(3 + 4 * 5 % 6); // Confusing Code:
// Better use appropriate parenthesis wherever required.Eg:
console.log(((3 + 4) * 5 )% 6);

/*
// Confusing Code:
let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // if all are equal, then why to form such numerous variables and write such a complex code, very Bad.
*/

/*
// Prefix (++a) & Postfix (a++) increment and decrement:
 
// Prefix increment:
// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing. Eg:

let x = 3;
const y = ++x;
// x is 4; y is 4
console.log (x)
console.log (y)

let p = 3n;
const q = ++p;
// p is 4n; q is 4n
console.log (p)
console.log (q)

// Postfix increment:
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing. Eg:

let x = 3;
const y = x++;
// x is 4; y is 3
console.log (x)
console.log (y)

let p = 3n;
const q = p++;
// p is 4n; q is 3n
console.log (p)
console.log (q)
*/

/*
// Confusing Conversion:
console.log(+true); // Bad attempt for prefix increment of boolean value.
console.log (true+); // ERROR => Very Bad attempt for postfix increment of boolean value.

console.log(+""); // Bad attempt for prefix increment of Empty String("").
console.log (""+); // ERROR => Very Bad attempt for postfix increment of Empty String ("").
*/

/* NOTE:
This type of confusing codes are Considered very Bad for Industry Practice.
In Industry it is always Preferred to write easily understoodable and readable code.
*/
