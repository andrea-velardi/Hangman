# Hangman

Description: This game is a "Kill Bill" themed Hangman Game. When the page loads, the player will try to guess the main character's name (from the Kill Bill movies). The characters are randomly generated. The player has five chances to guess per character. If the player runs out of guesses then the game will display "Loser" and keep track of losses. If the player guesses the correct character within five guesses, then the game will display "Winner" and also keep track of the wins. The game will also make the player aware of letters already guessed for that round. Try it out! It is pretty cool!

Author: Drea Velardi 

Problem: Create a hangman game that keeps track of wins, losses, and previously used letters (guesses). While randomly generating new words for the player to guess. 

Solution with code: 
Created random word generator using .floor(Math.random()) function to randomly generate word from my word bank

Then use a for loop and .push to generate the blanks for player to guess and document.onkeyup to capture use guess

Create if else statements to verify if the user guessed correctly, incorrectly, or guessed letter before

Finally, create a startGame() function by clicking the enter button 