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

