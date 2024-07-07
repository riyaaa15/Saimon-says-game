let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {   
        console.log("game is strated");
        started = true; 
    
        levelUp();
    }
});

function gameFlash(btn) {  //for button flash 
   btn.classList.add("flash");
   setTimeout(function() {    //remove the class after a short delay
     btn.classList.remove("flash");
   }, 250);
}

function userFlash(btn) {  //for user button flash 
    btn.classList.add("userflash");
    setTimeout(function() {    
      btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {  //random color generate 
    userSeq = []; // reset the user sequence
    level++;  
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);  
    let randColor = btns[randIdx];           
    let randbtn = document.querySelector (`.${randColor}`); // select the button by its class 
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);  
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
       if(userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
       }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level} </b> <br>press any key to start!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
          document.querySelector("body").style.backgroundColor ="white";
        }, 150);
        reset();
    }
}

function btnPress() {  
    let btn = this;  // the button that was clicked
    userFlash(btn);   
    userColor = btn.getAttribute("id");  
    userSeq.push(userColor);   

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn"); //select all buttons
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

