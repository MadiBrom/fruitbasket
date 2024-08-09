# The-Fruit-Basket

# Fruit Organizer

This project organizes fruits into color categories and citrus/non-citrus groups. You can add fruits to a bank, and then sort them based on their color or whether they are citrus.

## Goals

1. **Add Fruits**: Use the form to add fruits to a central bank.
2. **Sort by Color**:
   - Click on the color buttons to sort fruits into their respective color groups (Red, Yellow, Green, Blue, Orange, Purple).
   - Click "Sort All Colors" to categorize all fruits in the bank by color.
3. **Sort by Citrus**:
   - Click "Sort One Citrus" to move one fruit at a time to the Citrus or Non-Citrus categories.
   - Click "Sort All Citrus" to move all fruits to the Citrus category at once.

## Files

- `index.html`: The HTML file with the structure of the page.
- `styles.css`: The CSS file for styling the page.
- `script.js`: The JavaScript file for the logic.

## JavaScript Variables

Define the following variables in `script.js`:

```javascript
const fruits = [
    { name: "Apple", color: "red", isCitrus: false },
    { name: "Banana", color: "yellow", isCitrus: false },
    { name: "Lime", color: "green", isCitrus: true },
    { name: "Blueberry", color: "blue", isCitrus: false },
    { name: "Orange", color: "orange", isCitrus: true },
    { name: "Grapes", color: "purple", isCitrus: false }
];

const fruitBank = [];
const redFruits = [];
const yellowFruits = [];
const greenFruits = [];
const blueFruits = [];
const orangeFruits = [];
const purpleFruits = [];
const citrusFruits = [];
const nonCitrusFruits = [];

prompt: list a bunch of fruits in an array with 6 different colors. Create a red, yellow, green, blue, orange, and purple button that will take fruits from the bank that apply to their color. Define the fruits with their colors in the javascript file as well as the arrays.  Have a sort all colors button that will put each fruit in the array into their perspective colors. Create a citrus and non citrus that are defined in the fruits and create a sort one button that will individually go down the line and put one fruit in citrus and non citrus at a time and a sort all button that will put the fruits in their citrus all at once. Can you create the HTML, CSS, readme, fruit array, fruit variables that contain the color and citrus so they can be organized while leaving the rest of the javascript for us to find out
