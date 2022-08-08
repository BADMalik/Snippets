//JavaScript offers many ways of copying objects, but they do not provide a deep copy. Performing shallow copies is the default behavior in most of the cases.
// https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript
// const clone = require("lodash.clone");

//deep copy is new

//shallow cloning
// shallow Copying Objects
// An object is said to be shallow copied when the source top-level properties are copied without any reference and there exist a source property whose value is an object and is copied as a reference. If the source value is a reference to an object, it only copies that reference value to the target object.

// A shallow copy will duplicate the top-level properties, but the nested object is shared between the original(source) and the copy(target).
//assign changes the reference in the both objects
var objA = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};
var objC = { t: 1 };

//why this works i.e adds a to objEmpty
// var objEmpty = Object.assign({}, { objC });

//this doesnt work i.e doesnt add a to objEmpty
var objEmpty = Object.assign({}, objC);
objEmpty.t = 3;

console.log(objC);

console.log(objEmpty);

console.log(objC);

const objF = {
  name: "Alexander",
  age: 26,
};
console.log("abc");
//spread operator doesnt change the value in the parent
const objE = {
  Licensed: true,
  location: "Ikeja",
};

const mergedObj = { ...objF, ...objE };
objE.Licensed = false;
console.log(mergedObj, objE);

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2));

obj2.a = 1;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
console.log(JSON.stringify(obj2));

let obj = {
  a: 1,
  b: {
    c: 2,
  },
};
let newObj = Object.assign({}, obj);
console.log(newObj); // { a: 1, b: { c: 2} }

obj.a = 10;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 1, b: { c: 2} }

newObj.a = 20;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 20, b: { c: 2} }

newObj.b.c = 30;
console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }

newObj.b = 90;

console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }

// Why is obj.b.c = 30?
// Well, that is a pitfall of Object.assign(). Object.assign only makes shallow copies. Both newObj.b and obj.b share the same reference to the object because of individual copies were not made, instead a reference to the object was copied. Any change made to any of the object’s property applies to all references using the object. How can we fix this? Continue reading… we have a fix in the next section.

// Properties on the prototype chain and non-enumerable properties cannot be copied. See here
let someObj = {
  a: 2,
  //   enumerable: true,
};

let objSome = Object.create(someObj, {
  b: {
    value: 2,
    enumerable: false,
  },
  c: {
    value: 3,
    enumerable: true,
  },
});

let objCopyobjSome = Object.assign({}, objSome);
console.log(objCopyobjSome); // { c: 3 }

//DEEP COPY IS COMPELTEY SEPERATE AND SHALLOW IS NOT

let spread = {
  one: 1,
  two: 2,
  three: { b: 123 },
};

let newspread = { ...spread };
console.log(spread); //
console.log(newspread);

newspread.one = 0901;
newspread.three.b = {};

console.log(spread); //
console.log(newspread);

spread.one = 123;

console.log(spread); //
console.log(newspread);

// { one: 1, two: 2 }
