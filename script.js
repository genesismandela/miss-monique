"use strict";
// ///////////////////////////////////////////////////////////////////////////
// Loader Animation
const loader = document.querySelector(".loader");
// Remove loader after page is loaded
window.addEventListener("load", function () {
	setTimeout(function () {
		loader.style.display = "none";
	}, 500);
});

// ///////////////////////////////////////////////////////////////////////////
// Navigation Menu
const burger = document.querySelector(".hamburger"); // Select Burger
const navMenu = document.querySelector(".header__navigation__list"); // Select Navigation Menu
const navLink = document.querySelectorAll(".header__navigation__link"); // Select Navigation Links
const body = document.body; // Select BODY element
const windowWidth = window.innerWidth; // Create variable with the page width

// Create a function to close the 'navMenu' when any 'navLink' is clicked (for phone and tablet)
const NavMenuPhones = function () {
	if (windowWidth <= 768) {
		navLink.forEach(function (item, i) {
			item.addEventListener("click", function () {
				navMenu.style.visibility = "hidden"; // Close Menu
				body.style.overflow = "scroll"; // Make body scroll again (default)
				burger.classList.toggle("is-active");
			});
		});
	}
};
NavMenuPhones();

// Open and close navMenu when burger is clicked
burger.addEventListener("click", function () {
	if (navMenu.style.visibility === "visible") {
		body.style.overflow = "scroll"; // Make body scroll again (default)
		navMenu.style.visibility = "hidden";
		burger.classList.toggle("is-active");
	} else {
		body.style.overflow = "hidden"; // Make body stop scroll when 'navMenu' opened
		navMenu.style.visibility = "visible";
		burger.classList.toggle("is-active");
	}
});

// ///////////////////////////////////////////////////////////////////////////
// Show and hide songs when btn is clicked
// Array with hided songs in small screen
const hideSongs = [
	document.querySelector(".records__single:nth-child(4)"),
	document.querySelector(".records__single:nth-child(5)"),
	document.querySelector(".records__single:nth-child(6)"),
];

// Btn to show and hide songs
const btnMoreLess = document.querySelector(".records__btn-show-more");

// Event to show and hide songs when btn is clicked
btnMoreLess.addEventListener("click", function () {
	if (btnMoreLess.textContent === "Show less") {
		// hideSongs[0].style.display = "none";
		// hideSongs[1].style.display = "none";
		// hideSongs[2].style.display = "none";
		hideSongs.forEach((item, i) => (item.style.display = "none")); // For each loop to make it easy
		btnMoreLess.textContent = "Show more";
	} else {
		// hideSongs[0].style.display = "grid";
		// hideSongs[1].style.display = "grid";
		// hideSongs[2].style.display = "grid";
		hideSongs.forEach((item, i) => (item.style.display = "grid")); // For each loop to make it easy
		btnMoreLess.textContent = "Show less";
	}
});

// ///////////////////////////////////////////////////////////////////////////
// Youtube Video Slider
const videoSlider = document.querySelector(".mimo-podcast__youtube__slider"); // Select video slider
const videoSlides = document.querySelectorAll(
	".mimo-podcast__youtube__slider__video",
); // Select video slides
const goBack = document.querySelector(".mimo-podcast__youtube__nav__btn--back"); // Select back arrow
const goNext = document.querySelector(".mimo-podcast__youtube__nav__btn--next"); // Select next arrow
const mimoTitle = document.querySelector(".mimo-podcast__youtube__title"); // Select MiMo Heading
const ballBox = document.querySelector(".mimo-podcast__youtube__nav__balls"); // Select Ball Box

let currentSlide = 0;
const maxSlide = videoSlides.length;

// Create a function that translateX every video
const goToSlide = function (slide) {
	videoSlides.forEach(
		(s, i) => (s.style.transform = `translateX(${150 * (i - slide)}%`),
	);
};

// Create BallDots for every video
const createBalls = function (slide) {
	videoSlides.forEach(function (s, i) {
		const ball = `<button class="ball ball-active" data-slide="${i}"></button>`;
		ballBox.insertAdjacentHTML("afterbegin", ball); // Every dot is inserted inside the ball-box
	});
};

// Depend on current slide one of the balls will be activated
const activateBall = function (slide) {
	document
		.querySelectorAll(".ball")
		.forEach((ball) => ball.classList.remove("ball-active")); // First remove active from all balls

	document
		.querySelector(`.ball[data-slide="${slide}"]`)
		.classList.add("ball-active"); // And add active to the current slide
};

// Swap title for every slide
let podcastNumber = 25;
const swapTitle = function () {
	mimoTitle.textContent = `Miss Monique - MiMo 0${podcastNumber}`; // Set MiMo title

	// Create a loop to change the title depending on 'currentSlide'
	for (currentSlide; currentSlide < maxSlide; currentSlide++) {
		return (mimoTitle.textContent = `Miss Monique - MiMo 0${
			podcastNumber - currentSlide
		}`);
	}
	// Easier than IF/ELSE statement
	// if (currentSlide === 0) {
	// 	mimoTitle.textContent = `Miss Monique - MiMo 0${
	// 		podcastNumber - currentSlide
	// 	}`;
	// } else if (currentSlide === 1) {
	// 	mimoTitle.textContent = `Miss Monique - MiMo 0${
	// 		podcastNumber - currentSlide
	// 	}`;
	// } else if (currentSlide === 2) {
	// 	mimoTitle.textContent = `Miss Monique - MiMo 0${
	// 		podcastNumber - currentSlide
	// 	}`;
	// }
	// goToSlide(currentSlide);
};

// Function to make the Right Arrow work to slide between videos
const nextSlide = function () {
	if (currentSlide === maxSlide - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	goToSlide(currentSlide);
	activateBall(currentSlide);
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
	activateBall(currentSlide);
	swapTitle();
};

goNext.addEventListener("click", nextSlide);
goBack.addEventListener("click", prevSlide);

// Initialize all functions
const init = function () {
	goToSlide(0);
	createBalls();
	activateBall(0);
	swapTitle();
};
init();

// ///////////////////////////////////////////////////////////////////////////
// Gallery hearts fill color
const hearts = document.querySelectorAll(".gallery__icon");

hearts.forEach((heart, i) => {
	heart.addEventListener("click", function () {
		this.classList.toggle("active-heart");
	});
});
