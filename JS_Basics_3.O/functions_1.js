// In JavaScript, functions are first-class objects, which means they can be treated like any other value. 
// They can be assigned to variables, passed as arguments to other functions, and returned from functions.
// ++++++++++++++++++++++++++++++++++++++++++++++++ 
// Here are some examples of how functions work in JavaScript:
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Function declaration
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Syntax: 
// ++++++++++++++++++++++++++++++++++++++++++++++++
// function functionName(parameters) { 
// /* 
// function body 
// */ 
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++
// How to call a function ??
// ++++++++++++++++++++++++++++++++++++++++++++++++
// To call a function, we need to use function's name followed by parentheses => "( )".,
// and we can pass arguments inside the parentheses if the function requires them.
// ++++++++++++++++++++++++++++++++++++++++++++++++
// "If we don't use parantheses" with the function name, 
// it will "NOT execute" the function, but instead it will "return the function definition" itself.
// For example:

// greet;

// OUTPUT => NO Visible output in the console, because "we are not calling" the function, 
// we are "just referencing" it. 
// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(greet);
// Output: [Function: greet] 

// //=> This will print the "function definition" of greet, NOT the result of calling the function.

// Since without using Parantheses, function NOT get executed, 
// but instead it will return the function definition itself, 
// and when we print that function definition using console.log(), 
// it will show us the function definition in the console, 
// which is [Function: greet] in this case.
// ++++++++++++++++++++++++++++++++++++++++++++++++

// greet();

// OUTPUT => NO Visible output in the console, 
// because  
// We are not using console.log() => Neither inside function definition, nor while calling the function, to print anything to the console,
// Therefore NO Visible output will be received in the console.

// This will execute the greet function, and since we are not passing any argument to the function, 
// the parameter "name" will be undefined by default.
// and when we return `Hello, ${name}!`, it will evaluate to "Hello, undefined!".
// but again the output "Hello, undefined!" will NOT get printed to the console, 
// because we are not using console.log() to display the returned value.
// ++++++++++++++++++++++++++++++++++++++++++++++++
// To call a function, you use its name followed by parentheses => "( )"., 
// and you can pass arguments inside the parentheses if the function requires them.
// Example of calling the greet function:
// ++++++++++++++++++++++++++++++++++++++++++++++++
// If we dont use console.log(), then the output for the greet function will NOT get printed, 
// although the function will still return the string.
// For example:

// greet('Bob');

// OUTPUT => NO Visible output in the console, 
// because
// We are not using console.log() => Neither inside function definition, nor while calling the function, to print anything to the console,
// Therefore NO Visible output will be received in the console.

// But this time it will NOT return "Hello, undefined!" 
// because we are passing the argument "Bob" to the function,
// so the parameter "name" will be assigned the value "Bob", 
// and when we return `Hello, ${name}!`, it will evaluate to "Hello, Bob!".

// This will return the string "Hello, Bob!", 
// but the output "Hello, Bob!" will NOT get printed to the console, 
// because we are not using console.log() to display the returned value.
// ++++++++++++++++++++++++++++++++++++++++++++++++
// IMP NOTE:
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Since you have returned => `Hello, ${name}!`, 
// the function will return a string that includes the name passed as an argument.
// BUT the function is NOT printing anything to the console by itself. 
// You need to use console.log() to see the output when you call the function, as shown above.
// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(greet('Alice'));
// Output: Hello, Alice!

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Also we can store the returned value from the function in a variable as well, 
// and then print that variable to see the output.

// const greetingMessage = greet('Charlie'); 

// This will store the returned string "Hello, Charlie!" in the variable => "greetingMessage".
// and then we can print the "greetingMessage variable" to see the output.

// console.log(greetingMessage);
// Output: Hello, Charlie!
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Significance of "return" keyword in a function:
// ++++++++++++++++++++++++++++++++++++++++++++++++
// The "return" keyword is used to specify the value that a function should return when it is called.
// Also Please note once you used "return" keyword in a function, 
// the function will exit immediately after executing the return statement, 
// and any code after the return statement will not be executed. 
// For example:

// function example() {
    // console.log('String inside console.log() will be printed.');
    // return 'Function has returned.';
    // console.log('This will NOT be printed.'); // This line will never be executed.
// }

// console.log(example());
// Output:=> String inside console.log() will be printed.
// => Function has returned.
// ++++++++++++++++++++++++++++++++++++++++++++++++
// If you don't use "return", the function will return => undefined => by default.
// ++++++++++++++++++++++++++++++++++++++++++++++++

// function noReturn() {
    // console.log('Function execution done. and console.log() got printed. but This function does not return anything.');
// }

// console.log(noReturn()); 
// Output:=> Function execution done. and console.log() got printed. but This function does not return anything. 
// => undefined //=> followed by undefined
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Also it's completely your choice to only use "return" keyword, to exit execution of the function,
// without passing any value to the "return statement". 
// In that case, the function will return undefined as well.
// For example:

// function exitEarly() {
    // console.log('String inside console.log() will be printed.');
    // return; // "return" keyword used without passing any value to the "return statement". 
    // // This will exit the function immediately and return => undefined.
    // console.log('This will NOT be printed.'); // This line will never be executed.
// }

// console.log(exitEarly());
// Output:
// String inside console.log() will be printed.
// undefined //=> followed by undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Sometimes when we don't explicitly define dataType of the parameter in a function, 
// Then user can pass any type of argument to that parameter when calling the function, 
// and the function will still work without throwing any error,
// because JavaScript is a dynamically typed language, 
// which means that variables and parameters can hold values of any dataType without requiring explicit type declarations.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// example of a function that can accept any type of argument:
// Using NO return statement used inside the function definition, 
// so it will return undefined by default.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// } 

// NO return statement used in this function, so it will return undefined by default.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// addTwoNumbers(5, 10); // Output: 15 => followed by undefined
// addTwoNumbers('Hello ', 'World!'); // Output: Hello World! => followed by undefined
// addTwoNumbers(5, ' apples'); // Output: 5 apples => followed by undefined
// addTwoNumbers(5, null); // Output: 5 (null is treated as 0 in arithmetic operations) => followed by undefined
// addTwoNumbers(true, 1); // Output: 2 (true is treated as 1 in arithmetic operations) => followed by undefined
// addTwoNumbers(true, false); // Output: 1 (true is treated as 1 and false is treated as 0 in arithmetic operations) => followed by undefined
// addTwoNumbers(null, undefined); // Output: NaN (null is treated as 0 and undefined is treated as NaN in arithmetic operations) => followed by undefined
// addTwoNumbers([1, 2], [3, 4]); // Output: 1,23,4 (arrays are converted to strings and concatenated) => followed by undefined
// addTwoNumbers({a: 1}, {b: 2}); // Output: [object Object][object Object] (objects are converted to strings and concatenated) => followed by undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++
// This issue could lead to unexpected results or bugs if the function is not designed to handle different data types properly.
// To avoid this issue, you can add type checking inside the function to ensure that the arguments passed are of the expected data type, 
// or you can use TypeScript, which is a superset of JavaScript that adds static typing to the language.
// ++++++++++++++++++++++++++++++++++++++++++++++++

// Also we can define this addTwoNumbers as follows: 
// using "return" keyword to return the result of addition, instead of using console.log() to print the result inside the function definition, 
// so that we can store the returned value in a variable and use it later, 
// or print it to the console when calling the function.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    // return number1 + number2 
    // Also we can directly return the result of addition without storing it in a variable first.
// }

// addTwoNumbers(3, 5) // => NO Visible Output in the Console.

// addTwoNumbers(3, 5) =>This will execute the addTwoNumbers function with the arguments 3 and 5,
// BUT it will return the value 8,  since we are not using console.log() to display the returned value, 
// We will NOT see any output in the console for this function call.

// console.log(addTwoNumbers(3, 5));
// => This will print the returned value of the function, which is 8, to the console.
// Output: 8 

// console.log("Result: ", result);
// Output: ReferenceError: result is not defined
// This will throw a ReferenceError 
// because the variable "result" is defined inside the function "addTwoNumbers", 
// and it is not accessible outside the function. 

// SCOPE of the variable "result" is limited to the function "addTwoNumbers", 
// so we cannot access it from outside the function, 
// which is why we get a ReferenceError when we try to print it to the console.
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Also we can directly return the result of addition without storing it in a variable first.
// ++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNumbers(number1, number2){

    // return number1 + number2 
    // we can directly return the result of addition without storing it in a variable first.
// }

// addTwoNumbers(3, 5) // => NO Visible Output in the Console.

// addTwoNumbers(3, 5) =>This will execute the addTwoNumbers function with the arguments 3 and 5,
// BUT it will return the value 8,  since we are not using console.log() to display the returned value, 
// We will NOT see any output in the console for this function call.

// console.log(addTwoNumbers(3, 5));
// => This will print the returned value of the function, which is 8, to the console.
// Output: 8 

// console.log("Result: ", addTwoNumbers(3, 5));
// Output: Result: 8

// console.log("Result: ", result);
// Output: ReferenceError: result is not defined, 
// Because till yet we haven't defined any variable named "result", => neither inside the function definition, nor outside the function definition.

// const result = addTwoNumbers(3, 5) 
// result variable is defined outside the function definition, 
// and it is assigned the returned value from the function call addTwoNumbers(3, 5), which is 8.
// Therefore Now we can print the "result" variable to see the output.

// console.log("Result: ", result);
// Output:=> Result: 8, 
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Another Example:
// ++++++++++++++++++++++++++++++++++++++++++++++++

// function loginUserMessage(username){
    
    // return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// Output: hitesh just logged in
// ++++++++++++++++++++++++++++++++++++++++++++++++
// What if User passes => an Empty String as an argument to the function,
// console.log(loginUserMessage(""))
// Output: just logged in
// ++++++++++++++++++++++++++++++++++++++++++++++++
// In this case, the function will return => " just logged in" 
// because the "username parameter" will be an empty string => "" 
// when the user passes an empty string as an argument to the function, 
// and when we use template literals to construct the return string, 
// it will include the empty string for the username, 
// resulting in " just logged in". 

// ++++++++++++++++++++++++++++++++++++++++++++++++

// But what if User Passes => NO value as an argument to the function,

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(loginUserMessage())
// Output: undefined just logged in

// So when NO Value is passed as an argument to the function,
// the "username parameter" will be undefined by default, 

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Another Example: When NO Default value is assigned to the "username parameter" in the function definition,
// ++++++++++++++++++++++++++++++++++++++++++++++++

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// Output: hitesh just logged in

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(loginUserMessage(""))
// Output: just logged in

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Explanation:
// ++++++++++++++++++++++++++++++++++++++++++++++++

// undefined means => no value was provided (e.g., calling loginUserMessage() with no arguments).

// Empty String => "" => is a defined value — it’s a string, just happens to be empty.

// So inside the function:

// For Empty String => "" => [ username === undefined ] evaluates => false, 
// because username is defined i.e. Empty String =>"".

// Therefore the function will skip the "if block" and go to the return statement, 
// and it will return " just logged in" because username is an empty string.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(loginUserMessage())
// Output: Please enter a username
// undefined
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Please note that in the last case, when we call loginUserMessage() without passing any argument,
// [ username === undefined ] evaluates => TRUE, and the function will enter the "if block",

// IMP NOTE: //
// => Since NO Default value is assigned to the "username parameter" in the function definition,

// the "username parameter" will be assigned the value of => "undefined" => by default, 

// and when we check if username is undefined using [ username === undefined ], 
// [ username === undefined ] evaluates => TRUE, and the function will enter the "if block", =>
// => Since NO Default value is assigned to the "username parameter" in the function definition,

// Therefore, the function will print "Please enter a username" to the console, 
// and then it will return undefined, 
// because in "if block" we are using "return" keyword without passing any value to the return statement, 
// which means the function will return undefined by default in that case.
// ++++++++++++++++++++++++++++++++++++++++++++++++

// IMP NOTE:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Sign of Exclamation Mark => "!" => is used in JavaScript to denote "not" or "negation".
// It is a logical operator that negates the truthiness of a value.

// For example: 
// console.log(!true); // Output: false
// console.log(!false); // Output: true
// console.log(!0); // Output: true (0 is falsy)
// console.log(!1); // Output: false (1 is truthy)

// console.log("") // Output: "" (empty string is falsy, but it will print an empty line in the console) 
// console.log(!""); // Output: true (empty string is falsy)

// console.log("Hello"); // Output: Hello (non-empty string is truthy, so it will print the string "Hello" in the console)
// console.log(!"Hello"); // Output: false (non-empty string is truthy)

// console.log(null); // Output: null (null is falsy, but it will print null in the console)
// console.log(!null); // Output: true (null is falsy)

// console.log(undefined); // Output: undefined (undefined is falsy, but it will print undefined in the console)
// console.log(!undefined); // Output: true (undefined is falsy)
// ++++++++++++++++++++++++++++++++++++++++++++++++

// Therefore we can write [ username === undefined ] as [ !username ] in the if condition, 

// because if username is undefined, 
// then [ !username ] or [ !undefined ] will evaluate to true, 
// since originally (undefined is falsy),
// and console.log(!undefined); // Output: true (because originally undefined is falsy)
// and therefore function will enter the "if block", =>
// and print "Please enter a username" to the console,

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Please Note function will enter the "if block", =>
// => (Only if NO Default value is assigned to the "username parameter" in the function definition,)
// ++++++++++++++++++++++++++++++++++++++++++++++++

// and if username is an empty string, then [ !username ] will evaluate to => false, 

// Because For Empty String => "" => [ username === undefined ] or [ !username ] evaluates => false, 
// because username is defined i.e. Empty String =>"".
// Therefore the function will skip the "if block" and go to the return statement, 
// and it will return " just logged in" because username is an empty string.

// ++++++++++++++++++++++++++++++++++++++++++++++++
// which is the same logic as [ username === undefined ].
// ++++++++++++++++++++++++++++++++++++++++++++++++

// Conclusion:

// ++++++++++++++++++++++++++++++++++++++++++++++++   
// If "if condition" is true, 
// and  NO Default value is assigned to the "username parameter" in the function definition,
// then the function will print "Please enter a username" to the console,
// and then it will return undefined, 
// because we are using "return" keyword without passing any value to the return statement inside the "if block".

// and if "if condition" is false, then the function will skip the "if block" and go to the return statement, 
// and it will return " just logged in" because username is an empty string.
// and this time it will NOT return "undefined",
// because we are providing a value to the return statement in that case, which is "${username} just logged in".
// ++++++++++++++++++++++++++++++++++++++++++++++++

// Therefore we can rewrite the "loginUserMessage function" as follows:
// With already Default value assigned to the "username parameter" in the function definition,
// i.e. username = "NAME_NOT_PROVIDED" (assigned as a default value to the "username parameter")

// ++++++++++++++++++++++++++++++++++++++++++++++++
// We can add default parameter value to the username parameter, 
// so that if user does not pass any argument to the function, 
// the username parameter will be assigned the default value [Eg: "NAME_NOT_PROVIDED" in this case] 
// and returns the function's output.

// The condition if(!username) checks for falsy values (undefined, null, "", 0, false, NaN).
// Since "NAME_NOT_PROVIDED" is truthy, i.e. now username parameter actually have some default value, 
// therefore [ username === undefined ] or [ !username ] evaluates => FALSE and therefore "if block" is skipped.
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Example:
// ++++++++++++++++++++++++++++++++++++++++++++++++

// function loginUserMessage(username = "NAME_NOT_PROVIDED"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(loginUserMessage("hitesh"))
// Output: hitesh just logged in

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(loginUserMessage(""))
// Output:  just logged in

// Because For Empty String => "" => [ username === undefined ] or [ !username ] evaluates => false, 
// because username is defined i.e. Empty String =>"".
// Therefore the function will skip the "if block" and go to the return statement, 
// and it will return " just logged in" because username is an empty string.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(loginUserMessage()) // => No argument passed by USER.
// Output:=> NAME_NOT_PROVIDED just logged in

// Explanation: 

// if user does not pass any argument to the function, 
// the username parameter will be assigned the default value [Eg: "NAME_NOT_PROVIDED" in this case] 
// and therefore the function returns the function's output. 
// i.e `${username} just logged in`, which evaluates to "NAME_NOT_PROVIDED just logged in" in this case,

// The condition if(!username) checks for falsy values (undefined, null, "", 0, false, NaN).
// Since "NAME_NOT_PROVIDED" is truthy, i.e. now username parameter actually have some default value, 
// therefore [ username === undefined ] or [ !username ] evaluates => FALSE and therefore "if block" is skipped.
// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++(That's it for Today)++++++++++++++
// +++++++++++++(To be continued...)++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++