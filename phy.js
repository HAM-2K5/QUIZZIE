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
    "question": " What is the SI unit of force?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Joule", "correct": false },
      { "text": "Newton", "correct": true },
      { "text": "Watt", "correct": false },
      { "text": "Pascal", "correct": false }
    ]
  },
  {
    "question": " Which law states that every action has an equal and opposite reaction?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Newton's First Law", "correct": false },
      { "text": "Newton's Second Law", "correct": false },
      { "text": "Newton's Third Law", "correct": true },
      { "text": "Ohm's Law", "correct": false }
    ]
  },
  {
    "question": " What is the speed of light in a vacuum?",
    "difficulty": "Easy",
    "answers": [
      { "text": "300,000 km/s", "correct": true },
      { "text": "150,000 km/s", "correct": false },
      { "text": "450,000 km/s", "correct": false },
      { "text": "600,000 km/s", "correct": false }
    ]
  },
  {
    "question": " What is the unit of electric current?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Volt", "correct": false },
      { "text": "Ohm", "correct": false },
      { "text": "Ampere", "correct": true },
      { "text": "Watt", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a scalar quantity?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Force", "correct": false },
      { "text": "Velocity", "correct": false },
      { "text": "Speed", "correct": true },
      { "text": "Acceleration", "correct": false }
    ]
  },
  {
    "question": "What is the formula for calculating work done?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Force × Distance", "correct": true },
      { "text": "Mass × Acceleration", "correct": false },
      { "text": "Pressure × Volume", "correct": false },
      { "text": "Current × Resistance", "correct": false }
    ]
  },
  {
    "question": "What is the acceleration due to gravity on Earth?",
    "difficulty": "Medium",
    "answers": [
      { "text": "9.8 m/s²", "correct": true },
      { "text": "10 m/s²", "correct": false },
      { "text": "8.5 m/s²", "correct": false },
      { "text": "12 m/s²", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a type of energy?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Kinetic", "correct": false },
      { "text": "Potential", "correct": false },
      { "text": "Thermal", "correct": false },
      { "text": "Frictional", "correct": true }
    ]
  },
  {
    "question": "What is the unit of frequency?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Hertz", "correct": true },
      { "text": "Decibel", "correct": false },
      { "text": "Ohm", "correct": false },
      { "text": "Joule", "correct": false }
    ]
  },
  {
    "question": "What is the principle behind a hydraulic lift?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Pascal's Principle", "correct": true },
      { "text": "Archimedes' Principle", "correct": false },
      { "text": "Bernoulli's Principle", "correct": false },
      { "text": "Ohm's Law", "correct": false }
    ]
  },
  {
    "question": "What is the formula for power?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Work / Time", "correct": true },
      { "text": "Force × Distance", "correct": false },
      { "text": "Mass × Acceleration", "correct": false },
      { "text": "Current × Voltage", "correct": false }
    ]
  },
  {
    "question": "What is the unit of electric charge?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Ampere", "correct": false },
      { "text": "Coulomb", "correct": true },
      { "text": "Volt", "correct": false },
      { "text": "Ohm", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a conductor?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Rubber", "correct": false },
      { "text": "Glass", "correct": false },
      { "text": "Copper", "correct": true },
      { "text": "Plastic", "correct": false }
    ]
  },
  {
    "question": "What is the unit of resistance?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Volt", "correct": false },
      { "text": "Ampere", "correct": false },
      { "text": "Ohm", "correct": true },
      { "text": "Watt", "correct": false }
    ]
  },
  {
    "question": "What is the formula for Ohm's Law?",
    "difficulty": "Medium",
    "answers": [
      { "text": "V = IR", "correct": true },
      { "text": "P = IV", "correct": false },
      { "text": "F = ma", "correct": false },
      { "text": "W = Fd", "correct": false }
    ]
  },
  {
    "question": "What is the unit of energy?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Joule", "correct": true },
      { "text": "Watt", "correct": false },
      { "text": "Newton", "correct": false },
      { "text": "Pascal", "correct": false }
    ]
  },
  {
    "question": "What is the unit of pressure?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Pascal", "correct": true },
      { "text": "Newton", "correct": false },
      { "text": "Joule", "correct": false },
      { "text": "Watt", "correct": false }
    ]
  },
  {
    "question": "What is the unit of power?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Watt", "correct": true },
      { "text": "Joule", "correct": false },
      { "text": "Newton", "correct": false },
      { "text": "Pascal", "correct": false }
    ]
  },
  {
    "question": "What is the formula for kinetic energy?",
    "difficulty": "Hard",
    "answers": [
      { "text": "½ mv²", "correct": true },
      { "text": "mgh", "correct": false },
      { "text": "Fd", "correct": false },
      { "text": "PV", "correct": false }
    ]
  },
  {
    "question": "What is the formula for gravitational potential energy?",
    "difficulty": "Hard",
    "answers": [
      { "text": "mgh", "correct": true },
      { "text": "½ mv²", "correct": false },
      { "text": "Fd", "correct": false },
      { "text": "PV", "correct": false }
    ]
  },
  {
    "question": "What is the unit of wavelength?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Meter", "correct": true },
      { "text": "Second", "correct": false },
      { "text": "Hertz", "correct": false },
      { "text": "Newton", "correct": false }
    ]
  },
  {
    "question": "What is the unit of frequency?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Hertz", "correct": true },
      { "text": "Meter", "correct": false },
      { "text": "Second", "correct": false },
      { "text": "Newton", "correct": false }
    ]
  },
  {
    "question": "What is the unit of electric potential?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Volt", "correct": true },
      { "text": "Ampere", "correct": false },
      { "text": "Ohm", "correct": false },
      { "text": "Watt", "correct": false }
    ]
  },
  {
    "question": "What is the unit of capacitance?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Farad", "correct": true },
      { "text": "Ohm", "correct": false },
      { "text": "Henry", "correct": false },
      { "text": "Tesla", "correct": false }
    ]
  },
  {
    "question": "What is the unit of magnetic flux?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Weber", "correct": true },
      { "text": "Tesla", "correct": false },
      { "text": "Henry", "correct": false },
      { "text": "Farad", "correct": false }
    ]
  },
  {
    "question": "What is the unit of inductance?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Henry", "correct": true },
      { "text": "Farad", "correct": false },
      { "text": "Weber", "correct": false },
      { "text": "Tesla", "correct": false }
    ]
  },
  {
    "question": "What is the unit of magnetic field strength?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Tesla", "correct": true },
      { "text": "Weber", "correct": false },
      { "text": "Henry", "correct": false },
      { "text": "Farad", "correct": false }
    ]
  },
  {
    "question": "What is the unit of electric field strength?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Volt per meter", "correct": true },
      { "text": "Newton per coulomb", "correct": false },
      { "text": "Joule per coulomb", "correct": false },
      { "text": "Watt per ampere", "correct": false }
    ]
  },
  {
    "question": "What is the unit of momentum?",
    "difficulty": "Hard",
    "answers": [
      { "text": "kg·m/s", "correct": true },
      { "text": "N·s", "correct": false },
      { "text": "J·s", "correct": false },
      { "text": "W·s", "correct": false }
    ]
  },
  {
    "question": "What is the unit of angular momentum?",
    "difficulty": "Hard",
    "answers": [
      { "text": "kg·m²/s", "correct": true },
      { "text": "N·m·s", "correct": false },
      { "text": "J·s", "correct": false },
      { "text": "W·s", "correct": false }
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
