// method to add listener
'use strict';
const secondPar = document.querySelector('#second-part');
console.dir(secondPar);

const showDomText = function () {
  console.log('Dom Text');
};
secondPar.onclick = showDomText;

// примитивы сравниваются по значению
// обьекты сравниваются по ссылке

// third method
const fNameInput = document.querySelector('#f-name');
const btnOK = document.querySelector('#btn-container > button:first-child');
function clickMe(event) {
  // console.log(event.type);
  console.log(this);
  console.log(event.target.value);
}
function clickOK(event) {
  event.preventDefault();
  console.log(this);
  console.log(
    `Event type is ${event.type}, 
     current target is ${event.currentTarget},
     target is ${event.target},
     x is ${event.clientX},
     y is ${event.clientY},`,
  );
}
fNameInput.addEventListener('click', clickMe);
btnOK.addEventListener('click', clickOK);

// событие проходит три фазы своего жизненного цикла - погружение / всплытие
// всплытие - когда на элементе происходит событие, обработчики сначала срабатывают на нем,затем на его родителе
// затем выше и так далее ,вверх по цепочке предков

// focus - не всплывает
// this = current target

// прочитать про всплытие и погружение
// разница между target and current target
// делигирование событий

// practise with new rate
let winRate;
let loosRate;

const winnerInput = document.querySelector('#win');
const looserInput = document.querySelector('#loose');
const newRateSpan = document.querySelector('#new-rate');
const btnCalc = document.querySelector('.btn > button');

winnerInput.addEventListener('change', (e) => {
  winRate = Number(e.target.value);
});
looserInput.addEventListener('change', (e) => {
  loosRate = Number(e.target.value);
});

function calculateNewRate(event) {
  event.preventDefault();
  const newRate = getNewRate(winRate, loosRate);
  newRateSpan.textContent = newRate;
}

btnCalc.addEventListener('click', calculateNewRate);
function getNewRate(winnerRate, looserRate) {
  const deltaRate = winnerRate - looserRate;
  if (
    winnerRate < 0 ||
    looserRate < 0 ||
    typeof winnerRate !== 'number' ||
    typeof looserRate !== 'number' ||
    Number.isNaN(deltaRate)
  ) {
    return 'You entered wrong rate';
  }
  if (winnerRate === 0) {
    return looserRate;
  }
  if (deltaRate >= 0 && deltaRate <= 2) {
    return winnerRate + 2;
  }
  if (deltaRate > 2 && deltaRate < 20) {
    return winnerRate + 1;
  }
  if (deltaRate >= 20) {
    return winnerRate;
  }
  if (deltaRate < 0) {
    return winnerRate + Math.round((Math.abs(deltaRate) + 5) / 3);
  }
}

export default getNewRate; // экспортирую только эту функцию
// чекнуть приложение джс дерево по коду
