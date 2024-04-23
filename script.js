console.log("hello world");

let turn = "X";
let playBoxes = Array.from(document.querySelectorAll(".box"));
let resetBtn = document.getElementById("resetBtn");
let ting = new Audio("audios/ting.mp3");

let winner;
const changeTurn = ()=>{
    turn = turn=="X" ? "0" : "X";
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
            first.style.backgroundColor = "red";
            second.style.backgroundColor = "red";
            third.style.backgroundColor = "red";
    };
})

}

const reset = ()=>{
    playBoxes.forEach((box ,i)=>{
        box.innerHTML = "";
        winner = false;
    })
}

resetBtn.addEventListener("click" , reset);

const isTied = ()=>{
    for(let i = 0 ; i<playBoxes.length ; i++){
        if(playBoxes[i].innerHTML == "")return false;
    }
    return true;
}


playBoxes.forEach((box ,i)=>{
    box.addEventListener('click' ,()=>{
        if(winner)return;
        
        if(box.innerHTML == ""){
            box.innerHTML = turn;
            box.style.cursor = "not-allowed"; 
            ting.play();
        checkWin(box);
        if(winner){
            console.log(winner);
        }
        else if(isTied())console.log("Game Ties")
        changeTurn();
        }
        else{
            console.log("no space")
        }
    })
})


