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
