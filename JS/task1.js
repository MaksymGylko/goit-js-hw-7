"use strict"

const categoriesListRef = Array.from(document.querySelectorAll('.item'));
console.log(`В списке ${categoriesListRef.length} елемент(ов)`);


const categoriesRef = categoriesListRef.forEach((item) => 
    console.log(`Категория: ${item.querySelector('h2').textContent}. Количество елементов: ${item.querySelectorAll('ul > li').length}`)
);