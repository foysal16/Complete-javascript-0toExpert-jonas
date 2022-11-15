// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2022-01-28T09:15:04.904Z",
    "2022-04-01T10:17:24.185Z",
    "2022-05-08T14:11:59.604Z",
    "2022-11-12T17:01:17.194Z",
    "2022-11-10T23:36:17.929Z",
    "2022-11-08T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2022-01-25T14:18:46.235Z",
    "2022-02-05T16:33:06.386Z",
    "2022-04-10T14:43:26.374Z",
    "2022-11-10T18:49:59.371Z",
    "2022-11-08T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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

//////////////////////////////////////////////////////////////////
///////////////////Functions////////////////////////
//////////////////////////////////////////////////////////////////

const displayMoventsDate = function (date, locale) {
  const calDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calDaysPassed(new Date(), date);
  //console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  return new Intl.DateTimeFormat(locale).format(date);
};

// Currency format

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = displayMoventsDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//displayMovements(account1.movements);

const calcDisplayBlance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
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
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })

    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCur(
    Math.abs(interest),
    acc.locale,
    acc.currency
  );
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
  displayMovements(acc);
  //Display Balance
  calcDisplayBlance(acc);
  //Display Summary
  calcDisplaySum(acc);
};

let currentAccount;

const startLogOutTimer = function () {
  // Set time to 5 Minutes
  let time = 10;

  // Call the timer every second
  const timer = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // each call
    labelTimer.textContent = `${min}:${sec}`;
    // Decrease 1s
    time--;
    // When 0 second logout the page

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started..";
      containerApp.style.opacity = 0;
    }
  }, 1000);
};

///FAKE Always logged in
// currentAccount = account1;
// displayUI(currentAccount);
// containerApp.style.opacity = 100;

/// Experimenting API

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //console.log("LOGIN");

    //Display UI And Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      //weekday: "long",
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Current Date
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    //Clear Display inpur fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //Update timer

    startLogOutTimer();

    //Display UI
    displayUI(currentAccount);
  }
});

// Transfer the money one account to Another Account

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
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

    // Add transfer Date
    currentAccount.movementsDates.push(new Date().toDateString());
    recivedAcc.movementsDates.push(new Date().toDateString());

    //Display UI
    displayUI(currentAccount);
  }
});

// Loan Amount

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      //Add Movement
      currentAccount.movements.push(amount);

      // Create the dates

      currentAccount.movementsDates.push(new Date().toDateString());

      //Update UI
      displayUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";
});

// Close account using findIndex
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  //console.log("Deleted");

  if (
    inputCloseUsername.value == currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
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

///////////////////////
/*
///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
///////////////////////////////////////
// The Remainder Operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2
console.log(6 % 2);
console.log(6 / 2);
console.log(7 % 2);
console.log(7 / 2);
const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});
*/
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));
*/

/////Create a Date
// const now = new Date();
// console.log(now);

// console.log(new Date(account1.movementsDates[0]));

//

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);
