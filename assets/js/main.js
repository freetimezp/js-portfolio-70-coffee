let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle('active');
}



let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});



let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});