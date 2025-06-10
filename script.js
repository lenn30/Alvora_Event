// Carousel logic
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

// Calendar logic
const monthYear = document.getElementById('monthYear');
const calendarDays = document.querySelector('.calendar-days');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
document.querySelector('.day-names').innerHTML = dayNames.map(day => `<div>${day}</div>`).join('');

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    calendarDays.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= lastDate; day++) {
        const specialClass = (day === 10 || day === 25) ? 'special-day' : '';
        calendarDays.innerHTML += `<div class="${specialClass}">${day}</div>`;
    }
}

prevMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
