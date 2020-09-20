/********************************* 
Game rules:

- The game has 2 players, playing in rounds
- In each turn a player may roll a dice as many times as they wish.
- Each result of the dice roll is added to their round score.
- A player may choose to bank their score, in which case, their score is saved and the active player changes
- If a player rolls a '1', all of their round score is lost.
- First player to a banked total of 100 wins.
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice-img').style.visibility = 'hidden';

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';

document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {

    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice-img')
    document.querySelector('.dice-img').style.visibility = 'visible';
    diceDOM.src = './img/dice' + dice + '.png';

    // 3. Update round score IF the rolled number is not a 1

    if (dice !== 1) {
        roundScore += dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.info-text span').textContent = "Player " + (activePlayer + 1);
        document.querySelector('.info-text span').classList.remove("lost");
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.info-text span').classList.add("lost");
        document.querySelector('.info-text span').textContent = "Score LOST!";
    }

});

