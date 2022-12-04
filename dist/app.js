const list = document.querySelectorAll(".list2");
const show = document.querySelector("#menu");
const header2 = document.querySelector("#header2");
const dark = document.querySelector("#darker");
const hide = document.querySelector("#close");
list.forEach(function (item) {
    item.addEventListener("click", function () {
        item.parentElement.classList.toggle("show");
    });
});
show.addEventListener("click", function () {
    header2.classList.add("active");
    dark.classList.add("active");
    show.style.opacity = "0";
});
hide.addEventListener("click", function () {
    header2.classList.remove("active");
    dark.classList.remove("active");
    show.style.opacity = "1";
});
