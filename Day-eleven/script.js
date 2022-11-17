/*

// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const jonas = new Person("Jonas", 1991);
console.log(jonas);

/////////////

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(jonas instanceof Person);
Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};
Person.hey();

///////////////////////////////////////
///////////////////////////////////////
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototyeOfLinkedObjects
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

*/
/*
///////////////////////////////////////
// Coding Challenge #1

// Solution : 1

const car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new car("BMW", 230);

console.log(bmw);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

///////////////////////////////////////
// ES6 Classes
