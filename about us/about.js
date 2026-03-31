
(function () {
  const root = document.documentElement;

  
  const savedTheme = localStorage.getItem("ecoshine-theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  
  const observer = new MutationObserver(() => {
    const theme = root.getAttribute("data-theme");

    
  });

  observer.observe(root, {
    attributes: true,
    attributeFilter: ["data-theme"]
  });
})();


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up")
  .forEach(el => observer.observe(el));



document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll(".fade-up");

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

  const counters = document.querySelectorAll(".count");
  const fadeElements = document.querySelectorAll(".fade-up");

  const animateCount = (el) => {
    const target = +el.getAttribute("data-target");
    let count = 0;

    const speed = target / 100;

    const update = () => {
      count += speed;

      if (count < target) {
        el.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(update);
      } else {
        el.innerText = target.toLocaleString();
      }
    };

    update();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

       
        entry.target.classList.add("show");

        
        if (entry.target.classList.contains("count") &&
            !entry.target.classList.contains("counted")) {

          animateCount(entry.target);
          entry.target.classList.add("counted");
        }

      }

    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
  fadeElements.forEach(el => observer.observe(el));

});






document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});






const elements = document.querySelectorAll(".fade-up");

if (elements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}


const track = document.querySelector(".cert-track");

if (track) {
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}





document.addEventListener("DOMContentLoaded", function () {


  const elements = document.querySelectorAll(".fade-up");

  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

});











document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll(".fade-up");

  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

});