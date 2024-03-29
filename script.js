var startScreen = document.querySelector(".start")
var startQuizButton = document.querySelector("#start")
var questionElement = document.querySelector("#question-title")
var revealElement = document.querySelector(".hide")
var answerButton = document.querySelector("#choices")
var isCorrect = document.querySelector("#feedback")

var quiz = [
    {
        question: "Commonly used data types DO NOT Include:",
        answers: [
            {text: "strings", correct: "false"},
            {text: "booleans", correct: "false"},
            {text: "alerts", correct: "true"},
            {text: "numbers", correct: "false"},
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within __",
        answers: [
            {text: "quotes", correct: "false"},
            {text: "curly brackets", correct: "false"},
            {text: "parentheses", correct: "true"},
            {text: "square brackets", correct: "false"},
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store __",
        answers: [
            {text: "numbers and strings", correct: "false"},
            {text: "other arrays", correct: "false"},
            {text: "booleans", correct: "false"},
            {text: "all of the above", correct: "true"},
        ]
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables.",
        answers: [
            {text: "commas", correct: "false"},
            {text: "curly brackets", correct: "false"},
            {text: "quotes", correct: "true"},
            {text: "parantheses", correct: "false"},
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "JavaScript", correct: "false"},
            {text: "terminal / bash", correct: "false"},
            {text: "for loops", correct: "false"},
            {text: "console.log", correct: "true"},
        ]
    }
];


let currentQuestionIndex = 0
let score = 0
let timer = 0
let timeLeft = 60

function startQuiz() {
    let hideState = document.querySelector(".start")
    hideState.classList.add('hide')

    startTimer()
    showQuestion();
}

function startTimer() {
    timer = setInterval(function() {
        document.querySelector("#time").textContent = timeLeft
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            endQuiz()
        }
    }, 1000);
}

function showQuestion(){

    answerButton.innerHTML = "";

    revealElement.classList.remove("hide")
    var currentQuestion = quiz[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(function(answer) {
        var button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('button'); 
        answerButton.appendChild(button);
        button.addEventListener("click", function(){
            selectAnswer(answer.text)
        });
    });
};

function selectAnswer(selectedAnswer){
    var currentQuestion = quiz[currentQuestionIndex];
    var displayCorrect = document.querySelector("#feedback")

    if (currentQuestion.answers.find(answer => answer.correct === "true").text === selectedAnswer){
        isCorrect.textContent = "Correct!";
        displayCorrect.classList.remove("hide")
        displayCorrect.textContent = "Correct!"
        score++;
    } else{
        isCorrect.textContent = "Incorrect";
        displayCorrect.classList.remove("hide")
        displayCorrect.textContent = "Incorrect! -10 seconds"
        timeLeft-=10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length){
        showQuestion();
    } else{
        endQuiz();
    }
}


function endQuiz() {
    clearInterval(timer);

    var hideElement = document.querySelector("#questions");
    hideElement.classList.add("hide");

    var viewScorePage = document.querySelector("#end-screen");
    viewScorePage.classList.remove("hide");

    var totalScore = document.querySelector("#final-score");
    totalScore.textContent = score;

    var submitButton = document.querySelector("#submit");
    var initialsInput = document.querySelector("#initials"); 

    submitButton.addEventListener("click", function () { 
        var initials = initialsInput.value.trim();

        if (initials !== "") {
            var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
            highscores.push({ initials: initials, score: score });
            localStorage.setItem("highscores", JSON.stringify(highscores));


            window.location.href = "highscores.html";
        } else {
            alert("Please enter your initials");
        }
    });
}


function displayHighscores() {
    var highscoresList = document.querySelector("#highscores");
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {
        return b.score - a.score; 
    });

    highscores.forEach(function(score) {
        var li = document.createElement("li");
        li.textContent = score.initials + ": " + score.score;
        highscoresList.appendChild(li);
    });

    var submit = document.querySelector("#clear")
    submit.addEventListener("click", function(){
    highscoresList.remove()
    localStorage.clear()
    
})
}

if (window.location.href.includes("highscores.html")) {
    displayHighscores();
}