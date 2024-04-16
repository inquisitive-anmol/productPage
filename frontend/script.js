let filter_title_label = document.querySelector("#specific-product .filter-title-label");
let filter = document.querySelector("#specific-product .filter");
let filter_btns = document.querySelectorAll("#specific-product .size-btns");

filter_title_label.addEventListener("click", (e) => {
    filter.classList.toggle("filter-collapse");
});

filter_btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        btn.classList.toggle("clicked");
    });
});