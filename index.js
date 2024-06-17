const menu = document.getElementById('hamburger-menu');
const links = document.getElementById('links');

menu.addEventListener('click', () => {
  links.classList.toggle('hidden');
});
