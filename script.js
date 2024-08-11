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
    humanContext.textContent = `Your choice is ${humanChoice}.`;
    computerContext.textContent = `The computer's choice is ${computerChoice}`;

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
        roundContext.textContent = "INVALID input. The computer wins.";
        console.log();
    }

    if(k === 1) {
        roundContext.textContent = `You WIN! ${humanChoice} beats ${computerChoice}.`;
        humanScore ++;
    }
    else if(k === -1) {
        roundContext.textContent = `You LOSE! ${humanChoice} beats ${computerChoice}.`;
        computerScore ++;
    }
    else roundContext.textContent = `You LOSE! ${humanChoice} beats ${computerChoice}.`;

    humanScoreBoard.textContent = `Your score: ${humanScore}`;
    computerScoreBoard.textContent = `Computer score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        const result = document.createElement("div");
        document.body.appendChild(result);

        if(humanScore > computerScore) result.textContent = `You are WINNER! You won ${humanScore}-${computerScore}.`;
        else if(humanScore < computerScore) result.textContent = `You Lost. The computer won ${humanScore}-${computerScore}.`;
        else result.textContent =   `DRAW. The game ended in a ${humanScore}-${computerScore} tie.`;
    }
}

function playGame() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

const newDiv = document.createElement("div");

const humanScoreBoard = document.createElement("p");
const computerScoreBoard = document.createElement("p");

const humanContext =  document.createElement("p");
const computerContext =  document.createElement("p");
const roundContext =  document.createElement("p");

newDiv.appendChild(humanScoreBoard);
newDiv.appendChild(computerScoreBoard);

humanScoreBoard.textContent = `Your score: ${humanScore}`;
computerScoreBoard.textContent = `Computer score: ${computerScore}`;

newDiv.appendChild(humanContext);
newDiv.appendChild(computerContext);
newDiv.appendChild(roundContext);

document.body.appendChild(newDiv);
newDiv.setAttribute("style", "text-align: center;");

playGame();