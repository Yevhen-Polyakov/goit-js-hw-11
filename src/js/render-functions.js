// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const loader = document.querySelector('.loader')

const lightbox = new SimpleLightbox('.gallery-link', {
    captions: true,
    captionDelay: 250,
})
 
export function createGallery(images){
   return images.map(({webformatURL, 
    largeImageURL, 
    tags, 
    likes, 
    views, 
    comments, 
    downloads}) => {
    return `<li class="item-gallery">
                <a class="gallery-link" href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}">
                </a>
                <div class="info">
                    <div class="wrap-info">
                        <p class="info-text">Likes</p>
                        <span class="info-number">${likes}</span>
                    </div>
                    <div class="wrap-info">
                        <p class="info-text">Views</p>
                        <span class="info-number">${views}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Comments</p>
                        <span class="info-number">${comments}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Downloads</p>
                        <span class="info-number">${downloads}</span>
                    </div> 
                </div>   
            </li>`
    }).join("") 

}

export function clearGallery(){
    const list = document.querySelector('.gallery')
        return list.innerHTML = ''
}

export function refreshLitBox(){
    lightbox.refresh()
}

export function showLoader(){
    loader.classList.remove('is-hidden')
}

export function hideLoader(){
    loader.classList.add('is-hidden')
}