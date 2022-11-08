// function fruitProcessor(apples, orange) {
//   console.log(apples, orange);
//   const juice = `Juice with ${apples} apples and ${orange} orange`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

/// Arrow Functions

// const yearsUntilReirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilReirement(1991));

/// Functions calling anothers functions

// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, orange) {
//   const applePices = cutFruit(apples);
//   const orangePices = cutFruit(orange);

//   const juice = `Juice ${applePices} pices of Apple and ${orangePices} pices of Orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/// Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 3, 4));

// const scoreDophins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDophins, scoreKoalas);

// const checkWinner = function (avgDholphins, avgKoalas) {
//   if (avgDholphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDholphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDholphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDholphins})`);
//   } else {
//     console.log("No team Wins....");
//   }
// };

// checkWinner(scoreDophins, scoreKoalas);
// checkWinner(520, 131);

/// Array

// const calcAge = (birthYear) => {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const age = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(age);

// /// Coding Challenge #2(Array)

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// /// Coding Challenge #3(Objects)

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const Jhonas = {
//   fullName: "Jhon Smith",
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBmi();
// Jhonas.calcBmi();

// console.log(mark.bmi, Jhonas.bmi);

// if (mark.bmi > Jhonas.bmi) {
//   console.log(
//     `${mark.fullName} BMI (${mark.bmi}) is higher than ${Jhonas.fullName} BMI (${Jhonas.bmi})`
//   );
// } else if (Jhonas.bmi > mark.bmi) {
//   console.log(
//     `${Jhonas.fullName} BMI (${Jhonas.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`
//   );
// }

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 96, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
