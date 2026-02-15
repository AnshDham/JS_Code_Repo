// Let's build an E-Commerce Website like Flipkart/Amazon etc.
// Let's get USER SignUp at our Platform.

const accountId = 2047
let accountEmail = "account_212@gmail.com" // Modern way of declaring Variables in JavaScript using "let" Keyword.
var accountPassword = "12345" // Traditional/Outdated way of declaring Variables in JavaScript using "Var" Keyword.

/*
Prefer not to use "var" keyword to declare variables,
because of issue in "block scope" and "functional scope".
*/

accountCity = "Jaipur" // Very bad way of declaring Variables in JavaScript, Always resisted to use.

let accountState; // Output will be "undefined" because we have not provided any value to this vaiable called "accountState".

// Let's try to change the values of above assigned variables.
// accountId = 212 // Changing value of "Const" Variable is not allowed.

accountEmail = "abcd_425@gmail.com"
accountPassword = "41235"
accountCity = "Bombay"

console.log("accountId = ", accountId)

// Array form using "[]" Brackets → shows rows with indexes:

console.log("Array form → shows rows with indexes:")

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])

// Object form using "{}" Brackets → shows rows with property names:

console.log("Object form → shows rows with property names:")

console.table ({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
})



