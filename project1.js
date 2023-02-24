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

let restartbtn = document.querySelector('#restart')

let countedBox = 0



// this is an array of winnning combinations
var winningCombo = [
//div1  2  3
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


function checkPlayerWin() {
    for (let combo of winningCombo) {
        //have to make sure that the winning combo arry 1 (exmple) has the same colors
        // var winningBox1 = combo[0]
        // var winningBox2 = combo[1]
        // var winningBox3 = combo[2]
        var box1 = boxes[combo[0]]
        var box2 = boxes[combo[1]]
        var box3 = boxes[combo[2]]

         
        if (box1.classList.contains('x') && box2.classList.contains('x') && box3.classList.contains('x')) {
            document.querySelector('.game-alert').textContent = 'Player 1 Wins'
            boxes.forEach(box => {
                box.removeEventListener('click', handleClick)
            })
            
        } else if (box1.classList.contains('o') && box2.classList.contains('o') && box3.classList.contains('o')) {
            document.querySelector('.game-alert').textContent = 'Player 2 Wins'
            boxes.forEach(box => {
                box.removeEventListener('click', handleClick)
            })
        } else if (countedBox === 9) {
            (document.querySelector('.game-alert').textContent = 'Draw, Play again!')
        }

    }
}

let turn = 'player1'

function restart() {
    turn = 'player1'
    countedBox = 0
    //this function clears the board, removing each box
    boxes.forEach(box => {
        box.classList.remove('x')
        box.classList.remove('o')
        box.addEventListener('click', handleClick, { once: true })
    }) 
    document.querySelector('.game-alert').textContent = ''

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
//switches turns everytime a div is clicked untill theres a winning combo,
//allows for only one click per div
    if (turn === 'player1') {
        boxClicked.classList.add('x')
    } else if (turn === 'player2') {
        boxClicked.classList.add('o')
    }
    countedBox++
    console.log(countedBox);
    switchTurn()
    checkPlayerWin()
}
boxes.forEach(box => {
    box.addEventListener('click', handleClick, { once: true })
})

restartbtn.addEventListener('click', restart) 