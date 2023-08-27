function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const elements = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}


elements.start.addEventListener("click", onStart);
elements.stop.addEventListener("click", onStop);

let timeInt = null;
function onStart() {
    elements.start.disabled = true;
    elements.stop.disabled = false;
    timeInt = setInterval(() => {
        elements.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStop () {
    elements.start.disabled = false;
    elements.stop.disabled = true;
    clearInterval(timeInt);
}
