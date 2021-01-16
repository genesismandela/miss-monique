"use strict";
///////////////
// HEADER BACKGROUND SLIDER

// Header Object
const header = document.querySelector(".header");

// // Image List
// const images = [];
// images[0] = `url(../img/miss_monique_background_1.jpg)`;
// images[1] = `url(../img/miss_monique_background_2.jpg)`;
// images[2] = `url(../img/miss_monique_background_3.jpg)`;

// // Image Counter
// let i = 0;

// // Function Declaration
// function changeBackground() {
// 	header.style.backgroundImage = images[i];

// 	if (i < images.length - 1) {
// 		i++;
// 	} else {
// 		i = 0;
// 	}

// 	setTimeout("changeBackground()", 7500);
// }
// // Call function when page is loaded
// window.onload = changeBackground;

// Loader Animation
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
	setTimeout(function () {
		loader.style.display = "none";
	}, 1000);
});

// ///////////////
// // HEADER NAVIGATION BURGER
const openNavMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__navigation__list");

openNavMenu.addEventListener("click", function () {
	// navMenu.style.visibility = "visible";

	if (navMenu.style.visibility === "visible") {
		navMenu.style.visibility = "hidden";
		openNavMenu.classList.toggle("is-active");
		console.log("closed");
	} else {
		navMenu.style.visibility = "visible";
		openNavMenu.classList.toggle("is-active");
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
		hideSongs[0].style.display = "block";
		hideSongs[1].style.display = "block";
		hideSongs[2].style.display = "block";

		btnShowHideSongs.textContent = "Show less";
	}
});
