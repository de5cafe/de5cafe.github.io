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
  {
    question: "3. Como os vulcões mudam o relevo?",
    answers: [
      "a) Os vulcões podem criar novas montanhas e ilhas quando a lava sai da Terra.", // resposta correta
      "b) Os vulcões causam terremotos e afundam a crosta terrestre.",
      "c) Os vulcões provocam a criação de rios e lagos.",
      "d) Os vulcões alteram a composição do solo, mas não afetam o relevo."
    ],
    correctAnswerIndex: 0
  },
  {
    question: "4. O que acontece com o relevo durante um terremoto?",
    answers: [
      "a) O terremoto não altera a superfície terrestre.",
      "b) Durante um terremoto, o relevo pode se rachar, afundar ou levantar.", // resposta correta
      "c) O terremoto cria novas montanhas e vales.",
      "d) O terremoto provoca a criação de desertos e dunas."
    ],
    correctAnswerIndex: 1
  },
  {
    question: "5. O que são agentes externos do relevo?",
    answers: [
      "a) São processos gerados pelos movimentos das placas tectônicas.",
      "b) São forças de fora da Terra, como a água e o vento, que também mudam a forma da superfície.", // resposta correta
      "c) São forças de origem biológica, como os movimentos de animais.",
      "d) São fenômenos atmosféricos que alteram as rochas superficiais."
    ],
    correctAnswerIndex: 1
  },
  {
    question: "6. Como a água ajuda a mudar o relevo?",
    answers: [
      "a) A água não tem influência significativa sobre o relevo.",
      "b) A água aumenta a densidade do solo, dificultando a erosão.",
      "c) A água pode criar rios e vales ao arrastar pedras e solo.", // resposta correta
      "d) A água ajuda apenas na criação de cavernas e grutas."
    ],
    correctAnswerIndex: 2
  },
  {
    question: "7. O que é intemperização?",
    answers: [
      "a) É quando as rochas se desgastam e se quebram devido ao sol, água e vento.", // resposta correta
      "b) É o processo de crescimento de vegetação que altera o relevo.",
      "c) É o movimento das placas tectônicas que afeta as rochas.",
      "d) É a mudança do clima que altera a paisagem geográfica."
    ],
    correctAnswerIndex: 0
  },
  {
    question: "8. O que o gelo faz com o relevo?",
    answers: [
      "a) O gelo causa terremotos que alteram a crosta terrestre.",
      "b) O gelo cria desertos e áreas áridas.",
      "c) O gelo não tem impacto no relevo terrestre.",
      "d) O gelo pode esculpir vales e formar montanhas ao se derreter e congelar." // resposta correta
    ],
    correctAnswerIndex: 3
  },
  {
     question: "9. Como o vento afeta o relevo?",
    answers: [
      "a) O vento pode mover areia e criar dunas e desertos.", // resposta correta
      "b) O vento diminui a velocidade da erosão.",
      "c) O vento ajuda a consolidar o solo.",
      "d) O vento é responsável pela criação de rios e lagos."
    ],
    correctAnswerIndex: 0
  },
  {
    question: "10. Qual é um exemplo de como plantas mudam o relevo?",
    answers: [
      "a) As raízes das árvores podem ajudar a quebrar rochas e formar solo.", // resposta correta
      "b) As plantas não têm efeito significativo sobre o relevo.",
      "c) As plantas criam novas montanhas e vales.",
      "d) As plantas só afetam o relevo em áreas desérticas."
    ],
    correctAnswerIndex: 0
  },
  {
    question: "11. O que é um fuso horário?",
    answers: [
      "a) Um fuso horário é uma área da Terra onde o relógio mostra a mesma hora.", // resposta correta
      "b) Um fuso horário é uma linha imaginária que divide a Terra em partes iguais.",
      "c) Um fuso horário é um período do dia onde o sol está sempre visível.",
      "d) Um fuso horário é uma referência para medir a distância entre continentes."
    ],
    correctAnswerIndex: 0
  },
  {
    question: "12. Quantos fusos horários existem no mundo?",
    answers: [
      "a) 48",
      "b) 12",
      "c) 36",
      "d) 24", // resposta correta
    ],
    correctAnswerIndex: 3
  },
  {
    question: "13. Os fusos horários são divididos em quantos graus?",
    answers: [
      "a) 20 graus",
      "b) 30 graus",
      "c) 15 graus", // resposta correta
      "d) 10 graus"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "14. O que é o Meridiano de Greenwich?",
    answers: [
      "a) É uma linha que indica o horário de verão no mundo.",
      "b) É uma linha que divide o hemisfério norte do hemisfério sul.",
      "c) É a linha que determina a longitude de todos os países.",
      "d) É a linha imaginária que divide os fusos horários no mundo.", // resposta correta
    ],
    correctAnswerIndex: 3
  },
  {
    question: "15. O que significa 'horário de verão'?",
    answers: [
      "a) É quando os relógios são adiantados para aproveitar mais a luz do dia.", // resposta correta
      "b) É quando os relógios são atrasados para conservar energia.",
      "c) É quando os fusos horários são reduzidos à metade.",
      "d) É uma alteração nos fusos horários para ajustar a economia global."
    ],
    correctAnswerIndex: 0
  },
  {
    question: "16. O que é UTC?",
    answers: [
      "a) UTC é um jeito de medir o tempo que ajuda a saber a hora em diferentes partes do mundo.", // resposta correta
      "b) UTC é o nome de um fuso horário específico.",
      "c) UTC é um sistema de fuso horário usado apenas no verão.",
      "d) UTC é uma unidade de temperatura global."
    ],
    correctAnswerIndex: 0
  },
  {
  question: "17. Como o horário de verão pode afetar nossos relógios?",
  answers: [
    "a) Os relógios são adiantados em uma hora durante o horário de verão.", // resposta correta
    "b) Os relógios são atrasados para uma hora no inverno.",
    "c) O horário de verão não tem impacto no funcionamento de relógios.",
    "d) O horário de verão altera a localização dos fusos horários."
  ],
  correctAnswerIndex: 0
},
{
  question: "18. Como o fuso horário de um lugar pode afetar uma chamada internacional?",
  answers: [
    "a) O fuso horário não afeta a comunicação entre países.",
    "b) Você precisa saber a hora local do lugar para ligar na hora certa.", // resposta correta
    "c) O fuso horário determina a quantidade de minutos de duração da chamada.",
    "d) O fuso horário pode aumentar o custo de chamadas internacionais."
  ],
  correctAnswerIndex: 1
},
{
  question: "19. Qual fuso horário é o mais conhecido?",
  answers: [
    "a) O GMT (Greenwich Mean Time) ou UTC.", // resposta correta
    "b) O EST (Eastern Standard Time).",
    "c) O PST (Pacific Standard Time).",
    "d) O JST (Japan Standard Time)."
  ],
  correctAnswerIndex: 0
},
{
  question: "20. Alguns lugares têm um horário diferente do seu?",
  answers: [
    "a) Sim, mas apenas na Ásia.",
    "b) Não, todos os lugares têm o mesmo horário.",
    "c) Sim, porque a Terra tem diferentes fusos horários para várias regiões.", // resposta correta
    "d) Não, o horário global é padronizado."
  ],
  correctAnswerIndex: 2
},
{
  question: "21. O que é cartografia?",
  answers: [
    "a) Cartografia é a arte e ciência de fazer mapas.", // resposta correta
    "b) Cartografia é o estudo de como a Terra se move no espaço.",
    "c) Cartografia é a ciência que estuda o clima de diferentes regiões.",
    "d) Cartografia é a técnica de previsão de desastres naturais."
  ],
  correctAnswerIndex: 0
},
{
  question: "22. Quais tipos de mapas você conhece?",
  answers: [
    "a) Mapas históricos e de território político.",
    "b) Mapas de animais e plantas.",
    "c) Mapas de tempo e clima.",
    "d) Mapas de cidades, mapas de estradas e mapas de países." // resposta correta
  ],
  correctAnswerIndex: 3
},
{
  question: "23. O que é a escala de um mapa?",
  answers: [
    "a) É a relação entre a distância no mapa e a distância real.", // resposta correta
    "b) É a medida da altura das montanhas representadas no mapa.",
    "c) É a cor usada para representar o relevo no mapa.",
    "d) É a quantidade de informações que um mapa pode fornecer."
  ],
  correctAnswerIndex: 0
},
{
  question: "24. O que é uma legenda de mapa?",
  answers: [
    "a) A legenda é usada para medir distâncias no mapa.",
    "b) A legenda descreve a história de um lugar representado no mapa.",
    "c) A legenda explica o que os símbolos e cores no mapa significam.", // resposta correta
    "d) A legenda é uma lista de países presentes no mapa."
  ],
  correctAnswerIndex: 2
},
{
  question: "25. O que são coordenadas geográficas?",
  answers: [
    "a) São números que mostram a localização de um lugar na Terra.", // resposta correta
    "b) São dados sobre a temperatura de um lugar.",
    "c) São informações sobre a distância de dois pontos no mapa.",
    "d) São descrições sobre o relevo de uma região."
  ],
  correctAnswerIndex: 0
},
{
  question: "26. O que é uma projeção cartográfica?",
  answers: [
    "a) É uma maneira de transformar a Terra em um mapa plano.", // resposta correta
    "b) É a forma como se calcula a distância entre dois pontos no mapa.",
    "c) É um tipo de software usado para criar mapas digitais.",
    "d) É uma técnica para medir a altitude de pontos específicos."
  ],
  correctAnswerIndex: 0
},
{
  question: "27. Quais são alguns tipos de projeção de mapas?",
  answers: [
    "a) Projeção cilíndrica e projeção cônica.", // resposta correta
    "b) Projeção esférica e projetiva.",
    "c) Projeção equatorial e polar.",
    "d) Projeção de altitude e projeção de longitude."
  ],
  correctAnswerIndex: 0
},
{
  question: "28. O que é um mapa temático?",
  answers: [
    "a) Um mapa que mostra os fusos horários globais.",
    "b) Um mapa que representa o relevo de uma região.",
    "c) Um mapa que mostra informações especiais, como o clima ou a população.", // resposta correta
    "d) Um mapa usado para navegação aérea e marítima."
  ],
  correctAnswerIndex: 2
},
{
  question: "29. Como os computadores ajudam a fazer mapas?",
  answers: [
    "a) Eles eliminam a necessidade de escalas nos mapas.",
    "b) Eles alteram a forma do relevo na representação dos mapas.",
    "c) Eles ajudam a prever o futuro das regiões representadas nos mapas.",
    "d) Eles usam programas para desenhar e calcular informações para os mapas." // resposta correta
  ],
  correctAnswerIndex: 3
},
{
  question: "30. Por que os mapas são importantes?",
  answers: [
    "a) Eles são necessários apenas para viagens espaciais.",
    "b) Eles ajudam a predizer terremotos e desastres naturais.",
    "c) Eles ajudam a encontrar lugares e planejar rotas.", // resposta correta
    "d) Eles não têm grande importância no cotidiano."
  ],
  correctAnswerIndex: 2
},
{
  question: "31. O que são pontos cardeais?",
  answers: [
    "a) São os pontos de interseção entre continentes.",
    "b) São as direções principais: Norte, Sul, Leste e Oeste.", // resposta correta
    "c) São as principais cidades de cada país.",
    "d) São as divisões de fusos horários no mundo."
  ],
  correctAnswerIndex: 1
},
{
  question: "32. O que são pontos colaterais?",
  answers: [
    "a) São as direções entre os pontos cardeais: Nordeste, Sudeste, Sudoeste e Noroeste.", // resposta correta
    "b) São pontos de referência para navegação em terra e mar.",
    "c) São os pontos de interseção entre oceanos e continentes.",
    "d) São divisões de regiões climáticas no mundo."
  ],
  correctAnswerIndex: 0
},
{
  question: "33. Como você encontra o Norte usando uma bússola?",
  answers: [
    "a) A bússola usa coordenadas geográficas para determinar a direção.",
    "b) A bússola aponta para o Norte verdadeiro.",
    "c) A bússola sempre aponta para o Norte magnético.", // resposta correta
    "d) A bússola mostra a direção dos ventos predominantes."
  ],
  correctAnswerIndex: 2
},
{
  question: "34. Por que é importante saber os pontos cardeais?",
  answers: [
    "a) Eles ajudam a se orientar e a encontrar caminhos.", // resposta correta
    "b) Eles são usados apenas em situações de emergência.",
    "c) Eles servem apenas para determinar a posição dos astros.",
    "d) Eles são importantes para saber o clima de uma região."
  ],
  correctAnswerIndex: 0
},
{
  question: "35. O que é uma rosa dos ventos?",
  answers: [
    "a) É uma linha que conecta diferentes fusos horários no mapa.",
    "b) É um gráfico que descreve a intensidade do vento.",
    "c) É uma tabela de temperaturas globais.",
    "d) É um desenho que mostra os pontos cardeais e colaterais em um mapa." // resposta correta
  ],
  correctAnswerIndex: 3
},
{
  question: "36. Como os pontos cardeais são representados em um mapa?",
  answers: [
    "a) Eles são mostrados com uma seta ou rosa dos ventos.", // resposta correta
    "b) Eles são indicados com números e coordenadas.",
    "c) Eles são destacados com diferentes cores no mapa.",
    "d) Eles são representados apenas no gráfico de tempo."
  ],
  correctAnswerIndex: 0
},
{
  question: "37. O que é o Norte verdadeiro?",
  answers: [
    "a) O Norte verdadeiro é o ponto em direção ao Polo Norte geográfico.", // resposta correta
    "b) O Norte verdadeiro é o ponto onde a bússola aponta.",
    "c) O Norte verdadeiro é determinado pelas correntes oceânicas.",
    "d) O Norte verdadeiro é o ponto onde o sol nasce."
  ],
  correctAnswerIndex: 0
},
{
  question: "38. O que é o Norte magnético?",
  answers: [
    "a) O Norte magnético é o ponto no Polo Norte geográfico.",
    "b) O Norte magnético é o ponto que a bússola aponta, que pode não ser o mesmo que o Norte verdadeiro.", // resposta correta
    "c) O Norte magnético é o ponto de interseção entre continentes e oceanos.",
    "d) O Norte magnético é determinado pelas estações do ano."
  ],
  correctAnswerIndex: 1
},
{
  question: "39. Como ajustar a bússola para encontrar o Norte verdadeiro?",
  answers: [
    "a) A bússola não precisa de ajustes, ela sempre aponta para o Norte verdadeiro.",
    "b) É preciso ajustar a leitura da bússola pela diferença entre o Norte magnético e o Norte verdadeiro.", // resposta correta
    "c) O ajuste é feito com base nas coordenadas geográficas.",
    "d) O ajuste da bússola é feito com a ajuda de um mapa de fusos horários."
  ],
  correctAnswerIndex: 1
},
{
  question: "40. Por que usamos os pontos cardeais e colaterais?",
  answers: [
    "a) Eles ajudam a prever o tempo.",
    "b) Eles são usados apenas para medir a temperatura de um lugar.",
    "c) Eles ajudam a se localizar e a descrever direções.", // resposta correta
    "d) Eles determinam o tipo de solo de uma região."
  ],
  correctAnswerIndex: 2
}
];

//DAQUI PRA BAIXO, FUNCIONALIDADE DO JOGO EM SI

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

const playerImage = document.getElementById('player');
const attackDuration = 1000; 

function playerattack() {
    // Change to the attack GIF
    playerImage.src = '/assets/playerattacknew.gif'; // Replace with the path to your attack GIF

    // Set a timeout to switch back to the idle GIF after the attack duration
    setTimeout(() => {
        playerImage.src = '/assets/playeridle.gif'; // Replace with the path to your idle GIF
    }, attackDuration);
}

function enemyattack() {
    // Change to the attack GIF
    playerImage.src = '/assets/enemyattack.gif'; // Replace with the path to your attack GIF

    // Set a timeout to switch back to the idle GIF after the attack duration
    setTimeout(() => {
        playerImage.src = '/assets/enemyidle.gif'; // Replace with the path to your idle GIF
    }, attackDuration);
}

function playerhurt() {
    // Change to the attack GIF
    playerImage.src = '/assets/playerhurt.png'; // Replace with the path to your attack GIF

    // Set a timeout to switch back to the idle GIF after the attack duration
    setTimeout(() => {
        playerImage.src = '/assets/playeridle.gif'; // Replace with the path to your idle GIF
    }, attackDuration);
}

function enemyhurt() {
    // Change to the attack GIF
    playerImage.src = '/assets/enemyhurt.png'; // Replace with the path to your attack GIF

    // Set a timeout to switch back to the idle GIF after the attack duration
    setTimeout(() => {
        playerImage.src = '/assets/enemyidle.gif'; // Replace with the path to your idle GIF
    }, attackDuration);
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        points += 1;
        ehealth -= 6; // Diminui a vida do inimigo
        playerattack();
        enemyhurt();
    } else {
        phealth -= 10; // Diminui a vida do jogador
        enemyattack();
        playerhurt();
    }

    updateScores();

    if (ehealth <= 0) {
        endGame("VOCÊ VENCEU!");
    } else if (phealth <= 0) {
        endGame("DERROTA!");
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
