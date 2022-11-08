// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you age ${age} born in ${birthYear}`;
//     console.log(output);
//   }

//   printAge();
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1994;

// console.log(this);

// const calcAge = function (birthday) {
//   console.log(2037 - birthday);
//   console.log(this);
// };

// calcAge(1980);

// const calcAgeArrow = birthday => {
//   console.log(2017 - birthday);
//   console.log(this);
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge(1991);

// var firstName = 'Matilada';

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();

// console.log(this);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

let lastName = 'Williams';
let oldName = lastName;
lastName = 'Davis';

console.log(lastName, oldName);

const jessica = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

const jessica2 = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);
