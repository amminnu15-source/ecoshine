document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".hero-text");
  const images = document.querySelector(".hero-images");

  setTimeout(() => {
    text.classList.add("fade-in");
    images.classList.add("fade-in");
  }, 200);
});





document.addEventListener('DOMContentLoaded', () => {


  const cards = document.querySelectorAll('.svc-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(card => observer.observe(card));


  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width  - 0.5;  
      const cy = (e.clientY - rect.top)  / rect.height - 0.5;
      const rx = cy * -6;   
      const ry = cx *  6;  
      card.style.transform = `translateY(-7px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.transition = 'transform .1s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s cubic-bezier(.4,0,.2,1), box-shadow .35s, border-color .35s';
    });
  });

 
  const images = document.querySelectorAll('.card-img-wrap img');
  images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity .5s ease';
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => { img.style.opacity = '1'; });
      img.addEventListener('error', () => {
    
        img.style.display = 'none';
        const wrap = img.closest('.card-img-wrap');
        if (wrap) {
          const label = document.createElement('div');
          label.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3.5rem;opacity:.45;';
          label.textContent = '🌿';
          wrap.appendChild(label);
        }
      });
    }
  });


  document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top  - size / 2;
      ripple.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        left:${x}px;top:${y}px;
        background:rgba(255,255,255,.35);
        border-radius:50%;
        transform:scale(0);
        animation:rippleAnim .5s ease-out forwards;
        pointer-events:none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 550);
    });
  });


  if (!document.getElementById('rippleStyle')) {
    const s = document.createElement('style');
    s.id = 'rippleStyle';
    s.textContent = '@keyframes rippleAnim{to{transform:scale(2.5);opacity:0}}';
    document.head.appendChild(s);
  }


  if (!saved) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) html.setAttribute('data-theme', 'dark');
  }


  const ctaBtn = document.querySelector('.sec-cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('mouseenter', () => {
      ctaBtn.textContent = 'Explore All 9 Services →';
    });
    ctaBtn.addEventListener('mouseleave', () => {
      ctaBtn.textContent = 'View All Services';
    });
  }

});





window.addEventListener("load", () => {
  const heroEls = document.querySelectorAll('.hero-text, .hero-images');

  heroEls.forEach(el => {
    el.classList.remove('fade-in');   
    el.style.opacity = "1";           
    el.style.transform = "none";      
    el.style.transition = "none";    
  });
});























