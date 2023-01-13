import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createGaleryItem(galleryItems));

gallery.addEventListener("click", toggleModal);

function createGaleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="#">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
        })
        .join("");
}

function toggleModal(e) {
    // e.preventDefault();

    const modal = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`,
        {
            onShow: () => {
                document.addEventListener("keydown", onEscKeyPress);
            },
            onClose: () => {
                document.removeEventListener("keydown", onEscKeyPress);
            },
        }
    );

    function onEscKeyPress(event) {
        if (event.code === "Escape") {
            modal.close();
        }
    }

    modal.show();
}
