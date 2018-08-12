 
     // Creates an array that lists out all of the options (Psychic-Game).
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var guessesSoFar = [];
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 // Whenever the user presses a key this function is run .
 document.onkeyup = function (event) {
     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

     // Determines which key was pressed.
     var userGuess = event.key;

     // This is the Computer's guess randomly.
     if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
      guessesSoFar[guessesSoFar.length]=userGuess;
      // if it is a new letter then decrease remaining guesses by 1
  guessesLeft--;}

     if (userGuess == computerGuess) {
         wins++;
         alert('Yee you Won!');
         guessesLeft = 9; //resets the guesses back to the beggining 9 
         guessesSoFar.length = 0; //This removes everything that has been guessed, so that the guesses from the previous round don't show
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
  
// Taking the tallies and displaying them in HTML    
     var winhtml = document.getElementById("win")
     winhtml.innerHTML = (wins);

     var losshtml = document.getElementById("loss")
     losshtml.innerHTML = (losses);

     var Guesseslefthtml = document.getElementById("Guessesleft")
     Guesseslefthtml.innerHTML = (guessesLeft);

     var guesSeSofarhtml = document.getElementById("guesSeSofar")
     guesSeSofarhtml.innerHTML = (guessesSoFar);
     };   
