import { PixabayApi } from "./pixabay-api";
import { createGalleryMarkup } from "./markup";
import { Notify } from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from "simplelightbox";
import { smoothScroll } from "./smooth-scroll";


const pixabayApi = new PixabayApi(40);

const refs = {
    form: document.querySelector('.search-form'),
    searchBtn: document.querySelector('.search-btn'),
    container: document.querySelector('.gallery'),
    loadBtn: document.querySelector('.load-btn'),
    loader: document.querySelector('.loader')
};


let lightbox = '';

refs.form.addEventListener('submit', onSubmit);
refs.loadBtn.addEventListener('click', onLoadMoreBtnClick);


function onSubmit(event) {
    event.preventDefault();
    refs.container.innerHTML = '';

    pixabayApi.page = 1;

    const searchQuery = event.currentTarget.elements["searchQuery"].value.trim();

    if (!searchQuery) {
        Notify.failure('Please, type something in search field.');
        refs.loadBtn.classList.add('is-hidden');
        return;
    }

    pixabayApi.q = searchQuery;

    refs.loader.classList.remove('is-hidden');

    pixabayApi.fetchPhotosByQuery()
        .then((data) => {
            refs.container.innerHTML = createGalleryMarkup(data.hits);

            Notify.success(`Hooray! We found ${data.total} images.`);

            if (data.total === 0) {
                Notify.failure("Sorry, there are no images matching your search query. Please try again.");
                refs.loadBtn.classList.add('is-hidden');
                return;
            }
            if (data.total < pixabayApi.per_page) {
                return;
            } 
            // else if (data.totalHits === pixabayApi.total) {
            //     Notify.failure("We're sorry, but you've reached the end of search results.");
            //     refs.loadBtn.classList.add('is-hidden');
            //     return;
            // }
            
            else {
                refs.loadBtn.classList.remove('is-hidden');
            }

            console.log(data);

            lightbox = new SimpleLightbox('.gallery a', {
                captions: 'true',
                captionPosition: 'bottom',
                captionDelay: 250,
            });
        })
        .catch((err) => console.log("ERROR AXIOS:", err))
        .finally(() => {
            refs.loader.classList.add('is-hidden');
        });

}


function onLoadMoreBtnClick() {
    smoothScroll();
    pixabayApi.page += 1;

    refs.loader.classList.remove('is-hidden');
    refs.container.classList.add('is-hidden');
    refs.loadBtn.classList.add('is-hidden');

    pixabayApi.fetchPhotosByQuery()
        .then((data) => {
           
            refs.container.insertAdjacentHTML("beforeend", createGalleryMarkup(data.hits));

            lightbox.refresh();

            if (data.total_pages === pixabayApi.page) {
                refs.loadBtn.classList.add('is-hidden');
            }
        })
        .catch((err) => console.log("ERROR AXIOS:", err))
        .finally(() => {
            refs.loader.classList.add('is-hidden');
            refs.container.classList.remove('is-hidden');
            refs.loadBtn.classList.remove('is-hidden');
            
        });
}



