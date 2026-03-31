
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero2-text").style.opacity = "1";
});


const hero = document.querySelector(".hero2");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hero.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(hero);




const toggle = document.querySelector("#themeToggle");

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");


  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}



document.querySelectorAll("tbody tr").forEach(row => {
  row.querySelectorAll("td").forEach((cell, i) => {
    const headers = ["Home Size", "Regular", "Deep", "Move", "Duration"];
    cell.setAttribute("data-label", headers[i]);
  });
});





document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".eco-section .fade-up");

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

});




document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".why-left, .why-card");

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
  });

  setTimeout(() => {
    elements.forEach(el => {
      el.style.transition = "0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, 200);
});




document.addEventListener("DOMContentLoaded", () => {
  const homeSize = document.getElementById("homeSize");
  const addons = document.querySelectorAll(".addons input");
  const totalPrice = document.getElementById("totalPrice");

  function calculatePrice() {
    let total = parseInt(homeSize.value) || 0;

    addons.forEach(item => {
      if (item.checked) {
        total += parseInt(item.value) || 0;
      }
    });

    totalPrice.textContent = "$" + total;
  }


  homeSize.addEventListener("change", calculatePrice);

  addons.forEach(item => {
    item.addEventListener("change", calculatePrice);
  });

  
  calculatePrice();
});















