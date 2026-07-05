// ==============================
// Footer Dates
// ==============================

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// ==============================
// Dynamic Resource List
// ==============================

const resources = [

    {
        name: "GitHub",
        url: "https://github.com"
    },

    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org"
    },

    {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org"
    },

    {
        name: "CSS Tricks",
        url: "https://css-tricks.com"
    },

    {
        name: "W3Schools",
        url: "https://www.w3schools.com"
    },

    {
        name: "BYU-Pathway",
        url: "https://www.byupathway.edu"
    },

    {
        name: "Can I Use",
        url: "https://caniuse.com"
    }

];

const list = document.getElementById("resource-list");

resources.forEach(resource => {

    const li = document.createElement("li");

    const link = document.createElement("a");

    link.href = resource.url;

    link.textContent = resource.name;

    link.target = "_blank";

    li.appendChild(link);

    list.appendChild(li);

});