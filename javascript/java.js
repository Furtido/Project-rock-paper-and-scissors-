let humanScore = 0;
let ComputerScore = 0;
let Draw = 0;

function getComputerChoice(){
    let computer
    let choice = Math.floor(Math.random() * 4);
    if (choice == 0){
        computer = "rock";
    } else if (choice == 1) {
        computer = "paper";
    }else {
        computer = "scissors";
    }
    console.log(computer)
return computer;
}

function getHumanChoice(){
    let human = prompt("what do u choose: rock, paper or scissors");
    while (human == null) {
        human = prompt("what do u choose: rock, paper or scissors");
    }
    human = human.toLocaleLowerCase();
    console.log(human);
return human
}

function PlayRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = ChooseWinner(humanSelection, computerSelection);
    console.log(winner)
}

function ChooseWinner(humanChoice, computerChoice){
    if (computerChoice === humanChoice){
        Draw++;
        return "Draw";
        
    }else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")){
        humanScore++;
        return "Player win";

    }else {
        ComputerScore++;
        return "Computer win";

    }
}

function PlayGame(){
    for (let i = 0; i < 5; i++){
        PlayRound();
    }
}

PlayGame();
console.log("Your score is: " + humanScore + " Computer score is: " + ComputerScore + " Draw games: " + Draw );