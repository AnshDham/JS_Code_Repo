// Let's say we declare few variables using let, const and var:

// let a = 20;
// const b = 40;
// var c = 60;
// d = 80;

// console.log ("a =>", a); // Output: a => 20
// console.log ("b =>", b); // Output: b => 40
// console.log ("c =>", c); // Output: c => 60
// console.log ("d =>", d); // Output: d => 80

// ++++++++++++++++++++++++++++++++++++++++++++++++

// If we are able to declare variable using "var" then what's the need of declaring variables using "let" and "const".
// There comes the concept of Scope.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Scopes are nothing but Curly Braces => { }.
// When we use these curly braces with functions, they form scope of that function; 
// When we use these curly braces with if-else statements , they form scope of those if-else statements;
// When we use these curly braces with loops (for, while, do-while, etc), they form scope of those loops (for, while, do-while, etc).

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Note: when we use these curly braces with some object, they are not creating its scope but instead declares that object. 

// ++++++++++++++++++++++++++++++++++++++++++++++++

// "BLOCK SCOPE" or "LOCAL SCOPE" or "FUNCTIONAL SCOPE":
// Anything defined between these curly braces are said to be under "BLOCK SCOPE" of that function/if-else or Loop.

// "GLOBAL SCOPE":
// But anything defined outside those curly braces are said to be under "GLOBAL SCOPE" w.r.t that function/if-else or Loop.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// So, if we declare a variable using "let" and "const" within some scope, it's actually not accessible outside of that Block Scope, i.e. not accessible in Global Scope.
// But if we declare a variable using "var", it is easily accessible outside of that Block Scope, (i.e. accessible in Global Scope) and can get updated as well.
// and that's why declaring variable using "var" => causes "serious trouble" in JS programming and thus always discarded.
// Example:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Declaration of variables outside if-Block: (Originally declared values):

// ++++++++++++++++++++++++++++++++++++++++++++++++

// let a = 245; // Originally declared Value remain unchanged => even after the execution of If-Block.

// const b = 426; // Originally declared Value remain unchanged => even after the execution of If-Block.

// var c = 650; 

// Originally declared Value accessed inside the If-Block and got Updated/changed 
// => after the execution of If-Block.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Means variable declared in GLOBAL SCOPE is got updated after the execution of If-Block.
// And what if ?? => if this "If-Block", is getting imported from some other file in the programme, 
// and author of this original programme isn't aware about it. 

// ++++++++++++++++++++++++++++++++++++++++++++++++

// [Hide the If-Block and think for once, 
// what result will you expect from console.log(c) ?? => 650 ??
// But the correct output is => 60 , WHY ?? ]

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Then s/he (the Author) may stuck => keep on debugging the programme, 
// but still confused => if s/he (the Author) is not aware of the "If-Block" => imported from some other file, => which actually changed/updated the value of variable "c".
// that if i assigned "650" as a value to variable "c", 
// then why the hell i am getting // Output: c => 60, ????

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Always remember, that Children (Local Scope) can access things from elders (Global Scope) and break or update them,
// But elders or parents (Global Scope) can't access things from children (Local Scope) and break or update them.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// d = 888; 
// Originally declared Value => accessed inside the If-Block => and got Updated/changed => after the execution of If-Block.
// Same explanation => as there was => for change/update in value of variable "c".

// ++++++++++++++++++++++++++++++++++++++++++++++++

// let u = 42;

// const v = 84;

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Values declared outside If-Block's => Block Scope/Local Scope => are easily accessible inside If-Block's Local Scope.
// Example: "u" and "v".

// ++++++++++++++++++++++++++++++++++++++++++++++++

/*
if (true) {

    // Declaration of variables inside if-Block:

    let a = 20;
    const b = 40;
    var c = 60;
    d = 80;
    let p = 15;
    const t = 56;

    console.log ("Value of a inside If-Block =>", a); // Output: a => 20 //=> Same value as declared inside If-Block's => Block Scope/Local Scope.

    console.log ("Value of b inside If-Block =>", b); // Output: b => 40 //=> Same value as declared inside If-Block's => Block Scope/Local Scope.

    console.log ("Value of c inside If-Block =>", c); // Output: c => 60 //=> Same value as declared inside If-Block's => Block Scope/Local Scope.

    console.log ("Value of d inside If-Block =>", d); // Output: d => 80 //=> Same value as declared inside If-Block's => Block Scope/Local Scope.

    console.log ("Value of p inside If-Block =>", p); // Output: p => 15 //=> Same value as declared inside If-Block's => Block Scope/Local Scope.

    console.log ("Value of t inside If-Block =>", t); // Output: t => 56 //=> Same value as declared inside If-Block's => Block Scope/Local Scope.

    console.log ("Value of u =>", u); // Output: u => 42;

    console.log ("Value of v =>", v); // Output: v => 84;

}
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Always remember, that Children (Local Scope) can access things from elders (Global Scope) and break or update them,
// But elders or parents (Global Scope) can't access things from children (Local Scope) and break or update them.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Values declared outside If-Block's => Local Scope => are easily accessible inside If-Block's Local Scope.
// Example: "u" and "v".

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Values declared inside If-Block's => Local Scope => are only accessible inside If-Block's Local Scope but not in Global Scope i.e. outside If-Block.
// Example: "p" and "t".

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log ("Value of a outside If-Block, after execution of If-Block =>", a); // Output: a => 245; //=> Originally declared Value remain unchanged => even after the execution of If-Block.
// console.log ("Value of b outside If-Block, after execution of If-Block =>", b); // Output: b => 426; //=> Originally declared Value remain unchanged => even after the execution of If-Block.

// console.log ("Value of c outside If-Block, after execution of If-Block =>", c); // Output: c => 60; //=> Originally declared Value Updated/changed => after the execution of If-Block.
// console.log ("Value of d outside If-Block, after execution of If-Block =>", d); // Output: d => 80; //=> Originally declared Value Updated/changed => after the execution of If-Block.

// console.log ("Value of u =>", u); // Output: u => 42;

// console.log ("Value of v =>", v); // Output: v => 84;

// console.log ("Value of p outside If-Block, after execution of If-Block =>", p); // Output: p => ReferenceError: p is not defined (Outside If-Block)
// console.log ("Value of t outside If-Block, after execution of If-Block =>", t); // Output: t => ReferenceError: t is not defined (Outside If-Block)

// ++++++++++++++++++++++++++++++++++++++++++++++++

/*
// Therefore always Prefer not to use "var" keyword to declare variables,
// because of issue in "block scope" and "functional scope".
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Always remember, that Children (Local Scope) can access things from elders (Global Scope) and break or update them,
// But elders or parents (Global Scope) can't access things from children (Local Scope) and break or update them,.

// Another Examples, justifying the Above Statement:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Example-1: Concept of Scope with Nested Functions:

// +++++++++++++++++++++++++++++++++++++++++++++++++

/*
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //=> Variable "username" => from function "one" => is easily accessible inside function named => "two".
    }
    // console.log(website); //=> Variable "website" => from function "two" => isn't accessible outside Block Scope of function named => "two".

     two() //=> Calling Function "two" inside function "one".

}
*/

// one() // Calling and Executing the Supreme Parent Function "one".

// Output: hitesh.


// ++++++++++++++++++++++++++++++++++++++++++++++++

// Example-2: Concept of Scope with Nested If-Block:

// ++++++++++++++++++++++++++++++++++++++++++++++++

/*
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); //=> Variable "username" => outside Block Scope => is easily accessible.
    }
    // console.log(website); //=> Variable "website" => isn't accessible outside Block Scope.

}
*/

// console.log(username); //=> Variable "username" isn't accessible outside If-Block's Local Scope.
// Output: ReferenceError: username is not defined


// ++++++++++++++++++++++++++++++++++++++++++++++++

// Hoisting of a Function in JS (Brief Introduction):

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In JS We can declare functions in multiple ways.
// In JS, Variables are super powerful and can store any dataType, 
// whether its a string or number or boolean or an Array or an Object or A Function as well, any dataType.

// +++++++++++++++++++++++++++++++++++++++++++++++++

// "Expressions":
// In JS, When we declare a function and holds it into some variable, then such functions are called "Expressions". 

// +++++++++++++++++++++++++++++++++++++++++++++++++

// In JS, we can "call and Execute a FUNCTION" => "Even before its declaration" as well.

// +++++++++++++++++++++++++++++++++++++++++++++++++

// But an EXPRESSION (Function holded into some variable), can't be called and Executed before its declaration.

// +++++++++++++++++++++++++++++++++++++++++++++++++

// and this is because of Hoisting of a function in JS, where it is crucial How a Function is declared in JS.

// Different ways of declaring a function in JS => results into different treatments of those functions.

// +++++++++++++++++++++++++++++++++++++++++++++++

// Example-1: "Calling and Executing a Function" => "Even before its declaration".

// ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(addone(5)) // "Calling and Executing a Function" => "Even before its declaration".
// Output: 6.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Declaration of a Function:

// ++++++++++++++++++++++++++++++++++++++++++++++++

/*
function addone(num){ 
    return num + 1
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Example-2: Attempt to Call and Execute an EXPRESSION  => "Even before its declaration".
// EXPRESSION => (Function holded into some variable)

// +++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(addTwo(5)) //=> Attempt to Call and Execute an EXPRESSION  => "Even before its declaration".
// Output => ReferenceError: Cannot access 'addTwo' before initialization

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Declaration of an EXPRESSION => (Function holded into some variable)

// +++++++++++++++++++++++++++++++++++++++++++++++++

/*
const addTwo = function(num){
    return num + 2
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(addTwo(5)) //=> Calling and Executing an EXPRESSION  => "After its declaration".
// Output=> 7.

// +++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++++
// ++++++(We will meet soon with Next Concept)++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++++