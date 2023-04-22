function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({position, delay});
  } else {
    return Promise.reject({position, delay});
  }
}

document.querySelector('.form').addEventListener('submit', event =>{
  event.preventDefault();

  const delay = Number(document.querySelector('input[name=delay]').value);
  const step = Number(document.querySelector('input[name=step]').value);
  const amount = Number(document.querySelector('input[name=amount]').value);

  setTimeout(()=>{
    let counter = 1;

    createPromise(counter, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    let timer = setInterval(()=>{
      if (counter >= amount){
        clearInterval(timer);
        return;
      }
      
      counter++;
      createPromise(counter, delay + step * (counter - 1)).then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }, step);
  }, delay);
});