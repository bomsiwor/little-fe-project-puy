const url = window.location.pathname;

// Check for current path
// Use regex pattern to replace slash and .html string
const pattern = /\/|\.html/g;
const currentPath = url.replace(pattern, "");

const nav = document.querySelector(`[nav=${currentPath}]`);

// Change the current tab name if match with the url path
nav.classList.add("text-white");

// Add event handler
nav.addEventListener("click", (e) => {
    e.preventDefault();

    return false;
});

const rupiahize = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",

    }).format(value);
}