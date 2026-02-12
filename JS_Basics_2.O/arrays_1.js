// The Array is a typeof an OBJECT in JavaScript, which enables us storing a collection of multiple items under a single variable name.

// +++++++++++++++++++++++++++++++++++++++++

// In Programming,
// () => are called "Paranthesis".
// {} => are called "Curly Braces" or "Braces".
// [] => are called "Square Brackets".

// +++++++++++++++++++++++++++++++++++++++++
// In JavaScript, Arrays are defined using "Square Brackets" => "[]".
// +++++++++++++++++++++++++++++++++++++++++

// In JavaScript, arrays aren't primitives(Traditional/Simple), but are instead => objects with the following core characteristics:

// 1. JavaScript arrays are resizable and can contain a "mix of different data types". Eg: // => MOST IMP NOTE

const myArr = [89, 19, 53, 4807, 7894, 15, true, "Harry", "Alladin"]

// Another way to declare an ARRAY in JS: 
// => using new Array (). 
// => Here we don't need to Use "Square Brackets" => "[]". Eg:
 
// const myArr2 = new Array(187, 152, 563, 464)

// +++++++++++++++++++++++++++++++++++++++++

// 2. => JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes. 
// and Remember, in JS elements have got indexes => beginning from Zero(0).
// Eg:

// console.log("Element present at provided index is =>",myArr[1]); // Correctly accessed using non-negative integers as indexes.

// +++++++++++++++++++++++++++++++++++++++++

// (X) 
// // console.log(myArr["one"]) 
// WRONG Attempt to access. // => (X)

// +++++++++++++++++++++++++++++++++++++++++

// (X) 
// // console.log(myArr["Harry"]) 
// WRONG Attempt to access element using their respective string form as indexes. // => (X)

// +++++++++++++++++++++++++++++++++++++++++
//                  NOTE
// +++++++++++++++++++++++++++++++++++++++++
// The phrase "Using their respective string form as indexes" => actually means: => Use numeric indexes for arrays (myArr[2] for "Harry" if it’s the 3rd element).
// Where indexes => beginning from Zero(0)

// +++++++++++++++++++++++++++++++++++++++++

// Suggestion => Use string keys for JS objects or Maps only (myObj["Harry"] or myMap.get("Harry")).

// +++++++++++++++++++++++++++++++++++++++++

// Let's explore Array methods/properties:

// +++++++++++++++++++++++++++++++++++++++++

// myArr.push(6) // => Places given argument, right after the last element of an Array.

// console.log ("My JS Array After performing push(6) =>",myArr);

// Another Example:
myArr.push(7) 
// console.log ("My JS Array After performing push(7) =>",myArr);

// +++++++++++++++++++++++++++++++++++++++++

myArr.pop()

// => Removes the last element of an Array.
// No Argument needed to be provided.

// console.log ("My JS Array After performing pop =>",myArr);

// +++++++++++++++++++++++++++++++++++++++++

myArr.unshift(9) 

// => Shifts all elements to the rightward and places given argument at First place (at '0'th index).
// => Sometimes leads to Time consuming approach, if thousands and lakhs of values are to be shift rightwards, just to place provided argument at First place (at '0'th index).
// => Also could result into computational Load.
// => But if it is compulsion to perform some task in such a way, then let's give priority to working of project and put optimisation after that.

// console.log("My JS Array After performing unshift (9)=>",myArr);

// +++++++++++++++++++++++++++++++++++++++++

myArr.shift()

// => Removes the very first element of an Array.
// No Argument needed to be provided.

// console.log("My JS Array After performing shift =>",myArr);

// +++++++++++++++++++++++++++++++++++++++++

// console.log("If my Array includes provided argument ??=>",myArr.includes(9)); 
// Output => Boolean [True or False]

// Another Example:
// console.log("If my Array includes provided argument ??=>",myArr.includes(4807)); 

// +++++++++++++++++++++++++++++++++++++++++

// console.log("Index of provided argument, in my Array is =>",myArr.indexOf(53)); // Output => 2

// Output => Provides index of given argument, (If it is Present as element in an Array),

// Otherwise returns index =>(-1), If provided argument is NOT Present as element in an Array. Eg:

// Another Example:

// console.log("Index of provided argument, in my Array is =>", myArr.indexOf(3)); // Output => (-1).

// +++++++++++++++++++++++++++++++++++++++++

// const newArr = myArr.join()

// .join() => Adds all the elements of an Array into a String separated by Commas.

// console.log("myArr was originally an Array:",myArr);

// console.log("typeof myArr was =>", typeof myArr);

// console.log("newArr has now became a String separated by Commas, although values still remained same:",newArr);

// console.log("typeof newArr is =>", typeof newArr);

// +++++++++++++++++++++++++++++++++++++++++
// slice v/s splice: // => Interview IMP Concept
// +++++++++++++++++++++++++++++++++++++++++

// Slicing: 

// +++++++++++++++++++++++++++++++++++++++++

// console.log ("My Array originally looks like =>", myArr);

// const myn1 = myArr.slice(1, 3); //=> Here 3 excluded (IMP NOTE)

// console.log ("Sliced Array Looks like =>",myn1); // Output => [ 19, 53 ]

// +++++++++++++++++++++++++++++++++++++++++
// The MOST IMP NOTE:
// +++++++++++++++++++++++++++++++++++++++++
// console.log ("My original array looks after slicing between indexes (1,3) like =>", myArr); 

// // Output => Original Array Remains Intact, ❌ No Manipulation.

// // => [ 89, 19, 53, 4807, 7894, 15, true, 'Harry', 'Alladin' ]

// +++++++++++++++++++++++++++++++++++++++++

// console.log("type of my original Array after slicing =>", typeof myArr); // Output => Object i.e. an ARRAY.

// console.log("type of myn1 Array after slicing =>", typeof myn1); // Output => Object i.e. an ARRAY.

// +++++++++++++++++++++++++++++++++++++++++

// Splicing: 

// +++++++++++++++++++++++++++++++++++++++++

// console.log("My Array originally looks like =>", myArr);

// const myn2 = myArr.splice(1, 3); //=> Here 3 included (IMP NOTE)

// console.log("Spliced Array looks like =>",myn2); 
// // Output => [ 19, 53, 4807 ]

// +++++++++++++++++++++++++++++++++++++++++
// The MOST IMP NOTE:
// +++++++++++++++++++++++++++++++++++++++++
console.log("My original array looks after splicing between indexes (1,3) =>", myArr); 

// // Output => Original Array Changed/Manipulated ✅ => Part of an array is spliced/threw/cut out between given indexes.

// // => [ 89, 7894, 15, true, 'Harry', 'Alladin' ]

// +++++++++++++++++++++++++++++++++++++++++

console.log("type of my original Array after splicing =>", typeof myArr); // Output => Object i.e. an ARRAY.

console.log("type of myn2 Array after splicing =>", typeof myn2); 
// Output => Object i.e. an ARRAY.

// +++++++++++++++++++++++++++++++++++++++++
// The MOST IMP NOTE: between Slicing and Splicing 
// +++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++
// slice():
// +++++++++++++++++++++++++++++++++++++++++

// 1. End Index Behavior => end is exclusive (not included).
// 2. Effect on Original Array => Original Array Remains Intact, No Manipulation. ❌ Does not modify original array.
// 3. Extracts a portion of an array between given indexes (end => excluded), into a "new array".
// Extracted Values को उठाकर दूसरे new Array में रख देता है, But Original Array से (remove or delete)/=> हटाता नहीं है.
// 4. Non-destructive extraction from original Array (safe copy) => No Manipulation. ❌ Does not modify original array.
// 5. Returns a shallow copy of the selected portion of the array.

// +++++++++++++++++++++++++++++++++++++++++
// Shallow copy means:
// +++++++++++++++++++++++++++++++++++++++++

// The new array "contains references to the same objects" as the original (if elements are objects).

// For primitive values i.e. if elements are (numbers, strings, booleans, etc.), then they are "copied by value" to new array.

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++
// splice():
// +++++++++++++++++++++++++++++++++++++++++

// 1. End Index Behavior => end is inclusive ✅ (included).
// 2. Effect on Original Array => Original Array Changed/Manipulated ✅ => Part of an array is spliced/threw/cut out between given indexes.
// 3. Deletes/Removes/replaces elements in the original array.
// Original Array से ही (remove or delete)/=>हटा देता है.
// 4. Destructive editing (cut, replace, insert) directly in Original Array.
// 5. Manipulates/modifies ✅ original array.
// 6. splice(): Also returns a shallow copy of the removed elements.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Both slice() and splice() produce shallow copies of the elements they return.

// Neither method creates a deep copy—nested objects or arrays inside the elements are still shared references.

// The critical distinction lies in whether the original array is preserved (slice) or mutated (splice).

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// So the final takeaway:

// Use slice() when you want a non-destructive shallow copy of part of an array.

// Use splice() when you want to destructively edit the array and also get a shallow copy of the removed elements.

// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++
// +++++(We will meet soon with Next Concept)+++++
// +++++++++++++++++++++++++++++++++++++++++++++++