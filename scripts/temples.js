const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Initial hamburger icon
menuButton.textContent = "☰";

// Toggle navigation
menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (menuButton.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});

// Footer year
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;