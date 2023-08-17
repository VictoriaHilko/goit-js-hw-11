export function createGalleryMarkup(data) {

    return data.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
        `<div class="photo-card">
        <img class="img" src=${webformatURL} alt=${tags} loading="lazy"/>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>${likes}
          </p>
          <p class="info-item">
            <b>Views</b>${views}
          </p>
          <p class="info-item">
            <b>Comments</b>${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>${downloads}
            </div>
            </div>
        `
    )
        .join("");
}