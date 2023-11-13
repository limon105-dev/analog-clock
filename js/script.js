let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime() {
    let date = new Date();

    // Getting present hour,min,sec from date
    let presentHour = date.getHours();
    let presentMin = date.getMinutes();
    let presentSec = date.getSeconds();

    let hourRotation = 30 * presentHour + presentMin / 2;
    let minRotation = 6 * presentMin;
    let secRotation = 6 * presentSec

    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
};

setInterval(displaytime, 1000);