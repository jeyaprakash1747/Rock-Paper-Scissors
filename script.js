let userScore = 0;
let compScore = 0;
let choices =["Rock", "Paper", "Scissor"];
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
let rock_img = document.getElementById("Rock");
let paper_img = document.getElementById("Paper");
let scissor_img = document.getElementById("Scissor");
let result_p = document.getElementById('result');

function compChoice() {
    let randomnumber= Math.floor(Math.random()*3);
    return choices[randomnumber];
}


function win(userchoice,computerchoice){
userScore++;
userScore_span.innerHTML=userScore;
compScore_span.innerHTML=compScore;
result_p.innerHTML=`${userchoice} beats ${computerchoice}. You Win!`;
document.getElementById(userchoice).classList.add("green-glow");
document.getElementById("user-badge").classList.add("user-zoom");
setTimeout(()=> document.getElementById(userchoice).classList.remove("green-glow"),1000);
setTimeout(()=> document.getElementById("user-badge").classList.remove("user-zoom"),1000);
}


function lose(userchoice,computerchoice){
compScore++;
userScore_span.innerHTML=userScore;
compScore_span.innerHTML=compScore; 
result_p.innerHTML=`${userchoice} loses to ${computerchoice}. You lose...`;
document.getElementById(userchoice).classList.add("red-glow");
document.getElementById("comp-badge").classList.add("comp-zoom");
setTimeout(()=> document.getElementById(userchoice).classList.remove("red-glow"),1000);
setTimeout(()=> document.getElementById("comp-badge").classList.remove("comp-zoom"),1000);
}


function draw(userchoice,computerchoice){
    result_p.innerHTML=`${userchoice} equals  ${computerchoice}. It's a draw...`;
    document.getElementById(userchoice).classList.add("blue-glow");
    setTimeout(()=> document.getElementById(userchoice).classList.remove("blue-glow"),1000);
}


function game(userchoice){
    let computerchoice=compChoice();
    switch(userchoice + computerchoice){
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
         win(userchoice, computerchoice);
        break;

        case "ScissorRock":
        case "RockPaper":
        case  "PaperScissor":
        lose(userchoice, computerchoice);
        break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
        draw(userchoice, computerchoice);
        break;
    }
   
}


function main(){
    rock_img.addEventListener('click', () =>{ 
       game(choices[0]);
    
    })

    paper_img.addEventListener('click', () =>{ 
        game(choices[1]);
    })

    scissor_img.addEventListener('click', () =>{ 
        game(choices[2]);
    })
}

main()
