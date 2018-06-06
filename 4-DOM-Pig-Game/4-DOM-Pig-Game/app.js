/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores, roundScore, activePlayer;

score = [0,0]; // Counts total score.
roundScore = 0; // Counts round score.
activePlayer = 0; // Active player 0-1.


// Hide the dice when page loads.
document.querySelector('.dice').style.display = 'none';

// Set elements score/current to 0.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function btn () {
    //Do something here.
};

document.querySelector('.btn-roll').addEventListener('click', function () {
    
    // 1. Produce a random number.
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display result.
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Display round result only if number is not a 1.

} );







//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';

//let x = document.querySelector('#score-0').textContent;
//console.log(x);