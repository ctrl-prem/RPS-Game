let choice = document.querySelectorAll(".bnt");

let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");

const drawgame = () => {
    msg.innerText = "Game Draw!!";
    document.querySelector(".msg-container").style.backgroundColor = "black";
}

const losegame = () => {
    msg.innerText = "Computer Won!!";
    compScore++;
    document.querySelector("#comp-score").innerText = compScore;
    document.querySelector(".msg-container").style.backgroundColor = "red";
}

const wingame = () => {
    msg.innerText = "You Won!!";
    userScore++;
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector(".msg-container").style.backgroundColor = "green";
}

// let arr = ["Rock", "Paper", "Scissors"];
const decision = (i) => {
    const cmpChoice = Math.floor(Math.random() * 3);
    if(i === cmpChoice){
        drawgame();
    }
    else if(i === 0){
        cmpChoice === 1 ? losegame() : wingame();
    }
    else if(i === 1){
        cmpChoice === 2 ? losegame() : wingame();
    }
    else{
        cmpChoice === 0 ? losegame() : wingame();
    }
}


for(let i=0; i<3; i++){
    choice[i].addEventListener("click", () => {
        decision(i);
    });
}

