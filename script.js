'use strict';
let numberOne = 0;
let numberTwo = 0;
const son1 = document.querySelector('#monitor1');
const son2 = document.querySelector('#monitor2');
son1.innerHTML = numberOne;
son2.innerHTML = numberTwo;
const minusSon1 = document.querySelector('#minus1');
const plusSon1 = document.querySelector('#plus1');
const minusSon2 = document.querySelector('#minus2');
const plusSon2 = document.querySelector('#plus2');
const hisoblash = document.querySelector('#hisoblash');

plusSon1.addEventListener('click', () => {
  numberOne++;
  son1.innerHTML = numberOne;
});

  minusSon1.addEventListener('click', () => {
  numberOne--;
  son1.innerHTML = numberOne;
});

  plusSon2.addEventListener('click', () => {
  numberTwo++;
  son2.innerHTML = numberTwo ;
});

  minus2.addEventListener('click', () => {
  numberTwo--;
  son2.innerHTML= numberTwo;
});



  hisoblash.addEventListener('click', () => {
  const arifmetic = (numberOne+numberTwo)/2;
  monitor3.innerHTML = arifmetic
});