let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    if(n === 0) return "rock";
    else if(n === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Rock Paper Scissors!").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Your choice is ${humanChoice}.`);
    console.log(`The computer's choice is ${computerChoice}`);

    let k = 0;
    if(humanChoice === "rock") {
        switch(computerChoice) {
            case "rock":
                k = 0;
                break;
            case "paper":
                k = -1;
                break;
            case "scissors":
                k = 1;
                break;
        }
    }
    else if(humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                k = 1;
                break;
            case "paper":
                k = 0;
                break;
            case "scissors":
                k = -1;
                break;
        }
    }
    else if(humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock":
                k = -1;
                break;
            case "paper":
                k = 1;
                break;
            case "scissors":
                k = 0;
                break;
        }
    }
    else {
        k = -1;
        console.log("INVALID input. The computer wins.");
    }

    if(k === 1) {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
        humanScore ++;
    }
    else if(k === -1) {
        console.log(`You LOSE! ${humanChoice} beats ${computerChoice}.`);
        computerScore ++;
    }
    else console.log(`TIE!`);
}

function playGame() {
    for(let i = 1; i <= 5; i++) 
        playRound(getHumanChoice(), getComputerChoice());

    console.log(' ');
    if(humanScore > computerScore) console.log(`You are WINNER! You won ${humanScore}-${computerScore}.`);
    else if(humanScore < computerScore) console.log(`You Lost. The computer won ${humanScore}-${computerScore}.`);
    else console.log(`DRAW. The game ended in a ${humanScore}-${computerScore} tie.`);
}

playGame();