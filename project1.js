let b1 = document.querySelector('.box1');
let b2 = document.querySelector('.box2');
let b3 = document.querySelector('.box3');
let b4 = document.querySelector('.box4');
let b5 = document.querySelector('.box5');
let b6 = document.querySelector('.box6');
let b7 = document.querySelector('.box7');
let b8 = document.querySelector('.box8');
let b9 = document.querySelector('.box9');

let boxes = document.querySelectorAll('.box')

let restartbtn = document.querySelector('.restart').addEventListener('click', function () {
    restart()
})

// this is an array of winnning combinations
var winningCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]


function checkPlayerWin() {
    for (let combo = 0; combo < winningCombo.length; combo++) {
        //have to make sure that the winning combo arry 1 (exmple) has the same colors
        var winningBox1 = combo[0]
        var winningBox2 = combo[1]
        var winningBox3 = combo[2]
        var box1 = boxes[winningBox1]
        var box2 = boxes[winningBox2]
        var box3 = boxes[winningBox3]
        console.log(winningBox1);
        if (box1.classList.contains('x') && box2.classList.contains('x') && box3.classList.contains('x')) { 
             document.querySelector('.game-alert').textContent = 'Player 1 Wins'

        } else if (box1.classList.contains('o') && box2.classList.contains('o') && box3.classList.contains('o')) {
            player2win()
            document.querySelector('.game-alert').textContent = 'Player 2 Wins'
        }
    }
}

let turn = 'player1'

function restart() {
    turn = 'player1'
}

function switchTurn() {
    if (turn === 'player1') {
        turn = 'player2'
    } else if (turn === 'player2') {
        turn = 'player1'
    }
} 


function handleClick(event) {
    var boxClicked = event.target
    
    if (turn === 'player1') {
        boxClicked.classList.add('x')
    } else if (turn === 'player2') {
        boxClicked.classList.add('o')
    }
    switchTurn()
    checkPlayerWin()
}
boxes.forEach(box => {
    box.addEventListener('click', handleClick, {once : true})
})

