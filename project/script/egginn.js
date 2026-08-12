"use strict";

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

/* =========================
   FOOTER INFORMATION
   ========================= */

function setFooterInformation() {
    const year = new Date().getFullYear();

    if (currentYear) {
        currentYear.textContent = year;
    }

    if (lastModified) {
        lastModified.textContent =
            `Last Modified: ${document.lastModified}`;
    }
}

/* =========================
   MOBILE NAVIGATION
   ========================= */

function toggleNavigation() {
    if (!menuButton || !navigation) {
        return;
    }

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    if (isOpen) {
        menuButton.innerHTML = '<span aria-hidden="true">✕</span>';
        menuButton.setAttribute(
            "aria-label",
            "Close navigation menu"
        );
    } else {
        menuButton.innerHTML = '<span aria-hidden="true">☰</span>';
        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }
}

/* =========================
   CLOSE MENU AFTER NAVIGATION
   ========================= */

function closeNavigation() {
    if (!menuButton || !navigation) {
        return;
    }

    navigation.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.innerHTML = '<span aria-hidden="true">☰</span>';

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}

/* =========================
   ORDER FORM
   ========================= */

function recordOrderInterest() {
    if (!orderForm) {
        return;
    }

    orderForm.addEventListener("submit", () => {

        const customerType =
            document.querySelector("#customerType")?.value || "";

        const quantity =
            document.querySelector("#quantity")?.value || "";

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

/* =========================
   PRODUCT SUMMARY
   ========================= */

function displayProductSummary() {
    if (!productList) {
        return;
    }

    productList.innerHTML = "";

    eggProducts.forEach((product) => {

        const item = document.createElement("li");

        const productName = document.createElement("strong");
        productName.textContent = product.name;

        item.appendChild(productName);
        item.append(` — ${product.suitableFor}`);

        productList.appendChild(item);
    });
}

/* =========================
   EVENT LISTENERS
   ========================= */

if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        toggleNavigation
    );

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener(
            "click",
            closeNavigation
        );
    });
}

/* =========================
   INITIALIZE
   ========================= */

setFooterInformation();
recordOrderInterest();
displayProductSummary();