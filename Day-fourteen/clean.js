const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

var limits = {
  jonas: 1500,
  matilda: 100,
};

var addExpense = function (value, description, user) {
  if (!user) user = "jonas";
  user = user.toLowerCase();

  let lim;
  if (limits[user]) {
    lim = limits[user];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    budget.push({ value: -value, description: description, user: user });
  }
};

addExpense(10, "pizza");
addExpense(10, "Going to movies", "matilda");
addExpense(10, "stuff", "jay");

console.log(budget);

var check = function () {
  for (var el of budget) {
    var lim;

    if (limits[el.user]) {
      lim = limits[el.user];
    } else {
      lim = 0;
    }
    if (el.value < -lim) {
      el.flag = "limit";
    }
  }
};

check();

console.log(budget);

var bigExpenses = function (limit) {
  var output = "";

  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + " / ";
    }
  }

  output = output.slice(0, -2);
  console.log(output);
};

bigExpenses(1000);
