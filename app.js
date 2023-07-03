// Humbarger Menu
const menu = document.querySelector('#menu');
const humbargerIcon = document.querySelector('.fa-solid');

function show () {
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
  humbargerIcon.style.display = 'none';
}
humbargerIcon.addEventListener('click', show);