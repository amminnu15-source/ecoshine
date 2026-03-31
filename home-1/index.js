
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));



document.addEventListener("DOMContentLoaded", function () {

  function counter(el, target, suffix = "", decimal = false) {
    if (!el) return; 

    let count = 0;
    let step = target / 60;

    function update() {
      count += step;

      if (count < target) {
        el.innerText = decimal
          ? count.toFixed(1) + suffix
          : Math.floor(count) + suffix;

        requestAnimationFrame(update);
      } else {
        el.innerText = target + suffix;
      }
    }

    update();
  }

  counter(document.querySelector(".stat1"), 5200, "+");
  counter(document.querySelector(".stat2"), 4.9, "★", true);
  counter(document.querySelector(".stat3"), 100, "%");

});



window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(nav){
    nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 24px rgba(46,204,142,0.15)'
      : '0 2px 20px rgba(46,204,142,0.08)';
  }
});



const heroElements = document.querySelectorAll('.hero-content, .hero-visual');

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

heroElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  heroObserver.observe(el);
});


window.addEventListener("load", () => {
  document.querySelector(".hero-content")?.classList.add("show");
  document.querySelector(".hero-visual")?.classList.add("show");
});

window.addEventListener("DOMContentLoaded", () => {
  const bookingBadge = document.querySelector(".badge.booking");
  const ecoBadge = document.querySelector(".badge.eco");

  if (bookingBadge) {
    setTimeout(() => {
      bookingBadge.classList.add("show");
    }, 500);
  }

  if (ecoBadge) {
    setTimeout(() => {
      ecoBadge.classList.add("show");
    }, 900);
  }
});





const nav = document.querySelector("nav");

const checkDarkMode = () => {
  if (!nav) return;

  const navBg = window.getComputedStyle(nav).backgroundColor;


  if (navBg.includes("0, 0, 0") || navBg.includes("18, 18, 18")) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};


window.addEventListener("load", checkDarkMode);


window.addEventListener("scroll", checkDarkMode);



const toggleBtn = document.getElementById("themeToggle");

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.innerHTML = "☀️";
  } else {
    document.body.classList.remove("dark");
    if (toggleBtn) toggleBtn.innerHTML = "🌙";
  }
});

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = "🌙";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");

  if (!toggleBtn) {
    console.error("Button not found");
    return;
  }

 
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});



const serviceCards = document.querySelectorAll(".services .card");

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 100);
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => serviceObserver.observe(card));




const steps = document.querySelectorAll(".how-section .step");

const stepObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 150);
    }
  });
}, { threshold: 0.2 });

steps.forEach(step => stepObserver.observe(step));




const cards = document.querySelectorAll(".ba-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const before = card.querySelector(".before-img");
    before.style.clipPath = `inset(0 ${100 - (x / rect.width) * 100}% 0 0)`;
  });

  card.addEventListener("mouseleave", () => {
    const before = card.querySelector(".before-img");
    before.style.clipPath = "inset(0 50% 0 0)";
  });
});


document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".ba-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.boxShadow = `
        ${(x - rect.width/2)/10}px ${(y - rect.height/2)/10}px 40px rgba(0,0,0,0.25)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    });
  });

});





