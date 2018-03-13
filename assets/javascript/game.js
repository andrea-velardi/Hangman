var wordBank = ["blackmamba", "cottonmouth", "sidewinder"]; 
var wins = 0; 
var loss = 0; 
var wrongLetter = []; 
var guessesLeft = 9; 
var underScores = []; 
var userGuesses = []; 
var randWord; 
var winCounter = 0; 

function startGame(){
   // picks a random word 
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    console.log('random Word = ' + randWord); 


    for(var i = 0; i < randWord.length; i++)
    {
        underScores.push(' _ ');      
    }
    //prints what you want onto the page using textContent (prints underScores) and join() gets rid of commas
    document.getElementById('word-blanks').textContent = underScores.join(' ') 
   
    //reset the guessesleft (the players lives)
    wrongLetter = []; 
    guessesLeft = 10; 



    //HTML for the guesses-left
    document.getElementById('guesses-left').textContent = guessesLeft; 
}
function winLose(){
    if(winCounter === randWord.length){
        alert('Winner'); 
    }
    else if(guessesLeft === 0){ 
        alert('Loser'); 
    }
}
//captures what the user types by using the document.onkeyup
document.onkeyup = function(event){
    userGuesses = event.key; 
    //checking if the letter exists inside of the word
    //if it does it will do what's inside the console log    
    if(randWord.indexOf(userGuesses) > -1){
        for(var i = 0; i < randWord.length; i++){ // each user guess goes through the loop to see if the letter is correct
            if(randWord[i] === userGuesses){
                underScores[i] = userGuesses;
                console.log(underScores);
                winCounter++; 
                winLose(); 
            }
        }     
    }
    //pushing the incorrect guesses
    else{
        wrongLetter.push(userGuesses); 
        guessesLeft--; 
        console.log(wrongLetter); 
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
    



      




