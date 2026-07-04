const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
const links = document.querySelectorAll(".resource-list a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "translateX(5px)";
        link.style.transition = "0.2s ease";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "translateX(0)";
    });
});