// Humbarger Menu
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

// Featured speakers
const featuredContainer = document.querySelector('#featured-speakers');

const featuresList = [
  {
    id: 0,
    photo: 'img/bonna.jpg',
    name: 'Rezwana Choudhury Bannya',
    desig: 'Bangladeshi singer and academic. She is an exponent of Rabindra Sangeet.',
    desc: ' She is regarded as a legendary Tagore singer by Tagore music aficionados all around the world.',
  },
  {
    id: 0,
    photo: 'img/Nicky.jpg',
    name: 'Nicola Joy Nadia Benedetti',
    desig: 'Italian-Scottish classical solo violinist and festival director.',
    desc: 'She works with orchestras in Europe and America as well as with Alexei Grynyuk, her regular pianist. Since 2012.',
  },
];

let featureGenerator = '';

featuresList.forEach((feature) => {
  featureGenerator += `
  <div class='speakers'>
  <div class='speakers-photo'>
    <img src='${feature.photo}' alt='${feature.name}'>
  </div>
  <div class='speakers-detail'>
    <h4>${feature.name}</h4>
    <h6>${feature.desig}</h6>
    <p>${feature.desc}</p>
  </div>
  </div>
  `;
});

featuredContainer.innerHTML = featureGenerator;