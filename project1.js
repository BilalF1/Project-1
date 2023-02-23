let b1 = document.querySelector('.box1');
let b2 = document.querySelector('.box2');
let b3 = document.querySelector('.box3');
let b4 = document.querySelector('.box4');
let b5 = document.querySelector('.box5');
let b6 = document.querySelector('.box6');
let b7 = document.querySelector('.box7');
let b8 = document.querySelector('.box8');
let b9 = document.querySelector('.box9');

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

function checkPlayer1() {
    if (b1.style.backgroundColor === 'firebrick' && b2.style.backgroundColor2 === 'firebrick' && b3.style.backgroundColor === 'firebrick') {
        player1win()
    } else if (b4.style.backgroundColor === 'firebrick') {
        player2win()
    }

}


// function checkPlayer2() {
//     if (div1 === blue && div2 === blue && div3 === blue) {
//         player2win()
//     }
// }

function restart() {
    document.querySelector('.player1').style.display = 'none';
    document.querySelector('.player2').style.display = 'none';
    b1.style.backgroundColor = 'cornsilk'
    b2.style.backgroundColor = 'cornsilk'
    b3.style.backgroundColor = 'cornsilk'
    b4.style.backgroundColor = 'cornsilk'
    b5.style.backgroundColor = 'cornsilk'
    b6.style.backgroundColor = 'cornsilk'
    b7.style.backgroundColor = 'cornsilk'
    b8.style.backgroundColor = 'cornsilk'
    b9.style.backgroundColor = 'cornsilk'
    turn = 'player1'
}




function player1win() {
    document.querySelector('player1').style.display = '';
}

function player2win() {
    document.querySelector('player2').style.display = '';
}



let turn = 'player1'
function switchTurn() {
    if (turn === 'player1') {
        turn = 'player2'
    } else if (turn === 'player2') {
        turn = 'player1'
    }
}

document.querySelector('.player1').style.display = 'none';
document.querySelector('.player2').style.display = 'none';

let boxes = document.querySelectorAll('.box')
function handleClick(event) {
    var boxClicked = event.target
    if (boxClicked.style.backgroundColor == 'cornsilk') {
        if (turn === 'player1') {
            boxClicked.style.backgroundColor = 'firebrick'
        } else if (turn === 'player2') {
            boxClicked.style.backgroundColor = 'cyan'
        }
    } 
    switchTurn()
} 
boxes.forEach(box => {
    box.addEventListener('click', handleClick)
})

// b1.addEventListener('click', () => {
//     if (b1.style.backgroundColor == 'cornsilk') {
//         if (turn === 'player1') {
//             b1.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b1.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b2.addEventListener('click', () => {
//     if (b2.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b2.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b2.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b3.addEventListener('click', () => {
//     if (b3.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b3.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b3.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b4.addEventListener('click', () => {
//     if (b4.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b4.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b4.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b5.addEventListener('click', () => {
//     if (b5.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b5.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b5.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b6.addEventListener('click', () => {
//     if (b6.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b6.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b6.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b7.addEventListener('click', () => {
//     if (b7.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b7.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b7.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b8.addEventListener('click', () => {
//     if (b8.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b8.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b8.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })

// b9.addEventListener('click', () => {
//     if (b9.style.backgroundColor === 'cornsilk') {
//         if (turn === 'player1') {
//             b9.style.backgroundColor = 'firebrick'
//         } else if (turn === 'player2') {
//             b9.style.backgroundColor = 'cyan'
//         }
//     }
//     checkPlayer1()
//     checkPlayer2()
// })