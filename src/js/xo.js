console.log("Pssst!.... Want to play tic-tac-toe?\nUse play(r,c) First argument is Row, Second argument is Column");
const player = "🏃🏾";
const computer = "🔨";
const noplayer = "➖";

let maxMoves = 9;
let currentMove = 0;

let boardobject = {
  "0_0": noplayer,
  "0_1": noplayer,
  "0_2": noplayer,
  "1_0": noplayer,
  "1_1": noplayer,
  "1_2": noplayer,
  "2_0": noplayer,
  "2_1": noplayer,
  "2_2": noplayer,
}

function victory(p) {
  if (
    (boardobject["0_0"] == p && boardobject["0_1"] == p && boardobject["0_2"] == p) ||
    (boardobject["1_0"] == p && boardobject["1_1"] == p && boardobject["1_2"] == p) ||
    (boardobject["2_0"] == p && boardobject["2_1"] == p && boardobject["2_2"] == p) ||
    (boardobject["0_0"] == p && boardobject["1_1"] == p && boardobject["2_2"] == p) ||
    (boardobject["0_2"] == p && boardobject["1_1"] == p && boardobject["2_0"] == p) ||
    (boardobject["0_0"] == p && boardobject["1_0"] == p && boardobject["2_0"] == p) ||
    (boardobject["0_1"] == p && boardobject["1_1"] == p && boardobject["2_1"] == p) ||
    (boardobject["0_2"] == p && boardobject["1_2"] == p && boardobject["2_2"] == p)
  ) {
    if (p == computer) {
      console.log(`%cPray For Nesamani`, 'font-size:20px;color:crimson;')
      console.image('https://vadivelu.anoram.com/hammer_win.gif');
      console.log(`%cuse newGame() to reset`, 'color:fuchsia;')
    } else {
      console.log(`%c${p} has won!`, 'font-size:40px;color:crimson;')
      console.image('https://vadivelu.anoram.com/nesamani_win.gif');
      console.log(`%cuse newGame() to reset`, 'color:fuchsia;')
    }
    return 1;
  } else {
    console.log("No one has won")
  }
}

function newGame() {
  console.clear()
  boardobject = {
    "0_0": noplayer,
    "0_1": noplayer,
    "0_2": noplayer,
    "1_0": noplayer,
    "1_1": noplayer,
    "1_2": noplayer,
    "2_0": noplayer,
    "2_1": noplayer,
    "2_2": noplayer,
  }
}


function computerTurn() {
  if(currentMove === 9) {
    console.log("%c Game Tie!", `font-size:40px;color:crimson`)
    return 2;
  }
  let nextMove = []
  for(let key in boardobject) {
    if(boardobject[key] == noplayer) {
      let index = key.split("_");
      let pos = [index[0],index[1]];
      nextMove.push(pos);
    }
  }
  let computerMove = nextMove[Math.floor(Math.random() * nextMove.length)];


  let c = validateMove(computerMove[0], computerMove[1], computer);
  if (c === 0) {
    computerTurn();
  }

}

function validateMove(x, y, z) {

  let currentPlayer = z;
  let check = boardobject[`${x}_${y}`]
  if (check == noplayer) {
    currentMove = currentMove+1;
    boardobject[`${x}_${y}`] = currentPlayer;
    if (victory(z)) {
      console.log("%c GGWP", `font-size:40px`)
      return 2;
    } else {
      console.clear();
      return 1;
    }
  } else {
   
    if(currentMove < maxMoves) {
      console.log("%c INVALID MOVE!", `font-size:40px;color:crimson`)
      return 0;
    }

 
    else {
      console.log("%c Game over!", `font-size:40px;color:crimson`)
    }
  }

}


function play(x, y) {
  let c = validateMove(x, y, player);

  if (c === 1) {
    computerTurn();
  }
  //console.log(x, y);


  console.log(`%c ${boardobject["0_0"]} ${boardobject["0_1"]} ${boardobject["0_2"]} `, 'font-size:40px')
  console.log(`%c ${boardobject["1_0"]} ${boardobject["1_1"]} ${boardobject["1_2"]} `, 'font-size:40px')
  console.log(`%c ${boardobject["2_0"]} ${boardobject["2_1"]} ${boardobject["2_2"]} `, 'font-size:40px')


}