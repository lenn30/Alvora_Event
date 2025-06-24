//  Carousel  
const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : track.children.length - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % track.children.length;
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Calendar 
const monthYear = document.getElementById('monthYear');
const calendarDays = document.querySelector('.calendar-days');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');

// Hari-hari 
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
document.querySelector('.day-names').innerHTML = dayNames.map(day => `<div>${day}</div>`).join('');

// Data tanggal spesial per bulan (format: 'YYYY-MM': [array tanggal])
const specialDates = {
  '2025-06': [10, 25], // Juni
  '2025-07': [5, 17, 30], // Juli
  '2025-08': [1, 8, 20] // Agustus 
};

let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 = Januari, 5 = Juni
  const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`; // '2025-06'

  monthYear.textContent = currentDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric'
  });

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  calendarDays.innerHTML = '';

  // Kosongin awal minggu kalau belum mulai hari ke-1
  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  // Loop hari
  for (let day = 1; day <= lastDate; day++) {
    const isSpecial = specialDates[monthKey]?.includes(day);
    const specialClass = isSpecial ? 'special-day' : '';
    calendarDays.innerHTML += `<div class="${specialClass}">${day}</div>`;
  }
}

// Navigasi bulan
prevMonth.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonth.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Tampilkan kalender awal
renderCalendar();
