'use strict';

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n. Решение через рекурсию:
// function sumTo(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n + sumTo(n-1);
//     }
// }

// console.log(sumTo(4));

// function sumTo2(n) {
//   return (n === 1) ? 1 : (n + sumTo(n-1));
// }
// console.log(sumTo2(2));

// let sumTo3 = (n) => (n === 1) ? 1 : (n + sumTo(n-1));
// console.log(sumTo3(5));


function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}



function guessNumber() {
  let randomNum = parseInt(Math.random() * 100);
  console.log(randomNum);
  let maxTryCount = 5;
  function getNumber (maxTryCount){
    if(maxTryCount >0){
      maxTryCount--;
      let userNum = prompt('Угадай число от 1 до 100 (введите число):');
      if (userNum === null) {
        alert('Игра закончена');
        return;
      } else if (isNumber(userNum)) {
        
         userNum = +userNum; //Переводим аргумент из строки в число
         console.log(typeof(userNum));
        if (userNum === randomNum) {
          let reverse = confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?');
          if (reverse === false) {
            alert('Игра закончена');
            return;
          } else {
            return guessNumber();
          }
        } else if (maxTryCount === 0) {
          alert("Вы проиграли.\nПравильный ответ: " + randomNum);
          let reverse = confirm('Попытки закончились, хотите сыграть еще?');
          if (reverse === false) {
            alert('Игра закончена');
            return;
          } else {
            return guessNumber();
          }
         
         
        } else if (userNum > randomNum) {
          alert(`Загаданное число меньше. Осталось попыток: ${maxTryCount}.`);
          return getNumber(maxTryCount);
        } else if (userNum < randomNum) {
          alert(`Загаданное число больше. Осталось попыток: ${maxTryCount}.`);
          return getNumber(maxTryCount);
        }
      } else {
        alert('Введите число!');
        return guessNumber();
      }
    }
    
  }
  
  getNumber(maxTryCount);
  console.dir(getNumber);
}
console.log(guessNumber());

/*function getNumberGame() {
  alert('у вас есть 10 попыток');
  let numberRandom = Math.ceil(Math.random() * 100);
  alert('Я загадал число от 1 до 100');
  console.log(numberRandom);

  function getNumber(tryNumber) {
    if (tryNumber > 0) {
      tryNumber--;

      let numberUser = +prompt('введите число');

      if (numberUser === numberRandom) {
        alert('Поздравляем! Вы угадали!');
      } else if (numberUser < numberRandom) {
        alert('Загаданное число больше');
        console.log('попыток осталось: ', tryNumber)
        return getNumber(tryNumber);
      } else if (numberUser > numberRandom) {
        alert('Загаданное число меньше');
        console.log('попыток осталось: ', tryNumber)
        return getNumber(tryNumber);
      } else {
        alert('Вы указали странное число');
        return getNumber(tryNumber);
      }
    } else {
      alert('К сожалению вы не угадали');
    }

    let againGame = confirm('Хотите попробовать ещё раз');

    if (againGame === true) {
      getNumberGame();
    } else {
      return alert('спасибо за игру');
    }
  }
  getNumber(10);
  console.dir(getNumber);
}

let ready = confirm('Я хочу с вами поиграть в игру. Вы готовы?');

if (ready === true) {
  getNumberGame();
};*/