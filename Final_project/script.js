// Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');

  // Save preference
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

// Load saved preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Attach event listener
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
  }
});
