// MODULES
import increment from './js/increment.js';
import decrement from './js/decrement.js';
import reset from './js/reset.js';

// MAIN VARIABLES
const main = document.querySelector('.main');
const view = document.getElementById('view');

// COUNT
let num = 0;

// EVENT LISTENER
main.addEventListener('click', (btn) => {
   if (btn.target.tagName === 'BUTTON') {
      if (btn.target.classList.value === 'increment') {
         num = increment(num);
         view.value = num;
      }

      if (btn.target.classList.value === 'decrement') {
         num = decrement(num);
         view.value = num;
      }

      if (btn.target.classList.value === 'reset') {
         num = reset(num);
         view.value = num;
      }
   }
});

view.value = num;
