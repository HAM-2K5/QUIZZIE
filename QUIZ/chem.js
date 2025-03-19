const questionElement = document.getElementById("question");
const difficultyElement = document.getElementById("difficulty");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const skipButton = document.getElementById("skip-btn");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");
const homeButton = document.getElementById("home-btn"); // Home button

const totalQuestionsToAsk = 10; // Number of questions per quiz

const allQuestions = 
[
  {
    "question": " Which element has the atomic number 6?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Carbon", "correct": true },
      { "text": "Oxygen", "correct": false },
      { "text": "Nitrogen", "correct": false },
      { "text": "Hydrogen", "correct": false }
    ]
  },
  {
    "question": " What is the pH of a neutral solution?",
    "difficulty": "Easy",
    "answers": [
      { "text": "7", "correct": true },
      { "text": "1", "correct": false },
      { "text": "14", "correct": false },
      { "text": "0", "correct": false }
    ]
  },
  {
    "question": " Which gas is most abundant in Earth's atmosphere?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Nitrogen", "correct": true },
      { "text": "Oxygen", "correct": false },
      { "text": "Carbon dioxide", "correct": false },
      { "text": "Argon", "correct": false }
    ]
  },
  {
    "question": " What is the chemical symbol for gold?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Au", "correct": true },
      { "text": "Ag", "correct": false },
      { "text": "Go", "correct": false },
      { "text": "Gd", "correct": false }
    ]
  },
  {
    "question": " What is the process of a liquid turning into a gas called?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Evaporation", "correct": true },
      { "text": "Condensation", "correct": false },
      { "text": "Sublimation", "correct": false },
      { "text": "Freezing", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a strong acid?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Hydrochloric acid (HCl)", "correct": true },
      { "text": "Acetic acid (CH3COOH)", "correct": false },
      { "text": "Carbonic acid (H2CO3)", "correct": false },
      { "text": "Boric acid (H3BO3)", "correct": false }
    ]
  },
  {
    "question": " What is the main component of natural gas?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Methane", "correct": true },
      { "text": "Ethane", "correct": false },
      { "text": "Propane", "correct": false },
      { "text": "Butane", "correct": false }
    ]
  },
  {
    "question": " What is the oxidation state of oxygen in H2O?",
    "difficulty": "Medium",
    "answers": [
      { "text": "-2", "correct": true },
      { "text": "-1", "correct": false },
      { "text": "+1", "correct": false },
      { "text": "+2", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a halogen?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Chlorine", "correct": true },
      { "text": "Sodium", "correct": false },
      { "text": "Magnesium", "correct": false },
      { "text": "Argon", "correct": false }
    ]
  },
  {
    "question": " What is the process of converting sugar into alcohol called?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Fermentation", "correct": true },
      { "text": "Distillation", "correct": false },
      { "text": "Oxidation", "correct": false },
      { "text": "Polymerization", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a transition metal?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Iron", "correct": true },
      { "text": "Sodium", "correct": false },
      { "text": "Calcium", "correct": false },
      { "text": "Aluminum", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a greenhouse gas?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Carbon dioxide", "correct": true },
      { "text": "Oxygen", "correct": false },
      { "text": "Nitrogen", "correct": false },
      { "text": "Argon", "correct": false }
    ]
  },
  {
    "question": " What is the process of a solid turning directly into a gas called?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Sublimation", "correct": true },
      { "text": "Evaporation", "correct": false },
      { "text": "Condensation", "correct": false },
      { "text": "Melting", "correct": false }
    ]
  },
  {
    "question": " Which of the following is an example of a chemical change?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Burning wood", "correct": true },
      { "text": "Melting ice", "correct": false },
      { "text": "Dissolving sugar in water", "correct": false },
      { "text": "Crushing a can", "correct": false }
    ]
  },
  {
    "question": " What is the primary function of a catalyst in a chemical reaction?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Speed up the reaction", "correct": true },
      { "text": "Slow down the reaction", "correct": false },
      { "text": "Change the products", "correct": false },
      { "text": "Absorb heat", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a property of bases?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Turns red litmus paper blue", "correct": true },
      { "text": "Turns blue litmus paper red", "correct": false },
      { "text": "Has a pH less than 7", "correct": false },
      { "text": "Releases H+ ions in water", "correct": false }
    ]
  },
  {
    "question": " What is the atomic mass unit (amu) of a proton?",
    "difficulty": "Hard",
    "answers": [
      { "text": "1", "correct": true },
      { "text": "0", "correct": false },
      { "text": "2", "correct": false },
      { "text": "1.5", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a characteristic of an exothermic reaction?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Releases heat", "correct": true },
      { "text": "Absorbs heat", "correct": false },
      { "text": "Requires continuous energy input", "correct": false },
      { "text": "Forms only gaseous products", "correct": false }
    ]
  },
  {
    "question": " What is the primary component of vinegar?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Acetic acid", "correct": true },
      { "text": "Hydrochloric acid", "correct": false },
      { "text": "Sulfuric acid", "correct": false },
      { "text": "Citric acid", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a property of noble gases?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Inert and unreactive", "correct": true },
      { "text": "Highly reactive", "correct": false },
      { "text": "Forms strong acids", "correct": false },
      { "text": "Conducts electricity", "correct": false }
    ]
  },
  {
    "question": " What is the process of splitting water into hydrogen and oxygen using electricity called?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Electrolysis", "correct": true },
      { "text": "Hydrolysis", "correct": false },
      { "text": "Photolysis", "correct": false },
      { "text": "Polymerization", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a property of metals?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Good conductor of electricity", "correct": true },
      { "text": "Brittle and non-ductile", "correct": false },
      { "text": "Low melting point", "correct": false },
      { "text": "Transparent", "correct": false }
    ]
  },
  {
    "question": " What is the primary gas responsible for the greenhouse effect?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Carbon dioxide", "correct": true },
      { "text": "Oxygen", "correct": false },
      { "text": "Nitrogen", "correct": false },
      { "text": "Argon", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a characteristic of an endothermic reaction?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Absorbs heat", "correct": true },
      { "text": "Releases heat", "correct": false },
      { "text": "Forms only solid products", "correct": false },
      { "text": "Occurs spontaneously", "correct": false }
    ]
  },
  {
    "question": " What is the primary function of a buffer solution?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Resist changes in pH", "correct": true },
      { "text": "Increase acidity", "correct": false },
      { "text": "Decrease acidity", "correct": false },
      { "text": "Conduct electricity", "correct": false }
    ]
  }
];

let selectedQuestions, currentQuestionIndex;
let score = 0;
let timeLeft;
let timerInterval;

function startQuiz() {
    selectedQuestions = getRandomQuestions(allQuestions, totalQuestionsToAsk);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hide");
    restartButton.classList.add("hide");
    skipButton.classList.remove("hide");
    homeButton.classList.add("hide"); // Hide Home button at start
    showQuestion();
}

function getRandomQuestions(questionsArray, num) {
    if (num > questionsArray.length) {
        console.warn(`Only ${questionsArray.length} questions available, but ${num} requested.`);
        num = questionsArray.length;
    }
    let shuffled = questionsArray.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
}

function showQuestion() {
    resetState();
    startTimer();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    difficultyElement.innerText = `Difficulty: ${currentQuestion.difficulty}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearInterval(timerInterval);
    nextButton.classList.add("hide");
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    disableButtons();

    if (correct) {
        selectedButton.classList.add("correct");
        score += 4; // + for correct answer
    } else {
        selectedButton.classList.add("wrong");
        showCorrectAnswer();
        score -= 1; // -1 for incorrect answer
    }

    // Prevent score from going below zero (optional: remove if negative score is allowed)
    if (score < 0) score = 0;

    nextButton.classList.remove("hide");
}

function showCorrectAnswer() {
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
}

function disableButtons() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}

function skipQuestion() {
    clearInterval(timerInterval);
    nextQuestion(); // No negative marking on skip
}

function showFinalScore() {
    clearInterval(timerInterval);
    questionElement.innerText = `Quiz Over! 🎉 Your Score: ${score} / ${selectedQuestions.length * 4}`; // Max score adjusted
    answerButtons.innerHTML = "";
    nextButton.classList.add("hide");
    skipButton.classList.add("hide");
    restartButton.classList.remove("hide");
    homeButton.classList.remove("hide"); // Show Home button
    difficultyElement.innerText = "";
    timerElement.innerText = "";
}

function startTimer() {
    timeLeft = 10;
    timerElement.innerText = `Time Left: ${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    timerElement.innerText = "Time's up!";
    showCorrectAnswer();
    disableButtons();
    nextButton.classList.remove("hide");
}

// Button event listeners
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
skipButton.addEventListener("click", skipQuestion);
homeButton.addEventListener("click", function () {
    window.location.href = "quizinterface.html";
});

// Start quiz on page load
startQuiz();