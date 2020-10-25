'use strict'

const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

console.log(images);

const createImageGallery = image => {
    const listRef = document.createElement('li');
    const imageRef = document.createElement('img')


    

    imageRef.setAttribute('src', image.url)

    imageRef.setAttribute('alt', image.alt)

    listRef.classList.add('js-image-link')
    listRef.appendChild(imageRef)

    const imageGallery = document.querySelector('#gallery');

    imageGallery.appendChild(listRef)
    console.log(imageGallery);

    return imageGallery
}

const galleryRef = images.map(image => createImageGallery(image))


