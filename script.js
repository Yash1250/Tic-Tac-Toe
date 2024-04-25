

let turn = "X";
let playBoxes = Array.from(document.querySelectorAll(".box"));
let resetBtn = document.getElementById("resetBtn");
let ting = new Audio("audios/ting.mp3");
let gameOver = new Audio("audios/gameover.mp3");
let turnText = document.getElementById("turnText");
let image = document.getElementById("image");
let winner;
const changeTurn = ()=>{
    turn = turn=="X" ? "0" : "X";
    turnText.innerHTML = turn + "'s Turn";
}

const checkWin = (box)=>{
const winLogic = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];


winLogic.forEach((elem , index)=>{
    let first = document.getElementById(elem[0]);
    let second = document.getElementById(elem[1]);
    let third = document.getElementById(elem[2]);
         if( box.innerHTML == first.innerHTML && first.innerHTML == second.innerHTML && second.innerHTML == third.innerHTML && box.innerHTML != " "){
            winner = first.innerHTML;
            first.classList.add("winner");
            second.classList.add("winner");
            third.classList.add("winner");
            image.style.width = "15rem";
            gameOver.play();
    };
})

}

const reset = () => {
    playBoxes.forEach((box) => {
        box.innerHTML = "";
        box.classList.remove("winner"); // Remove winner class
        box.classList.remove("clicked"); // Remove clicked class
        box.style.cursor = "pointer";
        winner = false;
        turnText.innerHTML = "X's Turn";
    });
    image.style.width = "0";
};

const isTied = ()=>{
    for(let i = 0 ; i<playBoxes.length ; i++){
        if(playBoxes[i].innerHTML == "")return false;
    }
    return true;
}

const boxClickHandler = (event) => {
    const box = event.target;
    if (winner) {
        box.style.cursor = "not-allowed";
        turnText.innerHTML = winner + " Won the Game!";
        return;
    }
    if (box.innerHTML === "") {
        box.innerHTML = turn;
        ting.play();
        checkWin(box);
        changeTurn();
        if (winner) {
            turnText.innerHTML = winner + " Won the Game!";
            gameOver.play();
        } else if (isTied()) {
            turnText.innerHTML = "Game Draw! Nobody Won"
        };
    } else {
        alert("already filled");
    }
    box.style.cursor = "not-allowed";
}



resetBtn.addEventListener("click" , reset);

playBoxes.forEach((box, i) => {
    box.addEventListener('click', boxClickHandler);
});

let backgroundAudio = document.getElementById("backgroundAudio");
backgroundAudio.volume = "0.2";


