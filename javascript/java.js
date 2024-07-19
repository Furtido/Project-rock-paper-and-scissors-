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