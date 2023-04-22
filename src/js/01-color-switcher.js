const start_button = document.querySelector('button[data-start]');
const stop_button = document.querySelector('button[data-stop]');

let timer;

start_button.addEventListener('click', () => {
    timer = setInterval(() => {
       document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    start_button.disabled = true;
});

stop_button.addEventListener('click', () => {
    clearInterval(timer);

    start_button.disabled = false;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }