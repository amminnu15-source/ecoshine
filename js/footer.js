const html = document.documentElement;

// load saved theme
const savedTheme = localStorage.getItem('econest-theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// toggle function (you can connect to button)
function toggleTheme() {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  localStorage.setItem('econest-theme', next);
}