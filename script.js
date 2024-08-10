// define the fruit array
const fruits = [
  { name: "Apple", color: "red", citrus: false },
  { name: "Banana", color: "yellow", citrus: false },
  { name: "Orange", color: "orange", citrus: true },
  { name: "Strawberry", color: "pink", citrus: false },
  { name: "Grape", color: "green", citrus: false },
  { name: "Mango", color: "yellow", citrus: false },
  { name: "Pineapple", color: "yellow", citrus: false },
  { name: "Watermelon", color: "red", citrus: false },
  { name: "Peach", color: "pink", citrus: false },
  { name: "Blueberry", color: "purple", citrus: false },
  { name: "Lemon", color: "yellow", citrus: true },
  { name: "Lime", color: "green", citrus: true },
  { name: "Kiwi", color: "yellow", citrus: false },
  { name: "Pear", color: "green", citrus: false },
  { name: "Raspberry", color: "red", citrus: false },
  { name: "Plum", color: "purple", citrus: false },
  { name: "Cranberry", color: "pink", citrus: false },
  { name: "Cherry", color: "red", citrus: false },
  { name: "Papaya", color: "orange", citrus: false },
  { name: "Tangerine", color: "orange", citrus: true },
  { name: "Grapefruit", color: "pink", citrus: true },
  { name: "Kumquat", color: "orange", citrus: true },
  { name: "Clementine", color: "orange", citrus: true },
];
// query=connecting the html and javascript pages
const colorRed = document.querySelector("#red");
const colorYellow = document.querySelector("#yellow");
const colorOrange = document.querySelector("#orange");
const colorPink = document.querySelector("#pink");
const colorGreen = document.querySelector("#green");
const colorPurple = document.querySelector("#purple");
const sortAll = document.querySelector("#sortAllColors");
const sortCitrus = document.querySelector("#sortCitrus");
const sortNonCitrus = document.querySelector("#sortNonCitrus");
// array for each color
const colors = {
  red: [],
  yellow: [],
  orange: [],
  green: [],
  pink: [],
  purple: [],
};
const citrus = {
  withCitrus: [],
  withoutCitrus: [],
};
// sort fruit by color
function sortFruitColors() {
  colors.red = fruits.filter((fruit) => fruit.color === "red");
  colors.yellow = fruits.filter((fruit) => fruit.color === "yellow");
  colors.orange = fruits.filter((fruit) => fruit.color === "orange");
  colors.green = fruits.filter((fruit) => fruit.color === "green");
  colors.pink = fruits.filter((fruit) => fruit.color === "pink");
  colors.purple = fruits.filter((fruit) => fruit.color === "purple");
}
// sort citrus
function sortingCitrus() {
  citrus.withCitrus = fruits.filter((fruit) => fruit.citrus);
  citrus.withoutCitrus = fruits.filter((fruit) => !fruit.citrus);
}
// display fruits by color
function showFruitColor(color) {
  const fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = "";
  //   add fruits of the selected color to the fruitItem list to give to the fruit-list
  colors[color].forEach((fruit) => {
    const fruitItem = document.createElement("li");
    fruitItem.textContent = fruit.name;
    fruitList.appendChild(fruitItem);
  });
}
function showCitrus(citrusy) {
  const fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = "";
  // pick true or false
  let fruitsToShow;
  if (citrusy) {
    fruitsToShow = citrus.withCitrus;
  } else {
    fruitsToShow = citrus.withoutCitrus;
  }
  //   appending to show what we did above
  fruitsToShow.forEach((fruit) => {
    const fruitItem = document.createElement("li");
    fruitItem.textContent = fruit.name;
    fruitList.appendChild(fruitItem);
  });
}
// add listners to wait for the button to be pressued
colorRed.addEventListener("click", () => showFruitColor("red"));
colorYellow.addEventListener("click", () => showFruitColor("yellow"));
colorOrange.addEventListener("click", () => showFruitColor("orange"));
colorPink.addEventListener("click", () => showFruitColor("pink"));
colorGreen.addEventListener("click", () => showFruitColor("green"));
colorPurple.addEventListener("click", () => showFruitColor("purple"));
sortCitrus.addEventListener("click", function () {
  showCitrus(true);
});
sortNonCitrus.addEventListener("click", function () {
  showCitrus(false);
});

sortFruitColors();
sortingCitrus();
