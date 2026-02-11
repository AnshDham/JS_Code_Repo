// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// JavaScript Date objects represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).Eg:

// Current date and time
let todayDate = new Date(); // new Date() → creates a date object.

/*
console.log("Today's date is =>",todayDate); 
// But the Output is Not so easy to understand.
console.log("typeof todayDate is =>",typeof todayDate);
*/

// Since our Variable "todayDate" is a DateObject.
// Therefore lets explore properties attached to it, like expressing today's date in Different-Different Format. Eg:

/*

console.log(todayDate.toString());
// Output => Wed Feb 11 2026 14:10:44 GMT+0000 (Coordinated Universal Time)

console.log(todayDate.toDateString());
// Output => Wed Feb 11 2026

console.log(todayDate.toLocaleString());
// Output => 2/11/2026, 2:10:44 PM
// => Here while dispaying Dates, it was January = 1, February = 2, March = 3 … December = 12.

console.log(todayDate.toLocaleDateString());
// Output => 2/11/2026
// => Here while dispaying Dates, it was January = 1, February = 2, March = 3 … December = 12.

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Important Note:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// जब JavaScript date को display करता है (toLocaleString() या toString()), तो month हमेशा 1 से शुरू होता है।
// यानी January = 1, February = 2, March = 3 … December = 12.

// लेकिन जब तुम methods जैसे getMonth() use करते हो, तो JavaScript internally month को 0-based index में रखता है।
// यानी January = 0, February = 1, March = 2 … December = 11.

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// We can also customise the output we received using "some properties" of Date Object. Eg:
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Syntax => NameOfdateObject.property ('Internationalisation', {Object Key-Value Pairs});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// and we can define what we want in Object, simply press (Ctrl+Space) to receive all the suggestions, Thanks to VS Code Intellisense. Eg:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

const customDate1 = todayDate.toLocaleString('default', {
    weekday: "long",
    // dateStyle: "full", // TypeError: Can't set option weekday when dateStyle is used.
    dayPeriod: "narrow", // And etc. whatever you want.
    year: "numeric",
    month: "long",
    day: "numeric",
    
})
console.log("Our customized Date1 is =>",customDate1);
// Output => Our customized Date1 is => Wednesday, February 11, 2026 at in the afternoon.
// Earlier output was => console.log(todayDate.toLocaleString());
// Earlier Output => 2/11/2026, 2:10:44 PM 
// => Here while dispaying Dates, it was January = 1, February = 2, March = 3 … December = 12.

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* IMPORTANT NOTE:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// => Date.prototype.toString() 

// यह JavaScript का एक method है जो किसी Date object को string में बदल देता है।

// लेकिन यह method locale (जैसे en-US, hi-IN) या options (जैसे weekday: "long") को accept नहीं करता।

// मतलब: आप इसमें language या formatting options पास नहीं कर सकते।

// VS Code IntelliSense:

// जब आप VS Code में code लिखते हो, तो IntelliSense आपको method की signature (यानी method कैसे use होता है) दिखाता है।

// toString() की signature में कोई parameter नहीं होता, इसलिए VS Code आपको locale या options suggest नहीं करेगा।

// Parser Error:

// अगर आप गलती से toString("en-US") जैसा कुछ लिखोगे, तो parser (JavaScript compiler) इसे गलत समझेगा और error देगा।

// क्योंकि यह method incomplete object की तरह दिखेगा (क्योंकि इसमें extra parameters नहीं होने चाहिए)।

// सही तरीका:
// अगर आपको locale और options के साथ date format करना है, तो toLocaleString(), toLocaleDateString(), या toLocaleTimeString() use करो:

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Eg:

/*
const customDate2 = todayDate.toLocaleDateString('en-US', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
})
console.log("Our customized Date2 is =>",customDate2);
// Output => Our customized Date2 is => Wednesday, February 11, 2026.
// Earlier Output was => console.log(todayDate.toLocaleDateString);
// Earlier Output =>  2/11/2026.
// => Here while dispaying Dates, it was January = 1, February = 2, March = 3 … December = 12.

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// In JS, we can also create a Date object using the Date constructor with => "specific date and time". Eg:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
const specificDate = new Date(2022, 0, 15, 10, 30, 0); 
// IMP Note => Here, January is month Zero (0).[Internal Method]
console.log("Specific Date is =>",specificDate);
// Output => Specific Date is => Sat Jan 15 2022 10:30:00 GMT+0000 (Coordinated Universal Time)
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// We can also create a Date object from a date string. Eg:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Eg: // YYYY-MM-DD Format with TimeZone specified. 
const dateFromString1 = new Date("2023-05-20T14:30:00"); 
/*
console.log("Date from String1 in YYYY-MM-DD Format is =>",dateFromString1);
//Output => Date from String1 in YYYY-MM-DD Format is => 2023-05-20T14:30:00.000Z

console.log("dateFromString1 (in YYYY-MM-DD Format) in .toLocaleString() is =>", dateFromString1.toLocaleString());
// Output => dateFromString1 (in YYYY-MM-DD Format) in .toLocaleString() is => 5/20/2023, 2:30:00 PM.

console.log(`The date in YYYY-MM-DD Format is =>`,dateFromString1, `where month is ${dateFromString1.getMonth() + 1} and Date is ${dateFromString1.getDate()} and Year is ${dateFromString1.getFullYear()}`);
// Output => The date in YYYY-MM-DD Format is => 2023-05-20T14:30:00.000Z where month is 5 and Date is 20 and Year is 2023.
*/
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* IMPORTANT NOTE:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// => JavaScript का Date constructor "DD-MM-YYYY" format को नहीं समझता।
// => तुम्हें "YYYY-MM-DD" या "MM/DD/YYYY" format देना होगा, या फिर string को manually parse करना होगा।
*/
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// अगर DD-MM-YYYY Format चाहिए, तो तुम्हें या तो:
// Manually split करके सही format बनाना होगा => Using String Interpolation with BackTicks(` `). Eg:
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const parts = "20-05-2023".split("-"); // Performing Manually Splitting
const date3 = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); 
// Manually converting into YYYY-MM-DD Format using indexes 2,1 and 0.
// Using String Interpolation with BackTicks(` `) and placeholders that get replaced with variable values..

// console.log("Date in DD-MM-YYYY Format is =>", parts);
// Output => Date in DD-MM-YYYY Format is => [ '20', '05', '2023' ]

// console.log("Date in (in DD-MM-YYYY Format) in .toLocaleString() is =>", parts.toLocaleString());
// Output => Date in (in DD-MM-YYYY Format) in .toLocaleString() is => 20,05,2023

// console.log(`Date in DD-MM-YYYY Format is => ${date3}, where month is ${date3.getMonth() + 1} and Date is ${date3.getDate()} and Year is ${date3.getFullYear()}`);
// Output => Date in DD-MM-YYYY Format is => Sat May 20 2023 00:00:00 GMT+0000 (Coordinated Universal Time), where month is 5 and Date is 20 and Year is 2023.

// console.log("Date in DD-MM-YYYY Format is =>", parts, `where month is ${parts.getDate() + 1} and Date is ${parts.getDate()} and Year is ${parts.getFullYear()}`); // ERROR ??????????????????????????
// Output => 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
या तुम्हें Moment.js / Day.js जैसी libraries use करनी होंगी जो "DD-MM-YYYY" format को support करती हैं।
*/
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Eg: => MM/DD/YYYY Format  
const dateFromString2 = new Date("05/20/2023"); 

console.log("Date from String2 in MM/DD/YYYY Format is =>",dateFromString2);
// Output => Date from String2 in MM/DD/YYYY Format is => 2023-05-20T00:00:00.000Z

console.log("dateFromString2 (in MM/DD/YYYY Format) in .toLocaleString() is =>", dateFromString2.toLocaleString());
// Output => dateFromString2 (in MM/DD/YYYY Format) in .toLocaleString() is => 5/20/2023, 12:00:00 AM

// We can also use here String Interpolation with BackTicks (` `) and placeholders that get replaced with variable values, for more clear understanding of date. Eg:

console.log(`The date in MM/DD/YYYY Format is =>`,dateFromString2, `where month is ${dateFromString2.getMonth() + 1} and Date is ${dateFromString2.getDate()} and Year is ${dateFromString2.getFullYear()}`)
// Output => The date in MM/DD/YYYY Format is => 2023-05-20T00:00:00.000Z where month is 5 and Date is 20 and Year is 2023

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* IMPORTANT NOTE:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JavaScript का Date constructor string को parse करने के लिए कुछ ही formats को reliably support करता है:

// ISO format (YYYY-MM-DD) → सबसे सुरक्षित और recommended

// US format (MM/DD/YYYY) → भी काम करता है

// लेकिन "MM-DD-YYYY" (hyphen - वाला format) standard नहीं है।

// JS कभी-कभी इसे गलत तरीके से interpret कर देता है।

// Example: "05-20-2023" को कुछ browsers सही पढ़ लेंगे, लेकिन "20-05-2023" in "DD-MM-YYYY Format" या "MM-DD-YYYY" में hyphen होने पर parsing गड़बड़ा सकती है।

// "MM-DD-YYYY" format hyphen (-) के साथ JavaScript में unreliable है।

// हमेशा "YYYY-MM-DD" (ISO) या "MM/DD/YYYY" (slashes वाला US format) दो।

// अगर तुम्हें custom format चाहिए, तो string को manually parse करो।
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// IMPORTANT NOTE:

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// => JavaScript में Date objects के साथ काम करते समय, हमेशा ध्यान रखें कि month index 0 से शुरू होता है (0 = January, 1 = February, ..., 11 = December)।

// => इसलिए जब आप month को set या get करते हैं, तो आपको month index को 1 से adjust करना पड़ता है (getMonth() + 1) या (month - 1) set करते समय।

// => getYear() → यह पुराना (deprecated) method है।

// यह actual year नहीं देता।
// यह 1900 से offset करके value return करता है। Eg: 2023 के लिए यह 123 return करेगा (2023 - 1900 = 123)।

// => इसलिए, हमेशा getFullYear() method का उपयोग करें जो actual year return करता है। Eg: 2023 के लिए getFullYear() 2023 return करेगा।

// Conclusion is => अगर आप किसी date string से JavaScript में Date object बनाना चाहते हैं और "DD-MM-YYYY" या "MM-DD-YYYY" format इस्तेमाल करते हैं, तो JavaScript उसे सही से parse/understand नहीं कर पाएगा।

// हमेशा "YYYY-MM-DD" format या "MM/DD/YYYY" format इस्तेमाल करें ताकि parsing reliable रहे।

// वरना आपको "DD-MM-YYYY" या "MM-DD-YYYY" को manually "YYYY-MM-DD" format में बदलना पड़ेगा (जो सबसे reliable है), या फिर खुद string को manually parse करना पड़ेगा।
// तभी आप सही date, month, year और timezone values निकाल पाओगे।

// JavaScript का native Date constructor "YYYY-MM-DD" (ISO format) और "MM/DD/YYYY" (US format) को reliably समझता है।

// "DD-MM-YYYY" format को यह बिल्कुल नहीं समझता।

// "MM-DD-YYYY" format भी hyphen (-) की वजह से unreliable है — कुछ browsers इसे गलत parse कर देते हैं।

// "MM-DD-YYYY" → कभी-कभी काम करता, लेकिन unreliable है, इसे avoid करना चाहिए।

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// We can also compare two Date objects using comparison operators like <, >, <=, >=, ==, ===, etc. Eg:

/*
const dateA = new Date("2023-01-01");
const dateB = new Date("2023-12-31");

console.log("Is dateA < dateB?", dateA < dateB); // Output => true
console.log("Is dateA > dateB?", dateA > dateB); // Output => false
console.log("Is dateA == dateB?", dateA == dateB); // Output => false (compares references)
console.log("Is dateA === dateB?", dateA === dateB); // Output => false (compares references)
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// In JS we can also compare two Date objects using getTime() method which returns the number of milliseconds since the epoch. Eg:

/*
let nowDate = new Date() // Gives us the current date and time.
let let myCreatedDate = new Date("01-14-2023");
let myTimeStamp = Date.now();
// Gives us the current timestamp in milliseconds since the epoch i.e. 1st January 1970.
// console.log(myTimeStamp);
// Gives us the current timestamp in milliseconds since the epoch i.e. 1st January 1970.
// console.log(myCreatedDate.getTime());
// Gives us the timestamp of myCreatedDate in milliseconds since the epoch i.e. 1st January 1970.
// console.log(Math.floor(Date.now()/1000)); 
// This division by 1000 Gives us the current timestamp in seconds since the epoch i.e. 1st January 1970.and Math.floor() rounds down the result to the nearest LOWEST whole number, For our ease to compare.

// Let's compare myCreatedDate with nowDate using getTime() method. Eg:

if (myCreatedDate.getTime() < nowDate.getTime()) {
    console.log("myCreatedDate is in the past.");
} else if (myCreatedDate.getTime() > nowDate.getTime()) {
    console.log("myCreatedDate is in the future.");
} else {
    console.log("myCreatedDate is the same as nowDate.");
}
// Output => myCreatedDate is in the past.
// Here this .getTime() method converts both date objects into their respective timestamps in milliseconds since the epoch, and then we can easily compare these timestamps to determine if one date is in the past, future, or the same as the other date.
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// We can also get the current timestamp (milliseconds since the epoch) using Date.now(). Eg:

/*
const currentTimestamp = Date.now();
console.log("Current Timestamp is =>",currentTimestamp);
// Output => Current Timestamp is => 1707671444000
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// We can also get individual components of a date using methods like getFullYear(), getMonth(), getDate(), etc. Eg:

/*
console.log("Year is =>",todayDate.getFullYear()); // Output => Year is => 2026
console.log("Month is =>",todayDate.getMonth()); // Output => Month is => 1 (February, since months are zero-indexed)
console.log("Date is =>",todayDate.getDate()); // Output => Date is => 11
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// We can also set individual components of a date using methods like setFullYear(), setMonth(), setDate(), etc. Eg:

/*
todayDate.setFullYear(2025);
todayDate.setMonth(11); // December
todayDate.setDate(25);
console.log("Updated Date is =>",todayDate);
// Output => Updated Date is => Thu Dec 25 2025 14:10:44 GMT+0000 (Coordinated Universal Time)
*/      

// +++++++++++++++++(That's it for Today)++++++++++++++++++++++++++++
// +++++++++++++(We will meet soon with Next Concept)+++++++++++++++++++++




