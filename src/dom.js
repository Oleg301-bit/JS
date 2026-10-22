// node  - платформа/среда выполнения джаваскрипта
// 3 основные части джаваскрипта  - core,DOM,BOM
'use strict';

// api -  ?
// узел - это то что в сеье может содержать дочерний элемент
// просто элемент может содержать,а может нет

// dom Яинтерфейсы - ?
// Node/Element/Document - база!
// NodeList - динамическая коллекция
console.log(window);
console.log(window.innerHeight);

// const domContainer = document.getElementById('container');
// лучше всего использовать querySelector() and querySelectorAll() (принимает любые css-селекторы)
// FIND
const divContainer = document.getElementById('container'); // методы для поиска элементов
const divImgContainer = document.getElementsByClassName('image-container');
console.dir(divContainer);
console.dir(divImgContainer);
console.log(document.images);
console.log(document.anchors); // если не передать name то коллекция будет пустая
console.log(document.links);
console.log(document.forms);
// console.log(container); // не надо так использовать!

// CREATE
const article = document.createElement('article');
const parArticle = document.createElement('p');

const textNode = document.createTextNode('Stiga'); // текстовый узил
const plainText = 'DHS';

console.log(article);
console.dir(textNode);
divContainer.append(article);
article.append(parArticle);
parArticle.append('Donic'); // только на элементах ,доб в конец
parArticle.appendChild(textNode); // работает только с узлами,доб в конец

console.log(parArticle);
console.log(parArticle.textContent);
parArticle.textContent += 'Butterfly';
console.log(parArticle.innerHTML);
parArticle.innerHTML = 'TSP';
console.log(parArticle.textContent);
console.log(divContainer.cloneNode(true));

const clist = divContainer.classList;
clist.toggle('p-cont');
clist.toggle('p-cont');
console.log(clist);

console.log(divContainer.classList);
console.log(divContainer.className);
console.log(divContainer.tagName);
console.log(divContainer.removeAttribute('class'));
