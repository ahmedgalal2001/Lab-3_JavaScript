/*
/// Use 10 of Objects predefined methods and explain them. 

//1.Object.assign(): This method can be used to merge two objects into one.
//For example:
 const obj1 = { a: 1 };
 const obj2 = { b: 2 };
 const obj3 = Object.assign({}, obj1, obj2);
 console.log(obj3); // { a: 1, b: 2 }

//Object.create(): This method can be used to create a new object with a specified prototype.
//For example:
 const obj1 = { a: 1 };
 const me = Object.create(obj1);

 //Object.defineProperty(): This method can be used to add a new property to an object. 
//For example:
const obj1 = {};
Object.defineProperty(obj1, "a", {
  value: 1
});

//Object.entries(): This method can be used to get an array of all the key-value pairs in an object. 
//For example:
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]


//Object.freeze(): This method can be used to prevent an object from being modified.
//For example:
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // Throws an error in strict mode
console.log(obj.a); // 1

//Object.getOwnPropertyDescriptor(): This method can be used to get the descriptor for a specific property on an object. 
//For example:
const obj = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(descriptor); // { value: 1, writable: true, enumerable: true, configurable: true }

//Object.getOwnPropertyNames(): This method can be used to get an array of all the property names of an object.
//For example:
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c"]

//Object.getPrototypeOf(): This method can be used to get the prototype of an object.
//For example:
const person = { name: 'Matthew' };
console.log(Object.getPrototypeOf(person)); // { name: 'Matthew' }

//Object.is(): This method can be used to compare two values to see if they are the same value.
//For example:
console.log(Object.is(1, 1)); // true
console.log(Object.is(1, '1')); // false

//Object.keys(): This method can be used to get an array of all the keys of an object.
// For example:
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
*/

/*
/// Use 10 of Arrays predefined methods and explain them.

//Array.prototype.concat(): This method can be used to merge two arrays into one.
//For example:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

//Array.prototype.every(): This method can be used to check if all elements in an array pass a certain test.
//For example:
const arr = [1, 2, 3, 4, 5];
const isEven = (number) => number % 2 === 0;
console.log(arr.every(isEven)); // false

//Array.prototype.filter(): This method can be used to create a new array with all elements that pass a certain test.
//For example:
const arr = [1, 2, 3, 4, 5];
const isEven = (number) => number % 2 === 0;
const evenNumbers = arr.filter(isEven);
console.log(evenNumbers); // [2, 4]

//Array.prototype.forEach(): This method can be used to execute a function for each element in an array.
//For example:
const arr = [1, 2, 3, 4, 5];
arr.forEach((number) => console.log(number));
// Output:
// 1
// 2
// 3
// 4
// 5

//Array.prototype.includes(): This method can be used to check if an array includes a certain value.
//For example:
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false

//Array.prototype.indexOf(): This method can be used to find the index of a certain element in an array.
//For example:
const arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(6)); // -1

//Array.prototype.join(): This method can be used to join all elements of an array into a string.
//For example:
const arr = [1, 2, 3, 4, 5];
console.log(arr.join()); // "1,2,3,4,5"
console.log(arr.join("-")); // "1-2-3-4-5"

//Array.prototype.map(): This method can be used to create a new array with the results of calling a function on every element in an array.
//For example:
const arr = [1, 2, 3, 4, 5];
const double = (number) => number * 2;
const doubledNumbers = arr.map(double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Array.prototype.pop(): This method can be used to remove the last element from an array and return that element.
//For example:
const arr = [1, 2, 3];
const lastElement = arr.pop();
console.log(lastElement); // 3
console.log(arr); // [1, 2]

//Array.prototype.push(): This method can be used to add one or more elements to the end of an array and return the new length of the array.
//For example:
const arr = [1, 2];
const newLength = arr.push(3, 4);
console.log(newLength); // 4
console.log(arr); // [1, 2, 3, 4]
*/

/*
/// Write a nested function and explain the closure -> lexical environment. 

function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15


*/