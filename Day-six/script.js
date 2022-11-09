const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 23,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, arr];
console.log(newArr);

// Spread Operator (...)

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

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
