"use strict";
// Initialize LAZY LOAD
(function () {
	// Initialize
	var bLazy = new Blazy();
})();

///////////////
// HEADER BACKGROUND SLIDER

// Header Object
const header = document.querySelector(".header");

// Loader Animation
// const loader = document.querySelector(".loader");

// window.addEventListener("load", function () {
// 	setTimeout(function () {
// 		loader.style.display = "none";
// 	}, 5000);
// });

// ///////////////
// // HEADER NAVIGATION BURGER
const openNavMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__navigation__list");
const navLink = document.querySelectorAll(".header__navigation__link");

const windowWidth = window.innerWidth;

const NavMenuPhones = function () {
	if (windowWidth <= 768) {
		navLink.forEach(function (item, idk) {
			item.addEventListener("click", function () {
				navMenu.style.visibility = "hidden";
				openNavMenu.classList.toggle("is-active");
				console.log("btn clicked");
			});
		});
	}
};
NavMenuPhones();

openNavMenu.addEventListener("click", function () {
	if (navMenu.style.visibility === "visible") {
		navMenu.style.visibility = "hidden";
		openNavMenu.classList.toggle("is-active");
		console.log("closed");
	} else {
		navMenu.style.visibility = "visible";
		openNavMenu.classList.toggle("is-active");
		console.log("opened");
	}
});

// SHOW MORE SONGS
// Array with hided songs in small screen
const hideSongs = [
	document.querySelector(".records__single:nth-child(4)"),
	document.querySelector(".records__single:nth-child(5)"),
	document.querySelector(".records__single:nth-child(6)"),
];

// Btn to show and hide songs
const btnShowHideSongs = document.querySelector(".records__btn-show-more");

// Event to show and hide songs
btnShowHideSongs.addEventListener("click", function () {
	if (btnShowHideSongs.textContent === "Show less") {
		hideSongs[0].style.display = "none";
		hideSongs[1].style.display = "none";
		hideSongs[2].style.display = "none";

		btnShowHideSongs.textContent = "Show more";
	} else {
		hideSongs[0].style.display = "grid";
		hideSongs[1].style.display = "grid";
		hideSongs[2].style.display = "grid";

		btnShowHideSongs.textContent = "Show less";
	}
});

const videoSlider = document.querySelector(".mimo-podcast__youtube__slider"); // Variable with the video slider
const videoSlides = document.querySelectorAll(
	".mimo-podcast__youtube__slider__video",
); // Variable with the video slides

// GO BACK & NEXT ARROWS
const goBack = document.querySelector(".mimo-podcast__youtube__nav__btn--back");
const goNext = document.querySelector(".mimo-podcast__youtube__nav__btn--next");

const mimoTitle = document.querySelector(".mimo-podcast__youtube__title");

let currentSlide = 0;
const maxSlide = videoSlides.length;

const goToSlide = function (slide) {
	videoSlides.forEach(
		(s, i) => (s.style.transform = `translateX(${150 * (i - slide)}%`),
	);
};
goToSlide(0);

// Function to make the Right Arrow work to slide between videos
const nextSlide = function () {
	if (currentSlide === maxSlide - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	goToSlide(currentSlide);
	swapTitle();
};

// Function to make the Left Arrow work to slide between videos
const prevSlide = function () {
	if (currentSlide === 0) {
		currentSlide = maxSlide - 1;
	} else {
		currentSlide--;
	}
	goToSlide(currentSlide);
	swapTitle();
};

const swapTitle = function () {
	if (currentSlide === 0) {
		mimoTitle.textContent = "Miss Monique - MiMo 024";
	} else if (currentSlide === 1) {
		mimoTitle.textContent = "Miss Monique - MiMo 023";
	} else if (currentSlide === 2) {
		mimoTitle.textContent = "Miss Monique - MiMo 022";
	}
	goToSlide(currentSlide);
};

goNext.addEventListener("click", nextSlide);
goBack.addEventListener("click", prevSlide);
