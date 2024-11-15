const questions = [
  {
    question: "chaves",
    answers: [
      "quico.",
      "nhonho.",
      "professor girafales",
      "n.d.a"
    ]
  },
  {
    question: "marvel",
    answers: [
      "capitao america.",
      "homem aranha odfnefipn43ioffpfref.",
      "hulk",
      "japão"
    ]
  },
  {
    question: "vamonos de fiesta a factory",
    answers: [
      "pero lleva mucho botiquin",
      "porque mucha gente cae ahi",
      "pon ahora tu mejor skin",
      "o relevo desde o surgimento da Terra não sofreu modificações em sua estrutura."
    ]
  },
  {
    question: "questão teste",
    answers: [
      "a",
      "b",
      "c",
      "d"
    ]
  }
  // Add more questions and answers here...
];

// Select a random question
const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

// Set the random question in the HTML element
document.getElementById("question").innerHTML = randomQuestion.question;

// Set the random answers in the HTML elements
const answerButtons = document.querySelectorAll("[id^='btn']"); // Select all buttons with IDs starting with 'btn'
answerButtons.forEach((button, index) => {
  if (index < randomQuestion.answers.length) {
    button.innerHTML = randomQuestion.answers[index];
    button.style.display = "block"; // Show the button if there's an answer
  } else {
    button.style.display = "none"; // Hide the button if there's no answer
  }
});
