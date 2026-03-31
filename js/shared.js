// ===== SHARED JS — GreenNest Pages =====

// --- Sidebar toggle (mobile) ---
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('menuBtn');
  if (!sidebar) return;

  menuBtn && menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay && overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  // Mark active nav item
  const links = sidebar.querySelectorAll('.nav-item');
  const current = location.pathname.split('/').pop() || 'dashboard.html';
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === current) link.classList.add('active');
    else link.classList.remove('active');
  });
}

// --- Toast notification ---
function showToast(msg, type = 'success') {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span> ${msg}`;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; t.style.transition = '.3s'; setTimeout(() => t.remove(), 350); }, 3500);
}

// --- Scroll reveal ---
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => e.target.classList.add('revealed'), +delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// --- Counter animation ---
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  const update = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (p < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, +e.target.dataset.count);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

// CSS for reveal
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  [data-reveal]{opacity:0;transform:translateY(24px);transition:opacity .55s ease,transform .55s ease}
  [data-reveal].revealed{opacity:1;transform:none}
`;
document.head.appendChild(revealStyle);

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initReveal();
  initCounters();
});
