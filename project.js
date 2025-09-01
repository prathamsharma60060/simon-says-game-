let gameSeq =[];
let userSeq =[];

let btns = ["yellow", "red", "purple", "green"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");
// ab chahte hai document mai koi bhi key press ho hum game start krde to document mai he eventListerner laga denge
document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
       }
    }else{
         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any key to start`;
         document.querySelector("body").style.backgroundColor = "red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
         }, 150);
         reset();
    }

}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");// color store krna hai na bro
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;

}