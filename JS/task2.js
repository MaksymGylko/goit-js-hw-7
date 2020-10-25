'use strict'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

console.log(ingredients);

ingredients.forEach((ingredients) => {
    const listRef = document.createElement('li');
    listRef.textContent = ingredients;

    const ingredientsRef = document.querySelector('#ingredients');
    ingredientsRef.appendChild(listRef);
}); 



