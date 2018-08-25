var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var remainingGuesses = 9;

var yourGuesses = [];

var computerGuess = [];

window.onload = function() {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    computerGuess.push(compGuess);
    
	console.log(computerGuess[0]);
}

document.onkeyup = function(event) {
    var playerGuess = event.key;
    
    yourGuesses.push(playerGuess);
    
	console.log(computerGuess[0]);

if ((playerGuess === computerGuess[0]) && (remainingGuesses > 0)) {
	wins++;
    remainingGuesses = 9;
    
    yourGuesses.length = 0;
    
    computerGuess.length = 0;
    
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    computerGuess.push(compGuess);
    
	console.log(computerGuess[0]);
}

else if ((playerGuess !== computerGuess[0]) && (remainingGuesses > 0)) {

	remainingGuesses = remainingGuesses-1;
}

else {
    losses++;
    
    remainingGuesses = 9;
    
    yourGuesses.length = 0;
    
    computerGuess.length = 0;
    
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    computerGuess.push(compGuess);
    
	console.log(computerGuess[0]);
}

var html = "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>remaining guesses: " + remainingGuesses + "</p>" +
          "<p>Your guesses so far: " + yourGuesses + "</p>"; 

          document.querySelector('#psychic-game').innerHTML = html; 
}


        
