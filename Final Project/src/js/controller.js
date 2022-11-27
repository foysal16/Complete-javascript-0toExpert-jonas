const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took long! Timeout ater ${s} second`));
    }, s * 1000);
  });
};
