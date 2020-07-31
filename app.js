/********************************* 
Game rules:

- The game has 2 players, playing in rounds
- In each turn a player may roll a dice as many times as they wish.
- Each result of the dice roll is added to their round score.
- A player may choose to bank their score, in which case, their score is saved and the active player changes
- If a player rolls a '1', all of their round score is lost.active
- First player to a banked total of 100 wins.
*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice;

var x = document.querySelector('#score-' + activePlayer).textContent;
console.log(x);

document.querySelector('.dice-img').style.visibility = 'hidden';

document.querySelector('#panel-' + activePlayer).classList.add('active');

