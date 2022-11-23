//////Query Selector//////

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////Function and logic//////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  //  console.log(request.responseText);

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.altSpellings[1]}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}</p>
                
            </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML("beforebegin", html);

    countriesContainer.style.opacity = 1;
  });
};

getCountryData("bangladesh");
getCountryData("usa");
getCountryData("germany");
*/
{
  /* <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies.BDT.name
                }</p> */
}

const rednerCountry = function (data, classNmae = "") {
  console.log(data);
  const html = `
          <article class="country ${classNmae}">
              <img class="country__img" src="${data?.flags?.png}" />
              <div class="country__data">
                  <h3 class="country__name">${data.altSpellings?.[1]}</h3>
                  <h4 class="country__region">${data?.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(1)}</p>
                  
              </div>
          </article>
      `;
  console.log(data);
  countriesContainer.insertAdjacentHTML("beforeend", html);

  countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  //  console.log(request.responseText);

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    rednerCountry(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      rednerCountry(data2, "neighbour");
      console.log(data2);
    });
  });
};

getCountryAndNeighbour("usa");

*/

// const request = fetch("https://restcountries.com/v3.1/name/portugal");

// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       rednerCountry(data[0]);
//     });
// };

// getCountryData("bangladesh");

const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      rednerCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => rednerCountry(data, "neighbour"));
};

getCountryData("bangladesh");
