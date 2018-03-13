
var wordBank = ["blackmamba", "cottonmouth", "sidewinder"]; 
var wins = 0; 
var loses = 0; 
var wrongLetters = []; 
var guessesLeft = 10; 
var underScores = []; 
var userGuesses = []; 
var randWord; 
var resetGame = false;
var correctGuesses = 0; 

function startGame(){    
    // picks a random word 
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    console.log('random Word = ' + randWord);

    underScores = [];
    //this will also print out the picture to the page of the new random word you need to guess
    document.getElementById('picture').setAttribute('src', 'assets/images/'+randWord+'.jpg');

    for(var i = 0; i < randWord.length; i++)
    {
        underScores.push(' _ '); 
    }
    //prints what you want onto the page using textContent (prints underScores) and join() gets rid of commas
    document.getElementById('word-blanks').textContent = underScores.join(' ');
   
    //reset the guessesleft (the players lives)
    wrongLetters = []; 
    userGuesses = [];
    guessesLeft = 5;
    correctGuesses = 0;

    //Need to reset all fields to fresh page
    
    document.getElementById('guesses-left').textContent = guessesLeft; 
    document.getElementById('wrongLetters').innerHTML = wrongLetters;
    document.getElementById('userGuesses').innerHTML = "";
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('loses').innerHTML = loses;
}

function winLose(){
    if(correctGuesses >= randWord.length){
        wins++;
        document.getElementById('directions').innerHTML = 'Winner! Press enter to play again'
    }
    else if(guessesLeft === 0){  
        loses++;
        document.getElementById('directions').innerHTML = 'Loser! Press enter to play again'
    }
}

//Function to check if the user has guess letter before
function isNewGuess(guess) {
    var isNewGuess = true;
    for(var i = 0; i < userGuesses.length; i++){
        if(guess === userGuesses[i]){
            isNewGuess = false;
        }
    }
    return isNewGuess
}

//captures what the user types by using the document.onkeyup
document.onkeyup = function(event){
    userGuess = event.key.toLowerCase();
    keyCode = event.keyCode;

    document.getElementById('directions').innerHTML = 'Press any Key to Get Started! (Hint - who is this?)'
    //all characters are #s or key codes - 65 is a and 90 is z 
    if(keyCode >= 65 && keyCode <= 90){
        //Calls function to determine if the user input is a new guess
        if(isNewGuess(userGuess)){
            //checking if the letter exists inside of the word
            //if it does it will do what's inside the console log    
            if(randWord.indexOf(userGuess) > -1){
                for(var i = 0; i < randWord.length; i++){ // each user guess goes through the loop to see if the letter is correct
                    if(randWord[i] === userGuess){
                        underScores[i] = userGuess;
                        document.getElementById('word-blanks').innerHTML = underScores.join(' ');
                        correctGuesses++;
                    }
                }     
            }
            //pushing the incorrect guesses
            else {
                wrongLetters.push(userGuess); 
                guessesLeft--;
                //Updating the html elements to reflect the users incorrect inputs
                document.getElementById('guesses-left').innerHTML = guessesLeft;
                document.getElementById('wrongLetters').innerHTML = wrongLetters.join(' , ');
            }
            userGuesses.push(userGuess);
            document.getElementById('userGuesses').innerHTML = userGuesses.join(' , ') 
        } else {
            document.getElementById('directions').innerHTML = 'You\'ve already guessed '+userGuess;
        }
        winLose();
    }
    //Added to read an <Enter> keyboard input to reset game
    else if(keyCode === 13) {
        startGame();
    }
}

// a variable that is a function - 
document.onreadystatechange = function () {
    var state = document.readyState;

    if(state == 'complete'){
        console.log('ReadyState');
        startGame()
    }
}