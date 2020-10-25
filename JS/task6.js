'use strict'

const inputRef = document.querySelector('#validation-input');

function focusChangeHandler() {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
};

inputRef.addEventListener('blur', focusChangeHandler);
inputRef.addEventListener('focus', () => {
    inputRef.classList.remove('invalid')
    inputRef.classList.remove('valid')
});
