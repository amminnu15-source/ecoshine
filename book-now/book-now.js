

const servicePrices = { standard: 89, deep: 149, moveinout: 229, airquality: 119 };
const serviceNames = { standard: 'Standard Cleaning', deep: 'Deep Cleaning', moveinout: 'Move In/Out', airquality: 'Air Quality Care' };
const serviceIcons = { standard: '🛋️', deep: '✨', moveinout: '📦', airquality: '🌬️' };

let selectedService = 'deep';
let selectedDate = null;
let selectedTime = null;
let addonTotal = 0;


function gotoStep(n) {
  document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`step${n}`).classList.add('active');
  document.querySelectorAll('.prog-step').forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i + 1 < n) s.classList.add('done');
    if (i + 1 === n) s.classList.add('active');
  });
  document.querySelectorAll('.prog-line').forEach((l, i) => {
    l.classList.toggle('done', i + 1 < n);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('toStep2').addEventListener('click', () => gotoStep(2));
document.getElementById('backToStep1').addEventListener('click', () => gotoStep(1));
document.getElementById('toStep3').addEventListener('click', () => {
  if (!selectedDate) { showToast('Please pick a date first!', 'error'); return; }
  if (!selectedTime) { showToast('Please pick a time slot!', 'error'); return; }
  gotoStep(3);
});
document.getElementById('backToStep2').addEventListener('click', () => gotoStep(2));
document.getElementById('toStep4').addEventListener('click', () => {
  updateConfirm();
  gotoStep(4);
});
document.getElementById('backToStep3').addEventListener('click', () => gotoStep(3));


document.querySelectorAll('.service-opt input').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.sopt-card').forEach(c => c.classList.remove('selected'));
    radio.nextElementSibling.classList.add('selected');
    selectedService = radio.value;
    updateSummary();
  });
});


document.querySelectorAll('.addon-opt input').forEach(cb => {
  cb.addEventListener('change', () => {
    addonTotal = Array.from(document.querySelectorAll('.addon-opt input:checked'))
      .reduce((acc, c) => acc + parseInt(c.value), 0);
    updateSummary();
  });
});

let calYear = 2026, calMonth = 3; // April 2026

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const TIMES = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];
const UNAVAILABLE = [1, 3, 7]; // unavail slots indices

function renderCalendar() {
  const grid = document.getElementById('calGrid');
  document.getElementById('calMonthYear').textContent = `${MONTHS[calMonth]} ${calYear}`;
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  grid.innerHTML = '';
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    blank.className = 'cal-day empty';
    grid.appendChild(blank);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = d;
    const date = new Date(calYear, calMonth, d);
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) el.classList.add('past');
    const todayCheck = today.getDate() === d && today.getMonth() === calMonth && today.getFullYear() === calYear;
    if (todayCheck) el.classList.add('today');
    if (selectedDate && selectedDate.d === d && selectedDate.m === calMonth && selectedDate.y === calYear) el.classList.add('selected');
    el.addEventListener('click', () => {
      if (el.classList.contains('past')) return;
      document.querySelectorAll('.cal-day').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
      selectedDate = { d, m: calMonth, y: calYear };
      renderTimeSlots();
      updateSummary();
    });
    grid.appendChild(el);
  }
}

function renderTimeSlots() {
  const grid = document.getElementById('slotsGrid');
  grid.innerHTML = '';
  TIMES.forEach((t, i) => {
    const el = document.createElement('div');
    el.className = 'time-slot';
    el.textContent = t;
    if (UNAVAILABLE.includes(i)) { el.classList.add('unavailable'); el.textContent += ' ✕'; }
    else {
      el.addEventListener('click', () => {
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
        el.classList.add('selected');
        selectedTime = t;
        updateSummary();
      });
    }
    grid.appendChild(el);
  });
}

document.getElementById('calPrev').addEventListener('click', () => {
  calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});
document.getElementById('calNext').addEventListener('click', () => {
  calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});


function updateSummary() {
  const base = servicePrices[selectedService] || 149;
  const total = base + addonTotal;
  document.getElementById('sumService').textContent = serviceNames[selectedService];
  document.getElementById('sumDate').textContent = selectedDate
    ? `${MONTHS[selectedDate.m]} ${selectedDate.d}, ${selectedDate.y}${selectedTime ? ' · ' + selectedTime : ''}`
    : 'Date not selected';
  const items = document.getElementById('summaryItems');
  items.innerHTML = `<div class="si-row"><span>${serviceNames[selectedService]}</span><strong>$${base}</strong></div>`;
  if (addonTotal > 0) items.innerHTML += `<div class="si-row"><span>Add-ons</span><strong>+$${addonTotal}</strong></div>`;
  document.getElementById('sumTotal').textContent = `$${total}`;


  const icon = document.querySelector('.ss-icon');
  if (icon) icon.textContent = serviceIcons[selectedService];
}

function updateConfirm() {
  const base = servicePrices[selectedService] || 149;
  const total = base + addonTotal;
  document.getElementById('cfService').textContent = serviceNames[selectedService];
  document.getElementById('cfDate').textContent = selectedDate
    ? `${new Date(selectedDate.y, selectedDate.m, selectedDate.d).toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}`
    : 'Not selected';
  document.getElementById('cfTime').textContent = selectedTime || 'Not selected';
  const addonsChecked = Array.from(document.querySelectorAll('.addon-opt input:checked'));
  document.getElementById('cfAddons').textContent = addonsChecked.length
    ? addonsChecked.map(c => c.nextElementSibling.textContent.trim()).join(', ')
    : 'None';
  document.getElementById('cfTotal').textContent = `$${total}`;
}


document.querySelectorAll('.pay-opt input').forEach(r => {
  r.addEventListener('change', () => {
    document.getElementById('cardFields').classList.toggle('show', r.value === 'card');
  });
});
document.getElementById('cardFields').classList.add('show');


document.getElementById('confirmBooking').addEventListener('click', () => {
  const btn = document.getElementById('confirmBooking');
  btn.textContent = '⏳ Processing...';
  btn.disabled = true;
  setTimeout(() => {
    const modal = document.getElementById('successModal');
    document.getElementById('modalService').textContent = serviceNames[selectedService];
    document.getElementById('modalDate').textContent = selectedDate
      ? `${MONTHS[selectedDate.m]} ${selectedDate.d}, ${selectedDate.y}`
      : 'your selected date';
    modal.classList.add('show');
  }, 1500);
});


renderCalendar();
renderTimeSlots();
updateSummary();
