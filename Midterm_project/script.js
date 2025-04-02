// 1. Color Options Array
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// 2. Prompt for User Input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// 3. Store Input in an Object
const userInfo = {
  name: userName,
  selectedColor: colors[parseInt(colorChoice)]
};

// 4. Array Check
console.log("The first color in the array is:", colors[0]);

// 5. Apply Color to Background (after DOM is ready)
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = userInfo.selectedColor;
});

