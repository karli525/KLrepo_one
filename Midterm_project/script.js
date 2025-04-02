// 1. Color Options Array (bright and fun!)
const colors = ["#FFC0CB", "#FFD700", "#98FB98"]; 
// pink, gold, pale green

// 2. Prompt for User Input
const userName = prompt("What is your name?");
const colorChoice = prompt("Hi " + userName + "! Pick a background color:\n0 = Pink\n1 = Gold\n2 = Mint Green");

// 3. Store Input in an Object
const userInfo = {
  name: userName,
  selectedColor: colors[parseInt(colorChoice)]
};

// 4. Array Check
console.log("The first color in the array is:", colors[0]);

// 5. Apply Color to Background after page loads
window.onload = function () {
  document.body.style.backgroundColor = userInfo.selectedColor;
};
