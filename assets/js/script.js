const uri = window.location.pathname;

// Check for current path
// Use regex pattern to replace slash and .html string
// In production, split the text
// Then, get rid of the .html
// const patternUri = /\/|\.html/g;
// const currentPathUri = url.replace(patternUri, "");
const splitted = uri.split("/");
const currentPathUri = splitted[splitted.length - 1].replace(".html", "");

const nav = document.querySelector(`[nav=${currentPathUri}]`);

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