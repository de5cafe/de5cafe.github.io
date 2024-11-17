let points = 0;
let ehealth = 100; // Vida do inimigo
let phealth = 100; // Vida do jogador

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

function getRandomQuestion() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    return randomQuestion;
}

function displayQuestion() {
    const questionData = getRandomQuestion();
    document.getElementById("question").innerHTML = questionData.question;

    const answerButtons = document.querySelectorAll("[id^='btn']");
    answerButtons.forEach((button, index) => {
        if (index < questionData.answers.length) {
            button.innerHTML = questionData.answers[index];
            button.style.display = "block"; // Mostrar o botão se houver uma resposta
            button.onclick = () => checkAnswer(index, questionData.correctAnswerIndex);
        } else {
            button.style.display = "none"; // Ocultar o botão se não houver resposta
        }
    });
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        points += 1;
        ehealth -= 6; // Diminui a vida do inimigo
    } else {
        phealth -= 10; // Diminui a vida do jogador
    }

    updateScores();

    if (ehealth <= 0) {
        endGame("Você venceu!");
    } else if (phealth <= 0) {
        endGame("Você foi derrotado!");
    } else {
        displayQuestion(); // Mostrar uma nova pergunta
    }
}

function updateScores() {
    document.getElementById("ehealth").value = ehealth;
    document.getElementById("phealth").value = phealth;
}

function endGame(message) {
    document.getElementById("result").style.display = "block";
    document.getElementById("resultMessage").innerText = message;
    document.querySelector(".button-container").style.display = "none"; // Ocultar botões de resposta
   document.getElementById("question").style.display = "none";
}

document.getElementById("tryAgain").onclick = () => {
    location.reload()
};

// Iniciar o jogo
displayQuestion();

// Reproduzir áudio ao carregar a página
window.onload = function() {
    var audio = new Audio('/assets/zin2.mp3'); 
    audio.play().catch(function(error) {
        console.log('Playback failed:', error);
    });
};
