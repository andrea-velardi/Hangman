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

function startGame(reset){    
    // picks a random word 
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    console.log('random Word = ' + randWord);

    underScores = [];

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

    //Need to reset all fields to "refresh" page
    document.getElementById('guesses-left').textContent = guessesLeft; 
    document.getElementById('wrongLetters').innerHTML = wrongLetters;
    document.getElementById('userGuesses').innerHTML = "";
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('loses').innerHTML = loses;
}

function winLose(){
    if(correctGuesses >= randWord.length){
        alert('Winner');
        wins++;
        startGame();
    }
    else if(guessesLeft === 0){ 
        alert('Loser'); 
        loses++;
        startGame();
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

    if(keyCode >= 65 && keyCode <= 90){
        document.getElementById('userGuesses').innerHTML = userGuess
        
        if(isNewGuess(userGuess)){
            //checking if the letter exists inside of the word
            //if it does it will do what's inside the console log    
            if(randWord.indexOf(userGuess) > -1){
                for(var i = 0; i < randWord.length; i++){ // each user guess goes through the loop to see if the letter is correct
                    if(randWord[i] === userGuess){
                        userGuesses.push(userGuess);
                        underScores[i] = userGuess;
                        document.getElementById('word-blanks').innerHTML = underScores.join(' ');
                        console.log(underScores)
                        correctGuesses++;
                    }
                }     
            }
            //pushing the incorrect guesses
            else {
                wrongLetters.push(userGuess); 
                userGuesses.push(userGuess)
                guessesLeft--;
                document.getElementById('guesses-left').innerHTML = guessesLeft;
                document.getElementById('wrongLetters').innerHTML = wrongLetters.join(' , ');
                console.log(wrongLetters); 
            }   
        } else {
            console.log('Already guess that biatch!')
        }

        winLose();
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
    