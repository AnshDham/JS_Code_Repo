// ++++++++++++++++++++++++++++++++++++++++++++++++

// Functions can also have rest parameters

// ++++++++++++++++++++++++++++++++++++++++++++++++

// NOTE: "Rest operator" and "Spread Operator" are one and only thing i.e. Same to Same.
// But when to call what => depends on usecase.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Eg: Use of Rest Operator (...args):

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Let say we are creating a function to store cart price of some e-commerce platform,
// Where user can select any number of items of different-different prices, 
// and we want to collect all those prices in a cart,
// In such cases we can use REST Operator

// ++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function calculateCartPrice_1 (Price_1){
    console.log("Collected array =>", Price_1); 
    return Price_1; 
}
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// calculateCartPrice_1 (200, 400, 500, 2000)
// Price_1 => Collected array => 200
// Without using REST Operator (...args), parameter "Price_1" can accept only single argument and discarded rest parameters passed.

// ++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function calculateCartPrice_2 (...Price_2){
    console.log("Collected array =>", Price_2); 
    return Price_2;
}
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// calculateCartPrice_2 (200, 400, 500, 2000);

// Price_2 => Collected array => [ 200, 400, 500, 2000 ]
// All arguments passed, are spreaded (using Rest Operator) to parameter => Price_2.

// +++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function calculateCartPrice_3 (val_1, val_2, ...Price_3) {
    console.log("val_1:", val_1);
    console.log("val_2:", val_2);
    console.log("other array:", Price_3);
    return [val_1, val_2, ...Price_3];
}
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// calculateCartPrice_3 (200, 400, 500, 1000, 1500, 2000)

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// output_3 =>

// val_1: 200 // First argument passed to first parameter => val_1.
// val_2: 400 // Second argument passed to second parameter => val_2.
// other array: [ 500, 1000, 1500, 2000 ] // Rest all arguments passed, are spreaded (using Rest Operator) to third parameter => Price_3.

// ++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// We can also pass "an OBJECT" =>  "as an argument" to some function: 
// Example:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Creating an Object called, Let's say => "user".

// ++++++++++++++++++++++++++++++++++++++++++++++++++

/*
const user = {
    username: "hitesh",
    price: 199
}
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Let us now create a function to handle this object:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    // Please be very careful while accessing value of an object using keys.
    // Spellings of keys must be same as defined in an object,
    // any spelling mistake will result into failure in fetching values.
}
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Here "anyobject" is a parameter to a function => "handleObject",
// which can accept anything as argument =>
// like either you pass complete object as an argument, 
// or just the name of an object as an argument.

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Eg: Passing just the name of an object as an argument i.e. "user" in this example:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// handleObject(user)
// Output => Username is hitesh and price is 199.

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Now passing complete "user" object as an argument to the function "handleObject".
// Example:

// +++++++++++++++++++++++++++++++++++++++++++++++++++

/*
handleObject(

    {
    username: "hitesh",
    price: 199
    }

)
*/

// Output => Username is hitesh and price is 199.

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// We can also pass either a Complete Array or just name of an Array as an argument to a Function:
// Example:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Creating an Array:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// const myNumArray = [200, 400, 100, 600]

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Creating a function which returns the second element of an Array:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function returnSecondValue(getArray){

    console.log(`The second element of an Array is => ${getArray[1]}`); 
    return ;
}
*/

// Here "getArray" => is a parameter to the function, which accepts arguments.

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Passing just name of our Array as an argument to a Function:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(returnSecondValue(myNumArray));

// Output => The second element of an Array is => 400.
// => Followed by => undefined 

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Passing complete Array as an argument to a Function:

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(returnSecondValue([200, 400, 500, 1000]));

// Output => The second element of an Array is => 400. 
// => Followed by => undefined 

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Functions can be used as methods in objects:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const person = {
//     name: 'Alice',
//     greet() {
//         return `Hello, my name is ${this.name}!`;
//     }
// };
// console.log(person.greet()); // Output: Hello, my name is Alice!

// ++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++
// +++++(We will meet soon with Next Concept)+++++
// +++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++


