const menu = document.getElementById('hamburger-menu');
const links = document.getElementById('links');
const html = document.getElementById('html');
const logo = document.getElementById('logo');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
let changeMode = false;

menu.addEventListener('click', () => {
  links.classList.toggle('hidden');
});

logo.addEventListener('click', () => {
  changeMode = !changeMode;
  html.classList.toggle('dark');
  img1.src = changeMode
    ? 'align-justify-solid.svg'
    : 'align-justify-solid (1).svg';
  img2.src = changeMode
    ? 'arrows-left-right-to-line-solid.svg'
    : 'arrows-left-right-to-line-solid (1).svg';
  img3.src = changeMode ? 'map-solid.svg' : 'map-solid (1).svg';
  img4.src = changeMode ? 'sliders-solid.svg' : 'sliders-solid (1).svg';
  img5.src = changeMode ? 'layer-group-solid.svg' : 'layer-group-solid (1).svg';
  img6.src = changeMode ? 'palette-solid.svg' : 'palette-solid (1).svg';
});
