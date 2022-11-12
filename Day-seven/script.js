"use strict";

/// ///////////////////
// CODING CHALLANGE #2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

/*
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} second`);
};

boardPassengers(180, 3);

// setTimeout(function () {
//   console.log("TIMER");
// }, 1000);

*/

/*
/// ///////////////////
// CODING CHALLANGE #1

const poll = {
  question: "What is your favourite programing language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(writen options number)`
      )
    );
    console.log(answer);

    // Register Answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

//poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answer: [5, 2, 3] });

*/
/*
const lutfhansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
  },
};

lutfhansa.book(2369, "Jonas schmedtmann");

console.log(lutfhansa);

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lutfhansa.book;

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lutfhansa, 265, "Foysal Ahammed");
console.log(lutfhansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Copper");
console.log(swiss);

// Bind Method

const bookWE = book.bind(eurowings);
bookWE(23, "Steven Williams");

// Apply Method

const fligthData = [583, "George Cooper"];
book.apply(swiss, fligthData);
console.log(swiss);

book.call(swiss, ...fligthData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lutfhansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);

// With Event Listeners
lutfhansa.planes = 300;
lutfhansa.buyPlan = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lutfhansa.buyPlan.bind(lutfhansa));
*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHy = greet("Hey");
greeterHy("Jonas");

*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//High Order functions

const transformer = function (str, fn) {
  console.log(`Orignal String: ${str}`);
  console.log(`Transformer string:  ${fn(str)}`);
  console.log(`Transformer by: ${fn.name}`);
};

transformer("JavaScript is the best language!", upperFirstWord);
transformer("JavaScript is the best language!", oneWord);
*/
/*
const flight = "LH234";
const jonas = {
  name: "Jonas schmedtmann",
  passportNumber: 247358654,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr" + passenger.name;

  if (passenger.passportNumber === 247358654) {
    alert("Check In");
  } else {
    alert("Wrong Passport");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passenger = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
console.log(flight, jonas);
*/

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);
*/
