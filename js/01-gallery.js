import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
// event.preventDefault();
const galleryContainer = document.querySelector(".gallery");
const imageMarcup = createGalleryMarcup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", imageMarcup);
galleryContainer.addEventListener("click", onImageClick);

function createGalleryMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    class="gallery__image" src="${preview}" 
    data-source="${original}"
    alt="${description}" />
  </a>
</div>`;
    })
    .join("");
}
function onImageClick(evt) {
  evt.preventDefault();
  const isImage = evt.target.classList.contains("gallery__image");
  if (!isImage) {
    return;
  }
  const imgSrc = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgSrc}" width="800" height="600">
`);

  instance.show();
}
