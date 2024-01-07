let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.getElementById('msg');
const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#computer-score");

start = () => {
    if(userScore !=0 || compScore!=0){
        console.log("start again");
        message.innerText ="Play Your Move";
        message.style.backgroundColor = "#081b31";
        btn.style.display = 'show';
    }
}

const generateCompChoice = () =>{
    const options = ["Stone","Paper","Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    message.innerText ="Game was draw. Please try again!";
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("You Win !!");
        userScore++;
        user_Score.innerText = userScore;
        message.innerText = `Congratulations! You Win. Your choice ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }else{
        console.log("You Lose...Computer Win!");
        compScore++;
        comp_Score.innerText = compScore;
        message.innerText = `Oops! You Lost. Computer choice ${compChoice} beats your choice ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user :",userChoice);
    const compChoice = generateCompChoice();
    console.log("computer :",compChoice);
    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Stone"){
            //scissors or paper
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            //scissors or stone
            userWin = compChoice === "Scissors" ? false : true;
        }else{
            //stone or paper
            userWin = compChoice === "Stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});