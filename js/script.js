// JavaScript code to toggle the active class on hamburger menu click
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('active');
});
