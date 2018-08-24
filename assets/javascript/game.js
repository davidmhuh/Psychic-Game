var wins = 0;
var losses = 0;
var yourGuess = [];
var guessLeft = 9;
var whatLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// .. this homework took me a long time :( ..//

document.onkeyup = function() {
var userChoice = event.key.toLowerCase();
var computerGuess = whatLetter[Math.floor(Math.random() * whatLetter.length)];

if (userChoice === computerGuess) {
     wins++;
     alert("gg");
     guessLeft = 9;
}

else{
    guessLeft--;
}

if (guessLeft === 0) {
    losses++
    alert("thanks for the house")
    guessLeft = 9;
}

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");   
    var playerChoiceText = document.getElementById("userChoice-text");
    var yourGuessText = document.getElementById("guessesLeft-text");
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    playerChoiceText.textContent = "Player chooses: " + userChoice;
    yourGuessText.textContent = "Your guesses remaining: " + guessLeft;
}


