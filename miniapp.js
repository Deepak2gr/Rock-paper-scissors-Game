let userScore = 0;
let compScore = 0;
let drawScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userScoreDis = document.querySelector("#user-score");
let compScoreDis = document.querySelector("#comp-score");
let drawScoreDis = document.querySelector("#draw-score");
let genCompChoice = () => {
    const option = ["rock", "paper" , "scissors"]
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];

};
let gameDraw = () => {
    msg.innerText = "Game Was Draw. , Try Again.";
    msg.style.backgroundColor ="blue"
    drawScore++;
    drawScoreDis.innerText = drawScore;
};
const showWinner = (userWin,userChoice,compChoice) => {
if(userWin){
    userScore++;
    userScoreDis.innerText = userScore;
    msg.innerText = `Congratulations. you win ! your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor ="Green" 
}
else{
    compScore++;
    compScoreDis.innerText = compScore;
    msg.innerText = `Try Again. ! Yoo lost ! ${compChoice} beat your ${userChoice}`;
    msg.style.backgroundColor ="Red" 
}
};

let playGame = (userChoice) => {
    // Generate rock paper and scissors by computer
    const compChoice = genCompChoice();


    if(userChoice === compChoice) {
        gameDraw();

    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});