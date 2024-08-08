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
            case "paper":
                k = -1;
            case "scissors":
                k = 1;
        }
    }
    if(humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                k = 1;
            case "paper":
                k = 0;
            case "scissors":
                k = -1;
        }
    }
    if(humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock":
                k = -1;
            case "paper":
                k = 1;
            case "scissors":
                k = 0;
        }
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
    if(humanScore > computerScore) console.log(`You are WINNER! You won by ${humanScore} to ${computerScore}.`);
    else if(humanScore < computerScore) console.log(`You Lost. The computer won by ${computerScore} to ${humanScore}.`);
    else console.log(`DRAW. The game tied by ${humanScore} to ${computerScore}.`);
}

playGame();