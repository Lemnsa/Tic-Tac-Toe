const gridContainer = document.querySelector('.grids');
const grids = document.querySelectorAll(".grids .grid");
const resultP = document.querySelector('.game-results');
const playersLis = document.querySelectorAll('.players .player');
const addNameBtn = document.querySelector('button');


let innitialBoard = [
  ['','',''],
  ['','',''],
  ['','','']
];

console.log(innitialBoard)

const makePlayer = (name, marker) => {
   return { name, marker };
}

const playerOne = makePlayer('jogger', 'o');
const playerTwo = makePlayer('lansa', 'x');


const currentPlayer = () => {
  let players = [playerOne, playerTwo];
  let active = 0;
  let activePlayer = players[0];

  return { players, active , activePlayer };
  
}


const playRound = (activePlayer, row, col) => {

  if (innitialBoard[row][col] !== '') {
    return;
}
innitialBoard[row][col] = activePlayer.marker;
switchRounds(activePlayer);
return innitialBoard;

}


const switchRounds = (currentPlayer) => {

  return (currentPlayer.marker === 'o') ? playerTwo :  playerOne;
   
}


const checkWinner = (board, playerMarker) => {
  for (let combination of winningCombinnations) {
    let win = true;
    for (let [row, col] of combination) {
      if(board[row][col] !== playerMarker) {
        win = false;
        break;
      }
    }
    if(win) {
      return `player with ${playerMarker} won`;
    }
  }
  return false;
}



function isArrayFull(board) {
  for (let row; row < board.length; row++) {
    for (let col; col < board[row].length; col++) {
      if(board[row][col] === '') {
        return false;
      }
    }
  }
  return true; // no empty cell was found
}


let updateDiv = (player, divs) => {
  divs.forEach(div => {
    div.addEventListener("click", () => {
      if (div.className !== 'grid') return;
      div.textContent = player;
    })
  });
}

updateDiv('c',grids);