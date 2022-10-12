import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

function createPromise(position, delay) {


  const promise = new Promise((resolve, reject) => {
  
    const shouldResolve = Math.random() > 0.3;
  
    setTimeout(() => {
      
      if (shouldResolve) {
        resolve( {position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
    
  });

  return promise;
}


const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
    
  const { delay, step, amount } = e.currentTarget.elements;
    
  const timeObject = {
    firstDelay: delay.value,
    step: step.value,
    amount: amount.value,
  }



  for (let i = 0; i < timeObject.amount; i++) {

    let position += 1;
    let interval = timeObject.firstDelay + i * delay;
     
      createPromise(position, timeObject.step)
        .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
        .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        
      if (position >= timeObject.amount) {
        clearInterval(interval);
      }

    }



    // const interval = setInterval(() => { 
    //   position += 1;
    //   createPromise(position, timeObject.step)
    //     .then(({ position, delay }) => {
    //     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    //   })
    //     .catch(({ position, delay }) => {
    //     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    //     });
        
    //   if (position >= timeObject.amount) {
    //     clearInterval(interval);
    //   }
    // }, timeObject.step)

 

}
)
    




