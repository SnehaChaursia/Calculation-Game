let message = document.getElementById("message");
let score = 0; // Player's score
let num1, num2, correctAnswer, operation;

// Generate a new math question
function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
  num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ["+", "-", "*"];
  operation = operations[Math.floor(Math.random() * operations.length)]; // Randresult
  // Calculate the correct answer
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
   
  }

  // Display the question
  document.getElementById("question").textContent = `Solve: ${num1} ${operation} ${num2}`;
}

// Check player's answer
document.getElementById("submit").addEventListener("click", () => {
  const userinp = parseFloat(document.getElementById("answer").value);
  

  
  if (userinp === result) {
    score++;
    message.innerHTML="WOW! You Are Genius🎉";
  }
  
    else {
    message.innerHTML=(`Wrong! The correct answer was ${result}.`);
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("answer").value = ""; // Clear the input
  generateQuestion(); // Generate a new question
});

// Start the game with the first question
generateQuestion();


