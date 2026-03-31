document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".cleaning-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  if (section) observer.observe(section);

});




document.addEventListener('DOMContentLoaded', function () {


  const items = document.querySelectorAll('.feature-item');

  
  items.forEach(function (item) {
    item.style.opacity = '0';
    item.style.transform = 'translateY(28px)';
    item.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        
        setTimeout(function () {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (item) {
    observer.observe(item);
  });

 
  items.forEach(function (item) {
    item.addEventListener('touchstart', function () {
      item.style.transform = 'translateY(-7px)';
    }, { passive: true });

    item.addEventListener('touchend', function () {
      setTimeout(function () {
        item.style.transform = 'translateY(0)';
      }, 300);
    }, { passive: true });
  });


  const heading = document.querySelector('.features-top');
  if (heading) {
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(24px)';
    heading.style.transition = 'opacity 0.65s ease, transform 0.65s ease';

    const headObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
        headObs.disconnect();
      }
    }, { threshold: 0.2 });

    headObs.observe(heading);
  }

});



document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step, index) => {
    setTimeout(() => {
      step.classList.add("show");
    }, index * 400);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step, index) => {
    setTimeout(() => {
      step.classList.add("show");
    }, index * 300);
  });
});




const track = document.getElementById("sliderTrack");

if (track) {

  const cards = track.children;

  for (let i = 0; i < 3; i++) {
    track.appendChild(cards[i].cloneNode(true));
  }

  let index = 0;

  function slide() {
    const cardWidth = track.querySelector(".card").offsetWidth + 20;

    index++;
    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    if (index >= cards.length - 3) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;
        index = 0;
      }, 600);
    }
  }

  setInterval(slide, 5000);
}




const dots = document.querySelectorAll(".cta-dots span");
let index = 0;

setInterval(() => {
  dots.forEach(dot => dot.classList.remove("active"));
  index = (index + 1) % dots.length;
  dots[index].classList.add("active");
}, 3000);





document.querySelectorAll(".srv-tab").forEach(tab=>{
  tab.addEventListener("click", ()=>{

    document.querySelectorAll(".srv-tab")
      .forEach(t=>t.classList.remove("active"));

    tab.classList.add("active");

    document.querySelectorAll(".srv-panel")
      .forEach(p=>p.classList.remove("active"));

    document.querySelector(
      `.srv-panel[data-panel="${tab.dataset.tab}"]`
    ).classList.add("active");
  });
});





const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  document.body.setAttribute(
    "data-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});




document.addEventListener("DOMContentLoaded", () => {
  const isDark = document.body.classList.contains("dark");

  document.body.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
});



document.addEventListener("DOMContentLoaded", () => {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.classList.remove("dark");
    document.body.setAttribute("data-theme", "light");
  }

});