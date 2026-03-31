
document.addEventListener('DOMContentLoaded', () => {

 
  setTimeout(() => {
    const ring = document.querySelector('.ring-progress');
    if (ring) ring.style.strokeDashoffset = '50';
  }, 600);


  document.querySelectorAll('.cleaner-item .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'book-now.html';
    });
  });

  
  const h = new Date().getHours();
  const greet = h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
  const titleEl = document.querySelector('.welcome-banner h1');
  if (titleEl) titleEl.textContent = `Good ${greet}, Sarah! 🌿`;

});
