// 1. Display a message in the browser console
console.log("CSS + JavaScript is powerful!");

// 2. Show an alert message when the page loads
window.onload = function () {
    alert("Welcome to Assignment 6 with JavaScript!");
};

// 3. Function t toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}
