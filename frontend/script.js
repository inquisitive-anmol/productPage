let filter_title_label = document.querySelector("#specific-product .filter-title-label");
let filter = document.querySelector("#specific-product .filter");

filter_title_label.addEventListener("click", (e) => {
    filter.classList.toggle("filter-collapse");
})