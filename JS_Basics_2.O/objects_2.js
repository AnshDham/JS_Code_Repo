// Singleton Objects in JavaScript:

// A singleton object is an object that can only have one instance. It is often used to manage shared resources or to provide a global point of access to certain functionality.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In JavaScript, we can create a singleton object using the Object constructor or the Object.create method.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object() // Constructor way to create an object => Forms a Singleton Object.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// We can also create a singleton object using the Object.create method.

// ++++++++++++++++++++++++++++++++++++++++++++++++
// const tinderUser2 = Object.create(null) // Using Object.create method to create a singleton object => Forms a Singleton Object.

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Both of the above methods create a singleton object, which means that there will only be one instance of the object in the entire application. This can be useful for managing shared resources or providing a global point of access to certain functionality.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const tinderUser = new Object() // Constructor way to create an object => Forms a Singleton Object.
// We can check if tinderUser is an Object ?? Eg:
// console.log(tinderUser) // {} => It is an empty Object, because we have not added any properties to it yet.
// console.log(typeof tinderUser) // "object" => It is an Object.
// console.log(tinderUser instanceof Object) // true => It is an Object.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// We can add properties to this tinderUser object as follows:

// tinderUser.id = "12345"
// tinderUser.name = "John Doe"
// tinderUser.age = 30
// tinderUser.isActive = true

// console.log(tinderUser)
// Output: { id: '12345', name: 'John Doe', age: 30, isActive: true }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// So that's all the discussion about singleton objects in JavaScript yet.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Mostly we will be using the object literal syntax to create objects in JavaScript, which is more concise and easier to read. 
// However, the Object constructor and Object.create methods can also be used to create singleton objects when needed.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Eg:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const tinderUser = {} // Object literal syntax to create an object 

// ++++++++++++++++++++++++++++++++++++++++++++++++

// We can check if tinderUser is an Object ?? Eg:
// console.log(tinderUser) // {} => It is an empty Object, because we have not added any properties to it yet.
// console.log(typeof tinderUser) // "object" => It is an Object.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// We can add properties to this tinderUser object as follows:

// tinderUser.id = "12345"
// tinderUser.name = "John Doe"
// tinderUser.age = 30
// tinderUser.isActive = true

// console.log(tinderUser)
// Output: { id: '12345', name: 'John Doe', age: 30, isActive: true }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Or we can also create the tinderUser object with properties directly using the object literal syntax:

// const tinderUser_2 = {
//     id: "67890",
//     name: "Jane Doe",
//     age: 28,
//     isActive: false
// }

// console.log(tinderUser_2)
// Output: { id: '67890', name: 'Jane Doe', age: 28, isActive: false }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In JavaScript, we can also access all the keys or all the values or all the entries of an object using the Object.keys(), Object.values(), and Object.entries() methods respectively. For example:

// console.log(Object.keys(tinderUser)) // Output: [ 'id', 'name', 'age', 'isActive' ] => It returns an array of all the keys of the object.
// console.log(Object.values(tinderUser)) // Output: [ '12345', 'John Doe', 30, true ] => It returns an array of all the values of the object.
// console.log(Object.entries(tinderUser)) // Output: [ [ 'id', '12345' ], [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'isActive', true ] ] 
// => It returns an array of all the entries of the object, where each entry is an array of [key, value].

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In JavaScript we can also check if a certain key exists in an object using the "in" operator or the hasOwnProperty() method. For example:

// console.log("name" in tinderUser) // Output: true => It checks if the key "name" exists in the tinderUser object.
// console.log(tinderUser.hasOwnProperty("age")) // Output: true => It checks if the key "age" exists in the tinderUser object.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In JS Objects are mutable, which means we can change their properties after they have been created. For example:

// tinderUser.name = "John Smith"
// console.log(tinderUser)
// Output: { id: '12345', name: 'John Smith', age: 30, isActive: true }

// ++++++++++++++++++++++++++++++++++++++++++++++++
// We can also delete properties from an object using the delete operator. For example:

// delete tinderUser.age
// console.log(tinderUser)
// Output: { id: '12345', name: 'John Smith', isActive: true }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In JS Objects can accept any type of value as a property, including other objects, arrays, functions, etc. For example:

// tinderUser.hobbies = ["reading", "traveling", "cooking"] // Array as a property of an object
// tinderUser.address = {                                   // Object as a property of an object
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345"
// }
// tinderUser.greet = function() {                         // Function as a property of an object
//     console.log(`Hello, my name is ${this.name}`)
// }

// console.log(tinderUser)
// Output: 
// { id: '12345', name: 'John Smith', isActive: true, hobbies: [ 'reading', 'traveling', 'cooking' ], address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }, greet: [Function (anonymous)] }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// In JS we can also have nested objects, which means that an object can contain another object as a property. For example:

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// In the above example, the regularUser object has a property called fullname, which is itself an object that contains another object called userfullname. This allows us to organize our data in a hierarchical manner and access it using dot notation. For example:

// console.log(regularUser.fullname.userfullname.firstname) // Output: "hitesh"
// console.log(regularUser.fullname.userfullname.lastname) // Output: "choudhary"

// Also we can add Question Mark (?) in the above code to avoid errors if any property is undefined. For example:

// console.log(regularUser.fullname?.userfullname?.firstname) // Output: "hitesh"
// console.log(regularUser.fullname?.userfullname?.lastname) // Output: "choudhary"

// This is called optional chaining, and it allows us to safely access nested properties without having to worry about whether they exist or not. If any of the properties in the chain are undefined, the expression will simply return undefined instead of throwing an error.
// This can be very useful when working with complex data structures or when dealing with APIs that may not always return the expected data.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}

// const obj_new = { obj1, obj2 } 

// console.log(obj_new) // Output:=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// This will create a "new object" => "obj_new" with two properties, obj1 and obj2, which are references to the original objects.
// Explanation: In the above code, we are creating a new object "obj_new" that contains two properties, obj1 and obj2. 
// However, these properties are not merged together, but rather they are references to the original objects. 
// This means that if we modify obj1 or obj2, it will also affect "obj_new", since they are all referencing the same objects in memory.
// Example:

// const obj_new = { obj1, obj2 }
// obj1[1] = "x"
// console.log(obj_new) // Output: { obj1: { '1': 'x', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// In the above example, we modified obj1 by changing the value of the property "1" to "x". 
// Since obj_new is referencing the same object as obj1, the change is reflected in obj_new as well. 
// This is because objects in JavaScript are passed by reference, which means that when we assign an object to a variable or pass it as an argument to a function, we are actually passing a reference to the object in memory, rather than a copy of the object itself.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// So, when we create a new object that contains references to other objects, we need to be careful about how we modify those objects, since it can affect all the references to that object in memory.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Also We can merge these objects into a single object using the spread operator or the Object.assign method.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Object.assign method

// ++++++++++++++++++++++++++++++++++++++++++++++++

// For example:

// const obj4 = Object.assign({}, obj1, obj2, obj3) // Merging obj1, obj2, and obj3 into a new object using Object.assign method
// console.log(obj4) // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Explanation: In the above code, we are creating a new object "obj4" that contains the properties of obj1, obj2, and obj3. 
// We are using the Object.assign method to merge the properties of obj1, obj2, and obj3 into a new object. 
// The first argument to Object.assign is an empty object {}, which will be the target object that we want to merge into. 
// The subsequent arguments are the source objects (obj1, obj2, obj3) that we want to merge from. 
// The Object.assign method will "copy the properties" from the source objects into the target object, and return the "target object" with the merged properties.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Spread operator

// ++++++++++++++++++++++++++++++++++++++++++++++++

// For example:

// const obj4 = {...obj1, ...obj2, ...obj3}  // Merging obj1, obj2, and obj3 into a new object using the spread operator
// console.log(obj4) // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Explanation: In the above code, we are creating a new object "obj4" that contains the properties of obj1, obj2, and obj3. 
// We are using the spread operator (...) to merge the properties of obj1, obj2, and obj3 into a new object. 
// The spread operator takes each property from the source objects and adds it to the target object (obj4) in a concise and readable way. 
// The resulting object "obj4" will contain all the properties from obj1, obj2, and obj3 merged together.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const users = [
//     {
//         id: 1,
//         email: "j@gmail.com"
//     },
//     {
//         id: 2,
//         email: "k@gmail.com"
//     },
//     {
//         id: 3,
//         email: "l@gmail.com"
//     },
// ]

// users[1].email

// Sometimes we may have an array of objects, and we want to access a specific property of one of the objects in the array.
// In the above code, we have an array of user objects, and we want to access the email property of the second user in the array.
// We can do this by using the index of the user in the array (users[1]) and then accessing the email property (users[1].email). 
// This will give us the email address of the second user in the array. 
// In this case, it will return "k@gmail.com".

// ++++++++++++++++++++++++++++++++++++++++++++++++

// object destructuring in JavaScript:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// We can access the courseInstructor property of the course object using dot notation as follows:

// console.log(course.courseInstructor) 
// Output: "hitesh" => It will output the value of the courseInstructor property, which is "hitesh".
// But instead of writting "course.courseInstructor" everytime, 
// we can use object destructuring to extract the value of the courseInstructor property and assign it to a new variable called "instructor".

// const {courseInstructor: instructor} = course

// console.log(instructor);

// Output: "hitesh" => It will output the value of the courseInstructor property, which is "hitesh".

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Explanation: 
// ++++++++++++++++++++++++++++++++++++++++++++++++

// In the above code, we have an object called "course" with three properties: coursename, price, and courseInstructor.
// We want to extract the value of the courseInstructor property and assign it to a new variable called "instructor". 
// We can do this using object destructuring, which allows us to extract properties from an object and assign them to variables in a concise way. 
// In the destructuring assignment, we specify the property we want to extract (courseInstructor) and give it a new variable name (instructor) using the syntax "courseInstructor: instructor". 
// This will create a new variable called "instructor" that contains the value of the courseInstructor property from the course object. 
// When we log the instructor variable, it will output "hitesh", which is the value of the courseInstructor property.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// We can also extract multiple properties from the object using destructuring. For example:

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const {coursename, price} = course
// console.log(coursename) // Output: "js in hindi" => It will output the value of the coursename property, which is "js in hindi".
// console.log(price) // Output: "999" => It will output the value of the price property, which is "999".

// In the above code, we are extracting the coursename and price properties from the course object and,
// assigning them to new variables with the same names. 

// We can also give them new variable names if we want. For example:
// const {coursename: name, price: cost} = course
// console.log(name) // Output: "js in hindi" => It will output the value of the coursename property, which is "js in hindi".
// console.log(cost) // Output: "999" => It will output the value of the price property, which is "999".

// ++++++++++++++++++++++++++++++++++++++++++++++++

// how does json file look like?

// ++++++++++++++++++++++++++++++++++++++++++++++++

// json file is a text file that contains data in a structured format. It is often used for storing and exchanging data between a server and a web application.

// A json file typically contains key-value pairs, where the keys are strings and the values can be any valid json data type (string, number, boolean, array, object, or null). 
// The data in a json file is usually organized in a hierarchical manner, with nested objects and arrays to represent complex data structures.

// For example, a json file that represents a course object might look like this:
// looks similar to the object literal syntax in JavaScript, 
// but it is actually a string that can be parsed into a JavaScript object using the JSON.parse() method.

// {
//     "coursename": "js in hindi",
//     "price": "999",
//     "courseInstructor": "hitesh"
// }    

// In the above example, we have a json file that contains a single object with three properties: coursename, price, and courseInstructor.
// The keys are enclosed in double quotes, and the values are also enclosed in double quotes since they are strings. 
// This json file can be parsed into a JavaScript object using the JSON.parse() method, which will allow us to access the properties of the object in our JavaScript code.

// ++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++(That's it for Today)+++++++++++++
// +++++(We will meet soon with Next Concept)+++++
// +++++++++++++++++++++++++++++++++++++++++++++++
