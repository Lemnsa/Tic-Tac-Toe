const gridContainer = document.querySelector('.grids');
const grids = document.querySelectorAll(".grids .grid");
const resultP = document.querySelector('.game-results');
const playersLis = document.querySelectorAll('.players .player');
const addNameBtn = document.querySelector('button');
const container = document.getElementById("container");


let innitialBoard = [...grids];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const makePlayer = (name, marker) => {
   return { name, marker };
}

const playerOne = makePlayer('one', 'o');
const playerTwo = makePlayer('two', 'x');

addNameBtn.addEventListener('click', () => {
  const playerOneName = prompt("Enter Player One's Name");
  const playerTwoName = prompt("Enter Player Two's Name");

  playerOne.name = playerOneName;
  playerTwo.name = playerTwoName;

  const names = document.querySelectorAll('.players .player');
  const namesToArray = [...names];

  namesToArray[0].textContent = `Player Two: ${playerOne.name}, ${playerOne.marker}`;
  namesToArray[1].textContent = `Player One: ${playerTwo.name}, ${playerTwo.marker}`;
})





const currentPlayer = () => {
  let players = [playerOne, playerTwo];
  let active = 0;
  let activePlayer = players[0];

  return { players, active , activePlayer };
  
}


function switchRounds  (currentPlayer)  {

  return (currentPlayer.marker === 'o') ? playerTwo :  playerOne;
   
}


const checkWinner = (playerMarker) => {
  for(let i = 0; i < winningCombinations.length; i++) {
    const [a,b,c] = winningCombinations[i];
    if(grids[a].textContent === playerMarker && grids[b].textContent === playerMarker && grids[c].textContent === playerMarker){
      return true;
  }
  }
  return false;
}



function isArrayFull(board) {
  for (let i = 0; i < board.length; i++) {
      if(board[i].textContent ==='') {
        return false;
      }
  }
  return true; // no empty cell was found
}


let updateDiv = (player, initialBoard) => {
  initialBoard.forEach((div, index) => {
    div.addEventListener("click", (e) => {
      player = switchRounds(player);

      initialBoard[index].textContent = player.marker;
        if(checkWinner(player.marker)) {
            resultP.textContent=`Game over! ${player.name} wins!`;
            // container.setAttribute('class', 'winning');
            return restartGame(initialBoard);
        }

        if(isArrayFull(initialBoard)) {
          resultP.textContent= `Game is tied!`;
          // container.setAttribute("class", "draw");
          return restartGame(initialBoard);
      }

      let activeDiv = e.target;
      if(activeDiv.textContent === ''){
        activeDiv.textContent = player.marker;
      }
      return activeDiv;
    })

})

}
updateDiv(playerOne,innitialBoard)


function restartGame(board) {
  for(let i = 0; i < board.length; i++) {
      board[i].textContent = "";
  }
}