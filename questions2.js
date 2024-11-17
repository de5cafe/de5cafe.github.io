const questions = [
  {
    question: "1. O que é relevo?",
    answers: [
      "a) Relevo é a forma da superfície da Terra, como montanhas, vales e planícies.",
      "b) Relevo é o estudo das massas de ar.",
      "c) Relevo é a distribuição de espécies de fauna e flora.",
      "d) Relevo é a variação de temperatura em diferentes regiões."
    ],
    correctAnswerIndex: 0 // Index of the correct answer (0-based)
  },
  {
    question: "2. O que são agentes internos do relevo?",
    answers: [
      "a) São ações de seres vivos que modificam o relevo.",
      "b) São fenômenos atmosféricos que alteram a superfície terrestre.",
      "c) São forças dentro da Terra, como os terremotos e vulcões, que mudam a forma da superfície.",
      "d) São processos de intemperização causados pela água."
    ],
    correctAnswerIndex: 2
  },
  // Add more questions here...
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
