import { PixabayApi } from "./pixabay-api";
import { createGalleryMarkup } from "./markup";


const pixabayApi = new PixabayApi(40);

refs = {
    form: document.querySelector('.search-form'),
    searchBtn: document.querySelector('.search-btn'),
    container: document.querySelector('.gallery'),
    loadBtn: document.querySelector('.load-btn')
};



pixabayApi.fetchPhotosByQuery()
        .then((response) => {
            refs.container.innerHTML = createGalleryMarkup(response.hits);
            // console.log(response.hits);
})
        .catch(error => console.log(error));


refs.searchBtn.addEventListener('submit', onSubmit);


function onSubmit (event) {
    console.log('Event: ', event);
}

