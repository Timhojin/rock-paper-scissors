let humanScore = 0, computerScore = 0;

function getHumanSelection(buttonClicked) {
    return buttonClicked.id;
}

function getComputerSelection() {
    let n = Math.floor(Math.random() * 3);
    if(n === 0) return "rock";
    else if(n === 1) return "paper";
    else return "scissors";
}

function roundResult(humanChoice, computerChoice) {
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

    return k;
}

function playGame() {
    container.setAttribute("style", "display: flex;");
    startContainer.setAttribute("style", "display: none;");

    const scoreBoard = document.createElement("div");
    const human = document.createElement("h3");
    const computer = document.createElement("h3");

    scoreBoard.setAttribute("style", "display: flex; justify-content: center; gap: 40px;");
    human.textContent = `Your score: ${humanScore}`;
    computer.textContent = `Computer score: ${computerScore}`;

    document.body.appendChild(scoreBoard);
    scoreBoard.appendChild(human);
    scoreBoard.appendChild(computer);

    const context = document.createElement("div");
    const humanContext = document.createElement("p");
    const computerContext = document.createElement("p");
    const roundContext = document.createElement("p");

    context.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; margin-top: 10px;");
    context.appendChild(humanContext);
    context.appendChild(computerContext);
    context.appendChild(roundContext);

    document.body.appendChild(context);
    
    while(humanScore < 5 && computerScore < 5) {
        const buttonClicked = document.querySelector(".select");

        buttonClicked.addEventListener("click", () => {
            const userChoice = getHumanSelection(buttonClicked);
            const computerChoice = getComputerSelection();

            humanContext.textContent = userChoice;
            computerContext.textContent = computerChoice;

            const rResult = roundResult(userChoice, computerChoice);
            if(rResult === 1) {
                roundContext.textContent = `WIN! ${userChoice} beats ${computerChoice}.`;
                humanScore++;
            }
            else if(rResult === -1) {
                roundContext.textContent = `LOSE. ${computerChoice} beats ${userChoice}.`;
                computerScore++;
            }
            else {
                roundContext.textContent = "TIE.";
            }

            humanContext.textContent = '';
            roundContext.textContent = '';
            computerContext.textContent = '';

            human.textContent = `Your score: ${humanScore}`;
            computer.textContent = `Computer score: ${computerScore}`;
        });
    }
    
    context.removeChild(humanContext);
    context.removeChild(computerContext);

    if(humanScore > computerScore) {
        roundContext.textContent = "Congratulations! You won the game!";
    }
    else {
        roundContext.textContent = "Better luck next time.";
    }
}

const start = document.querySelector("#start");
const container = document.querySelector(".container");
const selection = document.querySelector(".select");
const startContainer = document.querySelector(".startContainer");

start.addEventListener("click", playGame);