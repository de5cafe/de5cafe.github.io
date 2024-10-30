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

// Get the element with the id "question"
const questionElement = document.getElementById("question");

// Function to select a random string and update the element
function selectRandomString() {
  const randomIndex = Math.floor(Math.random() * strings.length);
  const randomString = strings[randomIndex];
  questionElement.textContent = randomString;
}

// Call the function to select a random string
selectRandomString();
