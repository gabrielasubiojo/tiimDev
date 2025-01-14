// Select the menu icon and the nav menu
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Add event listener for toggling
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active'); // Toggles the menu icon animation
  navMenu.classList.toggle('active'); // Toggles the visibility of the menu
});