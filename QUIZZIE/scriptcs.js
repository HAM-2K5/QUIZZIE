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
    "question": " Which of the following is NOT a type of semiconductor memory?",
    "difficulty": "Easy",
    "answers": [
      { "text": "SRAM", "correct": false },
      { "text": "DRAM", "correct": false },
      { "text": "Flash Memory", "correct": false },
      { "text": "Magnetic Disk", "correct": true }
    ]
  },
  {
    "question": " Which is the correct sequence of stages in the fetch-execute cycle?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Fetch → Decode → Execute", "correct": true },
      { "text": "Fetch → Execute → Decode", "correct": false },
      { "text": "Decode → Fetch → Execute", "correct": false },
      { "text": "Execute → Fetch → Decode", "correct": false }
    ]
  },
  {
    "question": " The 'Von Neumann architecture' is based on the use of:",
    "difficulty": "Medium",
    "answers": [
      { "text": "A central processor with a single memory", "correct": true },
      { "text": "Two separate memories for instructions and data", "correct": false },
      { "text": "A distributed processing system", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": " What is the main difference between SRAM and DRAM?",
    "difficulty": "Medium",
    "answers": [
      { "text": "SRAM is slower than DRAM", "correct": false },
      { "text": "DRAM is faster than SRAM", "correct": false },
      { "text": "SRAM is volatile, while DRAM is non-volatile", "correct": false },
      { "text": "SRAM does not need to be refreshed, but DRAM does", "correct": true }
    ]
  },
  {
    "question": " Which of the following components is the 'brain' of the computer?",
    "difficulty": "Easy",
    "answers": [
      { "text": "ALU", "correct": false },
      { "text": "CPU", "correct": true },
      { "text": "RAM", "correct": false },
      { "text": "Cache", "correct": false }
    ]
  },
  {
    "question": " In an operating system, which of the following is responsible for process scheduling?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Kernel", "correct": true },
      { "text": "Memory manager", "correct": false },
      { "text": "File system", "correct": false },
      { "text": "User interface", "correct": false }
    ]
  },
  {
    "question": " Which instruction format includes an operand and an operation code?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Zero-address instruction", "correct": false },
      { "text": "One-address instruction", "correct": false },
      { "text": "Two-address instruction", "correct": true },
      { "text": "Three-address instruction", "correct": false }
    ]
  },
  {
    "question": " Which of the following is NOT a characteristic of a RISC processor?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Large number of instructions", "correct": true },
      { "text": "Simple instructions", "correct": false },
      { "text": "Small instruction set", "correct": false },
      { "text": "Load/Store architecture", "correct": false }
    ]
  },
  {
    "question": " In a computer network, the device that forwards data packets between different networks is called:",
    "difficulty": "Medium",
    "answers": [
      { "text": "Router", "correct": true },
      { "text": "Switch", "correct": false },
      { "text": "Hub", "correct": false },
      { "text": "Repeater", "correct": false }
    ]
  },
  {
    "question": " Which of the following is the fastest type of memory in a computer system?",
    "difficulty": "Easy",
    "answers": [
      { "text": "Cache Memory", "correct": true },
      { "text": "Main Memory (RAM)", "correct": false },
      { "text": "Hard Disk", "correct": false },
      { "text": "Optical Storage", "correct": false }
    ]
  },
  {
    "question": " Which of the following algorithms has a time complexity of O(n log n) in the average case?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Bubble Sort", "correct": false },
      { "text": "Merge Sort", "correct": true },
      { "text": "Quick Sort", "correct": false },
      { "text": "Insertion Sort", "correct": false }
    ]
  },
  {
    "question": " In a binary search tree, the left child of a node contains:",
    "difficulty": "Medium",
    "answers": [
      { "text": "A value greater than the node's value", "correct": false },
      { "text": "A value equal to the node's value", "correct": false },
      { "text": "A value less than the node's value", "correct": true },
      { "text": "A value that is randomly chosen", "correct": false }
    ]
  },
  {
    "question": " Which of the following is a feature of the C programming language?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Object-oriented", "correct": false },
      { "text": "Procedural", "correct": true },
      { "text": "Functional", "correct": false },
      { "text": "Declarative", "correct": false }
    ]
  },
  {
    "question": " Which of the following is NOT a type of software?",
    "difficulty": "Easy",
    "answers": [
      { "text": "System software", "correct": false },
      { "text": "Application software", "correct": false },
      { "text": "Compiler", "correct": false },
      { "text": "Microprocessor", "correct": true }
    ]
  },
  {
    "question": " Which of the following is true about a virtual memory system?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Virtual memory increases the physical memory of a system.", "correct": false },
      { "text": "It is stored on the CPU cache.", "correct": false },
      { "text": "It uses the hard disk space to simulate additional RAM.", "correct": true },
      { "text": "It does not allow programs to exceed the physical memory size.", "correct": false }
    ]
  },
  {
    "question": " Which of the following is the first step in the software development life cycle?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Coding", "correct": false },
      { "text": "Testing", "correct": false },
      { "text": "Requirement Analysis", "correct": true },
      { "text": "Design", "correct": false }
    ]
  },
  {
    "question": " Which type of operating system scheduling algorithm uses the shortest burst time next?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Round Robin", "correct": false },
      { "text": "First-Come-First-Serve (FCFS)", "correct": false },
      { "text": "Shortest Job Next (SJN)", "correct": true },
      { "text": "Priority Scheduling", "correct": false }
    ]
  },
  {
    "question": " Which is a feature of the 'Waterfall model' of software development?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Iterative design", "correct": false },
      { "text": "Requirement phase is revisited after implementation", "correct": false },
      { "text": "Phases are carried out sequentially", "correct": true },
      { "text": "Continuous delivery of software", "correct": false }
    ]
  },
  {
    "question": " What is the time complexity of accessing an element in an array?",
    "difficulty": "Easy",
    "answers": [
      { "text": "O(n)", "correct": false },
      { "text": "O(log n)", "correct": false },
      { "text": "O(1)", "correct": true },
      { "text": "O(n^2)", "correct": false }
    ]
  },
  {
    "question": " What is the key difference between a compiler and an interpreter?",
    "difficulty": "Medium",
    "answers": [
      { "text": "A compiler translates the code line by line, while an interpreter translates the entire code at once.", "correct": false },
      { "text": "A compiler translates the entire code at once, while an interpreter translates the code line by line.", "correct": true },
      { "text": "A compiler is used for dynamic languages, while an interpreter is used for static languages.", "correct": false },
      { "text": "A compiler and interpreter perform the same function but in different ways.", "correct": false }
    ]
  },
  {
    "question": " The memory unit in a computer system consists of:",
    "difficulty": "Easy",
    "answers": [
      { "text": "Registers", "correct": false },
      { "text": "Cache", "correct": false },
      { "text": "RAM and ROM", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": " In the context of data structures, which of the following is a characteristic of a doubly linked list?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Each node has two pointers (one to the next node and one to the previous node)", "correct": true },
      { "text": "It supports quick access by index", "correct": false },
      { "text": "It has only one pointer (to the next node)", "correct": false },
      { "text": "It has constant-time access for insertion at arbitrary positions", "correct": false }
    ]
  },
  {
    "question": " Which type of software is responsible for managing hardware resources and providing a user interface?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Application Software", "correct": false },
      { "text": "System Software", "correct": true },
      { "text": "Middleware", "correct": false },
      { "text": "Utility Software", "correct": false }
    ]
  },
  {
    "question": " Which of the following sorting algorithms is stable?",
    "difficulty": "Hard",
    "answers": [
      { "text": "Quick Sort", "correct": false },
      { "text": "Merge Sort", "correct": true },
      { "text": "Heap Sort", "correct": false },
      { "text": "Selection Sort", "correct": false }
    ]
  },
  {
    "question": " Which of the following is NOT true about a stack data structure?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Follows the Last In First Out (LIFO) principle", "correct": false },
      { "text": "Can be implemented using arrays or linked lists", "correct": false },
      { "text": "Elements are added and removed from the front", "correct": true },
      { "text": "Used in function calls and recursion", "correct": false }
    ]
  },
  {
    "question": " Which of the following types of processors is designed to execute a specific set of tasks?",
    "difficulty": "Medium",
    "answers": [
      { "text": "General-purpose processor", "correct": false },
      { "text": "Embedded processor", "correct": true },
      { "text": "Supercomputer", "correct": false },
      { "text": "Vector processor", "correct": false }
    ]
  },
  {
    "question": " Which of the following is the purpose of a control unit in a computer?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Perform arithmetic and logic operations", "correct": false },
      { "text": "Fetch, decode, and execute instructions", "correct": true },
      { "text": "Store data", "correct": false },
      { "text": "Manage input and output devices", "correct": false }
    ]
  },
  {
    "question": " Which data structure is used in the implementation of a recursion?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Stack", "correct": true },
      { "text": "Queue", "correct": false },
      { "text": "Linked List", "correct": false },
      { "text": "Array", "correct": false }
    ]
  },
  {
    "question": " Which of the following is an example of a peer-to-peer network?",
    "difficulty": "Medium",
    "answers": [
      { "text": "Client-server network", "correct": false },
      { "text": "Distributed system", "correct": false },
      { "text": "File sharing between two computers without a server", "correct": true },
      { "text": "ATM network", "correct": false }
    ]
  },
  {
    "question": " Which of the following protocols is used to transfer web pages?",
    "difficulty": "Easy",
    "answers": [
      { "text": "FTP", "correct": false },
      { "text": "SMTP", "correct": false },
      { "text": "HTTP", "correct": true },
      { "text": "IMAP", "correct": false }
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