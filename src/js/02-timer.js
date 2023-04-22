// start button
const timerButton = document.querySelector('button[data-start]');

// timer value
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const curruntTime = new Date().getTime();
        const choosedTime = selectedDates[0].getTime();

        if (choosedTime <= curruntTime) {
            alert("Please choose a date in the future");
            timerButton.disabled = true;
            return;
        }

        timerButton.disabled = false;

        const timer = setInterval(()=>{
            const curruntTime = new Date().getTime();
            const timeLeftinMs = choosedTime - curruntTime;
            const timeLeft = convertMs(timeLeftinMs);

            if (timeLeftinMs <= 0) {
                clearInterval(timer);
                return;
            }

            if (timeLeft.days < 10){
                daysValue.textContent = '0' + timeLeft.days;
            }else if (timeLeft.days >= 10){
                daysValue.textContent = timeLeft.days;
            } else if (timeLeft.days === 0){
                daysValue.textContent = '00';
            }

            if (timeLeft.hours < 10){
                hoursValue.textContent = '0' + timeLeft.hours;
            }else if (timeLeft.hours >= 10){
                hoursValue.textContent = timeLeft.hours;
            } else if (timeLeft.hours === 0){
                hoursValue.textContent = '00';
            }

            if (timeLeft.minutes < 10){
                minutesValue.textContent = '0' + timeLeft.minutes;
            }else if (timeLeft.minutes >= 10){
                minutesValue.textContent = timeLeft.minutes;
            } else if (timeLeft.minutes === 0){
                minutesValue.textContent = '00';
            }

            if (timeLeft.seconds < 10){
                secondsValue.textContent = '0' + timeLeft.seconds;
            }else if (timeLeft.seconds >= 10){
                secondsValue.textContent = timeLeft.seconds;
            } else if (timeLeft.seconds === 0){
                secondsValue.textContent = '00';
            }
            
        }, 1000);
    },
  };

  // init date picker
flatpickr('#datetime-picker', options);


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