// Current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

// Dynamic Web Resources List
const resources = [
    { name: "GitHub", url: "https://github.com/" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
    { name: "BYU-Pathway", url: "https://www.byupathway.edu/" }
];

const list = document.getElementById("resourceList");

resources.forEach(resource => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = resource.url;
    a.textContent = resource.name;
    a.target = "_blank";

    li.appendChild(a);
    list.appendChild(li);
});