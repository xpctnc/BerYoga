const nav = document.querySelector("header nav");
const navToggle = document.querySelector("header div.nav-tgl");

navToggle.addEventListener('click', toggleClass = () => {
	nav.classList.toggle("navActive");
	navToggle.classList.toggle("navToggleActive");

});

window.matchMedia("(min-width: 800px)").addListener(disableClassActive = () => {
	nav.classList.remove("navActive");
	navToggle.classList.remove("navToggleActive");

});
