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
    "question": " What is the value of π (pi) rounded to two decimal places?",
    "difficulty": "Easy",
    "answers": [
      { "text": "3.14", "correct": true },
      { "text": "3.16", "correct": false },
      { "text": "3.12", "correct": false },
      { "text": "3.18", "correct": false }
    ]
  },
  {
    "question": " What is the square root of 64?",
    "difficulty": "Easy",
    "answers": [
      { "text": "8", "correct": true },
      { "text": "6", "correct": false },
      { "text": "10", "correct": false },
      { "text": "12", "correct": false }
    ]
  },
  {
    "question": " What is the sum of the angles in a triangle?",
    "difficulty": "Easy",
    "answers": [
      { "text": "180°", "correct": true },
      { "text": "90°", "correct": false },
      { "text": "360°", "correct": false },
      { "text": "270°", "correct": false }
    ]
  },
  {
    "question": " What is the next number in the sequence: 2, 4, 6, 8, _?",
    "difficulty": "Easy",
    "answers": [
      { "text": "10", "correct": true },
      { "text": "9", "correct": false },
      { "text": "12", "correct": false },
      { "text": "14", "correct": false }
    ]
  },
  {
    "question": " What is the area of a rectangle with length 5 and width 4?",
    "difficulty": "Easy",
    "answers": [
      { "text": "20", "correct": true },
      { "text": "18", "correct": false },
      { "text": "24", "correct": false },
      { "text": "16", "correct": false }
    ]
  },
  {
    "question": " What is 15% of 200?",
    "difficulty": "Medium",
    "answers": [
      { "text": "30", "correct": true },
      { "text": "25", "correct": false },
      { "text": "40", "correct": false },
      { "text": "35", "correct": false }
    ]
  },
  {
    "question": " What is the value of 3² + 4²?",
    "difficulty": "Medium",
    "answers": [
      { "text": "25", "correct": true },
      { "text": "12", "correct": false },
      { "text": "16", "correct": false },
      { "text": "9", "correct": false }
    ]
  },
  {
    "question": " What is the slope of the line y = 2x + 3?",
    "difficulty": "Medium",
    "answers": [
      { "text": "2", "correct": true },
      { "text": "3", "correct": false },
      { "text": "1", "correct": false },
      { "text": "0", "correct": false }
    ]
  },
  {
    "question": " What is the probability of rolling a 6 on a fair six-sided die?",
    "difficulty": "Medium",
    "answers": [
      { "text": "1/6", "correct": true },
      { "text": "1/3", "correct": false },
      { "text": "1/2", "correct": false },
      { "text": "1/4", "correct": false }
    ]
  },
  {
    "question": " What is the perimeter of a square with side length 5?",
    "difficulty": "Medium",
    "answers": [
      { "text": "20", "correct": true },
      { "text": "25", "correct": false },
      { "text": "15", "correct": false },
      { "text": "10", "correct": false }
    ]
  },
  {
    "question": " What is the value of sin(30°)?",
    "difficulty": "Medium",
    "answers": [
      { "text": "0.5", "correct": true },
      { "text": "0.866", "correct": false },
      { "text": "1", "correct": false },
      { "text": "0.707", "correct": false }
    ]
  },
  {
    "question": " What is the median of the numbers 3, 1, 7, 5, 9?",
    "difficulty": "Medium",
    "answers": [
      { "text": "5", "correct": true },
      { "text": "3", "correct": false },
      { "text": "7", "correct": false },
      { "text": "4", "correct": false }
    ]
  },
  {
    "question": " What is the value of log₁₀(100)?",
    "difficulty": "Medium",
    "answers": [
      { "text": "2", "correct": true },
      { "text": "1", "correct": false },
      { "text": "10", "correct": false },
      { "text": "0", "correct": false }
    ]
  },
  {
    "question": " What is the volume of a cube with side length 3?",
    "difficulty": "Medium",
    "answers": [
      { "text": "27", "correct": true },
      { "text": "9", "correct": false },
      { "text": "18", "correct": false },
      { "text": "36", "correct": false }
    ]
  },
  {
    "question": " What is the value of 5! (5 factorial)?",
    "difficulty": "Medium",
    "answers": [
      { "text": "120", "correct": true },
      { "text": "60", "correct": false },
      { "text": "24", "correct": false },
      { "text": "720", "correct": false }
    ]
  },
  {
    "question": " What is the value of x in the equation 2x + 4 = 10?",
    "difficulty": "Medium",
    "answers": [
      { "text": "3", "correct": true },
      { "text": "2", "correct": false },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false }
    ]
  },
  {
    "question": " What is the area of a circle with radius 4? (Use π = 3.14)",
    "difficulty": "Hard",
    "answers": [
      { "text": "50.24", "correct": true },
      { "text": "25.12", "correct": false },
      { "text": "12.56", "correct": false },
      { "text": "100.48", "correct": false }
    ]
  },
  {
    "question": " What is the value of tan(45°)?",
    "difficulty": "Hard",
    "answers": [
      { "text": "1", "correct": true },
      { "text": "0.5", "correct": false },
      { "text": "0.866", "correct": false },
      { "text": "0.707", "correct": false }
    ]
  },
  {
    "question": " What is the value of 2³ × 3²?",
    "difficulty": "Hard",
    "answers": [
      { "text": "72", "correct": true },
      { "text": "36", "correct": false },
      { "text": "24", "correct": false },
      { "text": "64", "correct": false }
    ]
  },
  {
    "question": " What is the probability of flipping two heads in a row with a fair coin?",
    "difficulty": "Hard",
    "answers": [
      { "text": "1/4", "correct": true },
      { "text": "1/2", "correct": false },
      { "text": "1/8", "correct": false },
      { "text": "1/16", "correct": false }
    ]
  },
  {
    "question": " What is the value of the hypotenuse in a right triangle with sides 3 and 4?",
    "difficulty": "Hard",
    "answers": [
      { "text": "5", "correct": true },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false }
    ]
  },
  {
    "question": " What is the value of 10 ÷ (2 + 3) × 4?",
    "difficulty": "Hard",
    "answers": [
      { "text": "8", "correct": true },
      { "text": "10", "correct": false },
      { "text": "12", "correct": false },
      { "text": "16", "correct": false }
    ]
  },
  {
    "question": " What is the value of sin²θ + cos²θ?",
    "difficulty": "Hard",
    "answers": [
      { "text": "1", "correct": true },
      { "text": "0", "correct": false },
      { "text": "2", "correct": false },
      { "text": "0.5", "correct": false }
    ]
  },
  {
    "question": " What is the value of the derivative of f(x) = 3x² + 2x + 1 at x = 1?",
    "difficulty": "Hard",
    "answers": [
      { "text": "8", "correct": true },
      { "text": "6", "correct": false },
      { "text": "4", "correct": false },
      { "text": "10", "correct": false }
    ]
  },
  {
    "question": " What is the value of the integral of 2x dx from 0 to 3?",
    "difficulty": "Hard",
    "answers": [
      { "text": "9", "correct": true },
      { "text": "6", "correct": false },
      { "text": "12", "correct": false },
      { "text": "18", "correct": false }
    ]
  },
  {
    "question": " What is the value of 7 × 8?",
    "difficulty": "Easy",
    "answers": [
      { "text": "56", "correct": true },
      { "text": "64", "correct": false },
      { "text": "48", "correct": false },
      { "text": "72", "correct": false }
    ]
  },
  {
    "question": " What is the value of the expression 2(x + 3) when x = 4?",
    "difficulty": "Medium",
    "answers": [
      { "text": "14", "correct": true },
      { "text": "10", "correct": false },
      { "text": "12", "correct": false },
      { "text": "16", "correct": false }
    ]
  },
  {
    "question": " What is the circumference of a circle with radius 7? (Use π = 3.14)",
    "difficulty": "Medium",
    "answers": [
      { "text": "43.96", "correct": true },
      { "text": "21.98", "correct": false },
      { "text": "153.86", "correct": false },
      { "text": "87.92", "correct": false }
    ]
  },
  {
    "question": " What is the value of cos(60°)?",
    "difficulty": "Hard",
    "answers": [
      { "text": "0.5", "correct": true },
      { "text": "0.866", "correct": false },
      { "text": "1", "correct": false },
      { "text": "0.707", "correct": false }
    ]
  },
  {
    "question": " What is the value of the determinant of the matrix [[2, 3], [4, 5]]?",
    "difficulty": "Hard",
    "answers": [
      { "text": "-2", "correct": true },
      { "text": "2", "correct": false },
      { "text": "10", "correct": false },
      { "text": "22", "correct": false }
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
