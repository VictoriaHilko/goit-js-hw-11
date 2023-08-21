export function smoothScroll() {
    const lastEl = document.querySelector('.gallery').lastElementChild;
    lastEl.scrollIntoView({ behavior: "smooth", block: "end"});
}
