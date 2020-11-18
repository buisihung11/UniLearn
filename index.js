console.log("Test");

var board = document.getElementById("board");
var isPlayerOne = true; // playerOne => X

var winner = -1; // 0 draw 1 => X, 2 => 0
var counter = 0;

// luu data;

var data = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function reset() {
  console.log("reset");
  data = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  winner = -1;
  counter = 0;
  isPlayerOne = true;
  draw();
}

function play(i, j) {
  console.log("Click vao nut ", i, " ", j);
  if (isPlayerOne) {
    data[i][j] = "X";
    isPlayerOne = false;
  } else {
    data[i][j] = "O";
    isPlayerOne = true;
  }
  counter++;
  draw();
  checkWinner();
  alertWinner();
}

function checkWinner() {
  // check ngang
  for (let i = 0; i < 3; i++) {
    if (data[i][0] == null) {
      continue;
    }
    if (data[i][0] == data[i][1] && data[i][1] == data[i][2]) {
      // cach 1 kiem tra isPlayerOne
      winner = !isPlayerOne ? 1 : 2;
    }
  }
  // check doc
  for (let i = 0; i < 3; i++) {
    if (data[0][i] == null) {
      continue;
    }
    if (data[0][i] == data[1][i] && data[1][i] == data[2][i]) {
      // cach 1 kiem tra isPlayerOne
      winner = !isPlayerOne ? 1 : 2;
    }
  }
  // check xeo

  if (
    (data[0][0] == data[1][1] && data[1][1] == data[2][2]) ||
    (data[0][2] == data[1][1] && data[1][1] == data[2][0])
  ) {
    if (data[1][1] != null) {
      winner = !isPlayerOne ? 1 : 2;
    }
  }
  if (counter == 9 && winner == -1) {
    winner = 0;
  }
}

function alertWinner() {
  if (winner == 0) {
    alert("Hoa");
  } else if (winner == 1) {
    alert("Nguoi choi X win");
  } else if (winner == 2) {
    alert("Nguoi choi 0 win");
  }
}

// DRAW

function draw() {
  board.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    // tao the div co class la row
    var rows = document.createElement("div");
    rows.className = "row";
    for (let j = 0; j < 3; j++) {
      var col = document.createElement("div");
      col.className = "col";

      // Tao btn co class la board-item
      var btn = document.createElement("button");
      btn.className = "board-item";
      btn.innerHTML = data[i][j];

      // them su kien onclick
      btn.onclick = function () {
        play(i, j);
      };

      // them button vao col
      col.appendChild(btn);
      // them cai col vao row
      rows.appendChild(col);
    }
    // them row vao board
    board.appendChild(rows);
  }
}

document.getElementById("reset").onclick = function () {
  reset();
};

draw();
