// * Створення і рендер розмітки на підставі масиву даних 
// galleryItems і наданого шаблону елемента галереї.
// * Реалізація делегування на ul.gallery і отримання url 
// великого зображення.
// * Підключення скрипту і стилів бібліотеки модального вікна 
// basicLightbox. Використовуй CDN сервіс jsdelivr і додай у 
// проект посилання на мініфіковані (.min) файли бібліотеки.
// * Відкриття модального вікна по кліку на елементі галереї. 
// * Для цього ознайомся з документацією і прикладами.
// * Заміна значення атрибута src елемента <img> в модальному 
// вікні перед відкриттям. Використовуй готову розмітку 
// модального вікна із зображенням з прикладів бібліотеки 
// basicLightbox.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

gallery.insertAdjacentHTML('beforeend', markup);


gallery.addEventListener("click", onClick);

function onClick(e) {
e.preventDefault();

if(e.target === e.currentTarget) {
    return;
}

    const instance = basicLightbox.create(`
    <div class="modal">
       <img src="${e.target.dataset.source}"/>
    </div>
`)

instance.show()

gallery.addEventListener('keydown', onEsc);
function onEsc(e) {
    if(e.code === 'Escape') {
        instance.close()
    }
}

console.dir(e.target)
}

// console.log(galleryItems);
