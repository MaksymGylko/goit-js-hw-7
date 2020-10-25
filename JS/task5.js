'use strict'

const inputRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    outputNameRef.textContent = event.target.value
    if (event.target.value === '') {
        outputNameRef.textContent = 'незнакомец'
    };
});