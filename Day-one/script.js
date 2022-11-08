// let js = " Amazing";

// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);

// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// const now = 2050;
// const ageJonas = now - 2022;
// const ageSara = now - 2018;

// console.log(ageJonas, ageSara);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// const mark = {
//   mass: 78,
//   height: 1.69,
// };

// const john = {
//   mass: 92,
//   height: 1.95,
// };

// const Bmimark = mark.mass / mark.height ** 2;
// const BmiJohn = john.mass / (john.height * john.height);

// const markHigherBMI = Bmimark > BmiJohn;

// console.log(BmiJohn, Bmimark);
// console.log(markHigherBMI);

// const mark = {
//   mass: 100,
//   height: 1.69,
// };

// const john = {
//   mass: 120,
//   height: 1.95,
// };

// const Bmimark = mark.mass / mark.height ** 2;
// const BmiJohn = john.mass / (john.height * john.height);

// if (Bmimark > BmiJohn) {
//   console.log("Mark BMI is higher than Jhons");
// } else {
//   console.log("Jhons BMI is higher than Mark");
// }

/// Coding Challenge- 3

const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win th trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}
