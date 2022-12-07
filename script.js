const daysEl = document.getElementById('day');
const hoursEl = document.getElementById('hour');
const minsEl = document.getElementById('minute');
const secondsEl = document.getElementById('second');

const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hour = Math.floor(totalseconds / 3600 % 24);
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hour);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);