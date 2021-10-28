'use strict';
let c = 4
function addX(x) {
  return function(n) {
      console.log(n);
     return n + x;
  }
}
const addThree = addX(3);
console.log(addThree (c));
let d = addThree(c);
console.log('example partial application', d) //Вернет 7, т.е. c + x



function isNumber(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}

let randomNum = parseInt(Math.random() * 100);
function guessNumber() {
  let userNum = prompt('Угадай число от 1 до 100 (введите число):');
  if (userNum === null) {
    alert('Игра закончена');
    return;
  } else if (isNumber(userNum)) {
    userNum = +userNum;
     if (userNum > randomNum) {
      alert('Загаданное число меньше');
    } else if (userNum < randomNum) {
      alert('Загаданное число больше');
    } else if (userNum === randomNum) {
      alert('Поздравляю, Вы угадали!!!');
      return userNum;
    }
  } else {
    alert('Введите число!');
  }
  return guessNumber();
}

console.log(guessNumber());