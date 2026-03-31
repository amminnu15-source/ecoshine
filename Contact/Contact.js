const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});



document.querySelector(".toggle").onclick = () => {
  document.body.classList.toggle("dark");
};






document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const required = ["firstName","email","subject","message"];
  let valid = true;

  required.forEach(id=>{
    const el = document.getElementById(id);
    if(!el.value.trim()){
      el.style.border = "1px solid red";
      valid = false;
    }else{
      el.style.border = "";
    }
  });

  if(!valid) return alert("Please fill required fields");

  alert("Message Sent!");
  this.reset();
});



document.querySelector(".toggle")?.addEventListener("click", ()=>{
  const theme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "light" : "dark"
  );
});




const locSection = document.querySelector(".location-section");

window.addEventListener("scroll", () => {
  const top = locSection.getBoundingClientRect().top;
  if(top < window.innerHeight - 100){
    locSection.style.opacity = "1";
    locSection.style.transform = "translateY(0)";
  }
});


locSection.style.opacity = "0";
locSection.style.transform = "translateY(40px)";
locSection.style.transition = "0.6s ease";










