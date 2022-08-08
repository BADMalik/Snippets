// //JavaScript offers many ways of copying objects, but they do not provide a deep copy. Performing shallow copies is the default behavior in most of the cases.

// // const clone = require("lodash.clone");

// //shallow cloning
// //assign changes the reference in the both objects
// var objA = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//     },
//   },
// };
// var objC = { t: 1 };
// var objB = Object.assign(objA, objC);
// objB.b.c = 2;

// console.log(objA);
// // { a: 1, b: { c: 30, d: { e: 3 } } }
// console.log(objB);
// // { a: 1, b: { c: 30, d: { e: 3 } } }
// const objF = {
//   name: "Alexander",
//   age: 26,
// };

// //spread operator doesnt change the value in the parent
// const objE = {
//   Licensed: true,
//   location: "Ikeja",
// };

// const mergedObj = { ...objF, ...objE };
// objE.Licensed = false;
// console.log(mergedObj, objE);

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2));

obj2.a = 1;
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
