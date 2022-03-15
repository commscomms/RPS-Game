let playerScore = 0;
let computerScore = 0;
let computerMove = 0;
// for computerMove, 0 = rock, 1 = paper, 2 = scissors.
let computerChoice = '';

function restart(){
    console.log("restart");
    location.reload();
}

function winCard() {
    if (playerScore == 5) {
        console.log("winner");
        document.getElementById("Main").style.animation="mymove 5s";
        document.getElementById("Main").innerHTML = `<strong>YOU WIN!</strong> <br> <button onclick="restart('restart')">Restart</button>`;
    } else if (computerScore == 5) {
        console.log("loser")
        document.getElementById("Main").style.animation="mymove 5s"
        document.getElementById("Main").innerHTML = `<strong>YOU LOSE!</strong> <br>     <button onclick="restart('restart')">Restart</button>`;
    }
}

function battle(playerChoice){
    computerMove = Math.floor(Math.random() * 3);

    if (playerChoice == 'rock' && computerMove == 0) {
        console.log("You both chose rock");
        console.log('You tied.');

    } else if (playerChoice == 'rock' && computerMove == 1) {
        console.log('You chose rock');
        console.log("Enemy chose paper.");
        console.log('You lose.');
        computerScore++;

    } else if (playerChoice == 'rock' && computerMove == 2) {
        console.log('You chose rock');
        console.log("Enemy chose scissors.");
        console.log("You win");
        playerScore++;
        
    } else if (playerChoice == 'paper' && computerMove == 0) {
        console.log('You chose paper');
        console.log("Enemy chose rock.");
        console.log('You win.');
        playerScore++;

    } else if (playerChoice == 'paper' && computerMove == 1) {
        console.log('You both chose paper');
        console.log('You tied.');

    } else if (playerChoice == 'paper' && computerMove == 2) {
        console.log('You chose paper');
        console.log('Enemy chose scissors.');
        console.log('You lose.');
        computerScore++;

    } else if (playerChoice == 'scissors' && computerMove == 0) {
        console.log('You chose scissors');
        console.log('Enemy chose rock.');
        console.log('You lose.');
        computerScore++;

    } else if (playerChoice == 'scissors' && computerMove == 1) {
        console.log('You chose scissors');
        console.log('Enemy chose paper.');
        console.log('You win.');
        playerScore++;

    } else {
        console.log('You both chose scissors');
        console.log('You tied.');
    }
    winCard();
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}