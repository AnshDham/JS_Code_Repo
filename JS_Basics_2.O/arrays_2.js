const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "Aquaman", "batman"]

// +++++++++++++++++++++++++++++++++++++++++

// marvel_heros.push(dc_heros) 
//=> It pushes the "entire second array" as a "single element".

// Since JS Array can contain a "mix of different data types", Therefore .push() => Pushes "complete dc_heros Array" as last element, in our "marvel_heros Array" and DO NOT gives us a new Array, instead directly pushes into original Array which named "marvel_heros" i.e. Manipulates/Modifies Original "marvel_heros Array". Eg:

// console.log(marvel_heros);
// Output => marvel_heros now become =>
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'Aquaman', 'batman' ]]

// Accessing the element of pushed "marvel_heros Array" using Indexes:

// console.log(marvel_heros[3]);
// Output => "[ 'superman', 'Aquaman', 'batman' ]"

// console.log(marvel_heros[3][1]);
// Output => Aquaman

// +++++++++++++++++++++++++++++++++++++++++
// IMP NOTE:
// +++++++++++++++++++++++++++++++++++++++++
// Using Concatenation [ .concat() ] => Spreads each element of the second array into the new one (BUT not pushes the "entire second array" as a "single element").

// The new array (allHeros) contains the elements of the first array followed by the "elements" of the second array.
// +++++++++++++++++++++++++++++++++++++++++
// Using Concatenation [ .concat() ] => gives us a new Array which we named "allHeros" here, and Our Original "marvel_heros" Array remains intact. (NOT Manipulated).

// Your "marvel_heros" Array stays exactly the same after concatenation, as it was originally before.

// .concat() creates a new array and leaves the original untouched. 

// The only IMP Note you should take that,=> .concat() doesn’t push the whole array as one element; it spreads its contents into the new array. Eg:
// +++++++++++++++++++++++++++++++++++++++++

// // const marvel_heros = ["thor", "Ironman", "spiderman"]
// // const dc_heros = ["superman", "Aquaman", "batman"]

// +++++++++++++++++++++++++++++++++++++++++

// const allHeros = marvel_heros.concat(dc_heros);

// console.log("Original Marvel Heros Array before Concatenation was =>",marvel_heros);
// Output => marvel_heros => [ 'thor', 'Ironman', 'spiderman' ]

// console.log("Concatenated New Array =>",allHeros);
// Output => Concatenated New Array allHeros =>
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'Aquaman', 'batman' ]

// +++++++++++++++++++++++++++++++++++++++++
// Accessing the element of concatenated new array => "allHeros" using Indexes:
// +++++++++++++++++++++++++++++++++++++++++

// console.log(allHeros[3]);
// Output => superman

// console.log(allHeros[3][1]);

// allHeros => [ 'thor', 'Ironman', 'spiderman', 'superman', 'Aquaman', 'batman' ]

// Therefore allHeros[3][1] => Actually Means => "superman"[1]
// Pointing towards the second character of "superman", which is "u".
// So the output is "u", not undefined.

// +++++++++++++++++++++++++++++++++++++++++
// SPREAD OPERATOR: 
// =>(...array_1, ...array_2, ...array_3, .... , ...array_n)
// +++++++++++++++++++++++++++++++++++++++++

// The spread operator (...) is a modern, flexible way to merge arrays in JavaScript. It works by “spreading” the elements of one array into another, rather than nesting them.

// +++++++++++++++++++++++++++++++++++++++++

// How the spread operator (...) can achieve the same flat merge in a cleaner way?

// +++++++++++++++++++++++++++++++++++++++++

// // const marvel_heros = ["thor", "Ironman", "spiderman"]
// // const dc_heros = ["superman", "Aquaman", "batman"]

// +++++++++++++++++++++++++++++++++++++++++

// const allHeros = [...marvel_heros, ...dc_heros];

// console.log(allHeros);
// Output => same output as we received using .concat() =>
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'Aquaman', 'batman' ]

// +++++++++++++++++++++++++++++++++++++++++

// .concat() is reliable and has been around forever.

// The spread operator (...) is newer, more concise, and lets you mix arrays with other values seamlessly.

// +++++++++++++++++++++++++++++++++++++++++

// Why the spread operator is more flexible ??

// +++++++++++++++++++++++++++++++++++++++++

// 1. Cleaner syntax : 
// You don’t need to call a method; it’s inline and readable.

// +++++++++++++++++++++++++++++++++++++++++

// 2. Mixing arrays and individual elements :
// You can insert extra items easily: Eg:

// const allHeros = [...marvel_heros, "Hulk", ...dc_heros, "Flash"];

// console.log(allHeros);

// Output =>

// => [ 'thor', 'Ironman', 'spiderman', 'Hulk', 'superman', 'Aquaman', 'batman', 'Flash' ]

// +++++++++++++++++++++++++++++++++++++++++

// 3. Shallow copy of arrays :
// Spread is often used to clone arrays:

// const copyMarvel = [...marvel_heros];
// console.log(copyMarvel);
// Output => copyMarvel => [ 'thor', 'Ironman', 'spiderman' ]

// +++++++++++++++++++++++++++++++++++++++++

// 4. Combining with objects :  
// Spread also works with objects, making it handy for merging data structures:

// const marvelInfo = { universe: "Marvel", count: marvel_heros.length };

// const dcInfo = { universe: "DC", count: dc_heros.length };

// const combinedInfo = { ...marvelInfo, ...dcInfo };

// console.log(combinedInfo);
// Output => { universe: 'DC', count: 3 }

// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++
// +++++(We will meet soon with Next Concept)+++++
// +++++++++++++++++++++++++++++++++++++++++++++++


