import axios from "axios";
export class PixabayApi {
  #API_KEY = '38891748-11b65a2738d0d93056d31f78c';

  #BASE_URL = 'https://pixabay.com/api/';

  constructor(perPage) {
    this.page = 1;
    this.q = null;
    this.per_page = perPage;
  }

  async fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      // query: this.query,
      page: this.page,
      per_page: this.per_page,
      key: this.#API_KEY,
      q: this.q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    });

    // return fetch(`${this.#BASE_URL}?${searchParams}`)
    // .then(
    //   resp => {
    //     if (!resp.ok) {
    //       throw new Error(resp.statusText);
    //     }
    //     return resp.json();
    //   }
    // );

    const url = `${this.#BASE_URL}?${searchParams}`;

    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
    console.log(error);
    } 
  }
}
