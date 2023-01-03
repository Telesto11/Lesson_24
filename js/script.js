// Строгий режим
"use strict"

// Урок №2 Масіви =======================
// Завдання 1.
// let arr = ['Ваня', 'Іштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr);
// console.log(arr.length);


// Завдання 2.
// let users = ['Ваня', 'Иштван'];

// users.push = 'Оля';
// console.log(users);

// users[1] = 'Петя';
// console.log(users);

// users.shift();
// console.log(users);

// users.unshift('Маша', 'Паша');
// console.log(users);



// Завдання 3.
// let arr = ['Ваня', 'Іштван', 'Оля',];
// let removed = arr.splice(1, 1);
// console.log(removed);


// Завдання 4.
// let str = 'Ваня,Іштван,Оля';

// let arrTwo = str.split(`,`)
// console.log(arrTwo);




// Урок №3 DOM ========================
// Завдання 1.
const dataSay = document.querySelector('[data-say-hi]');
console.log(dataSay.getAttribute("data-say-hi"));
console.log(dataSay);




// Завдання 2.
const lesson = document.querySelectorAll('.dom-page__list-item')[1];
// const lesson = document.querySelectorAll('ul li')[1];
// const lesson = document.querySelectorAll('.dom-page__list-item');
console.log(lesson);



// Завдання 3.
const like = document.getElementsByClassName('dom-page__like');
console.log(like);


// Завдання 4.

// const list = document.querySelectorAll('ul'); - буде помилка!
// Правильніше було б ось так:
// '<li>Текст</li>' Вказало б у кінець.
const list = document.querySelector('ul');
// const list = document.querySelector('.dom-page__job-foure ul');

list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);
console.log(list);


// Урок №4 Розміри, прокрутка...
// Завдання 1.
const mainElement = document.documentElement;
console.log(mainElement);
const windowtWidth = mainElement.clientWidth;
console.log(windowtWidth);
const windowtWidthScroll = window.innerWidth
console.log(windowtWidthScroll);
const widthScroll = windowtWidthScroll - windowtWidth;
console.log(widthScroll);



// Завдання 2.
function setScrollToOptions() {
	window.scrollTo({
		top: 100,
		left: 0,
		behacior: "smooth"
	});
}
setTimeout(setScrollToOptions, 1000)
// Завдання 3.

const oneSelector = document.querySelector('.function-page__lesson');
const coordinatesOne = oneSelector.getBoundingClientRect();
console.log(coordinatesOne);

const twoSelector = document.querySelector('.masiv-page');
const coordinatesTwo = twoSelector.getBoundingClientRect();
console.log(coordinatesTwo);

const threeSelector = document.querySelector('.dom-page');
const coordinatesThree = threeSelector.getBoundingClientRect();
console.log(coordinatesThree);