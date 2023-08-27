import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const input = document.querySelector("#datetime-picker"); 
const start = document.querySelector('[data-start]');

let elements = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector("[data-seconds]"),
};
const currentDate = new Date();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const fp = flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() - currentDate.getTime() < 0) {
            Notiflix.Report.warning(
                'WARNING!',
                'Please choose a date in the feature',
                'Ok'
            );
        } else {
            start.disabled = false;
            input.disabled = true;
            start.addEventListener('click' ,() => {
    const timeIn = setInterval(() => {
        const currenTime = new Date();
        const ms = selectedDates[0].getTime() - currenTime.getTime();
        elements.days.textContent = convertMs(ms).days;
        elements.hours.textContent = convertMs(ms).hours;
        elements.minutes.textContent = convertMs(ms).minutes;
        elements.seconds.textContent = convertMs(ms).seconds;
        if (ms < 1000) {
            clearInterval(timeIn);
            
            elements.minutes.textContent = '00';
            elements.seconds.textContent = '00';
        };
    }, 1000);
});
         };
     },
});