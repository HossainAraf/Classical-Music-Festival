// Humbarger Menu
const nav = document.querySelector('nav');
const menu = document.querySelector('#menu');
const humbargerIcon = document.querySelector('.fa-solid');
const cancelIcon = document.querySelector('.fa-xmark');

function show() {
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
  humbargerIcon.style.display = 'none';
  cancelIcon.style.display = 'flex';
}

function hide() {
  menu.style.display = 'none';
  cancelIcon.style.display = 'none';
  humbargerIcon.style.display = 'flex';
}

humbargerIcon.addEventListener('click', show);
cancelIcon.addEventListener('click', hide);