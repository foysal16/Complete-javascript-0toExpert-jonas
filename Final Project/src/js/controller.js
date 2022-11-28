import * as model from "./model.js";

import icons from "url:../img/icons.svg"; //console.log(icons);
import "core-js/stable";
import "regenerator-runtime/runtime";
import { mod } from "prelude-ls";

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took long! Timeout ater ${s} second`));
    }, s * 1000);
  });
};

////////////////////////////////////
////////////Start Coding///////////
///////////////////////////////////

//console.log("Test");

const renderSpinner = function (parentEl) {
  const spinnerMarkUp = `

    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", spinnerMarkUp);
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    renderSpinner(recipeContainer);

    // Loading Recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // Rendering Recipe
    const markUp = `
        <figure class="recipe__fig">
          <img crossorigin="anonymous" src="${recipe.image}" alt="${
      recipe.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              recipe.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              recipe.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

            ${recipe.ingredients
              .map((ing) => {
                return `
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity}</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${ing.unit}</span>
                  ${ing.description}
                </div>
              </li>

              `;
              })
              .join("")}
           
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              recipe.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;

    recipeContainer.insertAdjacentHTML("afterbegin", markUp);
    console.log(recipe);
  } catch (er) {
    alert(er);
  }
};

showRecipe();

// fetch(
//   "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
// );

["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe));
// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);