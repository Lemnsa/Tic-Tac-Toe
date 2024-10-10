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