// 'use strict';

// console.log(window);
// console.log(history); // доступны методы, forward/back/go
// console.log(location);
// console.log(navigator.userAgent);
console.log(navigator.platform);

// geolocation
// function success(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let altitude = position.coords.altitude;
//   let speed = position.coords.speed;
//   console.log(`latitude is ${latitude}`);
//   console.log(`longitude is ${longitude}`);
//   console.log(`altitude is ${altitude}`);
//   console.log(`speed is ${speed}`);
// }

// function error(obj) {
//   console.log('Geolocation error');
// }

// navigator.geolocation.getCurrentPosition(success, error);

// open - в разных браузерах работает по разному

// function openWiki() {
//   let timeId;
//   try {
//     const popup = open(
//       'http://wikipedia.org',
//       '_blank',
//       'width=600',
//       'height=500',
//     );
//     console.log('Open wiki');
//     popup.moveTo(500, 300);
//     timeId = setTimeout(() => popup.close(), 5000);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     // clearTimeout(timeId);
//   }
// }

// const span = document.querySelector('span');
// span.addEventListener('click', openWiki);

// clock
// function getTime() {
//   const time = document.getElementById('time');
//   const now = new Date();
//   //   console.log(now.getHours());
//   //   console.log(now.getMinutes());
//   //   console.log(now.getSeconds());
//   time.textContent =
//   `${now.getHours() < 10 ? '0' + now.getHours() : now.getHours()}
//   : ${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}
//   : ${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`;
// };

// const timeId = setInterval(getTime, 1000);

// cookie
// const now = new Date('09/03/26'); // month - first
// console.log(now.toUTCString());
// document.cookie = 'login=master';
// document.cookie = `expires=${now}`;

// localStorage - все передается в строках
localStorage.setItem('url', 'https://ww.ttspin.club/');
localStorage.setItem('password', 'qwerty');

console.log(localStorage.getItem('url'));
console.log(localStorage.getItem('password'));

// json поддерживает примитивные данные/обьекты/массивы
const player = {
  name: 'Ma Long',
  country: 'China',
  brand: 'Stiga',
  play() {
    console.log('i am playing'); // json не работает с функциями
  },
};
localStorage.setItem('malong', JSON.stringify(player));

const malong = JSON.parse(localStorage.getItem('malong'));
console.log(malong);
// console.log(json)
// работа с json  - только одинарные ковычки, нет весячей запятой, свойства содержащие undefined/ символьные ключ-значение

const array = ['Donic', 20, true];
localStorage.setItem('array', JSON.stringify(array));
// джаваскрипт язык однопоточный
// в каком порядке прописаны в коде в таком и вызываются
// callback function - функция которая передается в другую функцию в качестве аргумента
// все задачи браузер это макрозадачи
// первым отрабатывет рендер -> микрозадачи(получение данных с сервера) -> макрозадачи (ждет пока полностью не будут выполнены микротаски, так как опять проскочит рендер)
// evevntLoop


// как решать задачи по eventLoop на собоседовании?
