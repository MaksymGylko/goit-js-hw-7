'use strict'

const valueRef = document.querySelector('#value');

const decrBtnRef = document.querySelector('button[data-action="decrement"]')
const incrBtnRef = document.querySelector('button[data-action="increment"]')

decrBtnRef.addEventListener('click', () => {
   --valueRef.textContent;
})

incrBtnRef.addEventListener('click', () => {
    ++valueRef.textContent;
})

