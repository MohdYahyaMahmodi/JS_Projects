const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    correctAnswer: 1
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Mercury", "Saturn"],
    correctAnswer: 2
  }
];

let score = 0;

function askQuestion(questionObj) {
  console.log(questionObj.question);
  questionObj.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  rl.question("Enter the number of your answer: ", (answer) => {
    const userAnswer = parseInt(answer);
    if (userAnswer === questionObj.correctAnswer + 1) {
      console.log("Correct!\n");
      score++;
    } else {
      console.log("Incorrect.\n");
    }

    if (quizQuestions.length > 0) {
      askQuestion(quizQuestions.shift());
    } else {
      console.log("Quiz completed!");
      console.log(`Your final score is: ${score} out of ${quizQuestions.length + score}`);
      rl.close();
    }
  });
}

console.log("Welcome to the Quiz App!\n");
askQuestion(quizQuestions.shift());
