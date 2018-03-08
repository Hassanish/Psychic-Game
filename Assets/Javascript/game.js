 
     // Creates an array that lists out all of the options (Psychic-Game).
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var guessesSoFar = [];
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 // This function is run whenever the user presses a key.
 document.onkeyup = function (event) {
     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

     // Determines which key was pressed.
     var userGuess = event.key;

     // Randomly chooses a choice from the options array. This is the Computer's guess.
     if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
      guessesSoFar[guessesSoFar.length]=userGuess;
      // if it is a new letter then decrease remaining guesses by 1
  guessesLeft--;}

     if (userGuess == computerGuess) {
         wins++;
         alert('Yee you Won!');
         guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
         guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
     }
     else if (guessesLeft == 0) {
         losses++;
         alert('Oops you Lost.');
         guessesLeft = 9;
         guessesSoFar.length = 0;
     }
     else if (userGuess !== computerGuess) {
         guessesLeft--; //decrementing the guesses left
     }
     var winhtml = document.getElementById("win")
     winhtml.innerHTML = (wins);


     var losshtml = document.getElementById("loss")
     losshtml.innerHTML = (losses);

     var Guesseslefthtml = document.getElementById("Guessesleft")
     Guesseslefthtml.innerHTML = (guessesLeft);

     var guesSeSofarhtml = document.getElementById("guesSeSofar")
     guesSeSofarhtml.innerHTML = (guessesSoFar);
     };   
