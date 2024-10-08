const answers = {
  q1: "Chicken Curry",
  q2: "Drums",
  q3: "Gaming",
  q4: "July 11",
  q5: "Pangasinan"
};

function checkScore() {
  let score = 0;
  const totalQuestions = Object.keys(answers).length;

  for (let question in answers) {
      const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
      if (selectedOption && selectedOption.value === answers[question]) {
          score++;
      }
  }

  const resultElement = document.getElementById('result');
  let message;

  if (score === totalQuestions) {
      message = "Perfect! You know me very well!";
  } else if (score === totalQuestions - 1) {
      message = "Great job! You have a good understanding.";
  } else if (score === totalQuestions - 2) {
      message = "Not bad! You might want to brush up on a few things.";
  } else if (score === 1) {
      message = "Yikes! Let’s have a chat.";
  } else {
      message = "Better luck next time!";
  }

  resultElement.textContent = `You scored ${score} out of ${totalQuestions}. ${message}`;
}

function resetQuiz() {
  document.getElementById('quiz-form').reset();
  document.getElementById('result').textContent = '';
}

document.getElementById('submit-btn').addEventListener('click', checkScore);
document.getElementById('reset-btn').addEventListener('click', resetQuiz);
