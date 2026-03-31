window.addEventListener("load", () => {
  const section = document.querySelector(".blog-hero-text");
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";

  setTimeout(() => {
    section.style.transition = "0.6s ease";
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  }, 200);
});



const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".blog-card");
const buttons = document.querySelectorAll(".filter-buttons button");

let currentFilter = "all";


buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelector(".filter-buttons .active").classList.remove("active");
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    filterCards();
  });
});


searchInput.addEventListener("keyup", filterCards);


function filterCards() {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const category = card.dataset.category;

    const matchSearch = text.includes(searchValue);
    const matchFilter = currentFilter === "all" || category === currentFilter;

    if (matchSearch && matchFilter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}



function subscribe() {
  const email = document.getElementById("emailInput").value;

  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email!");
    return;
  }

  alert("Subscribed successfully 🌿");
}





document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".filter-buttons button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

    });
  });

});