/* var firstName = prompt('what is your First Name');
var lastName = prompt('what is your Last Name');
var age = prompt('what is your age ?');
console.log('your name is ' + firstName + ' ' + lastName);
console.log('you are ' + age + ' years old '); 


var age = prompt('What is your age');
var days = age * 365.25;
alert(age + ' years is roughly ' + days + ' days '); */

/*if (age > 18) {
  console.log('you are not enter in this venue because you are too young');
} else if (age < 18 && age < 21) {
  console.log('you enter but did not drink');
} else {
  console.log('you do whatever you wanna do ');
}
*/
/*if(age>0){
       console.log("print error text");       
   }
    if  (age===21){
       console.log("happy 21th Birthday");
   }
    if(age % 2 !==0){
       console.log("your age is odd ");
   }
   if (age%Math.sqrt(age)===0){
       console.log("perfect square");
   }*/

/*var secretNumber = 5;
var guess = prompt('guess the Number please');
if (Number(guess) === secretNumber) {
  alert('you Right');
} else if (Number(guess) > secretNumber) {
  alert('Its Too high');
} else Number(guess) < secretNumber;
{
  alert('itsn too low');
} */

/*
var answer = prompt('Are you there yet!');

while (answer !== 'yes' && answer !== 'yesh') {
  var answer = prompt('Are you there yet!');
}
alert('yay we made it');*/

/* var answer = prompt('Are you there yet!');

while (answer.indexOf('yes') === -1) {
  var answer = prompt('Are you there yet!');
}
alert('yay we made it');

for (var i = -10; i < 20; i++) {
  console.log(i);
}

function greet(person1, person2, person3) {
  console.log('hi' + person1);
  console.log('hi' + person2);
  console.log('hi' + person3);
}
greet(
  'Ron',
  'geny',
  'Hermoine'
);   */

/*Colors.unshift("grey");  // to add in the start of the array 
colors.shift(); */ /*var button = document.querySelector('button');
button.addEventListener('button', function () {
  console.log('click the button');
}); */ // to re ove the last element in the array // to remove the first elemennt in the array // var todo []; //var input=prompt("what would you like to do"); //while(input!==="exit"){ // if (input===list){ // console.log("todo"); //   } //     else if ("input===new"){ // var newtodo=prompt("Enter the ndw todo"); //       } // todo.push(newtodo); // var input =prompt("what would you like to do"); //  } //console.log("ok you quit the app  "); // topic Events

/*colors.push("grey");    //to add in the end of the array 
color.pop(); */

/*var p1button = document.querySelector('#p1');
var p2button = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var p1score = 0;
var p2score = 0;
var winningscore = 5;
var gameover = false;
p1button.addEventListener('click', function () {
  if (!gameover) {
    p1score++;
    if (p1score === winningscore) gameover = true;
  }

  p1Display.textContent = p1score;
});

p2button.addEventListener('click', function () {
  if (!gameover) {
    p2score++;
    if (p2score === winningscore) gameover = true;
  }

  p2Display.textContent = p2score;
}); */

$(div).css('background', 'green');
