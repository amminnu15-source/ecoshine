document.addEventListener("DOMContentLoaded", function () {
  console.log("Dark mode JS loaded"); // ✅ check in console

  const toggleBtn = document.getElementById("themeToggle");
  const ecoSection = document.querySelector(".eco-section");

  if (!toggleBtn) {
    console.log("Button not found");
    return;
  }

  if (!ecoSection) {
    console.log("Eco section not found");
    return;
  }

  toggleBtn.addEventListener("click", function () {
    console.log("Button clicked"); // ✅ check click
    ecoSection.classList.toggle("dark");
  });
});