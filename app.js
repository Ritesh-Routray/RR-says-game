let gameSeq = [];
let userSeq = [];
let btns = ["violet","red","blue","yellow"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", () => {
    if(start == false){
        start = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 300);
}

function chechAns(idx) {

    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp ,1000);
        }
    }
    else{
        h2.innerText = `game over....Press any key to start`
        reset();
    }
}

function btnFlash2(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 1000);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `your level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomClr = btns[randomIdx];
    let randbtn = document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    btnFlash(randbtn);
}

function btnPress(){
    let butto = this;
    btnFlash2(butto);

    let userColor = butto.getAttribute("id");
    userSeq.push(userColor);
    console.log(gameSeq)
    console.log(userSeq);
    chechAns(userSeq.length-1);
}

let buttons = document.querySelectorAll(".btn");
for (const butt of buttons) {
    butt.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}