/*

// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// console.log("Importing Module");

// addToCart("Bread", 5);
// console.log(price, tq);

console.log("Importing Module");

import * as ShoppingCart from "./shoppingCart.js";

ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice);

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();

// console.log(data);

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

//Not very clean
//lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart and shipping cost ${shippingCost}`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} Order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
*/

// const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart and shipping cost ${shippingCost}`
//   );
// };

//import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

// const state = {
//   cart: [
//     { produc: "Bread", quantity: 5 },
//     { produc: "pizza", quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };

// const stateClone = Object.assign({}, state);
// console.log(stateClone);

// const stateDeepClone = cloneDeep(state);
// console.log(stateDeepClone);
