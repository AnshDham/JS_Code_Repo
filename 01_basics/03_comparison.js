console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1); 
// Auto Conversion of DataType happens where String "2" will be converted into number dataType and then compared.=> Therefore Output will be "TRUE".

console.log("02" > 1);
// Auto Conversion of DataType happens where String "02" will be converted into number dataType and then compared.=> Therefore Output will be "TRUE".

/* NOTE: UNPREDICTABLE RESULTS
This type of Auto-Conversion of dataTypes leads to unpredictable results.
Therefore While doing Comparison, Always make sure that both values have same dataTypes. 
*/

// TRICKY/Confusing COMPARISON:

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Here the value of null is not actually 0, neither its "NaN (Not a Number)" nor its Empty String("").

// Actually null implies something "Completely Empty".

// BUT here we have to Note that,

// Equality Check (==) and Comparisons [ >, <, >=, <=] works differently.

// Here Comparisons actually convert null to a number, treating it as "0".

// That's why Output for (3) null >= 0 is TRUE (Since 0 = 0 is TRUE) and Output for (1) null > 0 is FALSE (Since 0 > 0 is FALSE).

console.log(null == 0);

// Please NOTE some different operators like EQUALITY Check (==) might auto-convert this null to "NaN" or Empty String ("") or something Else, we really don't know; and then checked it for Equality with "0" (In above Example) which will prove FALSE then.
// console.log(null == 0); => Output will be FALSE or TRUE, we really don't know, since we don't know whether this Equality Check (==) auto-convert this null into "0" or "NaN" or Empty String ("") or something Else. 
// i.e. with this approach of comparison we are gonna have Unpredicatble Results.

// Therefore it is always suggested to avoid such type of Comparisons.
// Another Example of Tricky Comparison => undefined => Unpredictable Results.
// Well for "Undefined" All three outputs will be False but results are still Unpredictable in this case, without clarity of background auto-conversion of dataType.

console.log(undefined == 0); // Output => Unpredictable Results.
console.log(undefined > 0); // Output => Unpredictable Results.
console.log(undefined < 0); // Output => Unpredictable Results.

// STRICT Check (===):

// These Three Equals Signs (===) are called "Strict Equality Check" which Prevents auto conversion of DataTypes from one to another, like number to string and all. And while checking Equality these Three Equals Signs (===) Check Whether both L.H.S and R.H.S have Same DataType or Not.

console.log("2" === 2); // Here Output will be FALSE (Predictable Output), since L.H.S have STRING DataType whereas R.H.S have NUMBER DataType, i.e. Both L.H.S and R.H.S have different DataTypes.