const hamburger = document.querySelector(".header-content-hamburger");


// Animation that turns the hamburger into an X when clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
});
