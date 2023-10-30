const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function(){
    const sideMenu = document.querySelector(".side-menu-bar");
    sideMenu.style.display = "flex";
});
const menuIcon2 = document.querySelector(".close-icon");
menuIcon2.addEventListener("click", function(){
    const sideMenu = document.querySelector(".side-menu-bar");
    sideMenu.style.display = "none";
});

const hideButton = document.querySelector(".hide-manifesto");
const showButton = document.querySelector(".show-manifesto");

document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.querySelector(".show-manifesto");
    const hideButton = document.querySelector(".hide-manifesto");
    const manifestoText = document.querySelector(".manifesto-text");
    const manifestoTextToShow = document.querySelector(".manifesto-text-to-show");

    showButton.addEventListener("click", function () {
        manifestoText.style.display = "none";
        manifestoTextToShow.style.display = "block";
    });

    hideButton.addEventListener("click", function () {
        manifestoText.style.display = "block";
        manifestoTextToShow.style.display = "none";
    });
});

