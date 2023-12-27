// Define the quiz questions and answers
const quizQuestions = [
  {
    question: "What is the capital city of France?",
    choices: ["Paris", "London", "Madrid", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  }
];

// Display the quiz questions and options
function displayQuiz() {
  const quizContainer = document.getElementById("quiz");
  let quizHTML = "";

  quizQuestions.forEach((question, index) => {
    quizHTML += `<h3>Question ${index + 1}: ${question.question}</h3>`;
    
    question.choices.forEach((choice) => {
      quizHTML += `<input type="radio" name="question${index}" value="${choice}">${choice}<br>`;
    });
    
    quizHTML += "<br>";
  });

  quizHTML += `<button onclick="submitQuiz()">Submit</button>`;
  
  quizContainer.innerHTML = quizHTML;
}

// Calculate and display the quiz results
function submitQuiz() {
  let score = 0;
  
  quizQuestions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`).value;
    
    if (selectedAnswer === question.correctAnswer) {
      score++;
    }
  });
  
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizQuestions.length}!</h2>`;
}

// Call the displayQuiz function when the page loads
window.onload = displayQuiz;