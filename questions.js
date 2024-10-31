const relevo1 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const relevo2 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const agente1 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const agente2 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const fuso1 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const fuso2 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const carto1 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const carto2 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const cardeal1 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

const cardeal2 = [
  "hello this is a test input",
  "hey whats up",
  "another string",
  "yet another string"
];

// Create an array of all the arrays
const allArrays = [relevo1, relevo2, agente1, agente2, fuso1, fuso2, carto1, carto2, cardeal1, cardeal2];

// Select a random array
const randomArray = allArrays[Math.floor(Math.random() * allArrays.length)];

// Select a random string from the random array
const randomString = randomArray[Math.floor(Math.random() * randomArray.length)];

// Set the random string in the HTML element
document.getElementById("question").innerHTML = randomString;
