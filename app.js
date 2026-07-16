const stoneBtn = document.querySelector("#stone");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const winnerPanel = document.querySelector(".winner-panel");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

let userWinCount = 0;
let compWinCount = 0;

const choices = ["stone", "paper", "scissors"];

const genCompChoice = () => {
    let idx = Math.floor(Math.random() * 3);
    return choices[idx];
}
const showDraw = () => {

    winnerPanel.innerText = "its a Draw !";

}
const isUserWins = (wins, compChoice) => {

    if (wins) {
        winnerPanel.innerText = `You won against ${compChoice}`;
        userWinCount++;
        userScore.innerText = userWinCount;
    } else {
        winnerPanel.innerText = `You lost against ${compChoice}`;
        compWinCount++;
        compScore.innerText = compWinCount;
    }



}
const playGame = (userChoice) => {

    const compChoice = genCompChoice(); // stone or paper or scissors

    if (userChoice === compChoice) {
        showDraw();

    } else {
        if (userChoice === "stone" && compChoice === "paper")
            isUserWins(false, compChoice);
        else if (userChoice === "paper" && compChoice === "scissors")
            isUserWins(false, compChoice);
        else if (userChoice === "scissors" && compChoice === "stone")
            isUserWins(false, compChoice);
        else
            isUserWins(true, compChoice);
    }


}
stoneBtn.addEventListener("click", () => playGame("stone"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));