// ── THEME TOGGLE (FIXED & STABLE) ──
document.addEventListener("DOMContentLoaded", () => {

  const html = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");

  // ✅ use ONE key everywhere
  const savedTheme = localStorage.getItem("theme") || "light";

  // apply saved theme
  html.setAttribute("data-theme", savedTheme);

  // update icon
  if (themeBtn) {
    themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }

  // toggle click
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);

      themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

});











const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});



const groupLabels = document.querySelectorAll(".mobile-group-label");

groupLabels.forEach(label => {
  label.addEventListener("click", () => {

    
    groupLabels.forEach(l => {
      if (l !== label) l.classList.remove("active");
    });

    
    label.classList.toggle("active");
  });
});



function toggleDropdown(id) {
  const el = document.getElementById(id);

  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}



