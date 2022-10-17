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
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  }

  // console.log(`"delay:"${typeof timeObject.delay}`);
  // console.log(`"step:"${timeObject.step}`);
  // console.log(`"amoun:"${timeObject.amount}`);

  for (let i = 0; i < timeObject.amount; i++) {
    let interval = timeObject.delay + i * timeObject.step;
    let position = i+1;
    // console.log(`"position":${position}`);
    // console.log(`"interval":${interval}`);
    createPromise(position, interval)
      .then(onSuccess)
      .catch(onError);
  }

})

function onSuccess({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

// My first Variant
  
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

 

// }
// )
    

// Var from Ganna

// import { Notify } from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import 'notiflix/dist/notiflix-3.2.5.min.css';
// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;

//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//         // Reject
//       }
//     }, delay);
//   });
// }

// const refs = { form: document.querySelector('.form') };
// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   // const { delay, step, amount } = event.currentTarget.elements;
//   const delay = Number(event.currentTarget.elements.delay.value);
//   const step = Number(event.currentTarget.elements.step.value);
//   const amount = Number(event.currentTarget.elements.amount.value);
//   for (let i = 0; i < amount; i++) {
//     let interval = delay + i * step;
//     createPromise(i + 1, interval)
//       .then(onSuccess)
//       .catch(onError);
//   }
// }
// function onSuccess({ position, delay }) {
//   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
//     timeout: 4000,
//   });
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }
// function onError({ position, delay }) {
//   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
//     timeout: 4000,
//   });
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// }
