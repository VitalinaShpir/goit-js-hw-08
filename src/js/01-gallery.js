// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const listItem = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  )
  .join("");

  document.querySelector(".gallery").insertAdjacentHTML("beforeend", listItem);

  const lightbox = new SimpleLightbox(".gallery__link", {captionsData: 'alt', captionDelay: 250 });
