const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekDays[0]]: {
    open: 12,
    close: 22,
  },
  [weekDays[2]]: {
    open: 11,
    close: 23,
  },
  [weekDays[3]]: {
    open: 0,
    close: 23,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//console.log(flights.split("+"));

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  //console.log(type, from, to, time);

  const output = `${type.startsWith("_Delayed") ? "🔴" : " "}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} ${time.replace(":", "h")}`.padStart(37);
  console.log(output);
}

/*

////////////////////////////////
// CODING CHALLANGE #4

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    //console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

*/

// const capitaliseName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitaliseName("jessica ann smit davis");
// capitaliseName("jonas schmedtmann");
/*
const ariLine = "TAP Air Portugal";

console.log(ariLine.toLowerCase());
console.log(ariLine.toUpperCase());

const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = "280,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
*/

// const ariLine = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log(ariLine.length);
// console.log("B737".length);

// console.log(ariLine.indexOf("r"));
// console.log(ariLine.lastIndexOf("r"));
// console.log(ariLine.indexOf("portugal"));

/*
////////////////////////////////
// CODING CHALLANGE #3

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Solution
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Solution
gameEvents.delete(64);

// 3. Solution
console.log(
  `An event happend, on average , ever ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happend, on average , ever ${time / gameEvents.size} minutes`
);

// 4. Solution
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min} : ${event}`);
}
*/

/*
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, values] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${values}`);
}
*/

/*
const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "Firense, Italy");

console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("Close", 23)
  .set(true, "We are open :d");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
*/

/*
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);
console.log(new Set("Jonas"));

console.log(orderSet.size);

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");
orderSet.delete("Risotto");

console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Chef", "Waiter", "Manager"];
const statffUnique = new Set(staff);
console.log(statffUnique);
*/

/*

/////////////////////////////////
// CODING CHALLANGE #2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 20.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Solution
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${player}`);
}
// 2. Solution
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
console.log(average);

// 3. Solution
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4. Solution

*/

/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day} `;
}

console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

// [Key, Value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exit");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exit");

//Arrays
const users = [{ name: "jonas", email: "hello@foysal.com" }];
console.log(users[0]?.name ?? "user array empty");
*/

// console.log(restaurant.openingHours.mon);

//const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) console.log(item);
//for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

/////////////////////////////////
// CODING CHALLANGE #1
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 20.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1. Solution
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. Solution
const [gk, ...filedPlayers] = players1;
console.log(gk, filedPlayers);

// 3. Solution
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Solution
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Solution
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Solution
const pringGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// pringGoals("Davies", "Muller", "Lewandowski");
// pringGoals("Davies", "Muller");
pringGoals(game.scored);

// 6. Solution
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

/////////////////////////////////
*/

/*
restaurant.newGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish Coalescing Operator: Null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, becasue on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, othersFood);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 4, 2, 5);
add(25, 3, 4, 2, 5);

const x = [23, 5, 7];
add(...x);
*/

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, arr];
// console.log(newArr);

// // Spread Operator (...)

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables, arrays, strings, maps, sets, NOT objects

// const str = "Jonas";
// const letters = [...str, "", "S."];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredeint 3"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b }) = obj;
// console.log(a, b);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// Swap

// const temp = first;
// first = second;
// second = temp;

// Alternative Swap
// [first, second] = [second, first];
// console.log(first, second);

// // Receive 2 return values from a functions
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
