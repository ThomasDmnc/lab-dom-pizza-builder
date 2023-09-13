// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector(".sauce");
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  }

function renderGlutenFreeCrust() {
  let crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  var pepperoni = document.querySelector(".btn-pepperoni");
  var mushrooms = document.querySelector(".btn-mushrooms");
  var greenPeppers = document.querySelector(".btn-green-peppers");
  var whiteSauce = document.querySelector(".btn-sauce");
  var glutenFreeCrust = document.querySelector(".btn-crust");
  
  pepperoni.classList.toggle("active", state.pepperoni);
  mushrooms.classList.toggle("active", state.mushrooms);
  greenPeppers.classList.toggle("active", state.greenPeppers);
  whiteSauce.classList.toggle("active", state.whiteSauce);
  glutenFreeCrust.classList.toggle("active", state.glutenFreeCrust);

}

function renderPrice() {
  var pricePepperoni = document.querySelector(".price-pepperoni");
  var priceMushrooms = document.querySelector(".price-mushrooms");
  var priceGreenPeppers = document.querySelector(".price-green-peppers");
  var priceWhiteSauce = document.querySelector(".price-sauce-white");
  var priceGlutenFreeCrust = document.querySelector(".price-crust-gluten-free");

  if (state.pepperoni) {
    pricePepperoni.style.visibility = 'visible';
  } else {
    pricePepperoni.style.visibility = 'hidden';
  }
  if (state.mushrooms) {
    priceMushrooms.style.visibility = 'visible';
  } else {
    priceMushrooms.style.visibility = 'hidden';
  }
  if (state.greenPeppers) {
    priceGreenPeppers.style.visibility = 'visible';
  } else {
    priceGreenPeppers.style.visibility = 'hidden';
  }
  if (state.whiteSauce) {
    priceWhiteSauce.style.visibility = 'visible';
  } else {
    priceWhiteSauce.style.visibility = 'hidden';
  }
  if (state.glutenFreeCrust) {
    priceGlutenFreeCrust.style.visibility = 'visible';
  } else {
    priceGlutenFreeCrust.style.visibility = 'hidden';
  }


  var totalPrice = document.querySelector(".total");
  var tempTotal = basePrice;

  if (state.pepperoni){
    tempTotal += ingredients.pepperoni.price
  }
  if (state.mushrooms){
    tempTotal += ingredients.mushrooms.price
  }
  if (state.greenPeppers){
    tempTotal += ingredients.greenPeppers.price
  }
  if (state.whiteSauce){
    tempTotal += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust){
    tempTotal += ingredients.glutenFreeCrust.price
  }

  totalPrice.innerHTML = `$${tempTotal}`;

  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});