export function smoothScroll() {
    const lastEl = document.querySelector('.gallery').lastElementChild;
    console.log(lastEl);
    lastEl.scrollIntoView({ behavior: "smooth", block: "end"});
}
