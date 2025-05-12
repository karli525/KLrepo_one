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

// 4. Array Check (Required Console Log)
console.log("The first color in the array is:", colors[0]);

// 5. Apply Color to Background
document.body.style.backgroundColor = userInfo.selectedColor;

const urlParams = new URLSearchParams(window.location.search);
const source = urlParams.get('utm_source');
const medium = urlParams.get('utm_medium');
const campaign = urlParams.get('utm_campaign');

if (source && medium && campaign) {
  console.log("Sending manual_referral event to GA4...");
  gtag('event', 'manual_referral', {
    event_category: 'referral_test',
    event_label: source + ' / ' + medium,
    campaign: campaign
  });
}

