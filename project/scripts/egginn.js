const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#main-navigation");

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const orderForm = document.querySelector("#orderForm");
const productList = document.querySelector("#productSummary");

const eggProducts = [
    {
        name: "Home Egg Pack",
        category: "household",
        suitableFor: "Families and individuals"
    },
    {
        name: "Family Egg Supply",
        category: "family",
        suitableFor: "Regular household use"
    },
    {
        name: "Business Egg Supply",
        category: "business",
        suitableFor: "Restaurants and food businesses"
    }
];

function setFooterInformation() {
    const year = new Date().getFullYear();

    if (currentYear) {
        currentYear.textContent = year;
    }

    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
}

function toggleNavigation() {
    if (!menuButton || !navigation) {
        return;
    }

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
}

function closeNavigation() {
    if (!menuButton || !navigation) {
        return;
    }

    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

function recordOrderInterest() {
    if (!orderForm) {
        return;
    }

    orderForm.addEventListener("submit", () => {
        const customerType = document.querySelector("#customerType")?.value;
        const quantity = document.querySelector("#quantity")?.value;

        const orderData = {
            customerType: customerType,
            quantity: quantity,
            submitted: new Date().toISOString()
        };

        localStorage.setItem(
            "eggInnLastEnquiry",
            JSON.stringify(orderData)
        );
    });
}

function displayProductSummary() {
    if (!productList) {
        return;
    }

    productList.innerHTML = "";

    eggProducts.forEach((product) => {
        const item = document.createElement("li");

        item.innerHTML = `
            <strong>${product.name}</strong> —
            ${product.suitableFor}
        `;

        productList.appendChild(item);
    });
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleNavigation);

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });
}

setFooterInformation();
recordOrderInterest();
displayProductSummary();