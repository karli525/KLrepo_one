// =========================
// Personalized Theme + Greeting Script
// =========================

// Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');

  // Save preference
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

// Load saved preference and greeting
window.addEventListener('DOMContentLoaded', () => {
  // Check for name and theme in localStorage
  let userName = localStorage.getItem('name');
  let userTheme = localStorage.getItem('theme');

  // Prompt only if not already stored
  if (!userName || !userTheme) {
    userName = prompt("What's your name?");
    userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();

    // Save values to localStorage
    localStorage.setItem('name', userName);
    localStorage.setItem('theme', userTheme);
  }

  // Apply greeting
  const welcome = document.getElementById("welcome-message");
  if (welcome && userName) {
    welcome.textContent = `Welcome back, ${userName}`;
  }

  // Apply saved theme
  if (userTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Add listener to theme toggle button
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
  }
});
