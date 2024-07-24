const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

let userScore=0;
let compScore=0;

const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  // rock,paper,scissors

  const randIndx = Math.floor(Math.random() * 3);

  return options[randIndx];
};

const showWinner=(userWin,userchoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`you win your ${userchoice} beat ${compChoice}`;
    msg.style.backgroundColor="green"
}else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`you lost!  ${compChoice} beat your ${userchoice}`
    msg.style.backgroundColor="red"
}
}



const playGame = (userchoice) => {
  console.log("userChoice=>", userchoice);

  // Generate Comp Choice
  const compChoice = genCompChoice();
  console.log("compChoice=>", compChoice);


  let userWin = true;
  if (userchoice === compChoice) {
    console.log("draw");
  } else {

  

    if (userchoice === "rock") {
      //scissors,paper

      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissors

      userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock,paper
      userWin=  compChoice==="rock"?false:true;
    }
  }

 showWinner(userWin,userchoice,compChoice)
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
