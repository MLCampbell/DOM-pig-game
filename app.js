/********************************* 
Game rules:

- The game has 2 players, playing in rounds
- In each turn a player may roll a dice as many times as they wish.
- Each result of the dice roll is added to their round score.
- A player may choose to bank their score, in which case, their score is saved and the active player changes
- If a player rolls a '1', all of their round score is lost.
- First player to a banked total of 100 wins.
*/

var scores, roundScore, activePlayer, infoText, current0, current1, mutableButtons, activePanel;

infoText = document.querySelector('.info-text span');
current0 = document.getElementById('current-0');
current1 = document.getElementById('current-1');
mutableButtons = document.querySelectorAll('.btn-roll,.btn-bank');
activePanel = document.querySelectorAll('.player-0-panel,.player-1-panel');
bankButton = document.querySelector('.btn-bank');
rollButton = document.querySelector('.btn-roll');

// clear board and reset scores to 0, assign 'player 1' as active player.
var newGame = function () {
    activePlayer = 0;
    roundScore = 0;
    scores = [0, 0];
    clearCurrent();
    disableBank();
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.dice-img').classList.add('display-none');
    document.querySelector('.instruction-list').classList.remove('display-none');
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    infoText.classList.remove('wins');
    infoText.classList.remove('lost');
    infoText.textContent = ("Roll dice to start game.");
    rollButton.disabled = false;
    rollButton.classList.remove('no-hover');
    console.log("Game start. The active player is player " + (activePlayer + 1));
}

// clear current score function
var clearCurrent = function () {
    current0.textContent = '0';
    current1.textContent = '0';
}

var disableBank = function () {
    bankButton.disabled = true;
    bankButton.classList.add('no-hover');
}

// change active player and clear round score function
var changePlayer = function () {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    console.log("The active player is now player " + (activePlayer + 1));
    infoText.textContent = "Player " + (activePlayer + 1);
    clearCurrent();
    activePanel.forEach(element => {
        element.classList.toggle('active');
    });
};

// Initialise new game and disable bank button until first roll.
newGame();
disableBank();

// function of click event on 'roll dice' button
document.querySelector('.btn-roll').addEventListener('click', function () {

    // Hide instruction list and display dice
    document.querySelector('.instruction-list').classList.add('display-none');
    document.querySelector('.dice-img').classList.remove('display-none');
    
    // enable bank button if disabled
    bankButton.disabled = false;
    bankButton.classList.remove('no-hover');


    // random number.
    var dice = Math.floor(Math.random() * 6) + 1;

    // display the result.
    var diceDOM = document.querySelector('.dice-img')
    document.querySelector('.dice-img').style.visibility = 'visible';
    diceDOM.src = './img/dice' + dice + '.png';

    // update round score IF the rolled number is not a 1.

    if (dice !== 1) {
        roundScore += dice
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        infoText.textContent = "Player " + (activePlayer + 1);
        infoText.classList.remove('lost');
    } else {
        disableBank();
        changePlayer();
        infoText.classList.add('lost');
        infoText.textContent = "Score lost!";
    }

});

// function of click event on the 'bank score' button.
bankButton.addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    console.log(scores);
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    infoText.classList.remove('lost');
    disableBank();
    if (scores[activePlayer] >= 100) {
        infoText.classList.add('wins');
        infoText.textContent = "Player " + (activePlayer + 1) + (" WINS!");
        mutableButtons.forEach(element => {
            element.disabled = true;
            element.classList.add('no-hover');
        });
    } else {
        changePlayer();
    }


});

// new game event handler;
document.querySelector('.btn-new').addEventListener('click', newGame);