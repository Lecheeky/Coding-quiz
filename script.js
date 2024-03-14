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