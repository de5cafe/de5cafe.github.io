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
      "homem arnaha odfnefipn43ioffpfref.",
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
  question: "questão teste",
    answers: [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  // Add more questions and answers here...
];

// Select a random question
const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

// Set the random question in the HTML element
document.getElementById("question").innerHTML = randomQuestion.question;

// Set the random answers in the HTML elements
for (let i = 1; i <= 5; i++) {
  document.getElementById("btn" + i).innerHTML = randomQuestion.answers[i - 1];
}
