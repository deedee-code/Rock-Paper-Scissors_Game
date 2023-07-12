const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(player) {
    const computerSelected = pickRandomNumber();

    let result = '';

    if (player === 'rock') {
        if (computerSelected === 'rock') {
            result = 'Tie.';
        } else if (computerSelected === 'paper') {
            result = 'You lose.';
        } else if (computerSelected === 'scissors') {
            result = 'You win.'
        }

    } else if (player === 'paper') {
        if (computerSelected === 'rock') {
            result = 'You win.';
        } else if (computerSelected === 'paper') {
            result = 'Tie.';
        } else if (computerSelected === 'scissors') {
            result = 'You lose.';
        }

    } else if (player === 'scissors') {
        if (computerSelected === 'rock') {
            result = 'You lose.';
        } else if (computerSelected === 'paper') {
            result = 'You win.';
        } else if (computerSelected === 'scissors') {
            result = 'Tie.';
        }
        
    }

    if (result === 'You win.') {
        score.wins ++;
    }else if (result === 'You lose.') {
        score.losses ++;
    }else if (result === 'Tie.') {
        score.ties ++;
    };

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You picked ${player} - computer picked ${computerSelected}`;
    
};

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Your Wins: ${score.wins}, Your Losses: ${score.losses}, Your Ties: ${score.ties}`;
}

function pickRandomNumber() {
    const randomNumber = Math.random();

    let computerSelected = ''
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerSelected = 'rock'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerSelected = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerSelected = 'scissors'
    }

    return computerSelected;
};