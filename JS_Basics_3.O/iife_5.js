// Immediately Invoked Function Expressions (I.I.F.E)

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Sometimes in programme we have files written for DataBase Connection, and we want them to get executed immediately as soon as programme runs.

// Also sometimes we want to prevent "scope of some function" to get polluted from variables declared in Global Scope.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In such cases we uses I.I.F.E (Immediately Invoked Function Expressions) Approach.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// I.I.F.E is nothing but simply declaration of a Function within Paranthesis "( )", That's it.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Syntax:

// For writting I.I.F.E we have two paranthesis,
// Within First paranthesis we wrap declaration of a Function, and
// Second Paranthesis is meant for Execution of a Function.

// We can pass arguments to a Function in Second Paranthesis as well.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Type-1: Named I.I.F.E 
// where Name of a Function "chai()" is explicitly defined with "function" keyword.

// ++++++++++++++++++++++++++++++++++++++++++++++++

(function chai(){
    // Named I.I.F.E
    console.log(`DB CONNECTED`);
})();

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Type-2: UnNamed I.I.F.E
// Using Arrow function for function declaration.

// ++++++++++++++++++++++++++++++++++++++++++++++++

( (name) => { // "name" Parameter declared in Arrow Function. 
    // UnNamed I.I.F.E
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh'); // "hitesh" argument passed to "name" Parameter declared in Arrow Function.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// INTERVIEW regarding Important Concept:

// +++++++++++++++++++++++++++++++++++++++++++++++

// How to write two I.I.F.E.s in same programme ??

// ++++++++++++++++++++++++++++++++++++++++++++++++

// I.I.F.E is used to immediately invoke the function expressions but it doesn't aware, where to stop the context,

// Therefore we have to use semi-collon (;) after second paranthesis of First declared I.I.F.E.'s Syntax, before execution of second I.I.F.E.!!

// Else if we forget to use semi-colon (;) after second paranthesis of First declared I.I.F.E.'s Syntax, our second declared I.I.F.E will not get executed (invoked).

// and it will cause following Error:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// DB CONNECTED //=> Output for First I.I.F.E.

// ++++++++++++++++++++++++++++++++++++++++++++++++
// ERROR: 
// ++++++++++++++++++++++++++++++++++++++++++++++++

/*
// ( (name) => { // "name" Parameter declared in Arrow Function. 
// ^

// TypeError: (intermediate value)(...) is not a function
//     at Object.<anonymous> (/workspaces/JS_Code_Repo/JS_Basics_3.O/iife_5.js:46:1)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.16.0
*/

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++
// +++++(We will meet soon with Next Concept)+++++
// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++