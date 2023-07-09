window.addEventListener("DOMContentLoaded", function() {
    const rollButton = document.getElementById("roll");
    const outputDiv = document.getElementById("output");
    let score = 0; 
    let countingScore = 0;
    
    function rollDie() {
      return Math.floor(Math.random() * 6) + 1;
    } 

    rollButton.addEventListener("click", function() {
      let result = rollDie();
      if (result === 1) {
        countingScore = 0;
      } else countingScore += result; 
        outputDiv.innerText = "You rolled a " + result + ". Current score is " + countingScore;
    });
});