import Notiflix from "notiflix";

const elements = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};

elements.form.addEventListener("submit", onClick)

function onClick(evt) {
  evt.preventDefault();
  let delay = Number(elements.delay.value);
  const step = Number(elements.step.value);
  const amount = Number(elements.amount.value);
  let position;
  for (let i = 1; i <= amount; i+= 1) {
    createPromise(i, delay);
    delay += step;
    
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      
      if (shouldResolve) {
        res({ position, delay });
        // Fulfill
      } else {
        rej({ position, delay });
        // Reject
      }
    }, delay);
   
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  
}
