var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];
var numberofSquares = 6;
var colors = generateRandomColors(numberofSquares);
var squares = document.querySelectorAll('.square');

var pickedcolor = pickcolor();

var colorDisplay = document.getElementById('colorDisplay');
var messgeDisplay = document.getElementById('messge');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function () {
  hardBtn.classList.remove('selected');
  easyBtn.classList.add('selected');
  numberofSquares = 3;
  colors = generateRandomColors(numberofSquares);
  pickedcolor = pickcolor();
  colorDisplay.textContent = pickedcolor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function () {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numberofSquares = 6;
  colors = generateRandomColors(numberofSquares);
  pickedcolor = pickcolor();
  colorDisplay.textContent = pickedcolor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].style.display = 'block';
  }
});

resetButton.addEventListener('click', function () {
  //generate all new colors
  colors = generateRandomColors(numberofSquares);
  //pick a new random color from array
  pickedcolor = pickcolor();
  //change ColorDisplay to match picked color
  colorDisplay.textContent = pickedcolor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = 'stealblue';
});

colorDisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to square
  squares[i].style.background = colors[i];
  // add click listeners to squares
  squares[i].addEventListener('click', function () {
    //grab color of clicked squares
    var clickedcolor = this.style.background;
    //compare color to pickedcolor
    console.log(clickedcolor, pickedcolor);
    if (clickedcolor === pickedcolor) {
      messgeDisplay.textContent = 'correct';
      resetButton.textContent = 'play Again?';
      changecolors(clickedcolor);
      h1.style.background = clickedcolor;
    } else {
      this.style.background = '#232323';
      messgeDisplay.textContent = 'tryAgain';
    }
  });
}
function changecolors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickcolor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  // repeat num time
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    //get random color and push into array
  }
  //return that array
  return arr;
}
function randomColor() {
  //pick a red from 0 -225
  var r = Math.floor(Math.random() * 256);
  //pick a green  from 0 -225
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0 -225
  var b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
