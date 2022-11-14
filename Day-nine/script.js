// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements label
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

// Elements Container
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

// Elements Button
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

//Element Inputs
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//displayMovements(account1.movements);

const calcDisplayBlance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };
//calcDisplayBlance(account1.movements);

const calcDisplaySum = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })

    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

//calcDisplaySum(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const displayUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);
  //Display Balance
  calcDisplayBlance(acc);
  //Display Summary
  calcDisplaySum(acc);
};

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("LOGIN");

    //Display UI And Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    //Clear Display inpur fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //Display UI
    displayUI(currentAccount);
  }
});

// Transfer the money one account to Another Account

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recivedAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, recivedAcc);

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    recivedAcc &&
    currentAccount.balance >= amount &&
    recivedAcc?.username !== currentAccount.username
  ) {
    // Transfer
    currentAccount.movements.push(-amount);
    recivedAcc.movements.push(amount);

    //Display UI
    displayUI(currentAccount);
  }
});

// Loan Amount

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //Add Movement
    currentAccount.movements.push(amount);

    //Update UI
    displayUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// Close account using findIndex
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  //console.log("Deleted");

  if (
    inputCloseUsername.value == currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    //Hiden Ui

    containerApp.style.opacity = 0;
  }
  inputTransferAmount.value = inputTransferTo.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////////////////////
// Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Solution 1

dogs.forEach((dog) => (dog.recfood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// Solution 2
const dogSara = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSara);
console.log(
  `Sarah's dog is eating ${
    dogSara.curFood > dogSara.recfood ? "Much" : "little"
  }`
);

// Solution 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recfood)
  .flatMap((dog) => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatToolittle = dogs
  .filter((dog) => dog.curFood < dog.recfood)
  .flatMap((dog) => dog.owners);
// .flat();
console.log(ownersEatToolittle);

// Solution 4
console.log(`${ownersEatTooMuch.join(" and ")},s dongs eat too much!`);
console.log(`${ownersEatToolittle.join(" and ")},s dongs eat too Littles!`);

// Solution 5
console.log(dogs.some((dog) => dog.curFood === dog.recfood));

// Solution 6
const checkEatingOKay = (dog) =>
  dog.curFood > dog.recfood * 0.9 && dog.curFood < dog.recfood * 1.1;

console.log(dogs.some(checkEatingOKay));

// Solution 7
console.log(dogs.filter(checkEatingOKay));

// Solution 8

const dogSorted = dogs.slice().sort((a, b) => a.recfood - b.recfood);
console.log(dogSorted);

////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////
/*
// Array Methods Practice

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositSum);

//2
const numDeposit100 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposit100);
*/
///Extra work
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
//console.log(movements);

/*

///////////////////////////////
// Coding Challenge #3

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter((age) => age >= 18);

  const average =
    adults.reduce((acc, age, i, arr) => acc + age, 0) / arr.length;
  return average;
};

const calcAverageHumanAgeN = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const calcHuman = calcAverageHumanAgeN([5, 2, 4, 1, 15, 8, 3]);
console.log(calcHuman);
*/
/*
//Pipeline

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
*/
/*
///////////////////////////////
// Coding Challenge #2

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

const calcHuman = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(calcHuman);
*/
// Maximum Value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

//// Accumulatero -> Snowball

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositFor = [];

for (const move of movements) {
  if (move > 0) {
    depositFor.push(move);
  }
}
console.log(depositFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
*/
/*
///////////////////////////////
// Coding Challenge #1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is an still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 1, 7], [4, 1, 15, 8, 3]);
*/
/*

// Simple Array Methods
let arr = ["a", "b", "c", "d", "e"];
// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
// JOIN
console.log(letters.join(" - "));

*/

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr);

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(movement)}`);
  }
}

console.log("------------FOR EACH-----------");

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`);
  }
});

*/
/*
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound steling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets

const currencieUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currencieUnique);

currencieUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
