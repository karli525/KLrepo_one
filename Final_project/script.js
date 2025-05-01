// 1. Color Options Array
const colors = ["#ffe6ec", "#f5e1d2", "#fffdd0"]; // light pink, light brown, light yellow

// 2. Prompt for User Input
const userName = prompt("Welcome to Lifting 101! What's your name?");
const colorChoice = prompt(`Hi ${userName || "guest"}! Choose a background color for the page:\n0 = Light Pink\n1 = Light Brown\n2 = Light Yellow`);

// 3. Store Input in an Object
const userInfo = {
  name: userName,
  selectedColor: colors[parseInt(colorChoice)]
};

// 4. Array Check (Required Console Log)
console.log("The first color in the array is:", colors[0]);

// 5. Apply Color to Entire Page
document.body.style.backgroundColor = userInfo.selectedColor;
document.documentElement.style.backgroundColor = userInfo.selectedColor;
