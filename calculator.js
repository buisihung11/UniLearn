var first_num = "";
var second_num = "";
var result = "";
var operator = "";

var screen = document.getElementById("screen");
var input = document.getElementById("input");
var output = document.getElementById("output");

function drawScreen() {
  input.innerHTML = "";
  output.innerHTML = "";

  //   first_num + " " + operator + " " + second_num;
  input.innerHTML = `${first_num} ${operator} ${second_num}`;
  output.innerHTML = result;
}

function setUpHandler() {
  // gan onclick cho cac nut
  // 1. Phan bam so
  for (let index = 0; index <= 9; index++) {
    var num_item;
    var num_id = `num-${index}`; // num-1 num-2
    console.log(num_id);
    num_item = document.getElementById(num_id);

    // them su kien onclick
    num_item.onclick = function () {
      bamSo(index);
    };
  }
  // 2. Phan bam operator
  document.getElementById("num-plus").onclick = function () {
    bamOperator("+");
  };
  document.getElementById("num-minus").onclick = function () {
    bamOperator("-");
  };
  document.getElementById("num-multiple").onclick = function () {
    bamOperator("x");
  };
  document.getElementById("num-divide").onclick = function () {
    bamOperator("/");
  };
  document.getElementById("equal").onclick = function () {
    bamOperator("=");
  };

  document.getElementById("clear").onclick = function () {
    clearScreen();
  };
}

function bamSo(number) {
  if (result != "") {
    clearScreen();
  }
  if (operator == "") {
    //dang nhap so thu nha
    first_num += number;
  } else {
    second_num += number;
  }
  drawScreen();
}

function bamOperator(pheptinh) {
  if (pheptinh == "=" && second_num != "") {
    switch (operator) {
      case "+":
        result = parseInt(first_num) + parseInt(second_num);
        break;
      case "-":
        result = parseInt(first_num) - parseInt(second_num);
        break;
      case "x":
        result = parseInt(first_num) * parseInt(second_num);
        break;
      case "/":
        result = parseInt(first_num) / parseInt(second_num);
        break;
      default:
        break;
    }
  } else if (pheptinh != "=" && second_num == "") {
    operator = pheptinh;
  }

  drawScreen();
}

function clearScreen() {
  first_num = "";
  second_num = "";
  result = "";
  operator = "";
  drawScreen();
}

drawScreen();
setUpHandler();
