window.addEventListener("DOMContentLoaded", function() {
    const rollButton = document.getElementById("roll");
    const outputDiv = document.getElementById("output");
    
    function rollDie() {
      return Math.floor(Math.random() * 6) + 1;
    } 

    rollButton.addEventListener("click", function() {
      let result = rollDie();
      outputDiv.innerText = "You rolled a " + result;
    });
});